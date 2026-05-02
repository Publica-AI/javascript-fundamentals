// Topic 1 Demo — The Browser Console & Console Methods
// Context: Inspecting student results and a PiggyVest savings account
// Open Chrome DevTools (F12) → Console tab before running this file

// ---- Setup ----
const appName  = "Publica Academy";
const city     = "Lagos";
const balance  = 500;
const minBal   = 1000;
const password = "";

const students = [
  { name: "Amara Obi",   score: 88, passed: true  },
  { name: "Bayo Ade",    score: 74, passed: true  },
  { name: "Chidi Nweke", score: 48, passed: false },
  { name: "Dami Lawal",  score: 91, passed: true  }
];


// ---- Part 1: console.log() ----
console.log("=== console.log ===");
console.log("App:", appName);          // label + string
console.log("City:", city);            // label + string
console.log("Balance:", balance);      // label + number
console.log("Min balance:", minBal);   // label + number
console.log("Students:", students.length, "enrolled");  // multiple args


// ---- Part 2: console.warn() and console.error() ----
console.log("=== console.warn & console.error ===");

console.warn("Low balance — below minimum of ₦" + minBal);   // yellow
console.error("Password cannot be empty!");                    // red

// These do NOT stop the code — execution continues after them
console.log("Code is still running after warn and error");


// ---- Part 3: console.table() ----
console.log("=== console.table ===");
console.table(students);  // displays as a grid: index | name | score | passed