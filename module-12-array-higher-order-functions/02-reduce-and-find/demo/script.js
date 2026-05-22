// Module 12, Topic 2 Demo — reduce and find
// Context: Publica Academy orders and student data
// Run in Node or browser console

// ---- Setup: data ----
const orders = [
  { id: "ORD-001", customer: "Amara",  amount: 5000,  status: "paid"    },
  { id: "ORD-002", customer: "Chidi",  amount: 3200,  status: "pending" },
  { id: "ORD-003", customer: "Funmi",  amount: 8000,  status: "paid"    },
  { id: "ORD-004", customer: "Gbenga", amount: 1500,  status: "failed"  },
  { id: "ORD-005", customer: "Ngozi",  amount: 12000, status: "paid"    }
];

const students = [
  { id: "STU-001", name: "Amara Obi",    score: 88 },
  { id: "STU-002", name: "Chidi Nwosu",  score: 45 },
  { id: "STU-003", name: "Funmi Adeyemi", score: 72 },
  { id: "STU-004", name: "Gbenga Lawal", score: 91 }
];


// ---- Part 1: reduce — sum ----
console.log("--- Part 1: reduce — Sum ---");

// Total of all amounts
const grandTotal = orders.reduce((acc, order) => acc + order.amount, 0);
console.log("Grand total: ₦" + grandTotal.toLocaleString());  // ₦29,700

// Total of paid orders only
const paidTotal = orders.reduce((acc, order) => {
  return order.status === "paid" ? acc + order.amount : acc;
}, 0);
console.log("Paid total: ₦" + paidTotal.toLocaleString());  // ₦25,000

// Average order amount
const average = Math.round(grandTotal / orders.length);
console.log("Average: ₦" + average.toLocaleString());  // ₦5,940


// ---- Part 2: reduce — frequency counter ----
console.log("\n--- Part 2: reduce — Frequency Counter ---");

const statusCounts = orders.reduce((acc, order) => {
  acc[order.status] = (acc[order.status] || 0) + 1;
  return acc;
}, {});
console.log("Status counts:", statusCounts);
// { paid: 3, pending: 1, failed: 1 }


// ---- Part 3: find and findIndex ----
console.log("\n--- Part 3: find + findIndex ---");

// Find by id
const target = students.find(s => s.id === "STU-003");
console.log("Found student:", target.name, "— score:", target.score);

// Find first failing student
const firstFail = students.find(s => s.score < 70);
console.log("First non-passer:", firstFail ? firstFail.name : "None");  // Chidi Nwosu

// No match — undefined
const missing = students.find(s => s.id === "STU-999");
console.log("Missing:", missing);   // undefined

// findIndex
const idx = students.findIndex(s => s.id === "STU-003");
console.log("Index of STU-003:", idx);  // 2


// ---- Part 4: some and every ----
console.log("\n--- Part 4: some + every ---");

const hasTopScorer = students.some(s => s.score >= 90);
console.log("Any score >= 90?", hasTopScorer);   // true

const allPassed = students.every(s => s.score >= 70);
console.log("All scored >= 70?", allPassed);     // false

const anyFailed = orders.some(o => o.status === "failed");
console.log("Any failed orders?", anyFailed);    // true

const allPaid = orders.every(o => o.status === "paid");
console.log("All paid?", allPaid);               // false
