/* Code&Go — renders a single room page from ?id=<room-id> */

function diffClass(d) {
  if (d === "Easy") return "tag-easy";
  if (d === "Medium") return "tag-medium";
  return "tag-hard";
}

function getParam(name) {
  return new URLSearchParams(location.search).get(name);
}

function normalize(str) {
  return String(str).trim().toLowerCase();
}

function renderTaskNav(room) {
  return room.tasks.map((t, i) => {
    const done = isTaskDone(room.id, i);
    return `<a href="#task-${i}" class="${done ? 'done' : ''}">
      <span class="dot">${done ? '✔' : ''}</span> ${i + 1}. ${t.title}
    </a>`;
  }).join("");
}

function renderTask(room, task, index) {
  const done = isTaskDone(room.id, index);
  const hasQuestion = !!task.question;

  const answerSection = hasQuestion ? `
    <div class="answer-box">
      <p><b>${task.question}</b></p>
      <div class="answer-row">
        <input type="text" placeholder="Your answer…" id="input-${index}" ${done ? "disabled" : ""} autocomplete="off">
        <button class="btn btn-primary btn-sm" id="submit-${index}" ${done ? "disabled" : ""}>
          ${done ? "Completed ✔" : "Submit"}
        </button>
      </div>
      ${task.hint ? `<details class="answer-hint"><summary>Need a hint?</summary><p>${task.hint}</p></details>` : ""}
      <p class="answer-feedback hidden" id="feedback-${index}"></p>
    </div>
  ` : `
    <div class="answer-box">
      <button class="btn btn-primary btn-sm" id="submit-${index}" ${done ? "disabled" : ""}>
        ${done ? "Completed ✔" : "Complete Task"}
      </button>
    </div>
  `;

  return `
    <div class="task" id="task-${index}">
      <div class="task-title">
        <h2>${index + 1}. ${task.title}</h2>
        ${task.points ? `<span class="task-points">+${task.points} pts</span>` : `<span class="task-points">—</span>`}
      </div>
      <div class="task-content">${task.content}</div>
      ${answerSection}
    </div>
  `;
}

function refreshHeaderProgress(room) {
  const completed = roomCompletedCount(room);
  const total = room.tasks.length;
  const pct = Math.round((completed / total) * 100);
  const bar = document.getElementById("room-progress-bar");
  const label = document.getElementById("room-progress-label");
  if (bar) bar.style.width = pct + "%";
  if (label) label.textContent = `${completed} / ${total} tasks complete`;

  const pill = document.getElementById("nav-points");
  if (pill) pill.textContent = "⭐ " + totalPoints() + " pts";

  const p = getProgress();
  const levelPill = document.getElementById("nav-level");
  if (levelPill) levelPill.textContent = `Lv.${getLevelInfo(p.points).level} ${getLevelInfo(p.points).title}`;
  const streakPill = document.getElementById("nav-streak");
  if (streakPill) streakPill.textContent = "🔥 " + (p.streak || 0);

  // refresh sidebar dots
  document.querySelectorAll(".task-nav a").forEach((a, i) => {
    if (isTaskDone(room.id, i)) {
      a.classList.add("done");
      a.querySelector(".dot").textContent = "✔";
    }
  });

  if (roomIsComplete(room)) {
    const banner = document.getElementById("room-complete-banner");
    if (banner) banner.style.display = "block";
  }
}

function celebrateCompletion(room, task, index, sourceEl) {
  const beforePoints = totalPoints();
  const beforeLevel = getLevelInfo(beforePoints).level;
  const beforeBadges = earnedBadgeIds(getProgress());
  const wasRoomComplete = roomIsComplete(room);

  markTaskDone(room.id, index, task.points);
  recordActivity();
  markTimeOfDayFlags();

  const rect = sourceEl.getBoundingClientRect();
  burstConfetti(rect.left + rect.width / 2, rect.top + window.scrollY);

  const afterPoints = totalPoints();
  const afterLevel = getLevelInfo(afterPoints).level;
  const afterBadges = earnedBadgeIds(getProgress());

  if (afterLevel > beforeLevel) {
    const info = getLevelInfo(afterPoints);
    showToast(`⬆️ <b>Level up!</b> You're now Level ${info.level} — ${info.title}`, { big: true });
  }

  [...afterBadges].filter(id => !beforeBadges.has(id)).forEach(id => {
    const b = BADGES.find(x => x.id === id);
    if (b) showToast(`🏅 Badge unlocked: <b>${b.name}</b> — ${b.desc}`);
  });

  const nowRoomComplete = roomIsComplete(room);
  if (!wasRoomComplete && nowRoomComplete) {
    const { card, isNew } = awardRandomCard();
    burstConfetti(window.innerWidth / 2, window.innerHeight / 3 + window.scrollY);
    showToast(
      `📜 <b>Codex card ${isNew ? "unlocked" : "drawn again"}!</b><br>
       <span style="color:var(--accent); font-size:0.8rem;">${card.source}</span><br>
       "${card.text}"`,
      { big: true, duration: 6000 }
    );
  }

  refreshHeaderProgress(room);
}

function wireUpTask(room, task, index) {
  const submitBtn = document.getElementById(`submit-${index}`);
  if (!submitBtn) return;

  submitBtn.addEventListener("click", () => {
    if (isTaskDone(room.id, index)) return;

    if (task.question) {
      const input = document.getElementById(`input-${index}`);
      const feedback = document.getElementById(`feedback-${index}`);
      const val = normalize(input.value);
      const correct = normalize(task.answer);

      if (val === correct) {
        const combo = registerCorrectAnswer();
        if (combo > 0 && combo % 5 === 0) {
          showToast(`⚡ <b>Combo x${combo}!</b> You're on fire.`);
        }

        feedback.textContent = "✔ Correct! +" + task.points + " points";
        feedback.className = "answer-feedback correct";
        input.disabled = true;
        submitBtn.disabled = true;
        submitBtn.textContent = "Completed ✔";

        celebrateCompletion(room, task, index, submitBtn);
      } else {
        registerWrongAnswer();
        feedback.textContent = "✘ Not quite — check the task content and try again.";
        feedback.className = "answer-feedback wrong";
        input.classList.remove("shake");
        void input.offsetWidth;
        input.classList.add("shake");
      }
    } else {
      submitBtn.disabled = true;
      submitBtn.textContent = "Completed ✔";
      celebrateCompletion(room, task, index, submitBtn);
    }
  });

  // allow Enter key to submit
  const input = document.getElementById(`input-${index}`);
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") submitBtn.click();
    });
  }
}

function renderRoom(room) {
  document.title = room.title + " — Code&Go";
  document.getElementById("page-title").textContent = room.title + " — Code&Go";

  const completed = roomCompletedCount(room);
  const total = room.tasks.length;
  const pct = Math.round((completed / total) * 100);

  const html = `
    <header class="room-header">
      <div class="container">
        <div class="breadcrumb"><a href="rooms.html">Rooms</a> / ${room.title}</div>
        <h1>${room.icon} ${room.title}</h1>
        <p class="room-sub">${room.description}</p>
        <div class="room-header-meta">
          <span class="tag ${diffClass(room.difficulty)}">${room.difficulty}</span>
          <span class="room-points">${roomTotalPoints(room)} pts available</span>
          <span style="color:var(--text-dim); font-size:0.85rem;">${room.tasks.length} tasks</span>
        </div>
        <div class="room-progress-wrap">
          <div class="room-progress-label">
            <span id="room-progress-label">${completed} / ${total} tasks complete</span>
            <span>${pct}%</span>
          </div>
          <div class="progress-bar"><span id="room-progress-bar" style="width:${pct}%"></span></div>
        </div>
      </div>
    </header>

    <div class="container room-layout">
      <nav class="task-nav">
        ${renderTaskNav(room)}
      </nav>
      <div class="room-tasks">
        ${room.tasks.map((t, i) => renderTask(room, t, i)).join("")}
        <div class="room-complete-banner" id="room-complete-banner" style="${roomIsComplete(room) ? '' : 'display:none;'}">
          <h3>🎉 Room complete!</h3>
          <p>You've finished every task in ${room.title} and revealed a card for your <a href="profile.html">Codex</a>. Nice work — keep going with more rooms.</p>
          <div style="margin-top:14px;">
            <a href="rooms.html" class="btn btn-outline btn-sm">Back to Rooms</a>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("room-root").innerHTML = html;
  room.tasks.forEach((t, i) => wireUpTask(room, t, i));
}

function renderNotFound() {
  document.getElementById("room-root").innerHTML = `
    <section class="section container">
      <div class="empty-state">
        <h2>Room not found</h2>
        <p>That room doesn't exist yet.</p>
        <a href="rooms.html" class="btn btn-primary">Browse all rooms</a>
      </div>
    </section>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const id = getParam("id");
  const room = id ? getRoom(id) : null;
  if (room) {
    renderRoom(room);
  } else {
    renderNotFound();
  }
});
