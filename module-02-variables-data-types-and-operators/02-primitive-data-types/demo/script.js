// Topic 2 Demo — Primitive Data Types

// ---- Part 1: One variable of each type ----
const name       = "Ada Okonkwo";  // string
const price      = 2500;           // number
const isEnrolled = true;           // boolean
const discount   = null;           // null
let   userInput;                   // undefined — declared, not assigned

console.log(name);       // What type? What value?
console.log(price);
console.log(isEnrolled);
console.log(discount);
console.log(userInput);


// ---- Part 2: typeof for each ----
console.log(typeof name);       // "string"
console.log(typeof price);      // "number"
console.log(typeof isEnrolled); // "boolean"
console.log(typeof discount);   // "object"  ← the null quirk!
console.log(typeof userInput);  // "undefined"


// ---- Part 3: The string-vs-number bug ----
const strAmount = "2500";  // string
const numAmount = 2500;    // number

console.log(strAmount + 500); // "2500500" — string concatenation!
console.log(numAmount + 500); // 3000       — actual addition