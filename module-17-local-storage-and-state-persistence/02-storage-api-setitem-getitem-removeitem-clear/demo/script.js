// Module 17, Topic 2 Demo — Storage API Methods
// Context: Publica Academy user preferences
// Open in browser console (localStorage is browser-only)

console.log("--- Module 17, Topic 2: Storage API ---");
console.log("Run each section in the browser console.\n");

// ---- Part 1: setItem and getItem ----
console.log("--- Part 1: setItem & getItem ---");

localStorage.setItem("student_name", "Amara Obi");
localStorage.setItem("student_email", "amara@publica.ng");
localStorage.setItem("theme", "dark");
localStorage.setItem("language", "en");

console.log("Name:", localStorage.getItem("student_name"));
console.log("Email:", localStorage.getItem("student_email"));
console.log("Theme:", localStorage.getItem("theme"));

// Missing key returns null
console.log("Missing:", localStorage.getItem("nonexistent"));


// ---- Part 2: Overwriting values ----
console.log("\n--- Part 2: Overwriting ---");

console.log("Before:", localStorage.getItem("theme"));  // "dark"
localStorage.setItem("theme", "light");
console.log("After:", localStorage.getItem("theme"));   // "light"


// ---- Part 3: removeItem and clear ----
console.log("\n--- Part 3: removeItem & clear ---");

console.log("Before remove - language:", localStorage.getItem("language"));
localStorage.removeItem("language");
console.log("After remove - language:", localStorage.getItem("language"));  // null

console.log("Total keys:", localStorage.length);


// ---- Part 4: Iterating with length and key() ----
console.log("\n--- Part 4: Iterating Storage ---");

console.log("All stored items:");
for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);
  console.log("  " + key + " → " + localStorage.getItem(key));
}


// ---- Part 5: The strings-only problem ----
console.log("\n--- Part 5: Strings Only! ---");

localStorage.setItem("score", 88);
console.log("Score:", localStorage.getItem("score"));
console.log("Type:", typeof localStorage.getItem("score"));  // "string"

localStorage.setItem("enrolled", true);
console.log("Enrolled:", localStorage.getItem("enrolled"));  // "true" (string!)

// The bug:
localStorage.setItem("user_object", { name: "Amara", score: 88 });
console.log("Object:", localStorage.getItem("user_object"));  // "[object Object]" — DATA LOST!

// The fix (preview for Topic 3):
localStorage.setItem("user_json", JSON.stringify({ name: "Amara", score: 88 }));
console.log("JSON:", localStorage.getItem("user_json"));
console.log("Parsed:", JSON.parse(localStorage.getItem("user_json")));

console.log("\n--- Demo complete. Check Application tab in DevTools! ---");
