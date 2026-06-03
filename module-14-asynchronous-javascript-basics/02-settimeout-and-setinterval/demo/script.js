// Module 14, Topic 2 Demo — setTimeout & setInterval
// Context: Publica Academy notification and countdown systems
// Run in Node

// ---- Part 1: setTimeout basics ----
console.log("--- Part 1: setTimeout ---");

console.log("Enrolment submitted!");

setTimeout(function() {
  console.log("✓ Confirmation email sent (after 2s)");
}, 2000);

setTimeout(function() {
  console.log("✓ Welcome pack prepared (after 3s)");
}, 3000);

console.log("You can continue browsing courses...");

// Output order: submitted → browsing → email (2s) → welcome (3s)


// ---- Part 2: clearTimeout ----
setTimeout(function() {
  console.log("\n--- Part 2: clearTimeout ---");

  const reminderId = setTimeout(function() {
    console.log("Reminder: Complete your profile!");
  }, 2000);

  console.log("Reminder scheduled (ID:", reminderId + ")");

  // Simulate user completing profile before reminder fires
  setTimeout(function() {
    clearTimeout(reminderId);
    console.log("Profile completed — reminder cancelled.");
  }, 1000);
}, 4000);


// ---- Part 3: setInterval countdown ----
setTimeout(function() {
  console.log("\n--- Part 3: setInterval Countdown ---");

  let seconds = 5;

  const countdownId = setInterval(function() {
    if (seconds > 0) {
      console.log("Starting class in " + seconds + "...");
      seconds--;
    } else {
      console.log("Class started! Welcome.");
      clearInterval(countdownId);

      // Continue to Part 4 after countdown
      runPart4();
    }
  }, 1000);
}, 8000);


// ---- Part 4: What happens without clearInterval ----
function runPart4() {
  console.log("\n--- Part 4: Without clearInterval (Bug Demo) ---");

  let tick = 0;

  const buggyId = setInterval(function() {
    tick++;
    console.log("Tick #" + tick + " (goes forever without clearInterval!)");

    // We'll stop it after 5 ticks to avoid infinite output
    if (tick >= 5) {
      clearInterval(buggyId);
      console.log("(Stopped manually — but imagine this running forever on a webpage)");
    }
  }, 500);
}
