// Module 17 Combined Demo — Publica Study Tracker
// Ties together: localStorage, sessionStorage, JSON stringify/parse, DOM events
// Open index.html in browser

// ---- Load persisted state ----
var goals = JSON.parse(localStorage.getItem("study_goals")) || [];
var theme = localStorage.getItem("theme") || "light";
var visits = Number(localStorage.getItem("visit_count")) || 0;

// Increment visit count (persists permanently)
visits++;
localStorage.setItem("visit_count", String(visits));

// Track session page loads (temporary)
var sessionLoads = Number(sessionStorage.getItem("session_loads")) || 0;
sessionLoads++;
sessionStorage.setItem("session_loads", String(sessionLoads));

// ---- Save helpers ----
function saveGoals() {
  localStorage.setItem("study_goals", JSON.stringify(goals));
}

function saveTheme() {
  localStorage.setItem("theme", theme);
}

// ---- Render functions ----
function renderGoals() {
  var list = document.querySelector("#goal-list");

  if (goals.length === 0) {
    list.innerHTML = '<li class="empty">No goals yet. Add one above!</li>';
  } else {
    list.innerHTML = goals.map(function(goal) {
      return '<li class="goal-item' + (goal.done ? " done" : "") + '">' +
        '<input type="checkbox"' + (goal.done ? " checked" : "") + ' data-id="' + goal.id + '">' +
        '<span class="goal-text">' + goal.text + '</span>' +
        '<button class="btn-danger btn-sm" data-delete="' + goal.id + '">Delete</button>' +
        '</li>';
    }).join("");
  }

  updateStats();
}

function updateStats() {
  var done = goals.filter(function(g) { return g.done; }).length;
  document.querySelector("#stat-total").textContent = goals.length;
  document.querySelector("#stat-done").textContent = done;
  document.querySelector("#stat-visits").textContent = visits;
}

function applyTheme() {
  document.body.className = theme;
}

// ---- Event handlers ----

// Add goal
document.querySelector("#btn-add").addEventListener("click", function() {
  var input = document.querySelector("#input-goal");
  var text = input.value.trim();
  if (!text) return;

  goals.push({ id: Date.now(), text: text, done: false });
  saveGoals();
  renderGoals();
  input.value = "";
});

// Enter key to add
document.querySelector("#input-goal").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    document.querySelector("#btn-add").click();
  }
});

// Toggle and delete via event delegation
document.querySelector("#goal-list").addEventListener("click", function(e) {
  // Toggle checkbox
  if (e.target.type === "checkbox") {
    var id = Number(e.target.dataset.id);
    var goal = goals.find(function(g) { return g.id === id; });
    if (goal) {
      goal.done = !goal.done;
      saveGoals();
      renderGoals();
    }
  }

  // Delete button
  if (e.target.dataset.delete) {
    var deleteId = Number(e.target.dataset.delete);
    goals = goals.filter(function(g) { return g.id !== deleteId; });
    saveGoals();
    renderGoals();
  }
});

// Clear all
document.querySelector("#btn-clear").addEventListener("click", function() {
  if (goals.length === 0) return;
  goals = [];
  saveGoals();
  renderGoals();
});

// Theme toggle
document.querySelector("#btn-theme").addEventListener("click", function() {
  theme = theme === "light" ? "dark" : "light";
  saveTheme();
  applyTheme();
});

// ---- Initial render ----
applyTheme();
renderGoals();

console.log("--- Publica Study Tracker ---");
console.log("Visit #" + visits + " (total lifetime)");
console.log("Session page loads: " + sessionLoads);
console.log("Goals loaded:", goals.length);
console.log("Theme:", theme);
console.log("");
console.log("Try: add goals, toggle them, refresh the page — they persist!");
console.log("Try: change theme, refresh — it persists!");
console.log("Try: close the tab and reopen — goals + theme persist, session resets!");
