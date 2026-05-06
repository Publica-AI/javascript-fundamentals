// Topic 2 Demo — switch Statements
// Context: A Publica Academy course day scheduler and a Bolt payment status handler

// ---- The data ----
let day    = "Monday";    // change this to test different cases
let status = "pending";   // change this to test "success", "failed", "pending"


// ---- Part 1: Basic switch — day of the week ----
console.log("--- Part 1: Day Scheduler ---");

switch (day) {
  case "Monday":
    console.log(day + ": Module kick-off — full attendance required");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log(day + ": Regular class day");
    break;
  case "Friday":
    console.log(day + ": End-of-week review and assignment submission");
    break;
  case "Saturday":
  case "Sunday":
    console.log(day + ": Weekend — no scheduled classes");
    break;
  default:
    console.log("Invalid day: " + day);
}


// ---- Part 2: Fall-through bug (run first without break, then fix it) ----
console.log("--- Part 2: Fall-Through Bug ---");

// First, run this version — missing break on Monday will fall through to Tuesday
switch (day) {
  case "Monday":
    console.log("(Bug demo) Monday message");
    // ← missing break intentionally — shows fall-through
  case "Tuesday":
    console.log("(Bug demo) Tuesday message — also runs for Monday!");
    break;
  case "Wednesday":
    console.log("(Bug demo) Wednesday message");
    break;
  default:
    console.log("(Bug demo) Default");
}
// After running, add break after Monday case and show the correct output


// ---- Part 3: Payment status handler ----
console.log("--- Part 3: Payment Status ---");

switch (status) {
  case "success":
    console.log("Payment confirmed — receipt sent to email");
    break;
  case "pending":
    console.log("Payment pending — awaiting bank confirmation");
    break;
  case "failed":
    console.log("Payment failed — please try again");
    break;
  default:
    console.log("Unknown status: " + status);
}