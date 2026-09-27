# Code&Go

A free platform for learning Python and AI/ML, structured like TryHackMe:
**paths** that unlock one at a time, each made of hands-on **challenge rooms**
you can tackle in any order once that path is open. Progress, points, streaks,
and the Codex collection are tied to a real account, backed by Supabase.

## ⚠️ One-time setup required

This site needs a Supabase database table before accounts/progress will work.
**Run `supabase/schema.sql` once in the project's Supabase SQL Editor**
(Dashboard → SQL Editor → New query → paste the file → Run). The site's
anon key can only read/write rows through the client library — it can't
create tables — so this step can't be automated from the client side.

Until that's done, sign-up/sign-in still work (Supabase Auth doesn't need
the table), but profile rows can't be created, so no progress will save.

## Structure

- `index.html` — public landing page (shows Sign In/Sign Up when logged out)
- `login.html` / `signup.html` — Supabase Auth (email + password)
- `rooms.html` — browse/search/filter every room (locked ones are greyed out)
- `paths.html` — all paths in order, with lock/in-progress/complete status
- `room.html?id=<room-id>` — a single room's tasks (redirects/blocks if its
  path is locked)
- `profile.html` — points, level, streak, badges, Codex, and sign-out
- `supabase/schema.sql` — the `profiles` table, RLS policies, and the
  auto-create-on-signup trigger (run this manually — see above)
- `assets/js/supabase-client.js` — Supabase project URL + anon key, creates `sb`
- `assets/js/auth.js` — thin signUp/signIn/signOut/getSessionUser wrappers
- `assets/js/data.js` — all room & path content, plus `PATH_ORDER` and the
  lock helpers (`isPathUnlocked`, `isRoomUnlocked`, `currentActivePath`)
- `assets/js/main.js` — loads/saves the signed-in user's `profiles` row
  (camelCase in memory, snake_case in Postgres), and renders the navbar's
  auth/level/streak/points state
- `assets/js/gamify.js` — levels/XP, daily streaks, the Python Codex
  (collectible cards), badges, toast/confetti celebrations, and the
  daily-challenge picker
- `assets/js/room.js` — renders a room page, grades answers, and enforces
  the lock check before showing content

## Accounts & progress (Supabase)

Every gated page (`rooms.html`, `paths.html`, `room.html`, `profile.html`)
calls `requireAuth()` on load, which redirects to `login.html` if there's no
session. `index.html` calls `initPublicNav()` instead, which never redirects.
Once signed in, `main.js` loads the user's `profiles` row into an in-memory
cache; `getProgress()`/`saveProgress()` keep their old synchronous-looking
signature (so `gamify.js`/`room.js` didn't need a rewrite) — writes fire an
async `update` to Supabase in the background.

## Sequential paths

`PATH_ORDER` in `assets/js/data.js` is the master sequence. A path is locked
until every room in the previous path is complete (`isPathUnlocked`); a room
is locked if its path is (`isRoomUnlocked`). Rooms inside an unlocked path
have no ordering constraint — they're independent hands-on challenges.

## Adding a new room

Add an entry to the `ROOMS` array in `assets/js/data.js` with an `id`,
`title`, `icon`, `difficulty`, `tags`, `description`, and a list of `tasks`.
Each task has `title`, `points`, `content` (HTML), and optionally a
`question` / `answer` / `hint` for a graded check. Reference the room's
`id` from a path's `rooms` array, and make sure that path's `id` is in
`PATH_ORDER`.

## Courses

- **Python** (19 paths, ~211 rooms): fundamentals through algorithms, web,
  databases, security, automation, and coding challenges.
- **AI & Machine Learning** (1 path, 19 rooms): a hands-on, no-install tour
  using only free tools — Teachable Machine, TensorFlow Playground,
  Quick Draw, Google Colab, Kaggle, Hugging Face Spaces, ml5.js, and Orange.

This is a static site — just open `index.html` or serve the folder with any
static file server. It's deployed via GitHub Pages, built directly on `main`.
