# Code&Go

A free platform for learning Python and AI/ML, structured like TryHackMe.
Two separate things live here:

- **Paths** — structured, locked/sequential courses made of **rooms**. A path
  unlocks only once the previous one is 100% complete; rooms inside an
  unlocked path can be done in any order.
- **Challenges** — a completely separate, always-open library of practice
  rooms. They are never part of a path and never locked — pick any of them,
  anytime, regardless of your path progress.

Progress, points, streaks, and the Codex collection are tied to a real
account, backed by Supabase.

## ⚠️ One-time setup required

This site needs a Supabase database table before accounts/progress will work.
**Run `supabase/schema.sql` once in the project's Supabase SQL Editor**
(Dashboard → SQL Editor → New query → paste the file → Run). The site's
anon key can only read/write rows through the client library — it can't
create tables — so this step can't be automated from the client side.

Until that's done, sign-up/sign-in still work (Supabase Auth doesn't need
the table), but profile rows can't be created, so no progress will save.

**Set your Premium redeem token** in the same file: `schema.sql` has an
`insert into public.app_secrets (...)` block with a placeholder
`'REPLACE-WITH-YOUR-OWN-SECRET-TOKEN'` — swap that for your own secret
before running it. It's hashed with bcrypt before it ever touches a table
(see "Premium" below for why this is safe to run in a shared SQL Editor).
Re-run just that block any time you want to rotate the token.

## Structure

- `index.html` — public landing page (shows Sign In/Sign Up when logged out)
- `login.html` / `signup.html` — Supabase Auth (email + password)
- `challenges.html` — the always-open Challenges library (never locked)
- `paths.html` — all paths in order, with lock/in-progress/complete status
- `challenge.html?id=<room-id>` — a single room's tasks (works for both a
  path room and a standalone challenge; blocks access if its path is locked)
- `profile.html` — points, level, streak, badges, Codex, and sign-out
- `supabase/schema.sql` — the `profiles` table, RLS policies, and the
  auto-create-on-signup trigger (run this manually — see above)
- `assets/js/supabase-client.js` — Supabase project URL + anon key, creates `sb`
- `assets/js/auth.js` — thin signUp/signIn/signOut/getSessionUser wrappers
- `assets/js/data.js` — all room & path content, `PATH_ORDER`, the lock
  helpers (`isPathUnlocked`, `isRoomUnlocked`, `currentActivePath`), and
  `CHALLENGE_ROOM_IDS`/`getChallengeRooms()` for the standalone Challenges
- `assets/js/main.js` — loads/saves the signed-in user's `profiles` row
  (camelCase in memory, snake_case in Postgres), and renders the navbar's
  auth/level/streak/points state
- `assets/js/gamify.js` — levels/XP, daily streaks, the Python Codex
  (collectible cards), badges, toast/confetti celebrations, and the
  daily-challenge picker (always drawn from the Challenges library)
- `assets/js/room.js` — renders a room page (path room or standalone
  challenge), grades answers, and enforces the path-lock check

## Accounts & progress (Supabase)

Every gated page (`challenges.html`, `paths.html`, `challenge.html`,
`profile.html`) calls `requireAuth()` on load, which redirects to
`login.html` if there's no session. `index.html` calls `initPublicNav()`
instead, which never redirects. Once signed in, `main.js` loads the user's
`profiles` row into an in-memory cache; `getProgress()`/`saveProgress()`
keep their old synchronous-looking signature (so `gamify.js`/`room.js`
needed no rewrite) — writes fire an async `update` to Supabase in the
background.

## Paths vs. Challenges — how the locking actually works

`PATH_ORDER` in `assets/js/data.js` is the master sequence of the 19 real
paths. A path is locked until every room in the previous path is complete
(`isPathUnlocked`); a room is locked only if it belongs to a locked path
(`isRoomUnlocked` — via `getPathForRoom`).

The 16 rooms in `CHALLENGE_ROOM_IDS` are **not listed in any path's `rooms`
array**, so `getPathForRoom()` returns `null` for them — which is exactly
why `isRoomUnlocked()` treats them as permanently open. There's no separate
"unlocked" flag to maintain; a room's lock state is entirely a function of
whether some path claims it.

## Adding content

**A new path room:** add an entry to `ROOMS` in `assets/js/data.js`, then
reference its `id` from some path's `rooms` array (and make sure that
path's `id` is in `PATH_ORDER`).

**A new standalone challenge:** add an entry to `ROOMS`, then add its `id`
to `CHALLENGE_ROOM_IDS` instead of any path's `rooms` array. Do not add it
to any path — that's what keeps it unlocked.

Every room has `id`, `title`, `icon`, `difficulty`, `tags`, `description`,
and `tasks` (each with `title`, `points`, `content` HTML, and optionally
`question`/`answer`/`hint` for a graded check).

## Premium

The whole AI & Machine Learning path, 6 advanced (Hard) rooms scattered
across the free paths, and 3 of the standalone Challenges are gated behind
`premium: true` on their room or path object in `data.js`. Premium is
**independent of the sequential path lock** — a premium room inside an
otherwise-free path never blocks that path from being marked complete for
a free user (`isPathUnlocked`/`currentActivePath` only ever require the
*non*-premium rooms in a path). Tapping a premium-locked room redirects to
`subscribe.html?next=<back-here>&room=<id>`.

`subscribe.html` shows two plans (Monthly ₫400,000/mo, "Lifetime Deal"
₫600,000 one-time), then an order-confirmation view with two payment
methods: PayOS/VietQR (a placeholder — real webhook integration lands
later) and a working "redeem a secret code" box. Redeeming calls the
`redeem_premium_code` Postgres RPC in `supabase/schema.sql`, which:

1. Hashes the submitted token and compares it to the one stored (already
   hashed) in `public.app_secrets` — a table with RLS enabled and **zero
   policies**, so no client, authenticated or not, can ever read it directly.
2. On a match, sets `is_premium = true` on the *calling* user's own
   `profiles` row (`auth.uid()`, resolved from their session, not the
   function's owner) and returns `true`/`false` — never the hash.

The function runs `security definer` (elevated privileges) specifically so
it can read `app_secrets` and write `is_premium` despite both being locked
down from ordinary client access — including from the row's own owner:
`profiles.is_premium` has `update`/`insert` **revoked at the column level**
for the `authenticated` role, so a user can't just call
`supabase.from('profiles').update({is_premium: true})` on their own row.
That's why `assets/js/main.js`'s `profileToRow()` deliberately never
includes `isPremium` — sending it would make the whole update fail.

When PayOS webhooks are wired up later, they should flip `is_premium` the
same way this RPC does (as a service-role/Edge Function call, bypassing
RLS) rather than ever granting the client column-level write access.

## Courses

- **Python** (19 paths, 214 path rooms): fundamentals through algorithms,
  web, databases, security, and automation.
- **AI & Machine Learning** (1 path, 19 rooms): a hands-on, no-install tour
  using only free tools — Teachable Machine, TensorFlow Playground,
  Quick Draw, Google Colab, Kaggle, Hugging Face Spaces, ml5.js, and Orange.
- **Challenges** (16 standalone rooms, never locked): classic practice
  problems from FizzBuzz to building small CLI apps and games.

This is a static site — just open `index.html` or serve the folder with any
static file server. It's deployed via GitHub Pages, built directly on `main`.
