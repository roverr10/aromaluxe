-- ============================================================================
-- AROMALUXE - CONFIGURACIÓN DE SUPABASE
-- ============================================================================
-- Ejecutar una sola vez en:
-- Supabase Dashboard -> SQL Editor -> New query -> pegar todo -> Run
-- ============================================================================

-- 1) Tabla donde se guarda el catálogo y la configuración del sitio
create table if not exists public.aromaluxe_kv (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.aromaluxe_kv enable row level security;

-- Lectura pública: los visitantes pueden ver el catálogo
drop policy if exists "kv_public_read" on public.aromaluxe_kv;
create policy "kv_public_read" on public.aromaluxe_kv
  for select to anon, authenticated using (true);

-- Siembra inicial: cualquiera puede crear una clave que aún no existe.
-- Como la clave es PRIMARY KEY, nadie puede sobrescribir una existente.
drop policy if exists "kv_insert" on public.aromaluxe_kv;
create policy "kv_insert" on public.aromaluxe_kv
  for insert to anon, authenticated with check (true);

-- Modificar / borrar el catálogo: solo usuarios autenticados (el administrador)
drop policy if exists "kv_update" on public.aromaluxe_kv;
create policy "kv_update" on public.aromaluxe_kv
  for update to authenticated using (true) with check (true);

drop policy if exists "kv_delete" on public.aromaluxe_kv;
create policy "kv_delete" on public.aromaluxe_kv
  for delete to authenticated using (true);


-- 2) Tabla de cotizaciones y mensajes
create table if not exists public.aromaluxe_leads (
  id text primary key,
  type text not null,
  payload jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.aromaluxe_leads enable row level security;

-- Cualquier visitante puede enviar una cotización
drop policy if exists "leads_insert" on public.aromaluxe_leads;
create policy "leads_insert" on public.aromaluxe_leads
  for insert to anon, authenticated with check (true);

-- Solo el administrador puede LEER las cotizaciones (datos de clientes)
drop policy if exists "leads_auth_read" on public.aromaluxe_leads;
create policy "leads_auth_read" on public.aromaluxe_leads
  for select to authenticated using (true);


-- 3) Bucket público de imágenes
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'aromaluxe-images',
  'aromaluxe-images',
  true,
  8388608,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/avif']
)
on conflict (id) do update set
  public = true,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- Las imágenes se ven públicamente
drop policy if exists "img_public_read" on storage.objects;
create policy "img_public_read" on storage.objects
  for select to anon, authenticated using (bucket_id = 'aromaluxe-images');

-- Subir / cambiar / borrar imágenes: solo usuarios autenticados (el administrador)
drop policy if exists "img_insert" on storage.objects;
create policy "img_insert" on storage.objects
  for insert to authenticated with check (bucket_id = 'aromaluxe-images');

drop policy if exists "img_update" on storage.objects;
create policy "img_update" on storage.objects
  for update to authenticated
  using (bucket_id = 'aromaluxe-images')
  with check (bucket_id = 'aromaluxe-images');

drop policy if exists "img_delete" on storage.objects;
create policy "img_delete" on storage.objects
  for delete to authenticated using (bucket_id = 'aromaluxe-images');

-- ============================================================================
-- LISTO. Ahora crea el usuario administrador:
-- Authentication -> Users -> Add user
--   Email: aromaluxe.catalogo@gmail.com
--   Password: seccion2
--   Confirm email: activado (Auto Confirm User)
-- ============================================================================
