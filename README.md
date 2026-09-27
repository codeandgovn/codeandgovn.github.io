# Code&Go

A free, browser-based platform for learning Python, structured like TryHackMe:
short **rooms** made of guided tasks, grouped into **learning paths**, with
points and progress tracked locally in the browser (no backend, no signup).

## Structure

- `index.html` — landing page
- `rooms.html` — browse/search/filter all rooms
- `paths.html` — learning paths (ordered groups of rooms)
- `room.html?id=<room-id>` — a single room's tasks (dynamic template)
- `profile.html` — points, badges, and per-room progress
- `assets/js/data.js` — all room & path content lives here
- `assets/js/main.js` — shared progress tracking (localStorage)
- `assets/js/room.js` — renders a room page and grades answers
- `assets/js/gamify.js` — levels/XP, daily streaks, the Python Codex
  (collectible trivia cards), badges, and the toast/confetti celebrations

## Gamification

- **Levels & XP** — total points map to 12 titled levels (Novice → Legend
  of Code&Go), shown as a bar on the profile and a pill in the navbar.
- **Daily streaks** — completing at least one task per day increments a
  streak (`assets/js/gamify.js#recordActivity`); missing a day resets it.
- **Combo counter** — consecutive correct answers (persisted across room
  visits) trigger a toast every 5, and feed the Combo Starter/Hot Streak badges.
- **The Python Codex** — finishing a room reveals a random collectible
  card (Zen of Python lines + Python trivia) into the learner's collection.
- **Badges** — ~24 badges spanning rooms/paths, streaks, combos, the Codex,
  levels, and time-of-day feats (Night Owl, Early Bird), defined in
  `assets/js/gamify.js` as `{ id, name, icon, desc, check(progress) }`.
- **Daily challenge** — the homepage spotlights one room per day, picked
  deterministically from the date so it rotates without a backend.

## Adding a new room

Add an entry to the `ROOMS` array in `assets/js/data.js` with an `id`,
`title`, `icon`, `difficulty`, `tags`, `description`, and a list of `tasks`.
Each task has `title`, `points`, `content` (HTML), and optionally a
`question` / `answer` / `hint` for a graded check. Reference the room's
`id` from a path's `rooms` array to include it in a learning path.

This is a static site — just open `index.html` or serve the folder with
any static file server. It's deployed via GitHub Pages.
