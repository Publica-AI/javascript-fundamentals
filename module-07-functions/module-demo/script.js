// Module 7 Combined Demo — Functions
// Context: Konga order processing pipeline
// Covers: define/call, parameters/return, arrow functions, scope

// ---- Setup: Konga order dataset ----
const orders = [
  { id: "ORD-001", customer: "Amara Obi",   item: "Wireless Earbuds",   price: 4500,  status: "delivered" },
  { id: "ORD-002", customer: "Bayo Ade",    item: "Phone Case",         price: 1200,  status: "delivered" },
  { id: "ORD-003", customer: "Chidi Nweke", item: "Tecno Spark 20 Pro", price: 8000,  status: "cancelled" },
  { id: "ORD-004", customer: "Dami Lawal",  item: "USB-C Cable",        price: 600,   status: "delivered" },
  { id: "ORD-005", customer: "Emeka Eze",   item: "Screen Protector",   price: 3300,  status: "pending"   }
];


// ---- Part 1: Named function — print order summary ----
console.log("=== Part 1: Named Function ===");

function printOrderSummary(order) {
  console.log("Order: " + order.id + " | " + order.customer + " | ₦" + order.price + " | " + order.status);
}

for (const order of orders) {
  printOrderSummary(order);
}


// ---- Part 2: Return values — calculateTotal and applyTax ----
console.log("\n=== Part 2: Return Values ===");

function calculateTotal(orderList) {
  let total = 0;
  for (const order of orderList) {
    if (order.status !== "cancelled") {
      total = total + order.price;
    }
  }
  return total;
}

function applyTax(amount, rate = 0.075) {
  return amount + (amount * rate);
}

const subtotal = calculateTotal(orders);
const totalWithTax = applyTax(subtotal);

console.log("Subtotal: ₦" + subtotal);
console.log("Total with 7.5% VAT: ₦" + totalWithTax.toFixed(2));


// ---- Part 3: Arrow functions for transformations ----
console.log("\n=== Part 3: Arrow Functions ===");

const getStatusLabel = status => {
  if (status === "delivered") return "✔ Delivered";
  if (status === "pending")   return "⏳ Pending";
  return "✖ Cancelled";
};

const formatCurrency = amount => "₦" + amount.toLocaleString();
const isPaid = order => order.status === "delivered";

for (const order of orders) {
  console.log(order.customer + ": " + getStatusLabel(order.status) + " — " + formatCurrency(order.price));
}

const deliveredCount = orders.filter(isPaid).length;
console.log("Delivered orders:", deliveredCount);


// ---- Part 4: Scope — each function has its own variables ----
console.log("\n=== Part 4: Scope ===");

function generateInvoice(order) {
  const tax = order.price * 0.075;  // local to generateInvoice
  const invoiceTotal = order.price + tax;
  return "Invoice for " + order.customer + ": ₦" + invoiceTotal.toFixed(2);
}

function generateReceipt(order) {
  const tax = order.price * 0.075;  // same name — different local scope, no conflict
  const receiptTotal = order.price + tax;
  return "Receipt for " + order.customer + ": ₦" + receiptTotal.toFixed(2) + " (including VAT)";
}

console.log(generateInvoice(orders[0]));
console.log(generateReceipt(orders[0]));

// console.log(tax);  // ← uncomment to see ReferenceError — tax is local
