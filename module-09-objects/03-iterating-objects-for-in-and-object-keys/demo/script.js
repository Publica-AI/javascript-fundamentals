// Topic 3 Demo — Iterating Objects: for...in and Object.keys
// Context: Publica Academy student profile and Konga order status

// ---- The data ----
const student = {
  name:   "Amara Obi",
  score:  88,
  course: "JavaScript",
  passed: true
};

const product = {
  name:     "Wireless Earbuds",
  price:    4500,
  category: "Electronics",
  inStock:  true
};

const order = {
  id:       "ORD-001",
  customer: "Amara Obi",
  amount:   4500,
  status:   "delivered"
};


// ---- Part 1: for...in ----
console.log("--- Part 1: for...in ---");

for (const key in student) {
  console.log(key + ": " + student[key]);
}


// ---- Part 2: Object.keys, Object.values, Object.entries ----
console.log("--- Part 2: Object Static Methods ---");

console.log("Keys:", Object.keys(product));
console.log("Values:", Object.values(product));
console.log("Entries:", Object.entries(product));


// ---- Part 3: Object.entries with destructuring ----
console.log("--- Part 3: entries + destructuring ---");

Object.entries(order).forEach(([key, value]) => {
  console.log(key + ": " + value);
});

console.log("--- for...of with entries ---");
for (const [key, value] of Object.entries(order)) {
  console.log(key.toUpperCase() + " → " + value);
}


// ---- Part 4: Lookup table pattern ----
console.log("--- Part 4: Lookup Table ---");

const statusMessages = {
  delivered: "Your order has been delivered",
  pending:   "Your order is being processed",
  cancelled: "Your order has been cancelled",
  returned:  "Your return has been received"
};

function getStatusMessage(status) {
  return statusMessages[status] || "Unknown status";
}

console.log(getStatusMessage("delivered"));
console.log(getStatusMessage("pending"));
console.log(getStatusMessage("shipped"));   // unknown


// ---- Part 5: Frequency counter ----
console.log("--- Part 5: Frequency Counter ---");

const orderStatuses = ["delivered", "pending", "cancelled", "delivered", "pending", "delivered"];
const counts = {};

for (const status of orderStatuses) {
  counts[status] = (counts[status] || 0) + 1;
}

console.log(counts);
console.log("Delivered:", counts.delivered);
console.log("Pending:", counts.pending);
