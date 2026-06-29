create extension if not exists "pgcrypto";

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name_zh text not null,
  name_mn text,
  name_en text,
  description text,
  sort_order integer default 0,
  created_at timestamptz default now()
);

create table public.sources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  source_type text not null default 'book',
  publisher text,
  published_at text,
  purchase_place text,
  archive_location text,
  notes text,
  created_at timestamptz default now()
);

create table public.texts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title_zh text not null,
  title_mn text,
  title_en text,
  category_id uuid references public.categories(id),
  original_mn text,
  translation_zh text,
  translation_en text,
  summary text,
  period text,
  source_id uuid references public.sources(id),
  publication text,
  pages text,
  translation_note text,
  today_line_mn text,
  today_line_zh text,
  today_line_en text,
  people text[] default '{}',
  places text[] default '{}',
  themes text[] default '{}',
  latitude numeric,
  longitude numeric,
  region_name text,
  featured boolean default false,
  recommended_on date,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.contributors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  bio text,
  email text,
  website text,
  created_at timestamptz default now()
);

create table public.translations (
  id uuid primary key default gen_random_uuid(),
  text_id uuid references public.texts(id) on delete cascade,
  language text not null check (language in ('mn', 'zh', 'en')),
  content text not null,
  translator_id uuid references public.contributors(id) on delete set null,
  note text,
  version_label text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.admin_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz default now()
);

create table public.tags (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  created_at timestamptz default now()
);

create table public.text_tags (
  text_id uuid references public.texts(id) on delete cascade,
  tag_id uuid references public.tags(id) on delete cascade,
  primary key (text_id, tag_id)
);

create table public.books (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  cover_url text,
  pdf_url text,
  published_at text,
  publisher text,
  purchase_place text,
  summary text,
  why_bought text,
  reading_notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.book_texts (
  book_id uuid references public.books(id) on delete cascade,
  text_id uuid references public.texts(id) on delete cascade,
  primary key (book_id, text_id)
);

create table public.translation_notes (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  text_id uuid references public.texts(id) on delete set null,
  excerpt text,
  body text not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.suggestions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  text_slug text not null,
  content text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected', 'archived')),
  admin_notes text,
  created_at timestamptz default now(),
  reviewed_at timestamptz
);

alter table public.categories enable row level security;
alter table public.sources enable row level security;
alter table public.texts enable row level security;
alter table public.tags enable row level security;
alter table public.text_tags enable row level security;
alter table public.books enable row level security;
alter table public.book_texts enable row level security;
alter table public.translation_notes enable row level security;
alter table public.suggestions enable row level security;
alter table public.contributors enable row level security;
alter table public.translations enable row level security;
alter table public.admin_profiles enable row level security;

create policy "Public read categories" on public.categories for select using (true);
create policy "Public read sources" on public.sources for select using (true);
create policy "Public read texts" on public.texts for select using (true);
create policy "Public read tags" on public.tags for select using (true);
create policy "Public read text_tags" on public.text_tags for select using (true);
create policy "Public read books" on public.books for select using (true);
create policy "Public read book_texts" on public.book_texts for select using (true);
create policy "Public read translation_notes" on public.translation_notes for select using (true);
create policy "Public read contributors" on public.contributors for select using (true);
create policy "Public read translations" on public.translations for select using (true);

create policy "Authenticated admins manage categories" on public.categories for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated admins manage sources" on public.sources for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated admins manage texts" on public.texts for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated admins manage tags" on public.tags for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated admins manage text_tags" on public.text_tags for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated admins manage books" on public.books for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated admins manage book_texts" on public.book_texts for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated admins manage notes" on public.translation_notes for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated admins manage suggestions" on public.suggestions for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated admins manage contributors" on public.contributors for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated admins manage translations" on public.translations for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated users read own admin profile" on public.admin_profiles for select using (auth.uid() = id);
create policy "Authenticated admins update own admin profile" on public.admin_profiles for update using (auth.uid() = id) with check (auth.uid() = id);
