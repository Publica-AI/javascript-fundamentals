// Module 14 Combined Demo — Asynchronous JavaScript Basics
// Context: Publica Academy live class notification system
// Ties together: sync vs async, setTimeout/setInterval, callbacks
// Run in Node

// ---- Part 1: Execution order — the foundation ----
console.log("--- Part 1: Execution Order ---");

console.log("1. [SYNC]  Class schedule loaded");

setTimeout(function() {
  console.log("2. [ASYNC] Instructor notified (1s delay)");
}, 1000);

setTimeout(function() {
  console.log("3. [ASYNC] Students notified (2s delay)");
}, 2000);

setTimeout(function() {
  console.log("4. [ASYNC] Recording started (0ms — still async!)");
}, 0);

console.log("5. [SYNC]  Dashboard updated");

// Output order: 1 → 5 → 4 → 2 → 3
// All sync first, then async in delay order


// ---- Part 2: Countdown timer with setInterval ----
setTimeout(function() {
  console.log("\n--- Part 2: Class Countdown Timer ---");

  let seconds = 5;

  const timerId = setInterval(function() {
    if (seconds > 0) {
      console.log("Class starts in " + seconds + " second" + (seconds > 1 ? "s" : "") + "...");
      seconds--;
    } else {
      clearInterval(timerId);
      console.log("🎓 Class is now LIVE!");
      runPart3();
    }
  }, 1000);
}, 3000);


// ---- Part 3: Delayed notifications with setTimeout ----
function runPart3() {
  console.log("\n--- Part 3: Timed Notifications ---");

  function notify(recipient, message, delay) {
    setTimeout(function() {
      console.log("[" + delay + "ms] " + recipient + ": " + message);
    }, delay);
  }

  notify("Amara",  "Your class has started!",        500);
  notify("Chidi",  "Your class has started!",        800);
  notify("Funmi",  "Reminder: submit assignment",   1200);
  notify("Gbenga", "New course available",          1500);

  console.log("(All notifications scheduled — executing over next 1.5s)");

  setTimeout(function() {
    runPart4();
  }, 2000);
}


// ---- Part 4: Sequential callbacks — enrolment pipeline ----
function runPart4() {
  console.log("\n--- Part 4: Enrolment Pipeline (Sequential Callbacks) ---");

  function checkSlots(course, callback) {
    setTimeout(function() {
      const available = 3;
      console.log("  ✓ Checked slots: " + available + " available in " + course);
      callback(available);
    }, 600);
  }

  function processPayment(amount, callback) {
    setTimeout(function() {
      console.log("  ✓ Payment processed: ₦" + amount.toLocaleString());
      callback("TXN-" + Date.now());
    }, 600);
  }

  function confirmEnrolment(course, reference, callback) {
    setTimeout(function() {
      console.log("  ✓ Enrolled in " + course + " (Ref: " + reference + ")");
      callback();
    }, 600);
  }

  function sendReceipt(callback) {
    setTimeout(function() {
      console.log("  ✓ Receipt sent to student email");
      callback();
    }, 600);
  }

  // The nested callback chain:
  console.log("  Starting enrolment for Amara → JavaScript Fundamentals...\n");

  checkSlots("JavaScript Fundamentals", function(slots) {
    if (slots > 0) {
      processPayment(15000, function(reference) {
        confirmEnrolment("JavaScript Fundamentals", reference, function() {
          sendReceipt(function() {
            console.log("\n  ✓ Pipeline complete! (4 async steps, nested callbacks)");
            console.log("  Notice: each step waits for the previous one.");
            console.log("  The nesting is 4 levels deep — and growing.\n");
            runPart5();
          });
        });
      });
    }
  });
}


// ---- Part 5: The callback problem visualised ----
function runPart5() {
  console.log("--- Part 5: Why Callbacks Don't Scale ---");
  console.log("");
  console.log("  Callback nesting for N steps:");
  console.log("  ┌─ step1(function() {");
  console.log("  │  ┌─ step2(function() {");
  console.log("  │  │  ┌─ step3(function() {");
  console.log("  │  │  │  ┌─ step4(function() {");
  console.log("  │  │  │  │  ┌─ step5(function() {");
  console.log("  │  │  │  │  │    // ...");
  console.log("  │  │  │  │  └─ });");
  console.log("  │  │  │  └─ });");
  console.log("  │  │  └─ });");
  console.log("  │  └─ });");
  console.log("  └─ });");
  console.log("");
  console.log("  Problems: readability ↓, debugging ↓, extensibility ↓");
  console.log("  Solution: Promises + async/await (Module 16)");
  console.log("");
  console.log("--- Module 14 Demo Complete ---");
}
