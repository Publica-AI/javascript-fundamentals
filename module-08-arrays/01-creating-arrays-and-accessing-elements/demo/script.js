// Topic 1 Demo — Creating Arrays and Accessing Elements
// Context: Konga product catalogue and order records

// ---- The data ----
const items  = ["Wireless Earbuds", "Phone Case", "Tecno Spark 20 Pro", "USB-C Cable", "Screen Protector"];
const prices = [4500, 1200, 8000, 600, 3300];

const orders = [
  { id: "ORD-001", customer: "Amara Obi",   amount: 4500,  status: "delivered" },
  { id: "ORD-002", customer: "Bayo Ade",    amount: 1200,  status: "delivered" },
  { id: "ORD-003", customer: "Chidi Nweke", amount: 8000,  status: "cancelled" }
];


// ---- Part 1: Basic array creation and length ----
console.log("--- Part 1: Array Basics ---");

console.log("Items:", items);
console.log("Length:", items.length);
console.log("Prices:", prices);


// ---- Part 2: Accessing elements by index ----
console.log("--- Part 2: Accessing Elements ---");

console.log("First item:", items[0]);         // Wireless Earbuds
console.log("Third item:", items[2]);         // Tecno Spark 20 Pro
console.log("Last item:", items[items.length - 1]);  // Screen Protector

// Out of bounds
console.log("Index 10:", items[10]);   // undefined
console.log("Index -1:", items[-1]);   // undefined


// ---- Part 3: Modifying elements ----
console.log("--- Part 3: Modifying Elements ---");

const cart = ["Wireless Earbuds", "Phone Case", "USB-C Cable"];
console.log("Before:", cart);

cart[1] = "Laptop Bag";  // update index 1
console.log("After update:", cart);

cart[cart.length] = "Screen Protector";  // add at end
console.log("After add:", cart);
console.log("New length:", cart.length);


// ---- Part 4: Arrays of objects ----
console.log("--- Part 4: Arrays of Objects ---");

console.log("Second order:", orders[1]);
console.log("Second order customer:", orders[1].customer);
console.log("Second order amount:", orders[1].amount);
console.log("First order ID:", orders[0].id);
console.log("Last order status:", orders[orders.length - 1].status);


// ---- Part 5: const array is mutable ----
console.log("--- Part 5: const is Mutable ---");

const productList = ["Earbuds", "Case"];
productList[0] = "Keyboard";        // OK — modifying content
productList[productList.length] = "Mouse";  // OK — adding
console.log("Modified const array:", productList);

// productList = ["New", "Array"]; // ← this would throw TypeError — can't reassign const
console.log("Still the same const variable — just modified contents");
