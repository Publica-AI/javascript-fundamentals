// Module 11 Combined Demo — DOM Events
// Context: Publica Academy learning dashboard
// Covers: addEventListener, event object, e.target, keydown, preventDefault,
//         createElement, remove, innerHTML with map/join

// ---- Setup: course data ----
const allCourses = [
  { id: "js",   title: "JavaScript Fundamentals", price: 15000 },
  { id: "html", title: "HTML & CSS Basics",        price: 12000 },
  { id: "git",  title: "Git & GitHub",             price: 10000 },
  { id: "db",   title: "Intro to Databases",       price: 18000 },
  { id: "ai",   title: "Intro to AI",              price: 20000 }
];


// ---- Part 1: addEventListener + DOM modification ----
console.log("=== Part 1: addEventListener + DOM Modification ===");

const welcomeMsg = document.getElementById("welcome-msg");

// Show welcome message when page loads
welcomeMsg.textContent = "Welcome back, Amara! You have 3 active courses.";
welcomeMsg.classList.remove("hidden");


// ---- Part 2: createElement — learning goals list ----
console.log("\n=== Part 2: createElement + Delete with Closure ===");

const goalInput   = document.getElementById("goal-input");
const goalAddBtn  = document.getElementById("goal-add-btn");
const goalList    = document.getElementById("goal-list");
const goalCount   = document.getElementById("goal-count");

function updateCount() {
  goalCount.textContent = "Goals: " + goalList.children.length;
}

goalAddBtn.addEventListener("click", () => {
  const text = goalInput.value.trim();
  if (!text) return;

  // Create list item
  const li       = document.createElement("li");
  const span     = document.createElement("span");
  const doneBtn  = document.createElement("button");
  const delBtn   = document.createElement("button");

  span.textContent  = text;
  span.className    = "goal-text";

  doneBtn.textContent = "Done";
  doneBtn.className   = "btn btn-sm btn-primary";
  doneBtn.addEventListener("click", () => {
    span.classList.toggle("done");
    console.log("Toggled done:", text);
  });

  delBtn.textContent = "×";
  delBtn.className   = "btn btn-sm btn-danger";
  delBtn.style.marginLeft = "4px";
  delBtn.addEventListener("click", () => {
    li.remove();
    updateCount();
    console.log("Removed goal:", text);
  });

  li.appendChild(span);
  li.appendChild(doneBtn);
  li.appendChild(delBtn);
  goalList.appendChild(li);

  goalInput.value = "";
  updateCount();
  console.log("Added goal:", text);
});


// ---- Part 3: keydown + search with innerHTML ----
console.log("\n=== Part 3: keydown + Search Results ===");

const searchInput   = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

function renderResults(query) {
  if (!query) {
    searchResults.innerHTML = "";
    return;
  }

  const matches = allCourses.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );

  if (matches.length === 0) {
    searchResults.innerHTML = "<p>No courses found for '" + query + "'</p>";
    return;
  }

  searchResults.innerHTML = matches.map(c => `
    <div class="result-item" data-id="${c.id}">
      <strong>${c.title}</strong> — ₦${c.price.toLocaleString()}
    </div>
  `).join("");

  console.log("Found:", matches.length, "results for '" + query + "'");
}

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    renderResults(searchInput.value.trim());
  }
  if (e.key === "Escape") {
    searchInput.value = "";
    searchResults.innerHTML = "";
  }
});

// Event delegation on results
searchResults.addEventListener("click", (e) => {
  const item = e.target.closest(".result-item");
  if (!item) return;
  const id = item.getAttribute("data-id");
  console.log("Selected course:", id);
  document.getElementById("enrol-name").focus();
});


// ---- Part 4: form submit with preventDefault ----
console.log("\n=== Part 4: Form Submit + preventDefault ===");

const enrolForm   = document.getElementById("enrol-form");
const enrolName   = document.getElementById("enrol-name");
const enrolEmail  = document.getElementById("enrol-email");
const enrolStatus = document.getElementById("enrol-status");

enrolForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name  = enrolName.value.trim();
  const email = enrolEmail.value.trim();

  console.log("Form submitted — name:", name, "email:", email);

  if (!name || !email) {
    enrolStatus.className = "alert";
    enrolStatus.textContent = "Please fill in both name and email.";
    enrolStatus.classList.remove("hidden");
    return;
  }

  enrolStatus.className = "success";
  enrolStatus.textContent = "Enrolment confirmed for " + name + " (" + email + ")!";
  enrolStatus.classList.remove("hidden");

  enrolForm.reset();
  console.log("Enrolled:", name, email);
});
