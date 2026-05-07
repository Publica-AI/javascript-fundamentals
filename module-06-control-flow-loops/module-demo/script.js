// Module 6 Combined Demo — Control Flow: Loops
// Context: Jumia order analytics dashboard
// Covers: for loop, while loop, for...of, for...in, break, continue

// ---- Setup: Jumia order dataset ----
const orders = [
  { id: "ORD-001", customer: "Amara Obi",    item: "Wireless Earbuds",    amount: 4500,  status: "delivered" },
  { id: "ORD-002", customer: "Bayo Ade",     item: "Phone Case",          amount: 1200,  status: "delivered" },
  { id: "ORD-003", customer: "Chidi Nweke",  item: "Tecno Spark 20 Pro",  amount: 8000,  status: "cancelled" },
  { id: "ORD-004", customer: "Dami Lawal",   item: "USB-C Cable",         amount: 600,   status: "delivered" },
  { id: "ORD-005", customer: "Emeka Eze",    item: "Screen Protector",    amount: 3300,  status: "pending"   },
  { id: "ORD-006", customer: "Funmi Bello",  item: "Laptop Bag",          amount: 12000, status: "delivered" },
  { id: "ORD-007", customer: "Gbenga Musa",  item: "Keyboard",            amount: 7500,  status: "delivered" }
];


// ---- Part 1: for loop — numbered order list with index ----
console.log("=== Part 1: for Loop — Numbered Order List ===");

for (let i = 0; i < orders.length; i++) {
  console.log("Order " + (i + 1) + " of " + orders.length + ": " + orders[i].customer + " — ₦" + orders[i].amount);
}


// ---- Part 2: for...of — total revenue (accumulator) ----
console.log("\n=== Part 2: for...of — Revenue Total ===");

let totalRevenue = 0;

for (const order of orders) {
  if (order.status !== "cancelled") {
    totalRevenue = totalRevenue + order.amount;
  }
}

console.log("Total revenue (delivered + pending): ₦" + totalRevenue);


// ---- Part 3: for...of with continue — skip cancelled orders ----
console.log("\n=== Part 3: for...of + continue — Active Orders Only ===");

for (const order of orders) {
  if (order.status === "cancelled") {
    console.log("Skipped (cancelled):", order.id);
    continue;
  }
  console.log(order.id + " | " + order.customer + " | ₦" + order.amount + " | " + order.status);
}


// ---- Part 4: for...of with break — find first pending order ----
console.log("\n=== Part 4: for...of + break — First Pending Order ===");

let firstPending = null;

for (const order of orders) {
  if (order.status === "pending") {
    firstPending = order;
    break;
  }
}

if (firstPending) {
  console.log("First pending order:", firstPending.id, "—", firstPending.customer, "— ₦" + firstPending.amount);
} else {
  console.log("No pending orders found");
}


// ---- Part 5: for...in — inspect first order object's keys ----
console.log("\n=== Part 5: for...in — Order Object Keys ===");

const sampleOrder = orders[0];

for (const key in sampleOrder) {
  console.log(key + ": " + sampleOrder[key]);
}


// ---- Part 6: while loop — process orders until balance depleted ----
console.log("\n=== Part 6: while Loop — Shipping Budget ===");

let shippingBudget = 15000;
const shippingCostPerOrder = 500;
let shipped = 0;

while (shippingBudget >= shippingCostPerOrder && shipped < orders.length) {
  const order = orders[shipped];
  if (order.status === "delivered" || order.status === "pending") {
    shippingBudget = shippingBudget - shippingCostPerOrder;
    shipped++;
    console.log("Shipped: " + order.id + " — Budget remaining: ₦" + shippingBudget);
  } else {
    shipped++;  // skip cancelled — don't charge budget
  }
}

console.log("Shipping complete. Orders shipped:", shipped, "| Remaining budget: ₦" + shippingBudget);
