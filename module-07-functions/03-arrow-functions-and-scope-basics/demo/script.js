// Topic 3 Demo — Arrow Functions & Scope Basics
// Context: Konga pricing utilities and Publica Academy enrollment

// ---- Part 1: Arrow function syntax progression ----
console.log("--- Part 1: Arrow Syntax ---");

// Full function expression
const calculateTaxFull = function(price) {
  return price * 0.075;
};

// Arrow function — full form
const calculateTaxArrow = (price) => {
  return price * 0.075;
};

// Single param — no parens
const calculateTaxShort = price => {
  return price * 0.075;
};

// Implicit return — single expression
const calculateTax = price => price * 0.075;

console.log(calculateTaxFull(10000));   // 750
console.log(calculateTaxArrow(10000));  // 750
console.log(calculateTaxShort(10000));  // 750
console.log(calculateTax(10000));       // 750  — all identical


// ---- Part 2: Arrow functions as one-liners ----
console.log("--- Part 2: Arrow One-Liners ---");

const double    = n => n * 2;
const toNaira   = amount => "₦" + amount;
const isAdult   = age => age >= 18;
const getLength = str => str.length;

console.log(double(5));           // 10
console.log(toNaira(4500));       // ₦4500
console.log(isAdult(20));         // true
console.log(getLength("Amara"));  // 5


// ---- Part 3: Arrow with braces requires explicit return ----
console.log("--- Part 3: Braces Need Return ---");

// ❌ Missing return — returns undefined
const addNoBraceReturn = (a, b) => {
  a + b;  // ← computed but not returned
};

// ✅ Correct — explicit return with braces
const addWithReturn = (a, b) => {
  return a + b;
};

// ✅ Correct — implicit return without braces
const addImplicit = (a, b) => a + b;

console.log("No return:", addNoBraceReturn(3, 4));  // undefined
console.log("With return:", addWithReturn(3, 4));   // 7
console.log("Implicit:", addImplicit(3, 4));        // 7


// ---- Part 4: Scope — local vs global ----
console.log("--- Part 4: Scope ---");

const platformName = "Publica Academy";  // global

function showEnrollment() {
  const studentName = "Amara Obi";  // local to showEnrollment
  console.log(studentName + " enrolled in " + platformName);
}

showEnrollment();

console.log(platformName);  // works — global
// console.log(studentName); // ← uncomment to see ReferenceError


// ---- Part 5: Scope — separate local scopes, same variable names ----
console.log("--- Part 5: No Scope Collision ---");

function calculateCartTotal() {
  const total = 4500 + 1200 + 800;  // local total
  return total;
}

function calculateTaxTotal() {
  const total = 13100 * 0.075;  // different local total — no conflict
  return total;
}

console.log("Cart:", calculateCartTotal());  // 6500
console.log("Tax:", calculateTaxTotal());    // 982.5
