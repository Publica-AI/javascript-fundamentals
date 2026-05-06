// Topic 3 Demo — Ternary Operator & Truthy/Falsy
// Context: A Cowry Budget account status checker

// ---- Setup ----
const accountName = "Bayo Adeyemi";
const balance     = 4200;
const minBalance  = 5000;
const isPremium   = true;
const username    = "";          // empty — test truthy/falsy
const cartItems   = [];          // empty array — test truthy/falsy


// ---- Part 1: Ternary operator ----
console.log("--- Part 1: Ternary ---");

// if/else version
let statusLabel;
if (balance >= minBalance) {
  statusLabel = "Balance OK";
} else {
  statusLabel = "Balance low";
}
console.log("if/else result:", statusLabel);

// Same logic as ternary (const — not let)
const statusLabel2 = balance >= minBalance ? "Balance OK" : "Balance low";
console.log("Ternary result:", statusLabel2);

// More ternaries
const memberLabel = isPremium ? "Premium Member" : "Free Member";
const notification = balance < minBalance ? "Please top up your account" : "All good";
console.log("Member:", memberLabel);
console.log("Notification:", notification);


// ---- Part 2: Truthy/Falsy surprises ----
console.log("--- Part 2: Truthy / Falsy ---");

// These run the else — because their values are falsy
if (username) {
  console.log("Logged in as:", username);
} else {
  console.log("No username — show login");        // runs (empty string is falsy)
}

if (balance === 0) {
  console.log("Balance is zero");
}

// Change balance to 0 and run — 0 is falsy
if (balance) {
  console.log("Balance is:", balance);             // runs (4200 is truthy)
}

// These run the if — even though they look "empty"
if (cartItems) {
  console.log("Cart reference exists:", cartItems);  // runs! [] is truthy
}

// The || default value pattern
const displayName = username || "Guest";
console.log("Hello,", displayName);                  // Hello, Guest (username is "")