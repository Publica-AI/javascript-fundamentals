// Module 14, Topic 1 Demo — Synchronous vs Asynchronous Execution
// Context: Understanding execution order in JavaScript
// Run in Node

// ---- Part 1: Synchronous execution ----
console.log("--- Part 1: Synchronous Execution ---");

console.log("Step 1: Check enrolment status");
console.log("Step 2: Process payment");
console.log("Step 3: Send confirmation email");
console.log("Step 4: Update dashboard");

// Output is always in order: 1, 2, 3, 4
// Each line waits for the previous one to finish


// ---- Part 2: The output order surprise ----
console.log("\n--- Part 2: Async Output Order ---");

console.log("A — Start");

setTimeout(function() {
  console.log("B — Delayed task (0ms)");
}, 0);

console.log("C — End");

// Ask students to predict BEFORE running
// Output: A → C → B  (NOT A → B → C!)


// ---- Part 3: Multiple timeouts ----
console.log("\n--- Part 3: Multiple Timeouts ---");

console.log("1 — Synchronous first");

setTimeout(function() {
  console.log("2 — setTimeout 100ms");
}, 100);

setTimeout(function() {
  console.log("3 — setTimeout 0ms");
}, 0);

setTimeout(function() {
  console.log("4 — setTimeout 50ms");
}, 50);

console.log("5 — Synchronous last");

// Output: 1 → 5 → 3 → 4 → 2
// All sync code runs first, then callbacks in timer order


// ---- Part 4: Blocking demonstration ----
console.log("\n--- Part 4: Blocking vs Non-Blocking ---");

function simulateBlockingWork() {
  const start = Date.now();
  // Simulate a 2-second blocking operation
  while (Date.now() - start < 2000) {
    // busy waiting — blocks the thread
  }
  return "Done after 2 seconds of blocking";
}

console.log("Before blocking work");

setTimeout(function() {
  console.log("This callback was scheduled before the blocking work!");
}, 0);

console.log(simulateBlockingWork());
// The setTimeout callback waits until the blocking loop finishes
// even though it was scheduled with 0ms delay

console.log("After blocking work");
// The 0ms setTimeout callback runs AFTER all of this
