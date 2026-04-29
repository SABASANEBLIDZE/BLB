create table if not exists public.site_content (
  id text primary key,
  content jsonb not null,
  updated_at timestamptz default now()
);

alter table public.site_content enable row level security;

create policy "Public read site content"
on public.site_content
for select
using (true);

-- For client demos, enable this only for authenticated/admin workflows.
-- Do not leave public write access enabled on a production site.
-- create policy "Authenticated admin writes site content"
-- on public.site_content
-- for all
-- to authenticated
-- using (true)
-- with check (true);
