/* Code&Go — account-based progress tracking, backed by Supabase (see supabase-client.js).
   Progress lives in the `profiles` table (RLS-scoped to the signed-in user), not localStorage. */

let _profile = null; // camelCase in-memory cache of the current user's profiles row
let _userId = null;

function defaultProgress() {
  return {
    points: 0,
    completedTasks: {},
    username: "",
    streak: 0,
    longestStreak: 0,
    lastActiveDate: null,
    collectedCards: {},
    currentCombo: 0,
    maxCombo: 0,
    wrongAnswers: 0,
    nightOwl: false,
    earlyBird: false
  };
}

function rowToProfile(row) {
  return {
    points: row.points || 0,
    completedTasks: row.completed_tasks || {},
    username: row.username || "",
    streak: row.streak || 0,
    longestStreak: row.longest_streak || 0,
    lastActiveDate: row.last_active_date || null,
    collectedCards: row.collected_cards || {},
    currentCombo: row.current_combo || 0,
    maxCombo: row.max_combo || 0,
    wrongAnswers: row.wrong_answers || 0,
    nightOwl: !!row.night_owl,
    earlyBird: !!row.early_bird
  };
}

function profileToRow(p) {
  return {
    points: p.points,
    completed_tasks: p.completedTasks,
    username: p.username,
    streak: p.streak,
    longest_streak: p.longestStreak,
    last_active_date: p.lastActiveDate,
    collected_cards: p.collectedCards,
    current_combo: p.currentCombo,
    max_combo: p.maxCombo,
    wrong_answers: p.wrongAnswers,
    night_owl: p.nightOwl,
    early_bird: p.earlyBird
  };
}

/* Loads (or lazily creates) the signed-in user's profile row into the in-memory cache. */
async function loadProfileForUser(user) {
  _userId = user.id;
  let { data, error } = await sb.from("profiles").select("*").eq("id", user.id).single();

  if (error || !data) {
    const insertRes = await sb
      .from("profiles")
      .insert({ id: user.id, username: (user.email || "coder").split("@")[0] })
      .select()
      .single();
    data = insertRes.data;
    error = insertRes.error;
  }

  _profile = data ? rowToProfile(data) : defaultProgress();
  return _profile;
}

/* Synchronous reads/writes against the cache — unchanged call signature from the
   old localStorage version, so gamify.js/room.js/*.html didn't need a rewrite. */
function getProgress() {
  return _profile || defaultProgress();
}

function saveProgress(p) {
  _profile = p;
  if (!_userId) return; // not signed in (shouldn't happen on gated pages)
  sb.from("profiles")
    .update(profileToRow(p))
    .eq("id", _userId)
    .then(({ error }) => {
      if (error) console.error("Code&Go: failed to save progress", error);
    });
}

function taskKey(roomId, index) {
  return roomId + "/" + index;
}

function isTaskDone(roomId, index) {
  const p = getProgress();
  return !!p.completedTasks[taskKey(roomId, index)];
}

function markTaskDone(roomId, index, points) {
  const p = getProgress();
  const key = taskKey(roomId, index);
  if (p.completedTasks[key]) return p; // already done, no double points
  p.completedTasks[key] = true;
  p.points += (points || 0);
  saveProgress(p);
  return p;
}

function roomCompletedCount(room) {
  const p = getProgress();
  return room.tasks.filter((t, i) => p.completedTasks[taskKey(room.id, i)]).length;
}

function roomIsComplete(room) {
  return roomCompletedCount(room) === room.tasks.length;
}

function totalPoints() {
  return getProgress().points;
}

function completedRoomsList() {
  return ROOMS.filter(r => roomIsComplete(r));
}

function pathCompletedCount(path) {
  return path.rooms.filter(rid => {
    const room = getRoom(rid);
    return room && roomIsComplete(room);
  }).length;
}

function setUsername(name) {
  const p = getProgress();
  p.username = name;
  saveProgress(p);
}

function resetProgress() {
  const p = defaultProgress();
  p.username = getProgress().username;
  saveProgress(p);
}

/* ---------- Auth gating + shared navbar rendering ---------- */

function currentPagePath() {
  return location.pathname.split("/").pop() || "index.html";
}

/* Call at the top of a protected page (rooms/paths/room/profile). Redirects to
   login.html if signed out; otherwise loads the profile and renders the navbar. */
async function requireAuth() {
  const user = await getSessionUser();
  if (!user) {
    const next = encodeURIComponent(currentPagePath() + location.search);
    location.href = `login.html?next=${next}`;
    return false;
  }
  await loadProfileForUser(user);
  renderNavAccountState(user);
  return true;
}

/* Call on public pages (index.html): loads the profile if signed in, but never redirects. */
async function initPublicNav() {
  const user = await getSessionUser();
  if (user) await loadProfileForUser(user);
  renderNavAccountState(user);
}

function renderNavAccountState(user) {
  const path = currentPagePath();
  document.querySelectorAll(".nav-links a[data-page]").forEach(a => {
    a.classList.toggle("active", a.getAttribute("data-page") === path);
  });

  const cta = document.getElementById("nav-cta");
  if (cta) {
    if (user) {
      const p = getProgress();
      const info = typeof getLevelInfo === "function" ? getLevelInfo(p.points) : { level: 1, title: "Novice" };
      cta.innerHTML = `
        <span class="level-pill" id="nav-level">Lv.${info.level} ${info.title}</span>
        <span class="streak-pill" id="nav-streak">🔥 ${p.streak || 0}</span>
        <span class="points-pill" id="nav-points">⭐ ${p.points || 0} pts</span>
        <button class="btn btn-outline btn-sm" id="nav-signout">Sign Out</button>
      `;
      const signOutBtn = document.getElementById("nav-signout");
      if (signOutBtn) signOutBtn.addEventListener("click", signOutUser);
    } else {
      cta.innerHTML = `
        <a href="login.html" class="btn btn-outline btn-sm">Sign In</a>
        <a href="signup.html" class="btn btn-primary btn-sm">Sign Up</a>
      `;
    }
  }

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks && !hamburger.dataset.wired) {
    hamburger.dataset.wired = "1";
    hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
  }
}
