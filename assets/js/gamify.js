/* Code&Go — gamification layer: levels, streaks, the Python Codex, badges,
   and the toast/confetti UI that celebrates them. Loads after data.js + main.js. */

const LEVELS = [
  { level: 1,  title: "Novice",            min: 0 },
  { level: 2,  title: "Initiate",          min: 150 },
  { level: 3,  title: "Apprentice",        min: 350 },
  { level: 4,  title: "Coder",             min: 650 },
  { level: 5,  title: "Developer",         min: 1100 },
  { level: 6,  title: "Engineer",          min: 1700 },
  { level: 7,  title: "Architect",         min: 2500 },
  { level: 8,  title: "Pythonista",        min: 3500 },
  { level: 9,  title: "Grandmaster",       min: 4800 },
  { level: 10, title: "Python Sage",       min: 6400 },
  { level: 11, title: "Code Oracle",       min: 8200 },
  { level: 12, title: "Legend of Code&Go", min: 10200 }
];

function getLevelInfo(points) {
  let current = LEVELS[0];
  let next = LEVELS[1] || null;
  for (let i = 0; i < LEVELS.length; i++) {
    if (points >= LEVELS[i].min) {
      current = LEVELS[i];
      next = LEVELS[i + 1] || null;
    }
  }
  const span = next ? next.min - current.min : 1;
  const into = points - current.min;
  const pct = next ? Math.max(0, Math.min(100, Math.round((into / span) * 100))) : 100;
  return {
    level: current.level,
    title: current.title,
    next,
    pct,
    pointsToNext: next ? next.min - points : 0
  };
}

/* ---- The Python Codex: collectible trivia/quote cards, one revealed per room completed ---- */
const CARDS = [
  { id: "zen-1",  rarity: "common",    source: "Zen of Python", text: "Beautiful is better than ugly." },
  { id: "zen-2",  rarity: "common",    source: "Zen of Python", text: "Explicit is better than implicit." },
  { id: "zen-3",  rarity: "common",    source: "Zen of Python", text: "Simple is better than complex." },
  { id: "zen-4",  rarity: "common",    source: "Zen of Python", text: "Complex is better than complicated." },
  { id: "zen-5",  rarity: "common",    source: "Zen of Python", text: "Flat is better than nested." },
  { id: "zen-6",  rarity: "common",    source: "Zen of Python", text: "Sparse is better than dense." },
  { id: "zen-7",  rarity: "common",    source: "Zen of Python", text: "Readability counts." },
  { id: "zen-8",  rarity: "common",    source: "Zen of Python", text: "Special cases aren't special enough to break the rules." },
  { id: "zen-9",  rarity: "common",    source: "Zen of Python", text: "Although practicality beats purity." },
  { id: "zen-10", rarity: "common",    source: "Zen of Python", text: "Errors should never pass silently." },
  { id: "zen-11", rarity: "rare",      source: "Zen of Python", text: "Unless explicitly silenced." },
  { id: "zen-12", rarity: "rare",      source: "Zen of Python", text: "In the face of ambiguity, refuse the temptation to guess." },
  { id: "zen-13", rarity: "legendary", source: "Zen of Python", text: "There should be one — and preferably only one — obvious way to do it." },
  { id: "zen-14", rarity: "rare",      source: "Zen of Python", text: "Although that way may not be obvious at first unless you're Dutch." },
  { id: "zen-15", rarity: "rare",      source: "Zen of Python", text: "Now is better than never." },
  { id: "zen-16", rarity: "rare",      source: "Zen of Python", text: "Although never is often better than right now." },
  { id: "zen-17", rarity: "rare",      source: "Zen of Python", text: "If the implementation is hard to explain, it's a bad idea." },
  { id: "zen-18", rarity: "rare",      source: "Zen of Python", text: "If the implementation is easy to explain, it may be a good idea." },
  { id: "zen-19", rarity: "rare",      source: "Zen of Python", text: "Namespaces are one honking great idea — let's do more of those!" },
  { id: "fact-1",  rarity: "common",    source: "Python Fact", text: "Python was created by Guido van Rossum and first released on February 20, 1991." },
  { id: "fact-2",  rarity: "common",    source: "Python Fact", text: "Python is named after the comedy troupe Monty Python's Flying Circus — not the snake." },
  { id: "fact-3",  rarity: "legendary", source: "Python Fact", text: "Typing 'import this' in a Python shell prints the Zen of Python as a built-in easter egg." },
  { id: "fact-4",  rarity: "legendary", source: "Python Fact", text: "Typing 'import antigravity' opens a famous XKCD comic in your web browser." },
  { id: "fact-5",  rarity: "rare",      source: "Python Fact", text: "Python's bool type is technically a subclass of int — True == 1 evaluates to True." },
  { id: "fact-6",  rarity: "common",    source: "Python Fact", text: "Dictionaries have kept their insertion order since Python 3.7 — before that it wasn't guaranteed." },
  { id: "fact-7",  rarity: "common",    source: "Python Fact", text: "The walrus operator := arrived in Python 3.8, released in 2018." },
  { id: "fact-8",  rarity: "common",    source: "Python Fact", text: "f-strings were introduced in Python 3.6 and are generally the fastest string formatting option." },
  { id: "fact-9",  rarity: "rare",      source: "Python Fact", text: "CPython, the reference implementation most people run, is itself written in C." },
  { id: "fact-10", rarity: "common",    source: "Python Fact", text: "PEP stands for Python Enhancement Proposal — PEP 8 is the famous style guide." },
  { id: "fact-11", rarity: "common",    source: "Python Fact", text: "The Python Package Index (PyPI) hosts well over half a million packages." },
  { id: "fact-12", rarity: "rare",      source: "Python Fact", text: "Python's GIL (Global Interpreter Lock) means only one thread runs Python bytecode at a time." },
  { id: "fact-13", rarity: "common",    source: "Python Fact", text: "pip is a recursive acronym for 'Pip Installs Packages.'" },
  { id: "fact-14", rarity: "common",    source: "Python Fact", text: "Python supports procedural, object-oriented, and functional styles all in one language." },
  { id: "fact-15", rarity: "rare",      source: "Python Fact", text: "Lists in Python are dynamic arrays under the hood, not linked lists." },
  { id: "fact-16", rarity: "common",    source: "Python Fact", text: "Instagram, Spotify, and Dropbox all rely heavily on Python in production." },
  { id: "fact-17", rarity: "common",    source: "Python Fact", text: "Python deliberately uses indentation instead of braces to enforce readable code." },
  { id: "fact-18", rarity: "rare",      source: "Python Fact", text: "The if __name__ == \"__main__\": idiom lets a file work as both a script and an importable module." },
  { id: "fact-19", rarity: "common",    source: "Python Fact", text: "Python 2 reached its official end of life on January 1, 2020, after 20 years." }
].map(c => ({ ...c, icon: c.source === "Zen of Python" ? "🧘" : "🐍" }));

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

/* Call whenever the learner completes a task — updates the daily streak. */
function recordActivity() {
  const p = getProgress();
  const today = todayStr();
  if (p.lastActiveDate === today) return p;

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  p.streak = (p.lastActiveDate === yesterday) ? (p.streak || 0) + 1 : 1;
  p.lastActiveDate = today;
  p.longestStreak = Math.max(p.longestStreak || 0, p.streak);
  saveProgress(p);
  return p;
}

/* Call after a correct/completed task — flags night-owl/early-bird badges by local time of day. */
function markTimeOfDayFlags() {
  const p = getProgress();
  const hour = new Date().getHours();
  let changed = false;
  if (hour >= 0 && hour < 4 && !p.nightOwl) { p.nightOwl = true; changed = true; }
  if (hour >= 5 && hour < 7 && !p.earlyBird) { p.earlyBird = true; changed = true; }
  if (changed) saveProgress(p);
  return p;
}

/* The combo persists across rooms (not just within one page load) so it's
   actually reachable — a room only has a handful of graded tasks each. */
function registerCorrectAnswer() {
  const p = getProgress();
  p.currentCombo = (p.currentCombo || 0) + 1;
  p.maxCombo = Math.max(p.maxCombo || 0, p.currentCombo);
  saveProgress(p);
  return p.currentCombo;
}

function registerWrongAnswer() {
  const p = getProgress();
  p.currentCombo = 0;
  p.wrongAnswers = (p.wrongAnswers || 0) + 1;
  saveProgress(p);
}

function collectedCardCount() {
  const p = getProgress();
  return Object.keys(p.collectedCards || {}).length;
}

/* Reveals a card — new if not previously collected, otherwise a "duplicate" pull. */
function awardRandomCard() {
  const p = getProgress();
  if (!p.collectedCards) p.collectedCards = {};
  const uncollected = CARDS.filter(c => !p.collectedCards[c.id]);
  const pool = uncollected.length ? uncollected : CARDS;
  const card = pool[Math.floor(Math.random() * pool.length)];
  const isNew = !p.collectedCards[card.id];
  p.collectedCards[card.id] = true;
  saveProgress(p);
  return { card, isNew };
}

/* ---- Badges (combines room/path milestones with streak, combo, codex, level, and time-of-day feats) ---- */
const BADGES = [
  { id: "first-steps",       name: "First Steps",        icon: "👣", desc: "Complete your first task.",
    check: p => Object.keys(p.completedTasks || {}).length >= 1 },
  { id: "python-basics",     name: "Basics Master",       icon: "🐍", desc: "Complete Python Basics.",
    check: () => roomIsComplete(getRoom("python-basics")) },
  { id: "control-flow",      name: "Loop Wrangler",       icon: "🔀", desc: "Complete Control Flow.",
    check: () => roomIsComplete(getRoom("control-flow")) },
  { id: "data-structures",   name: "Data Organizer",      icon: "🧺", desc: "Complete Data Structures.",
    check: () => roomIsComplete(getRoom("data-structures")) },
  { id: "functions",         name: "Function Builder",    icon: "🧩", desc: "Complete Functions.",
    check: () => roomIsComplete(getRoom("functions")) },
  { id: "strings",           name: "String Slinger",      icon: "🔤", desc: "Complete String Manipulation.",
    check: () => roomIsComplete(getRoom("strings")) },
  { id: "errors-files",      name: "Bug Squasher",        icon: "📁", desc: "Complete Errors & File Handling.",
    check: () => roomIsComplete(getRoom("errors-files")) },
  { id: "oop-basics",        name: "Class Act",           icon: "🏗️", desc: "Complete OOP Basics.",
    check: () => roomIsComplete(getRoom("oop-basics")) },
  { id: "path-fundamentals", name: "Fundamentals Grad",   icon: "🎓", desc: "Finish the Python Fundamentals path.",
    check: () => pathCompletedCount(getPath("python-fundamentals")) === getPath("python-fundamentals").rooms.length },
  { id: "path-master",       name: "Path Perfectionist",  icon: "🗺️", desc: "Fully complete 3 different learning paths.",
    check: () => PATHS.filter(p2 => pathCompletedCount(p2) === p2.rooms.length).length >= 3 },
  { id: "all-rooms",         name: "Code&Go Champion",    icon: "🏆", desc: "Complete every room on the site.",
    check: () => completedRoomsList().length === ROOMS.length },
  { id: "streak-3",          name: "Warm Streak",         icon: "🔥", desc: "Keep a 3-day streak going.",
    check: p => (p.streak || 0) >= 3 },
  { id: "streak-7",          name: "Week Streak",         icon: "🔥", desc: "Keep a 7-day streak going.",
    check: p => (p.streak || 0) >= 7 },
  { id: "streak-30",         name: "Unstoppable",         icon: "🔥", desc: "Keep a 30-day streak going.",
    check: p => (p.streak || 0) >= 30 },
  { id: "combo-5",           name: "Combo Starter",       icon: "⚡", desc: "Answer 5 questions correctly in a row.",
    check: p => (p.maxCombo || 0) >= 5 },
  { id: "combo-10",          name: "Hot Streak",          icon: "⚡", desc: "Answer 10 questions correctly in a row.",
    check: p => (p.maxCombo || 0) >= 10 },
  { id: "card-collector-10", name: "Card Collector",      icon: "🃏", desc: "Collect 10 Codex cards.",
    check: p => Object.keys(p.collectedCards || {}).length >= 10 },
  { id: "card-collector-25", name: "Codex Keeper",        icon: "📖", desc: "Collect 25 Codex cards.",
    check: p => Object.keys(p.collectedCards || {}).length >= 25 },
  { id: "card-master",       name: "Codex Complete",      icon: "🌟", desc: "Collect every card in the Codex.",
    check: p => Object.keys(p.collectedCards || {}).length >= CARDS.length },
  { id: "night-owl",         name: "Night Owl",           icon: "🦉", desc: "Complete a task between midnight and 4am.",
    check: p => !!p.nightOwl },
  { id: "early-bird",        name: "Early Bird",          icon: "🌅", desc: "Complete a task between 5am and 7am.",
    check: p => !!p.earlyBird },
  { id: "flawless",          name: "Flawless Run",        icon: "💎", desc: "Complete 20+ tasks without a single wrong answer.",
    check: p => (p.wrongAnswers || 0) === 0 && Object.keys(p.completedTasks || {}).length >= 20 },
  { id: "level-10",          name: "Python Sage",         icon: "🧙", desc: "Reach Level 10.",
    check: p => getLevelInfo(p.points || 0).level >= 10 },
  { id: "level-12",          name: "Living Legend",       icon: "👑", desc: "Reach the max level.",
    check: p => getLevelInfo(p.points || 0).level >= 12 }
];

function earnedBadgeIds(p) {
  return new Set(BADGES.filter(b => b.check(p)).map(b => b.id));
}

/* ---- Daily challenge spotlight: a deterministic pick (from unlocked rooms only) that rotates once per day ---- */
function pickDailyRoom() {
  const unlocked = ROOMS.filter(r => isRoomUnlocked(r.id));
  const pool = unlocked.length ? unlocked : ROOMS;
  const seed = todayStr();
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return pool[hash % pool.length];
}

/* ---- Toast + confetti UI ---- */
function showToast(html, opts) {
  opts = opts || {};
  const el = document.createElement("div");
  el.className = "cg-toast" + (opts.big ? " big" : "");
  el.innerHTML = html;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add("show"));
  const duration = opts.duration || (opts.big ? 5200 : 3600);
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 400);
  }, duration);
}

function burstConfetti(x, y) {
  const colors = ["#ffd43b", "#4b8bbe", "#3fb950", "#a970ff", "#f85149"];
  for (let i = 0; i < 26; i++) {
    const piece = document.createElement("div");
    piece.className = "cg-confetti-piece";
    piece.style.left = x + "px";
    piece.style.top = y + "px";
    piece.style.background = colors[i % colors.length];
    const angle = Math.random() * Math.PI * 2;
    const dist = 60 + Math.random() * 100;
    piece.style.setProperty("--dx", Math.cos(angle) * dist + "px");
    piece.style.setProperty("--dy", (Math.sin(angle) * dist - 50) + "px");
    piece.style.setProperty("--rot", (Math.random() * 720 - 360) + "deg");
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 950);
  }
}
