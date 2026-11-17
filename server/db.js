import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import bcrypt from 'bcryptjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, 'data');
const uploadsDir = path.join(__dirname, 'uploads');

fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(uploadsDir, { recursive: true });

export const db = new Database(path.join(dataDir, 'aromaluxe.db'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS kv (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT,
    role TEXT NOT NULL DEFAULT 'customer',
    provider TEXT NOT NULL DEFAULT 'local',
    picture TEXT DEFAULT '',
    permissions TEXT NOT NULL DEFAULT '[]',
    privacy_consent_at TEXT,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at INTEGER NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS leads (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    payload TEXT NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS uploads (
    id TEXT PRIMARY KEY,
    filename TEXT NOT NULL UNIQUE,
    original_name TEXT NOT NULL,
    mime TEXT NOT NULL,
    size INTEGER NOT NULL,
    created_at TEXT NOT NULL
  );
`);

export const UPLOADS_DIR = uploadsDir;

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'aromaluxe.catalogo@gmail.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'seccion2';

const seedAdmin = db.prepare('SELECT id FROM users WHERE email = ?').get(ADMIN_EMAIL.toLowerCase());
if (!seedAdmin) {
  db.prepare(`
    INSERT INTO users (id, name, email, password_hash, role, provider, picture, permissions, privacy_consent_at, created_at)
    VALUES (?, ?, ?, ?, ?, 'local', '', ?, ?, ?)
  `).run(
    'usr-admin-1',
    'Administrador AromaLuxe',
    ADMIN_EMAIL.toLowerCase(),
    bcrypt.hashSync(ADMIN_PASSWORD, 10),
    'Super Administrador',
    JSON.stringify([
      'dashboard', 'products', 'brands', 'categories', 'families', 'inventory',
      'banners', 'sections', 'coupons', 'reviews', 'users', 'settings'
    ]),
    new Date().toISOString(),
    new Date().toISOString()
  );
  console.log(`[db] Usuario administrador creado: ${ADMIN_EMAIL}`);
}

export const COLLECTIONS = [
  'products',
  'siteConfig',
  'brands',
  'categories',
  'families',
  'inventoryLogs',
  'banners',
  'coupons',
  'reviews',
  'audit',
  'blog',
  'telemetry',
  'cookieConsent'
];

const getStmt = db.prepare('SELECT value FROM kv WHERE key = ?');
const setStmt = db.prepare(`
  INSERT INTO kv (key, value, updated_at) VALUES (?, ?, ?)
  ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at
`);

export function getCollection(key) {
  const row = getStmt.get(key);
  if (!row) return null;
  try {
    return JSON.parse(row.value);
  } catch {
    return null;
  }
}

export function setCollection(key, value) {
  setStmt.run(key, JSON.stringify(value), new Date().toISOString());
}

export function getState() {
  const state = {};
  for (const key of COLLECTIONS) state[key] = getCollection(key);
  return state;
}

export function sanitizeUser(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    role: row.role,
    isAdmin: row.role !== 'customer' || row.email === ADMIN_EMAIL.toLowerCase(),
    provider: row.provider,
    picture: row.picture || '',
    permissions: (() => {
      try { return JSON.parse(row.permissions || '[]'); } catch { return []; }
    })()
  };
}

export function findUserByEmail(email) {
  return db.prepare('SELECT * FROM users WHERE email = ?').get(String(email || '').trim().toLowerCase());
}

export function createSession(userId) {
  const token = crypto.randomBytes(32).toString('hex');
  const expires = Date.now() + 30 * 24 * 60 * 60 * 1000;
  db.prepare('INSERT INTO sessions (token, user_id, expires_at, created_at) VALUES (?, ?, ?, ?)')
    .run(token, userId, expires, new Date().toISOString());
  return { token, expires };
}

export function deleteSession(token) {
  if (token) db.prepare('DELETE FROM sessions WHERE token = ?').run(token);
}
