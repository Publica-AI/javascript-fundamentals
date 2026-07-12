// Module 16, Topic 2 Demo — .then(), .catch() & Chaining Promises
// Context: Publica Academy enrolment pipeline
// Run in Node 18+ or browser

// Helper
function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

// ---- Part 1: .then() returns a new Promise ----
console.log("--- Part 1: .then() Chaining ---");

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(function(response) {
    console.log("Step 1 — Got response:", response.status);
    return response.json();
  })
  .then(function(user) {
    console.log("Step 2 — Name:", user.name);
    return user.name.toUpperCase();
  })
  .then(function(upper) {
    console.log("Step 3 — Uppercased:", upper);
    return upper.split(" ");
  })
  .then(function(parts) {
    console.log("Step 4 — Split:", parts);
  });


// ---- Part 2: Sequential async with flat chain ----
setTimeout(function() {
  console.log("\n--- Part 2: Sequential Async (Flat) ---");

  function verify(name) {
    return delay(800).then(function() {
      console.log("  ✓ Verified: " + name);
      return name;
    });
  }

  function processPayment(name) {
    return delay(800).then(function() {
      console.log("  ✓ Payment processed for " + name);
      return "TXN-" + Date.now();
    });
  }

  function grantAccess(ref) {
    return delay(800).then(function() {
      console.log("  ✓ Access granted (ref: " + ref + ")");
      return "Enrolled";
    });
  }

  verify("Amara Obi")
    .then(function(name) { return processPayment(name); })
    .then(function(ref) { return grantAccess(ref); })
    .then(function(status) {
      console.log("  Done! Status: " + status);
    });
}, 2000);


// ---- Part 3: .catch() handles any error in the chain ----
setTimeout(function() {
  console.log("\n--- Part 3: .catch() Catches Any Error ---");

  delay(500)
    .then(function() {
      console.log("  Step 1: OK");
      return delay(500);
    })
    .then(function() {
      console.log("  Step 2: OK");
      throw new Error("Something broke at step 3!");
    })
    .then(function() {
      console.log("  Step 3: This NEVER runs");
    })
    .then(function() {
      console.log("  Step 4: This NEVER runs either");
    })
    .catch(function(error) {
      console.log("  Caught: " + error.message);
      console.log("  (Steps 3 and 4 were skipped)");
    });
}, 5500);


// ---- Part 4: The "forgot to return" bug ----
setTimeout(function() {
  console.log("\n--- Part 4: Forgot Return Bug ---");

  // BAD — no return
  console.log("  Without return:");
  delay(100)
    .then(function() {
      delay(100);  // no return — lost
    })
    .then(function(result) {
      console.log("  Result:", result);  // undefined!
    });

  // GOOD — with return
  setTimeout(function() {
    console.log("  With return:");
    delay(100)
      .then(function() {
        return delay(100).then(function() { return "value from chain"; });
      })
      .then(function(result) {
        console.log("  Result:", result);  // "value from chain"
      });
  }, 500);
}, 8000);
