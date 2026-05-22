// Module 12, Topic 3 Demo — Chaining Array Methods
// Context: PiggyVest payment data
// Run in Node or browser console

// ---- Setup: payments data ----
const payments = [
  { id: "P001", customer: "Amara",  amount: 5000,  type: "deposit",    month: "Jan", status: "success" },
  { id: "P002", customer: "Chidi",  amount: 2000,  type: "withdrawal", month: "Jan", status: "success" },
  { id: "P003", customer: "Funmi",  amount: 8000,  type: "deposit",    month: "Feb", status: "success" },
  { id: "P004", customer: "Gbenga", amount: 3500,  type: "deposit",    month: "Jan", status: "success" },
  { id: "P005", customer: "Ngozi",  amount: 12000, type: "withdrawal", month: "Feb", status: "failed"  },
  { id: "P006", customer: "Amara",  amount: 6500,  type: "deposit",    month: "Feb", status: "success" }
];


// ---- Part 1: filter → map ----
console.log("--- Part 1: filter → map ---");

const depositLabels = payments
  .filter(p => p.type === "deposit")
  .map(p => p.id + " — " + p.customer + " — ₦" + p.amount.toLocaleString());

console.log("Deposit labels:");
depositLabels.forEach(l => console.log(" ", l));
// P001, P003, P004, P006


// ---- Part 2: filter → reduce ----
console.log("\n--- Part 2: filter → reduce ---");

// Jan deposits total
const janDepositTotal = payments
  .filter(p => p.type === "deposit" && p.month === "Jan")
  .reduce((acc, p) => acc + p.amount, 0);
console.log("Jan deposit total: ₦" + janDepositTotal.toLocaleString());  // ₦8,500

// Success payments total
const successTotal = payments
  .filter(p => p.status === "success")
  .reduce((acc, p) => acc + p.amount, 0);
console.log("Success payments total: ₦" + successTotal.toLocaleString());


// ---- Part 3: filter → sort → map ----
console.log("\n--- Part 3: filter → sort → map ---");

// Top deposits, sorted by amount descending
const topDeposits = payments
  .filter(p => p.type === "deposit")
  .sort((a, b) => b.amount - a.amount)
  .map(p => p.customer + " — ₦" + p.amount.toLocaleString());

console.log("Top deposits (desc):");
topDeposits.forEach(l => console.log(" ", l));
// Funmi 8000, Amara 6500, Gbenga 3500, Amara 5000 — wait, sort


// ---- Part 4: complete dashboard stats ----
console.log("\n--- Part 4: Dashboard Stats ---");

const stats = {
  total:       payments.length,
  deposits:    payments.filter(p => p.type === "deposit").length,
  withdrawals: payments.filter(p => p.type === "withdrawal").length,
  successRate: Math.round(
    payments.filter(p => p.status === "success").length / payments.length * 100
  ),
  totalDeposited: payments
    .filter(p => p.type === "deposit")
    .reduce((acc, p) => acc + p.amount, 0),
  totalWithdrawn: payments
    .filter(p => p.type === "withdrawal")
    .reduce((acc, p) => acc + p.amount, 0)
};

console.log("Stats:", stats);
console.log("Net:", "₦" + (stats.totalDeposited - stats.totalWithdrawn).toLocaleString());
