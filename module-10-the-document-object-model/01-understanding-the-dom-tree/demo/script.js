// Module 10, Topic 1 Demo — Understanding the DOM Tree
// Context: Publica Academy course page
// Run in browser with index.html open

// ---- Part 1: The document object ----
console.log("--- Part 1: The document Object ---");

console.log(document.title);        // Publica Academy
console.log(document.body);         // <body> element
console.log(typeof document);       // object
console.log(typeof document.body);  // object


// ---- Part 2: Reading basic element properties ----
console.log("--- Part 2: Reading Element Properties ---");

const heading = document.getElementById("page-title");

console.log(heading.tagName);       // H1
console.log(heading.id);            // page-title
console.log(heading.className);     // main-heading
console.log(heading.textContent);   // Welcome to Publica Academy


// ---- Part 3: Navigating the tree ----
console.log("--- Part 3: Navigating the Tree ---");

// Parent → child direction
console.log(document.body.children.length);    // number of direct children

// Using querySelector (preview of Topic 2)
const intro = document.querySelector(".intro");
console.log(intro.textContent);     // JavaScript Fundamentals

// Access a list item by index
const listItems = document.querySelectorAll("li");
console.log(listItems[0].textContent);   // Module 1
console.log(listItems.length);           // 2


// ---- Part 4: Script placement — what null looks like ----
console.log("--- Part 4: Why Script Position Matters ---");

// This element exists because the script is at the bottom of body
const subtitle = document.getElementById("subtitle");
console.log(subtitle);                    // <p id="subtitle">...</p>
console.log(subtitle.textContent);        // JavaScript Fundamentals

// If the script were in the <head>, subtitle would be null here
// console.log(null.textContent);  // TypeError: Cannot read properties of null
