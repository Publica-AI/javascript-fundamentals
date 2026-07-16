// Module 16, Topic 4 Demo — try/catch & Parallel Operations
// Context: Publica Academy dashboard loading
// Run in Node 18+ or browser

// ---- Part 1: try/catch with async/await ----
console.log("--- Part 1: try/catch Error Handling ---");

async function loadUser(id) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const user = await response.json();
    console.log("  ✓ Loaded:", user.name, "—", user.email);
  } catch (error) {
    console.log("  ✗ Failed:", error.message);
  }
}

async function part1() {
  await loadUser(1);      // ✓ success
  await loadUser(9999);   // ✗ 404
  await loadUser(3);      // ✓ success
}

part1();


// ---- Part 2: Sequential vs Parallel timing ----
setTimeout(async function() {
  console.log("\n--- Part 2: Sequential (Slow) ---");
  console.time("  Sequential");

  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json());
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json());
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(r => r.json());

  console.timeEnd("  Sequential");
  console.log("  Users:", users.length, "| Posts:", posts.length, "| Todos:", todos.length);
}, 3000);


setTimeout(async function() {
  console.log("\n--- Part 3: Parallel (Fast) ---");
  console.time("  Parallel");

  const [users, posts, todos] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/todos").then(r => r.json())
  ]);

  console.timeEnd("  Parallel");
  console.log("  Users:", users.length, "| Posts:", posts.length, "| Todos:", todos.length);
}, 6000);


// ---- Part 4: Promise.all fail-fast ----
setTimeout(async function() {
  console.log("\n--- Part 4: Promise.all Fail-Fast ---");

  try {
    const [users, bad] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/users/9999").then(function(r) {
        if (!r.ok) throw new Error("User not found: " + r.status);
        return r.json();
      })
    ]);
    console.log("  This won't run");
  } catch (error) {
    console.log("  ✗ Promise.all rejected:", error.message);
    console.log("  (If ANY Promise fails, the whole batch fails)");
  }
}, 8500);


// ---- Part 5: Mixed sequential + parallel ----
setTimeout(async function() {
  console.log("\n--- Part 5: Mixed Sequential + Parallel ---");

  try {
    // Sequential: need the user first
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    console.log("  Got user:", user.name);

    // Parallel: user's posts and todos are independent
    const [posts, todos] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts?userId=" + user.id).then(r => r.json()),
      fetch("https://jsonplaceholder.typicode.com/todos?userId=" + user.id).then(r => r.json())
    ]);

    console.log("  Posts:", posts.length, "| Todos:", todos.length);
    console.log("  (User fetched first, then posts + todos in parallel)");
  } catch (error) {
    console.log("  ✗ Error:", error.message);
  }
}, 10500);
