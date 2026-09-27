-- Code&Go — Supabase schema
--
-- Run this ONCE in your Supabase project's SQL Editor (Dashboard -> SQL Editor -> New query).
-- The site's anon key can only read/write rows through the client library and cannot run
-- DDL (CREATE TABLE etc.), so this file has to be applied manually by a project owner.
--
-- Safe to re-run: every statement uses IF NOT EXISTS / OR REPLACE / DROP ... IF EXISTS first.

create table if not exists public.profiles (
  id               uuid primary key references auth.users (id) on delete cascade,
  username         text not null default '',
  points           integer not null default 0,
  streak           integer not null default 0,
  longest_streak   integer not null default 0,
  last_active_date date,
  current_combo    integer not null default 0,
  max_combo        integer not null default 0,
  wrong_answers    integer not null default 0,
  night_owl        boolean not null default false,
  early_bird       boolean not null default false,
  completed_tasks  jsonb not null default '{}'::jsonb,
  collected_cards  jsonb not null default '{}'::jsonb,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id);

-- Keep updated_at current on every write.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute procedure public.set_updated_at();

-- Auto-create a profiles row whenever someone signs up, so the client never
-- has to race the trigger (it still has a defensive insert-if-missing fallback).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username)
  values (new.id, coalesce(split_part(new.email, '@', 1), 'coder'))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
