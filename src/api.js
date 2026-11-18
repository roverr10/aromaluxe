// Cliente de datos de AromaLuxe usando Supabase (base de datos + Storage).
// Mantiene exactamente la misma interfaz que el antiguo backend Express local,
// para que App.jsx no tenga que cambiar. La publishable key es pública por
// diseño: la seguridad se aplica con políticas RLS en Supabase.

import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from './supabaseConfig';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

const ADMIN_EMAIL = 'aromaluxe.catalogo@gmail.com';
// Correos con permisos reales de administrador. El correo principal siempre se
// conserva como salvaguarda; el resto se administra desde el Panel Admin.
let adminEmailsCache = null;
const BUCKET = 'aromaluxe-images';
const TABLE_STATE = 'aromaluxe_kv';
const TABLE_LEADS = 'aromaluxe_leads';
const SESSION_KEY = 'aromaluxe_session_v4';
const MAX_IMAGE_BYTES = 8 * 1024 * 1024;

const ADMIN_PERMISSIONS = [
  'dashboard', 'products', 'brands', 'categories', 'families', 'inventory',
  'banners', 'sections', 'coupons', 'reviews', 'users', 'settings', 'leads'
];

const COLLECTIONS = [
  'products', 'siteConfig', 'brands', 'categories', 'families', 'inventoryLogs',
  'banners', 'coupons', 'reviews', 'audit', 'blog', 'telemetry',
  'cookieConsent', 'users'
];

const errorMessage = (error, fallback) => error?.message || fallback || 'Error al contactar con Supabase.';

function normalizeEmails(list) {
  if (!Array.isArray(list)) return [];
  return [...new Set(
    list.map((email) => String(email).trim().toLowerCase()).filter(Boolean)
  )];
}

function resolveAdminEmails(config) {
  return [...new Set([ADMIN_EMAIL, ...normalizeEmails(config?.integrations?.adminEmails)])];
}

function setAdminEmailsFromConfig(config) {
  if (config?.integrations && Array.isArray(config.integrations.adminEmails)) {
    adminEmailsCache = resolveAdminEmails(config);
  }
}

async function getAdminEmails() {
  if (adminEmailsCache) return adminEmailsCache;
  try {
    const { data, error } = await supabase
      .from(TABLE_STATE)
      .select('value')
      .eq('key', 'siteConfig')
      .maybeSingle();
    if (error) throw error;
    adminEmailsCache = resolveAdminEmails(data?.value);
  } catch {
    adminEmailsCache = [ADMIN_EMAIL];
  }
  return adminEmailsCache;
}

function mapUser(user, adminEmails) {
  if (!user) return null;
  const email = String(user.email || '').toLowerCase();
  const isAdmin = (adminEmails || [ADMIN_EMAIL]).includes(email);
  return {
    id: user.id,
    name: user.user_metadata?.name || email.split('@')[0] || 'Usuario',
    email,
    role: isAdmin ? 'Super Administrador' : 'customer',
    isAdmin,
    provider: user.app_metadata?.provider || 'email',
    picture: user.user_metadata?.avatar_url || '',
    permissions: isAdmin ? ADMIN_PERMISSIONS : []
  };
}

function readLocalSession() {
  try {
    const saved = localStorage.getItem(SESSION_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
}

function writeLocalSession(user) {
  try {
    if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    else localStorage.removeItem(SESSION_KEY);
  } catch {
    // localStorage puede estar bloqueado; no es crítico
  }
}

async function getAuthUser() {
  try {
    const { data, error } = await supabase.auth.getUser();
    if (error) return null;
    return mapUser(data?.user, await getAdminEmails());
  } catch {
    return null;
  }
}

async function requireAdmin() {
  const user = await getAuthUser();
  if (!user?.isAdmin) {
    const error = new Error('Debes iniciar sesión como administrador para realizar esta acción.');
    error.status = 403;
    throw error;
  }
  return user;
}

export const api = {
  health: () =>
    Promise.resolve({
      ok: true,
      service: 'aromaluxe-supabase',
      googleEnabled: false,
      demoAllowed: true
    }),

  me: async () => {
    const authUser = await getAuthUser();
    return { user: authUser?.isAdmin ? authUser : readLocalSession() };
  },

  getState: async () => {
    const [{ data, error }, authUser] = await Promise.all([
      supabase.from(TABLE_STATE).select('key,value'),
      getAuthUser()
    ]);
    if (error) throw new Error(errorMessage(error, 'No se pudo leer el catálogo.'));

    const state = {};
    for (const row of data || []) state[row.key] = row.value;

    const siteConfig = state.siteConfig && typeof state.siteConfig === 'object' ? state.siteConfig : {};
    setAdminEmailsFromConfig(siteConfig);
    state.siteConfig = {
      ...siteConfig,
      integrations: {
        ...(siteConfig.integrations || {}),
        demoAuthAllowed: true
      }
    };

    const localSession = readLocalSession();
    const user = authUser?.isAdmin ? authUser : localSession && !localSession.isAdmin ? localSession : null;

    return {
      state,
      user,
      needsBootstrap: COLLECTIONS.some((key) => key !== 'users' && state[key] === undefined),
      config: {
        googleEnabled: !!(siteConfig.integrations || {}).googleClientId,
        demoAllowed: true,
        adminEmail: ADMIN_EMAIL
      }
    };
  },

  bootstrap: async (incoming) => {
    if (!incoming || typeof incoming !== 'object') {
      throw new Error('Falta el estado inicial.');
    }
    const rows = COLLECTIONS.filter((key) => key !== 'users' && incoming[key] !== undefined && incoming[key] !== null)
      .map((key) => ({
        key,
        value: incoming[key],
        updated_at: new Date().toISOString()
      }));
    if (!rows.length) return { ok: true, seeded: [] };

    // ignoreDuplicates => ON CONFLICT DO NOTHING: no sobrescribe nada existente.
    const { error } = await supabase
      .from(TABLE_STATE)
      .insert(rows, { onConflict: 'key', ignoreDuplicates: true });
    if (error) throw new Error(errorMessage(error, 'No se pudo sembrar la base de datos.'));
    return { ok: true, seeded: rows.map((row) => row.key) };
  },

  saveCollection: async (key, value) => {
    if (!COLLECTIONS.includes(key)) {
      throw new Error(`Colección no válida: ${key}`);
    }
    // Los usuarios se manejan con Supabase Auth / sesión local. Guardar
    // correos y contraseñas en una tabla de lectura pública sería inseguro.
    if (key === 'users') return { ok: true, skipped: true };

    const user = await getAuthUser();
    if (!user?.isAdmin) return { ok: true, skipped: true };

    const { error } = await supabase
      .from(TABLE_STATE)
      .upsert(
        { key, value, updated_at: new Date().toISOString() },
        { onConflict: 'key' }
      );
    if (error) throw new Error(errorMessage(error, 'No se pudo guardar ' + key));
    if (key === 'siteConfig') adminEmailsCache = null;
    return { ok: true };
  },

  loginAdmin: async (email, password) => {
    const cleanEmail = String(email || '').trim().toLowerCase();
    if (cleanEmail !== ADMIN_EMAIL) {
      throw new Error('Correo o contraseña incorrectos.');
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email: cleanEmail,
      password: String(password || '')
    });
    if (error) throw new Error('Correo o contraseña incorrectos.');
    const user = mapUser(data?.user, await getAdminEmails());
    writeLocalSession(user);
    return { user };
  },

  loginDemo: async (email, name) => {
    const cleanEmail = String(email || '').trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      throw new Error('Ingresa un correo válido.');
    }
    if ((await getAdminEmails()).includes(cleanEmail)) {
      throw new Error('Usa el acceso administrativo para esa cuenta.');
    }
    const user = {
      id: 'usr-demo-' +
        (globalThis.crypto?.randomUUID?.() || Date.now().toString(36)),
      name: String(name || cleanEmail.split('@')[0]),
      email: cleanEmail,
      role: 'customer',
      isAdmin: false,
      provider: 'demo',
      picture: '',
      permissions: []
    };
    writeLocalSession(user);
    return { user };
  },

  loginGoogle: async (credential) => {
    // Si el proveedor Google está activado en Supabase, este token de Google
    // Identity Services se canjea por una sesión de Supabase.
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: String(credential || '')
    });
    if (error) {
      throw new Error('No se pudo verificar el acceso con Google. Activa el proveedor Google en Supabase o usa el acceso demo.');
    }
    const user = mapUser(data?.user, await getAdminEmails());
    writeLocalSession(user);
    return { user };
  },

  logout: async () => {
    try {
      await supabase.auth.signOut();
    } catch {
      // ignore
    }
    writeLocalSession(null);
    return { ok: true };
  },

  uploadImage: async (file) => {
    await requireAdmin();
    if (!file) throw new Error('No se recibió ninguna imagen.');
    if (!file.type?.startsWith('image/')) throw new Error('Solo se permiten imágenes.');
    if (file.size > MAX_IMAGE_BYTES) throw new Error('La imagen debe pesar menos de 8 MB.');

    const ext = (file.name || '').split('.').pop()?.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 8) || 'png';
    const id = globalThis.crypto?.randomUUID?.() || Date.now().toString(36);
    const path = `${Date.now()}-${id}.${ext}`;

    const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
      contentType: file.type,
      cacheControl: '3600',
      upsert: false
    });
    if (error) throw new Error(errorMessage(error, 'No se pudo subir la imagen.'));

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    if (!data?.publicUrl) throw new Error('No se pudo obtener la URL pública de la imagen.');
    return { url: data.publicUrl, name: file.name, size: file.size };
  },

  saveLead: async (type, payload) => {
    const leadType = String(type || 'contact') === 'quote' ? 'quote' : 'contact';
    const id = `${leadType}-${Date.now()}-` +
      (globalThis.crypto?.randomUUID?.() || Date.now().toString(36)).slice(0, 8);
    const { error } = await supabase.from(TABLE_LEADS).insert({
      id,
      type: leadType,
      payload: payload ?? {},
      created_at: new Date().toISOString()
    });
    if (error) throw new Error(errorMessage(error, 'No se pudo guardar la cotización.'));
    return { ok: true, id };
  },

  // Eventos superficiales de navegación. Se guardan en la misma tabla que las
  // cotizaciones, con type = 'analytics', para no crear infraestructura nueva.
  // Nunca incluyen precios, totales ni datos contables.
  trackEvent: async (event, payload = {}) => {
    try {
      const id = `evt-${Date.now()}-` +
        (globalThis.crypto?.randomUUID?.() || Date.now().toString(36)).slice(0, 8);
      const { error } = await supabase.from(TABLE_LEADS).insert({
        id,
        type: 'analytics',
        payload: { event: String(event || 'unknown'), ...payload },
        created_at: new Date().toISOString()
      });
      if (error) throw error;
      return { ok: true };
    } catch {
      // La analítica nunca debe interrumpir la navegación del cliente.
      return { ok: false };
    }
  },

  getLeads: async () => {
    await requireAdmin();
    const { data, error } = await supabase
      .from(TABLE_LEADS)
      .select('id,type,payload,created_at')
      .in('type', ['quote', 'contact'])
      .order('created_at', { ascending: false })
      .limit(200);
    if (error) throw new Error(errorMessage(error, 'No se pudieron cargar las cotizaciones.'));
    return {
      leads: (data || []).map((row) => ({
        id: row.id,
        type: row.type,
        createdAt: row.created_at,
        payload: row.payload || {}
      }))
    };
  },

  getAnalytics: async () => {
    await requireAdmin();
    const { data, error } = await supabase
      .from(TABLE_LEADS)
      .select('type,payload,created_at')
      .in('type', ['analytics', 'quote'])
      .order('created_at', { ascending: false })
      .limit(5000);
    if (error) throw new Error(errorMessage(error, 'No se pudieron cargar las analíticas.'));
    return {
      items: (data || []).map((row) => ({
        type: row.type,
        payload: row.payload || {},
        createdAt: row.created_at
      }))
    };
  }
};

export default api;
