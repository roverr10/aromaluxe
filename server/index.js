import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { OAuth2Client } from 'google-auth-library';
import {
  db,
  COLLECTIONS,
  UPLOADS_DIR,
  getState,
  getCollection,
  setCollection,
  sanitizeUser,
  findUserByEmail,
  createSession,
  deleteSession
} from './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '../dist');
const app = express();

const PORT = Number(process.env.PORT) || 3001;
const COOKIE_NAME = 'aromaluxe_session';
const GOOGLE_CLIENT_ID = (process.env.GOOGLE_CLIENT_ID || '').trim();
const DEMO_ALLOWED = process.env.ALLOW_DEMO_AUTH !== 'false';
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || 'aromaluxe.catalogo@gmail.com').toLowerCase();

const googleClient = GOOGLE_CLIENT_ID ? new OAuth2Client(GOOGLE_CLIENT_ID) : null;

app.set('trust proxy', 1);
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '16mb' }));
app.use(express.urlencoded({ extended: true, limit: '16mb' }));
app.use(cookieParser());
app.use('/uploads', express.static(UPLOADS_DIR, { maxAge: '7d', immutable: true }));

const sessionStmt = db.prepare(`
  SELECT u.* FROM sessions s
  JOIN users u ON u.id = s.user_id
  WHERE s.token = ? AND s.expires_at > ?
`);

function attachUser(req, _res, next) {
  const token = req.cookies?.[COOKIE_NAME];
  req.user = null;
  req.sessionToken = token || null;
  if (token) {
    const row = sessionStmt.get(token, Date.now());
    if (row) req.user = sanitizeUser(row);
  }
  next();
}

function requireAuth(req, res, next) {
  if (!req.user) return res.status(401).json({ error: 'Debes iniciar sesión.' });
  next();
}

function requireAdmin(req, res, next) {
  if (!req.user) return res.status(401).json({ error: 'Debes iniciar sesión.' });
  if (!req.user.isAdmin) return res.status(403).json({ error: 'Acceso reservado para administradores.' });
  next();
}

function sendSession(res, userId) {
  const { token, expires } = createSession(userId);
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: expires - Date.now(),
    path: '/'
  });
}

function publicUser(row) {
  return sanitizeUser(row);
}

app.use(attachUser);

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'aromaluxe-api', googleEnabled: !!GOOGLE_CLIENT_ID, demoAllowed: DEMO_ALLOWED });
});

// Siembra inicial: solo llena colecciones que aún no existen. No sobrescribe nada.
app.post('/api/state/bootstrap', (req, res) => {
  const incoming = req.body?.state;
  if (!incoming || typeof incoming !== 'object') {
    return res.status(400).json({ error: 'Falta el estado inicial.' });
  }

  const seeded = [];
  for (const key of COLLECTIONS) {
    if (key === 'users' || getCollection(key) !== null) continue;
    let value = incoming[key];
    if (value === undefined || value === null) continue;
    if (key === 'siteConfig') {
      const base = value && typeof value === 'object' ? value : {};
      value = {
        ...base,
        integrations: { ...(base.integrations || {}), googleClientId: GOOGLE_CLIENT_ID, demoAuthAllowed: DEMO_ALLOWED }
      };
    }
    setCollection(key, value);
    seeded.push(key);
  }

  res.json({ ok: true, seeded });
});

app.get('/api/auth/me', (req, res) => {
  res.json({ user: req.user });
});

app.post('/api/auth/admin', (req, res) => {
  const email = String(req.body?.email || '').trim().toLowerCase();
  const password = String(req.body?.password || '');
  const row = findUserByEmail(email);

  if (!row || !row.password_hash || !bcrypt.compareSync(password, row.password_hash)) {
    return res.status(401).json({ error: 'Correo o contraseña incorrectos.' });
  }
  if (!publicUser(row).isAdmin) {
    return res.status(403).json({ error: 'Acceso exclusivo para el equipo de AromaLuxe.' });
  }

  sendSession(res, row.id);
  res.json({ user: publicUser(row) });
});

app.post('/api/auth/demo', (req, res) => {
  if (!DEMO_ALLOWED) return res.status(403).json({ error: 'El acceso demo está desactivado.' });

  const email = String(req.body?.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Ingresa un correo válido.' });
  }
  if (email === ADMIN_EMAIL) {
    return res.status(403).json({ error: 'Usa el acceso administrativo para esa cuenta.' });
  }

  let row = findUserByEmail(email);
  if (!row) {
    const name = (req.body?.name || email.split('@')[0])
      .replace(/[._-]+/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
    const id = 'usr-demo-' + crypto.randomUUID();
    db.prepare(`
      INSERT INTO users (id, name, email, password_hash, role, provider, picture, permissions, privacy_consent_at, created_at)
      VALUES (?, ?, ?, NULL, 'customer', 'demo', '', '[]', ?, ?)
    `).run(id, name, email, new Date().toISOString(), new Date().toISOString());
    row = db.prepare('SELECT * FROM users WHERE id = ?').get(id);
  }

  sendSession(res, row.id);
  res.json({ user: publicUser(row) });
});

app.post('/api/auth/google', async (req, res) => {
  if (!googleClient) {
    return res.status(501).json({ error: 'Google no está configurado. Configura GOOGLE_CLIENT_ID en el servidor.' });
  }

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: String(req.body?.credential || ''),
      audience: GOOGLE_CLIENT_ID
    });
    const payload = ticket.getPayload();
    const email = String(payload?.email || '').trim().toLowerCase();
    if (!email || !payload.email_verified) {
      return res.status(401).json({ error: 'La cuenta de Google no está verificada.' });
    }

    let row = findUserByEmail(email);
    if (!row) {
      const id = 'usr-google-' + crypto.randomUUID();
      db.prepare(`
        INSERT INTO users (id, name, email, password_hash, role, provider, picture, permissions, privacy_consent_at, created_at)
        VALUES (?, ?, ?, NULL, 'customer', 'google', ?, '[]', ?, ?)
      `).run(id, payload.name || email.split('@')[0], email, payload.picture || '', new Date().toISOString(), new Date().toISOString());
      row = db.prepare('SELECT * FROM users WHERE id = ?').get(id);
    }

    sendSession(res, row.id);
    res.json({ user: publicUser(row) });
  } catch (err) {
    console.error('[google]', err.message);
    res.status(401).json({ error: 'No se pudo verificar la cuenta de Google.' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  deleteSession(req.sessionToken);
  res.clearCookie(COOKIE_NAME, { path: '/' });
  res.json({ ok: true });
});

app.get('/api/state', (req, res) => {
  const state = getState();

  const siteConfig = state.siteConfig && typeof state.siteConfig === 'object' ? state.siteConfig : {};
  state.siteConfig = {
    ...siteConfig,
    integrations: {
      ...(siteConfig.integrations || {}),
      googleClientId: GOOGLE_CLIENT_ID,
      demoAuthAllowed: DEMO_ALLOWED
    }
  };

  if (req.user?.isAdmin) {
    state.users = db.prepare('SELECT * FROM users ORDER BY created_at DESC').all().map(publicUser);
  } else {
    state.users = [];
  }

  res.json({
    state,
    user: req.user,
    needsBootstrap: COLLECTIONS.some((key) => key !== 'users' && state[key] === null),
    config: {
      googleEnabled: !!GOOGLE_CLIENT_ID,
      demoAllowed: DEMO_ALLOWED,
      adminEmail: ADMIN_EMAIL
    }
  });
});

app.put('/api/state/:key', requireAdmin, (req, res) => {
  const key = String(req.params.key);
  if (!COLLECTIONS.includes(key) && key !== 'users') {
    return res.status(400).json({ error: `Colección no válida: ${key}` });
  }

  const value = req.body?.value;
  if (value === undefined) return res.status(400).json({ error: 'Falta el campo value.' });

  if (key === 'users') {
    if (!Array.isArray(value)) return res.status(400).json({ error: 'users debe ser un arreglo.' });
    try {
      db.transaction(() => {
        const kept = value
          .map((u) => String(u?.email || '').trim().toLowerCase())
          .filter(Boolean);
        kept.push(ADMIN_EMAIL);

        const all = db.prepare('SELECT id, email FROM users').all();
        const remove = db.prepare('DELETE FROM users WHERE id = ?');
        for (const row of all) {
          if (!kept.includes(row.email)) remove.run(row.id);
        }

        const upsert = db.prepare(`
          INSERT INTO users (id, name, email, password_hash, role, provider, picture, permissions, privacy_consent_at, created_at)
          VALUES (@id, @name, @email, @password_hash, @role, @provider, @picture, @permissions, @privacy_consent_at, @created_at)
          ON CONFLICT(email) DO UPDATE SET
            name = excluded.name,
            role = excluded.role,
            provider = excluded.provider,
            picture = excluded.picture,
            permissions = excluded.permissions,
            privacy_consent_at = excluded.privacy_consent_at
        `);

        for (const u of value) {
          const email = String(u?.email || '').trim().toLowerCase();
          if (!email) continue;
          const existing = findUserByEmail(email);
          let hash = existing?.password_hash || null;
          if (!hash && u.password) hash = bcrypt.hashSync(String(u.password), 10);
          if (!hash && email === ADMIN_EMAIL) hash = existing?.password_hash || null;

          upsert.run({
            id: existing?.id || u.id || 'usr-' + crypto.randomUUID(),
            name: u.name || email.split('@')[0],
            email,
            password_hash: hash,
            role: u.role || 'customer',
            provider: existing?.provider || u.provider || 'local',
            picture: u.picture || '',
            permissions: JSON.stringify(u.permissions || []),
            privacy_consent_at: u.privacyConsentAt || existing?.privacy_consent_at || new Date().toISOString(),
            created_at: existing?.created_at || new Date().toISOString()
          });
        }
      })();
      res.json({ ok: true });
    } catch (err) {
      console.error('[users]', err.message);
      res.status(500).json({ error: 'No se pudieron guardar los usuarios.' });
    }
    return;
  }

  if (key === 'siteConfig') {
    const current = getCollection('siteConfig') || {};
    const next = {
      ...current,
      ...value,
      integrations: {
        ...(current.integrations || {}),
        ...(value?.integrations || {}),
        googleClientId: GOOGLE_CLIENT_ID,
        demoAuthAllowed: DEMO_ALLOWED
      }
    };
    setCollection(key, next);
    return res.json({ ok: true });
  }

  setCollection(key, value);
  res.json({ ok: true });
});

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname || '').toLowerCase().replace(/[^.a-z0-9]/g, '').slice(0, 10);
    cb(null, `${Date.now()}-${crypto.randomUUID()}${ext || '.png'}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype?.startsWith('image/')) return cb(new Error('Solo se permiten imágenes.'));
    cb(null, true);
  }
});

app.post('/api/upload', requireAdmin, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No se recibió ninguna imagen.' });
  db.prepare(`
    INSERT INTO uploads (id, filename, original_name, mime, size, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(crypto.randomUUID(), req.file.filename, req.file.originalname, req.file.mimetype, req.file.size, new Date().toISOString());

  res.json({
    url: `/uploads/${req.file.filename}`,
    name: req.file.originalname,
    size: req.file.size
  });
});

app.post('/api/leads', (req, res) => {
  const type = String(req.body?.type || 'contact') === 'quote' ? 'quote' : 'contact';
  const payload = req.body?.payload ?? req.body ?? {};
  const id = `${type}-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`;
  db.prepare('INSERT INTO leads (id, type, payload, created_at) VALUES (?, ?, ?, ?)')
    .run(id, type, JSON.stringify(payload), new Date().toISOString());
  res.status(201).json({ ok: true, id });
});

// Lectura pública: la app es local (localhost). Si se publica en internet,
// volver a agregar requireAdmin aquí para proteger los datos de clientes.
app.get('/api/leads', (req, res) => {
  const limit = Math.min(Number(req.query.limit) || 200, 500);
  const rows = db.prepare('SELECT * FROM leads ORDER BY created_at DESC LIMIT ?').all(limit);
  res.json({
    leads: rows.map((r) => ({
      id: r.id,
      type: r.type,
      createdAt: r.created_at,
      payload: (() => { try { return JSON.parse(r.payload); } catch { return {}; } })()
    }))
  });
});

// En producción el mismo proceso sirve el build de Vite y la API.
app.use(express.static(DIST_DIR, { index: false, maxAge: '1h' }));
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api/') || req.path.startsWith('/uploads/')) return next();
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.use((err, _req, res, _next) => {
  console.error('[api]', err.message);
  res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor.' });
});

app.listen(PORT, () => {
  console.log(`[api] AromaLuxe API escuchando en http://localhost:${PORT}`);
  console.log(`[api] Login Google: ${GOOGLE_CLIENT_ID ? 'activado' : 'modo demo (configura GOOGLE_CLIENT_ID para activarlo)'}`);
});
