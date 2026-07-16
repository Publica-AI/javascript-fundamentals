// Module 16, Topic 3 Demo — async Functions & the await Keyword
// Context: Publica Academy data loading
// Run in Node 18+ or browser

// ---- Part 1: Basic async/await ----
console.log("--- Part 1: Basic async/await ---");

async function loadUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();
  console.log("User:", user.name, "—", user.email);
}

loadUser();
console.log("(This runs BEFORE the user loads — async is non-blocking!)\n");


// ---- Part 2: Execution order proof ----
async function orderDemo() {
  console.log("--- Part 2: Execution Order ---");
  console.log("A — Before first await");

  const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
  console.log("B — After first await");

  const user = await response.json();
  console.log("C — User:", user.name);
}

setTimeout(function() {
  orderDemo();
  console.log("D — After calling orderDemo (runs before B and C)");
}, 1500);


// ---- Part 3: Refactored from .then() ----
setTimeout(async function() {
  console.log("\n--- Part 3: Refactored from .then() ---");

  // This is the Module 15 pattern rewritten with async/await:
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("HTTP " + response.status);
  }

  const users = await response.json();

  console.log(users.length + " users loaded");

  // Use array methods on the result — same as before
  const names = users.map(function(u) { return u.name; });
  console.log("First 3:", names.slice(0, 3).join(", "));

  const emails = users.filter(function(u) {
    return u.email.includes(".org");
  });
  console.log("Org emails:", emails.length);
}, 3500);


// ---- Part 4: async functions always return a Promise ----
setTimeout(async function() {
  console.log("\n--- Part 4: async Always Returns a Promise ---");

  async function getCourseName() {
    return "JavaScript Fundamentals";
  }

  const result = getCourseName();
  console.log("Direct call:", result);  // Promise { "JavaScript Fundamentals" }

  const name = await getCourseName();
  console.log("Awaited:", name);  // "JavaScript Fundamentals"

  // Chaining async functions
  async function getStudent() {
    return { name: "Amara Obi", score: 88 };
  }

  async function getGrade(student) {
    return student.score >= 70 ? "Pass" : "Fail";
  }

  const student = await getStudent();
  const grade   = await getGrade(student);
  console.log(student.name + ": " + grade);
}, 5500);
