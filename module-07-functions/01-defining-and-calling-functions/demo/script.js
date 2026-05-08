// Topic 1 Demo — Defining and Calling Functions
// Context: Publica Academy course platform

// ---- Part 1: Define and call a basic function ----
console.log("--- Part 1: Basic Function ---");

function showWelcome() {
  console.log("Welcome to Publica Academy!");
  console.log("We hope you enjoy the course.");
}

showWelcome();  // first call
showWelcome();  // second call — same output, no duplicate code


// ---- Part 2: Function reference vs function call ----
console.log("--- Part 2: Reference vs Call ---");

// Reference — logs the function definition itself, doesn't run it
console.log(showWelcome);

// Call — runs the function
showWelcome();


// ---- Part 3: Function declaration hoisting ----
console.log("--- Part 3: Hoisting ---");

// Call before definition — works because declarations are hoisted
printDivider();

function printDivider() {
  console.log("==============================");
}


// ---- Part 4: Named function for an order summary ----
console.log("--- Part 4: Named Function ---");

function printOrderSummary() {
  console.log("=== Order Summary ===");
  console.log("Item: Wireless Earbuds");
  console.log("Amount: ₦4500");
  console.log("Status: Delivered");
}

printOrderSummary();


// ---- Part 5: DRY — replace repeated logic with a function ----
console.log("--- Part 5: DRY Principle ---");

function printReport(label, amounts) {
  console.log("=== " + label + " ===");
  let total = 0;
  for (const amount of amounts) {
    total = total + amount;
  }
  console.log("Total: ₦" + total);
}

printReport("Morning Sales", [4500, 1200, 800]);
printReport("Evening Sales", [9000, 3300, 600]);
printReport("Weekend Sales", [15000, 8000, 4200, 2700]);
