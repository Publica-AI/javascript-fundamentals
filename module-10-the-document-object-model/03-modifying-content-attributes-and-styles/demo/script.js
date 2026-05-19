// Module 10, Topic 3 Demo — Modifying Content, Attributes, and Styles
// Context: Publica Academy course card
// Run in browser with index.html open

// ---- Part 1: textContent vs innerHTML ----
console.log("--- Part 1: textContent vs innerHTML ---");

const greeting = document.getElementById("greeting");
const status = document.getElementById("status");
const cardTitle = document.getElementById("card-title");

// textContent — plain text, no HTML parsing
greeting.textContent = "Welcome, Amara!";
status.textContent = "Enrolled in JavaScript Fundamentals";

// innerHTML — HTML tags are parsed and rendered
cardTitle.innerHTML = "<em>JavaScript Fundamentals</em> — Module 10";

// Reading back
console.log(greeting.textContent);   // Welcome, Amara!
console.log(cardTitle.innerHTML);    // <em>JavaScript Fundamentals</em> — Module 10


// ---- Part 2: Attributes ----
console.log("--- Part 2: Attributes ---");

const img = document.getElementById("course-img");
const link = document.getElementById("enroll-link");
const btn = document.getElementById("enroll-btn");

// Read
console.log("Current src:", img.getAttribute("src"));    // placeholder.jpg
console.log("Current href:", link.getAttribute("href")); // /enroll

// Set
img.setAttribute("src", "https://via.placeholder.com/200x120?text=JS+Course");
img.setAttribute("alt", "JavaScript Fundamentals course cover");
link.setAttribute("href", "/courses/javascript-fundamentals");

// Direct property shortcut
link.href = "/courses/javascript-fundamentals";  // equivalent to setAttribute

// Disable a button
btn.disabled = true;
console.log("Button disabled:", btn.disabled);  // true


// ---- Part 3: classList ----
console.log("--- Part 3: classList ---");

const alertBox = document.getElementById("alert-box");
const card = document.getElementById("course-card");

// Show the hidden alert
alertBox.classList.remove("hidden");
console.log("Alert visible:", !alertBox.classList.contains("hidden")); // true

// Toggle it back
alertBox.classList.toggle("hidden");
console.log("Alert hidden again:", alertBox.classList.contains("hidden")); // true

// Add a highlight class to the card
card.classList.add("highlight");
console.log("Card classes:", card.className);  // course-card highlight

// Check
console.log("Has highlight?", card.classList.contains("highlight")); // true


// ---- Part 4: Inline styles ----
console.log("--- Part 4: Inline Styles ---");

const price = document.getElementById("card-price");

// Set styles (camelCase for hyphenated CSS names)
price.style.color = "navy";
price.style.fontWeight = "bold";
price.style.fontSize = "1.5rem";

greeting.style.color = "navy";
greeting.style.borderBottom = "2px solid navy";
greeting.style.paddingBottom = "8px";

console.log("Price color:", price.style.color);  // navy

// Remove a style
price.style.fontSize = "";  // removes the inline value
console.log("Font size removed:", price.style.fontSize);  // ""
