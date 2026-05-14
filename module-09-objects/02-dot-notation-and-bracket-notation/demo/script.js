// Topic 2 Demo — Dot Notation and Bracket Notation
// Context: Konga product access and Publica Academy student display

// ---- The data ----
const product = {
  name:     "Wireless Earbuds",
  price:    4500,
  inStock:  true,
  "sku-id": "SKU-001"
};

const student = {
  name:    "Amara Obi",
  score:   88,
  course:  "JavaScript",
  passed:  true
};

const order = {
  id:       "ORD-001",
  customer: "Amara Obi",
  amount:   4500,
  status:   "delivered"
};


// ---- Part 1: Dot notation vs bracket notation ----
console.log("--- Part 1: Dot vs Bracket ---");

// Both access the same property
console.log(product.name);       // dot notation
console.log(product["name"]);    // bracket notation — same result

// Bracket required for special-character key
console.log(product["sku-id"]);  // works
// console.log(product.sku-id);  // SyntaxError — uncomment to see


// ---- Part 2: Bracket notation with a variable ----
console.log("--- Part 2: Variable as Key ---");

const field = "score";
console.log(student[field]);   // 88 — evaluates field, gets 'score'
console.log(student.field);    // undefined — looks for property named 'field'


// ---- Part 3: Dynamic field access in a loop ----
console.log("--- Part 3: Dynamic Access Loop ---");

function displayFields(obj, keys) {
  for (const key of keys) {
    console.log(key + ": " + obj[key]);
  }
}

displayFields(order, ["id", "customer", "amount"]);
console.log("---");
displayFields(student, ["name", "course"]);


// ---- Part 4: 'in' operator and destructuring ----
console.log("--- Part 4: in and Destructuring ---");

// Check property existence
console.log("name" in student);   // true
console.log("email" in student);  // false

// Destructuring — extract multiple at once
const { name, score } = student;
console.log(name, score);

// Rename
const { name: studentName, course: courseName } = student;
console.log(studentName, courseName);

// Default value
const { email = "no email on file" } = student;
console.log(email);
