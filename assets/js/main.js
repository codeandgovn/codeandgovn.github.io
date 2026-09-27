/* Code&Go — shared progress tracking (all client-side, via localStorage) */

const STORAGE_KEY = "codeandgo_progress_v1";

function getProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) throw new Error("empty");
    const parsed = JSON.parse(raw);
    if (!parsed.completedTasks) parsed.completedTasks = {};
    if (typeof parsed.points !== "number") parsed.points = 0;
    if (!parsed.username) parsed.username = "";
    return parsed;
  } catch (e) {
    return { points: 0, completedTasks: {}, username: "" };
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
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

/* ---------- Navbar active state + points pill ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[data-page]").forEach(a => {
    if (a.getAttribute("data-page") === path) a.classList.add("active");
  });

  const pill = document.getElementById("nav-points");
  if (pill) pill.textContent = "⭐ " + totalPoints() + " pts";

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
});
