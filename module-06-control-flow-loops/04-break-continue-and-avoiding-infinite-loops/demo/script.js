// Topic 4 Demo — break, continue & Avoiding Infinite Loops
// Context: Jumia order processing and Paystack payment validation

// ---- The data ----
const orders = [
  { id: "ORD-001", status: "delivered" },
  { id: "ORD-002", status: "delivered" },
  { id: "ORD-003", status: "cancelled" },
  { id: "ORD-004", status: "pending"   },
  { id: "ORD-005", status: "delivered" }
];

const payments = [1500, 2800, 0, 4200, 1100];
const scores   = [88, 45, 72, 31, 95, 60];


// ---- Part 1: break — exit on first cancelled order ----
console.log("--- Part 1: break ---");

for (const order of orders) {
  if (order.status === "cancelled") {
    console.log("First cancelled order:", order.id);
    break;
  }
  console.log("Checked:", order.id);
}


// ---- Part 2: continue — skip failing scores ----
console.log("--- Part 2: continue ---");

for (const score of scores) {
  if (score < 50) {
    console.log("Skip — failing score:", score);
    continue;
  }
  console.log("Pass:", score);
}


// ---- Part 3: break vs continue — same data, different behavior ----
console.log("--- Part 3: break vs continue ---");

// break — stop processing at first zero payment
console.log("break version:");
for (const amount of payments) {
  if (amount === 0) {
    console.log("Zero payment — stopping batch");
    break;
  }
  console.log("Processed: ₦" + amount);
}

// continue — skip zero payments, process the rest
console.log("continue version:");
for (const amount of payments) {
  if (amount === 0) {
    console.log("Zero payment — skipping");
    continue;
  }
  console.log("Processed: ₦" + amount);
}


// ---- Part 4: while loop with max-iteration safety net ----
console.log("--- Part 4: Safety Net ---");

let isConnected = false;
let attempts = 0;
const MAX_ATTEMPTS = 5;

while (!isConnected && attempts < MAX_ATTEMPTS) {
  attempts++;
  console.log("Attempt:", attempts, "— checking connection...");
  if (attempts === 3) isConnected = true;  // simulate success on attempt 3
}

if (isConnected) {
  console.log("Connected after", attempts, "attempt(s)");
} else {
  console.log("Failed — max attempts reached:", MAX_ATTEMPTS);
}
