// Topic 3 Demo — for...of & for...in Loops
// Context: Konga product catalogue and student profile display

// ---- The data ----
const prices = [4500, 1200, 8000, 600, 3300];
const items  = ["Wireless Earbuds", "Phone Case", "Tecno Spark 20 Pro", "USB-C Cable", "Screen Protector"];

const cart = [
  { item: "Wireless Earbuds", price: 4500 },
  { item: "Phone Case",       price: 1200 },
  { item: "USB-C Cable",      price: 600  }
];

const student = {
  name: "Chidi Nweke",
  course: "JavaScript Fundamentals",
  score: 88,
  passed: true
};


// ---- Part 1: for...of on an array ----
console.log("--- Part 1: for...of on Array ---");

for (const price of prices) {
  console.log("Price: ₦" + price);
}


// ---- Part 2: for...of — cart total (accumulator pattern) ----
console.log("--- Part 2: for...of Cart Total ---");

let cartTotal = 0;

for (const product of cart) {
  cartTotal = cartTotal + product.price;
  console.log("Added: " + product.item + " — Running total: ₦" + cartTotal);
}

console.log("Cart total: ₦" + cartTotal);


// ---- Part 3: for...of on a string ----
console.log("--- Part 3: for...of on String ---");

const name = "Amara";
let vowelCount = 0;
const vowels = "aeiouAEIOU";

for (const char of name) {
  if (vowels.includes(char)) {
    vowelCount++;
    console.log(char + " — vowel");
  } else {
    console.log(char + " — consonant");
  }
}

console.log("Vowels in '" + name + "':", vowelCount);


// ---- Part 4: for...in on an object ----
console.log("--- Part 4: for...in on Object ---");

for (const key in student) {
  console.log(key + ": " + student[key]);
}


// ---- Part 5: for...of vs for...in side by side ----
console.log("--- Part 5: for...of vs for...in ---");

// for...of on cart array — gives each object
console.log("for...of (array values):");
for (const product of cart) {
  console.log(product);
}

// for...in on a single cart item — gives each key
console.log("for...in (object keys):");
const firstItem = cart[0];
for (const key in firstItem) {
  console.log(key + " →", firstItem[key]);
}
