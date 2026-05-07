// Topic 2 Demo — while & do...while Loops
// Context: PiggyVest savings withdrawals and network retry simulation

// ---- Part 1: while loop — drain savings balance ----
console.log("--- Part 1: while Loop ---");

let balance = 10000;
const withdrawal = 2500;

while (balance >= withdrawal) {
  balance = balance - withdrawal;
  console.log("Withdrew ₦" + withdrawal + " — Remaining: ₦" + balance);
}

console.log("Insufficient funds. Final balance: ₦" + balance);


// ---- Part 2: while loop — PIN retry with multiple conditions ----
console.log("--- Part 2: PIN Retry ---");

let attempts = 0;
let pinCorrect = false;

while (!pinCorrect && attempts < 3) {
  attempts++;
  // Simulate: correct pin entered on attempt 2
  if (attempts === 2) pinCorrect = true;
  console.log("Attempt " + attempts + ": " + (pinCorrect ? "correct" : "wrong"));
}

if (pinCorrect) {
  console.log("Access granted");
} else {
  console.log("Account locked — too many attempts");
}


// ---- Part 3: do...while — connection retry (runs at least once) ----
console.log("--- Part 3: do...while Loop ---");

let retries = 0;

do {
  retries++;
  console.log("Attempt:", retries, "— checking connection...");
} while (retries < 3);

console.log("Retry check complete. Total attempts:", retries);


// ---- Part 4: Contrast — while that never runs vs do...while that always runs ----
console.log("--- Part 4: Zero vs One Execution ---");

// while — condition false from the start: never runs
let score = 0;
while (score > 50) {
  console.log("While ran");  // ← never executes
}
console.log("While done. score:", score);  // outputs immediately

// do...while — always runs once regardless of condition
let check = 0;
do {
  console.log("do...while ran once. check:", check);  // ← always runs
} while (check > 50);
console.log("do...while done. check:", check);
