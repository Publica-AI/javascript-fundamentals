// Module 12, Topic 1 Demo — map and filter
// Context: Publica Academy student and course data
// Run in Node or browser console

// ---- Setup: data ----
const students = [
  { name: "Amara Obi",    score: 88, course: "JavaScript" },
  { name: "Chidi Nwosu",  score: 45, course: "HTML & CSS" },
  { name: "Funmi Adeyemi", score: 72, course: "JavaScript" },
  { name: "Gbenga Lawal", score: 91, course: "JavaScript" },
  { name: "Ngozi Eze",    score: 63, course: "HTML & CSS" }
];

const orders = [
  { id: "ORD-001", customer: "Amara",  amount: 5000,  status: "paid"    },
  { id: "ORD-002", customer: "Chidi",  amount: 3200,  status: "pending" },
  { id: "ORD-003", customer: "Funmi",  amount: 8000,  status: "paid"    },
  { id: "ORD-004", customer: "Gbenga", amount: 1500,  status: "failed"  },
  { id: "ORD-005", customer: "Ngozi",  amount: 12000, status: "paid"    }
];


// ---- Part 1: map — extract and transform ----
console.log("--- Part 1: map ---");

// Extract one field
const scores = students.map(s => s.score);
console.log("Scores:", scores);
// [88, 45, 72, 91, 63]

// Format display strings
const labels = students.map(s => s.name + " — " + s.score + "%");
console.log("Labels:");
labels.forEach(l => console.log(" ", l));

// Add computed property with spread
const withGrade = students.map(s => ({
  ...s,
  grade: s.score >= 70 ? "Pass" : s.score >= 50 ? "Borderline" : "Fail"
}));
console.log("First student with grade:", withGrade[0]);


// ---- Part 2: filter — keep matching elements ----
console.log("\n--- Part 2: filter ---");

// Keep passing students
const passed = students.filter(s => s.score >= 70);
console.log("Passed count:", passed.length);  // 3

// Keep paid orders
const paidOrders = orders.filter(o => o.status === "paid");
console.log("Paid orders:", paidOrders.length);  // 3

// Combined condition
const highValuePaid = orders.filter(o => o.status === "paid" && o.amount >= 5000);
console.log("High-value paid:", highValuePaid.map(o => o.id));


// ---- Part 3: filter then map ----
console.log("\n--- Part 3: filter then map ---");

// Names of JavaScript students who passed
const jsPassers = students
  .filter(s => s.course === "JavaScript" && s.score >= 70)
  .map(s => s.name);

console.log("JavaScript passers:", jsPassers);
// ["Amara Obi", "Funmi Adeyemi", "Gbenga Lawal"]

// Paid order summaries
const paidSummaries = orders
  .filter(o => o.status === "paid")
  .map(o => o.id + " — " + o.customer + " — ₦" + o.amount.toLocaleString());

console.log("Paid summaries:");
paidSummaries.forEach(s => console.log(" ", s));


// ---- Part 4: map with VAT ----
console.log("\n--- Part 4: map with Computed Property ---");

const withVAT = orders.map(o => ({
  ...o,
  amountWithVAT: Math.round(o.amount * 1.075)
}));

console.log("Order with VAT:");
withVAT.forEach(o => {
  console.log(" ", o.id, "— ₦" + o.amount + " → ₦" + o.amountWithVAT + " with VAT");
});
