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

## Adding a new room

Add an entry to the `ROOMS` array in `assets/js/data.js` with an `id`,
`title`, `icon`, `difficulty`, `tags`, `description`, and a list of `tasks`.
Each task has `title`, `points`, `content` (HTML), and optionally a
`question` / `answer` / `hint` for a graded check. Reference the room's
`id` from a path's `rooms` array to include it in a learning path.

This is a static site — just open `index.html` or serve the folder with
any static file server. It's deployed via GitHub Pages.
