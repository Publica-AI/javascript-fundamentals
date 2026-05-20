// Module 11, Topic 1 Demo — Adding Event Listeners
// Context: Publica Academy enrolment form
// Run in browser with index.html open

// ---- Part 1: Basic click listener ----
console.log("--- Part 1: Basic click Listener ---");

const enrollBtn = document.getElementById("enroll-btn");
const status    = document.getElementById("status");

function handleEnroll() {
  status.textContent = "Enrolled in JavaScript Fundamentals!";
  enrollBtn.disabled = true;
  console.log("Enrolled!");
}

enrollBtn.addEventListener("click", handleEnroll);

// Reference vs call — show the contrast in console
console.log("typeof handleEnroll:", typeof handleEnroll);        // function
console.log("typeof handleEnroll():", typeof handleEnroll());    // string (return value)
// Note: the second line actually calls handleEnroll — watch status update!


// ---- Part 2: input event — live preview ----
console.log("--- Part 2: input Event — Live Preview ---");

const nameInput = document.getElementById("name-input");
const preview   = document.getElementById("preview");
const counter   = document.getElementById("counter");

nameInput.addEventListener("input", () => {
  preview.textContent = "Preview: " + nameInput.value;
  counter.textContent = "Characters: " + nameInput.value.length;
});


// ---- Part 3: change event ----
console.log("--- Part 3: change Event ---");

const emailInput = document.getElementById("email-input");

emailInput.addEventListener("change", () => {
  console.log("Email entered:", emailInput.value);
});


// ---- Part 4: once:true option ----
console.log("--- Part 4: { once: true } ---");

// Create a temporary test button in the console to demonstrate
// In class: show that this fires only once by clicking the button twice
enrollBtn.disabled = false;  // re-enable for demonstration

function handleOnce() {
  console.log("Fired once — listener auto-removed");
  status.textContent = "Enrolled once!";
}

// Remove the previous permanent listener and add a once listener
enrollBtn.removeEventListener("click", handleEnroll);
enrollBtn.addEventListener("click", handleOnce, { once: true });
// After first click, clicking again does nothing
