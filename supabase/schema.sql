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

-- ============================================================================
-- Premium (locked rooms/paths, redeemed with a secret token for now — a real
-- payment webhook can flip is_premium the same way later, e.g. from an Edge
-- Function once PayOS is wired up).
-- ============================================================================

alter table public.profiles add column if not exists is_premium boolean not null default false;

-- CRITICAL: RLS policies control which ROWS a user can touch, not which
-- COLUMNS. The profiles_update_own policy above (using auth.uid() = id)
-- would otherwise let a signed-in user set their OWN is_premium to true
-- with an ordinary client update call. This column-level revoke closes
-- that off — is_premium can only ever be written by a function running
-- with elevated (security definer) privileges, like redeem_premium_code
-- below, never directly by the client.
revoke insert (is_premium), update (is_premium) on public.profiles from authenticated, anon;

create extension if not exists pgcrypto;

-- Holds the hashed redeem token. RLS is enabled with NO policies at all
-- defined on it, so no client — anon or authenticated — can ever SELECT,
-- INSERT, UPDATE, or DELETE this table directly through the API. Only a
-- SECURITY DEFINER function (which bypasses RLS, running as the table
-- owner) can read it.
create table if not exists public.app_secrets (
  key   text primary key,
  value text not null
);
alter table public.app_secrets enable row level security;

-- Set your premium redeem token here: replace the placeholder text below
-- with your own secret, then run this block once.
--
-- NEVER commit this file to git with a real token in it — anyone can read
-- your repo's commit history, hash or no hash, so a token that ever touches
-- a committed file is compromised the moment it's pushed. Edit this line
-- only in the Supabase SQL Editor directly (or in an uncommitted local
-- scratch copy), paste your real token there, run it, then leave this
-- repo file with the placeholder below. Re-run the same block any time
-- you want to rotate to a new token.
insert into public.app_secrets (key, value)
values ('premium_redeem_token_hash', crypt('REPLACE-WITH-YOUR-OWN-SECRET-TOKEN', gen_salt('bf')))
on conflict (key) do update set value = excluded.value;

-- Checks a submitted token against the stored hash and, on a match, marks
-- the CALLING user's own profile as premium (auth.uid() reflects whoever's
-- JWT made the request, not the function owner, even under security
-- definer). Returns true/false — the hash itself is never sent back.
create or replace function public.redeem_premium_code(token text)
returns boolean
language plpgsql
-- Supabase installs pgcrypto's crypt()/gen_salt() into the `extensions`
-- schema, not `public`. A SECURITY DEFINER function's search_path is
-- locked down for safety (never trusts the caller's search_path), so it
-- must explicitly list `extensions` too or crypt() resolves to nothing.
security definer set search_path = public, extensions
as $$
declare
  stored_hash text;
begin
  select value into stored_hash from public.app_secrets where key = 'premium_redeem_token_hash';
  if stored_hash is null then
    return false;
  end if;
  if crypt(token, stored_hash) = stored_hash then
    update public.profiles set is_premium = true where id = auth.uid();
    return true;
  end if;
  return false;
end;
$$;

revoke all on function public.redeem_premium_code(text) from public;
grant execute on function public.redeem_premium_code(text) to authenticated;

-- Force PostgREST to pick up the new function immediately instead of
-- waiting on its own auto-reload (which has been flaky on this project).
notify pgrst, 'reload schema';
