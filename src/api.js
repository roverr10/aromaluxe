// Cliente de la API de AromaLuxe.
// En desarrollo Vite hace proxy de /api y /uploads hacia http://localhost:3001.

const BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

async function request(path, options = {}) {
  const { body, headers = {}, ...rest } = options;
  const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;

  const response = await fetch(`${BASE}${path}`, {
    credentials: 'include',
    ...rest,
    headers: isFormData ? headers : { 'Content-Type': 'application/json', ...headers },
    body: body === undefined ? undefined : isFormData ? body : JSON.stringify(body)
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const message = data?.error || `Error ${response.status} al contactar con el servidor.`;
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  return data;
}

export const api = {
  health: () => request('/api/health'),

  getState: () => request('/api/state'),

  bootstrap: (state) => request('/api/state/bootstrap', { method: 'POST', body: { state } }),

  saveCollection: (key, value) =>
    request(`/api/state/${encodeURIComponent(key)}`, { method: 'PUT', body: { value } }),

  me: () => request('/api/auth/me'),

  loginAdmin: (email, password) =>
    request('/api/auth/admin', { method: 'POST', body: { email, password } }),

  loginDemo: (email, name) =>
    request('/api/auth/demo', { method: 'POST', body: { email, name } }),

  loginGoogle: (credential) =>
    request('/api/auth/google', { method: 'POST', body: { credential } }),

  logout: () => request('/api/auth/logout', { method: 'POST' }),

  uploadImage: (file) => {
    const form = new FormData();
    form.append('image', file);
    return request('/api/upload', { method: 'POST', body: form });
  },

  saveLead: (type, payload) =>
    request('/api/leads', { method: 'POST', body: { type, payload } }),

  getLeads: () => request('/api/leads')
};

export default api;
