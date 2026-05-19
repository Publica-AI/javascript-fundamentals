// Module 10, Topic 2 Demo — Selecting Elements
// Context: Publica Academy course catalogue page
// Run in browser with index.html open

// ---- Part 1: getElementById vs querySelector ----
console.log("--- Part 1: getElementById vs querySelector ---");

// getElementById — fastest, for unique ids
const pageTitle = document.getElementById("page-title");
console.log(pageTitle.textContent);   // Publica Academy

// querySelector — first match
const firstCard = document.querySelector(".course-card");
console.log(firstCard.tagName);       // DIV

// querySelector with nested selector
const firstCardTitle = document.querySelector(".course-card .card-title");
console.log(firstCardTitle.textContent);  // JavaScript Fundamentals


// ---- Part 2: querySelectorAll and NodeList ----
console.log("--- Part 2: querySelectorAll + NodeList ---");

const allCards = document.querySelectorAll(".course-card");
console.log("Card count:", allCards.length);   // 3

// Index access
console.log(allCards[0].querySelector(".card-title").textContent);  // JavaScript Fundamentals
console.log(allCards[2].querySelector(".card-title").textContent);  // Git & GitHub

// forEach on NodeList
console.log("All course titles:");
allCards.forEach(card => {
  const title = card.querySelector(".card-title");
  console.log("  " + title.textContent);
});


// ---- Part 3: Array.from for map/filter ----
console.log("--- Part 3: Array.from for Array Methods ---");

const priceNodes = document.querySelectorAll(".card-price");

// NodeList — forEach works
priceNodes.forEach(p => console.log(p.textContent));

// Array.from — now we can use map
const prices = Array.from(priceNodes).map(p => p.textContent);
console.log("Prices array:", prices);


// ---- Part 4: null — what a failed selection looks like ----
console.log("--- Part 4: null from a Failed Selection ---");

const missing = document.getElementById("does-not-exist");
console.log("Missing element:", missing);   // null

// Safe access before using
if (missing !== null) {
  console.log(missing.textContent);
} else {
  console.log("Element not found — skipping");
}

// Module list items via querySelectorAll
const moduleItems = document.querySelectorAll(".module-item");
console.log("Module count:", moduleItems.length);  // 3
for (const item of moduleItems) {
  console.log(item.textContent);
}
