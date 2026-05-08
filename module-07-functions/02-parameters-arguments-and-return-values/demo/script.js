// Topic 2 Demo — Parameters, Arguments & Return Values
// Context: Konga e-commerce pricing and student grading

// ---- Part 1: Parameters and arguments ----
console.log("--- Part 1: Parameters & Arguments ---");

function greetStudent(name, course) {
  console.log("Welcome, " + name + "! You're enrolled in " + course + ".");
}

greetStudent("Amara Obi", "JavaScript Fundamentals");
greetStudent("Bayo Ade", "HTML & CSS Basics");

// Wrong order — shows argument-to-parameter position mapping
greetStudent("JavaScript Fundamentals", "Amara Obi");


// ---- Part 2: Default parameters ----
console.log("--- Part 2: Default Parameters ---");

function applyDiscount(price, discount = 0.1) {
  const finalPrice = price - (price * discount);
  return finalPrice;
}

console.log("Standard (10%):", applyDiscount(10000));         // 9000
console.log("Custom (20%):",   applyDiscount(10000, 0.2));    // 8000
console.log("No discount:",    applyDiscount(10000, 0));      // 10000


// ---- Part 3: Return values ----
console.log("--- Part 3: Return Values ---");

function calculateTotal(prices) {
  let total = 0;
  for (const price of prices) {
    total = total + price;
  }
  return total;
}

const cartTotal = calculateTotal([4500, 1200, 800]);
console.log("Cart total: ₦" + cartTotal);
console.log("With VAT (7.5%): ₦" + (cartTotal * 1.075));


// ---- Part 4: Early return pattern ----
console.log("--- Part 4: Early Returns ---");

function getGrade(score) {
  if (score >= 70) return "Pass";
  if (score >= 50) return "Borderline";
  return "Fail";
}

console.log("Score 85:", getGrade(85));   // Pass
console.log("Score 55:", getGrade(55));   // Borderline
console.log("Score 30:", getGrade(30));   // Fail


// ---- Part 5: Function without return (returns undefined) ----
console.log("--- Part 5: No Return = undefined ---");

function printTotal(prices) {
  let total = 0;
  for (const price of prices) {
    total = total + price;
  }
  console.log("Total: ₦" + total);  // prints but doesn't return
}

const result = printTotal([4500, 1200, 800]);
console.log("Stored result:", result);  // undefined — nothing came back
