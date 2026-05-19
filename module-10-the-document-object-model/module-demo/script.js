// Module 10 Combined Demo — The Document Object Model
// Context: Publica Academy course enrolment page
// Covers: DOM tree, selecting elements, modifying content, attributes, classList, styles

// ---- Setup: course data ----
const course = {
  title:        "JavaScript Fundamentals",
  price:        15000,
  totalSpots:   50,
  takenSpots:   47,
  link:         "/courses/javascript-fundamentals",
  studentName:  "Amara Obi"
};


// ---- Part 1: Select elements and read the DOM ----
console.log("=== Part 1: Select and Read ===");

const pageHeading  = document.getElementById("page-heading");
const courseTitle  = document.getElementById("course-title");
const coursePrice  = document.getElementById("course-price");
const enrollBtn    = document.getElementById("enroll-btn");
const courseLink   = document.getElementById("course-link");

// Read existing content before any changes
console.log("Heading:", pageHeading.textContent);   // Publica Academy
console.log("Title:", courseTitle.textContent);      // JavaScript Fundamentals
console.log("Button tag:", enrollBtn.tagName);       // BUTTON


// ---- Part 2: Update content from data ----
console.log("\n=== Part 2: Update Content from Data ===");

// textContent for plain text
courseTitle.textContent = course.title;
coursePrice.textContent = "₦" + course.price.toLocaleString();

const remaining = course.totalSpots - course.takenSpots;
document.getElementById("enrolment-info").textContent =
  remaining + " of " + course.totalSpots + " spots remaining";

// innerHTML for mixed content (trusted data, not user input)
pageHeading.innerHTML = "Publica Academy <small style='font-size:0.6em;color:#666'>— Beta</small>";

console.log("Price updated:", coursePrice.textContent);   // ₦15,000
console.log("Spots remaining:", remaining);               // 3


// ---- Part 3: Modify attributes ----
console.log("\n=== Part 3: Modify Attributes ===");

// Update the enrolment link to the full URL
courseLink.setAttribute("href", course.link);
console.log("Link href:", courseLink.getAttribute("href"));

// Progress bar — set width as inline style (calculated value)
const progressPct = Math.round((course.takenSpots / course.totalSpots) * 100);
const progressFill = document.getElementById("progress-fill");
progressFill.style.width = progressPct + "%";
console.log("Progress:", progressPct + "%");   // 94%


// ---- Part 4: classList — show alert, toggle states ----
console.log("\n=== Part 4: classList — Show Alert and Toggle State ===");

const alertBox = document.getElementById("alert-box");
const alertMsg = document.getElementById("alert-message");
const badge    = document.getElementById("status-badge");

// Show an alert
alertMsg.textContent = "Only " + remaining + " spots left — enrol today!";
alertBox.classList.remove("hidden");
console.log("Alert visible:", !alertBox.classList.contains("hidden"));  // true

// Simulate course closing — toggle badge
badge.textContent = "Enrolment Closing Soon";
badge.classList.remove("badge-active");
badge.classList.add("badge-closed");

// Highlight the card
document.getElementById("course-card").classList.add("highlight");
console.log("Card classes:", document.getElementById("course-card").className);


// ---- Part 5: Simulate enrolment — update multiple elements ----
console.log("\n=== Part 5: Simulate Enrolment ===");

// Disable the button and update its text
enrollBtn.disabled = true;
enrollBtn.textContent = "Enrolled!";
enrollBtn.classList.remove("btn-primary");
enrollBtn.classList.add("btn-disabled");

// Update status badge
badge.textContent = "Enrolled";
badge.classList.remove("badge-closed");
badge.classList.add("badge-active");

// Show confirmation section
const confirmation = document.getElementById("confirmation");
const confirmMsg   = document.getElementById("confirmation-message");

confirmMsg.textContent =
  "Welcome, " + course.studentName + "! You are enrolled in " + course.title + ".";
confirmation.classList.remove("hidden");

// Hide the alert
alertBox.classList.add("hidden");

console.log("Button disabled:", enrollBtn.disabled);       // true
console.log("Confirmation visible:", !confirmation.classList.contains("hidden")); // true
