// Module 11, Topic 2 Demo — The Event Object and Event Types
// Context: Publica Academy course catalogue and enrolment form
// Run in browser with index.html open

// ---- Part 1: event.target — event delegation on course list ----
console.log("--- Part 1: event.target + Event Delegation ---");

const courseList = document.getElementById("course-list");
const selected   = document.getElementById("selected");

courseList.addEventListener("click", (e) => {
  // e.target is the specific <li> that was clicked
  const course = e.target.getAttribute("data-course");
  const name   = e.target.textContent;

  console.log("Event type:", e.type);       // click
  console.log("Target element:", e.target); // the <li> element
  console.log("Target id:", e.target.id);   // "" (li has no id)
  console.log("Course code:", course);      // js / html / git

  selected.textContent = "Selected: " + name + " (" + course + ")";
});


// ---- Part 2: Keyboard events — Enter and Escape ----
console.log("--- Part 2: Keyboard Events ---");

const searchInput  = document.getElementById("search-input");
const searchResult = document.getElementById("search-result");

searchInput.addEventListener("keydown", (e) => {
  console.log("Key:", e.key);

  if (e.key === "Enter") {
    searchResult.textContent = "Searching for: " + searchInput.value;
  }

  if (e.key === "Escape") {
    searchInput.value = "";
    searchResult.textContent = "Search cleared";
  }
});


// ---- Part 3: preventDefault on form submit ----
console.log("--- Part 3: preventDefault on Form Submit ---");

const enrolForm  = document.getElementById("enrol-form");
const emailInput = document.getElementById("email-input");
const formStatus = document.getElementById("form-status");

enrolForm.addEventListener("submit", (e) => {
  e.preventDefault();  // stop page reload — MUST be first

  const email = emailInput.value.trim();
  console.log("Form submit event type:", e.type);  // submit
  console.log("Email entered:", email);

  if (!email) {
    formStatus.textContent = "Please enter an email address.";
    formStatus.style.color = "red";
    return;
  }

  formStatus.textContent = "Enrolling " + email + " in JavaScript Fundamentals...";
  formStatus.style.color = "green";
  emailInput.value = "";
});


// ---- Part 4: Modifier keys ----
console.log("--- Part 4: Modifier Keys ---");

// Listen on document — fires for any keydown anywhere on the page
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "k") {
    e.preventDefault();  // prevent browser default for Ctrl+K
    searchInput.focus();
    console.log("Ctrl+K: search focused");
  }
});

console.log("Press Ctrl+K anywhere on the page to focus the search field");
