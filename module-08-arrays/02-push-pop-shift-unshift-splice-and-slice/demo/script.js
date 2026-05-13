// Topic 2 Demo — push, pop, shift, unshift, splice & slice
// Context: Konga cart management and Publica Academy waitlist

// ---- Part 1: push and pop ----
console.log("--- Part 1: push and pop ---");

const cart = ["Wireless Earbuds", "Phone Case"];
console.log("Initial:", cart);

const newLength = cart.push("USB-C Cable");
console.log("After push:", cart, "| new length:", newLength);

cart.push("Keyboard", "Mouse");  // push multiple
console.log("After push multiple:", cart);

const removedLast = cart.pop();
console.log("Popped:", removedLast);
console.log("After pop:", cart);


// ---- Part 2: shift and unshift ----
console.log("--- Part 2: shift and unshift ---");

const waitlist = ["Amara", "Bayo", "Chidi"];
console.log("Initial:", waitlist);

const firstOut = waitlist.shift();
console.log("Shifted:", firstOut, "| remaining:", waitlist);

waitlist.unshift("Dami");
console.log("After unshift:", waitlist);


// ---- Part 3: splice — remove ----
console.log("--- Part 3: splice — Remove ---");

const products = ["Earbuds", "Phone Case", "USB Cable", "Keyboard"];
console.log("Initial:", products);

const spliced = products.splice(1, 2);
console.log("Removed:", spliced);
console.log("After splice:", products);


// ---- Part 4: splice — insert and replace ----
console.log("--- Part 4: splice — Insert ---");

const products2 = ["Earbuds", "Phone Case", "USB Cable", "Keyboard"];

// Insert at index 1 without removing
products2.splice(1, 0, "Laptop Bag");
console.log("After insert:", products2);

// Replace index 2 (USB Cable) with two new items
products2.splice(2, 1, "Mouse", "Charger");
console.log("After replace:", products2);


// ---- Part 5: slice — copy without mutation ----
console.log("--- Part 5: slice ---");

const orders = ["ORD-001", "ORD-002", "ORD-003", "ORD-004", "ORD-005"];

const recent = orders.slice(2, 4);
console.log("slice(2,4):", recent);
console.log("Original unchanged:", orders);

const lastThree = orders.slice(2);
console.log("slice(2):", lastThree);

const lastTwo = orders.slice(-2);
console.log("slice(-2):", lastTwo);
