// Module 8 Combined Demo — Arrays
// Context: Jumia inventory and order management system
// Covers: create/access, push/pop/splice/slice, forEach, map, filter

// ---- Setup: product inventory ----
const inventory = [
  { id: "PRD-001", name: "Wireless Earbuds",   price: 4500,  category: "Electronics", inStock: true  },
  { id: "PRD-002", name: "Phone Case",          price: 1200,  category: "Accessories", inStock: true  },
  { id: "PRD-003", name: "Tecno Spark 20 Pro",  price: 8000,  category: "Electronics", inStock: false },
  { id: "PRD-004", name: "USB-C Cable",          price: 600,   category: "Accessories", inStock: true  },
  { id: "PRD-005", name: "Screen Protector",     price: 3300,  category: "Accessories", inStock: true  },
  { id: "PRD-006", name: "Laptop Bag",           price: 12000, category: "Accessories", inStock: true  },
  { id: "PRD-007", name: "Mechanical Keyboard",  price: 7500,  category: "Electronics", inStock: false }
];


// ---- Part 1: Access and read ----
console.log("=== Part 1: Access ===");

console.log("Inventory count:", inventory.length);
console.log("First product:", inventory[0].name);
console.log("Last product:", inventory[inventory.length - 1].name);
console.log("PRD-003 price: ₦" + inventory[2].price);


// ---- Part 2: push and pop — cart management ----
console.log("\n=== Part 2: Cart (push/pop) ===");

const cart = [];

cart.push(inventory[0]);  // add Earbuds
cart.push(inventory[1]);  // add Phone Case
cart.push(inventory[5]);  // add Laptop Bag
console.log("Cart items:", cart.length);
console.log("Cart contents:", cart.map(item => item.name));

const removed = cart.pop();
console.log("Removed:", removed.name);
console.log("Cart after pop:", cart.map(item => item.name));


// ---- Part 3: splice — manage stock list ----
console.log("\n=== Part 3: Splice ===");

const stockList = ["Earbuds", "Phone Case", "Old Model Phone", "USB Cable", "Screen Protector"];
console.log("Before:", stockList);

// Remove old model at index 2
stockList.splice(2, 1, "Tecno Spark 20 Pro");  // replace
console.log("After replace:", stockList);

// Insert new item at position 2
stockList.splice(2, 0, "Laptop Bag");
console.log("After insert:", stockList);


// ---- Part 4: slice — recent arrivals ----
console.log("\n=== Part 4: Slice ===");

const recentIds = ["PRD-005", "PRD-006", "PRD-007", "PRD-008", "PRD-009"];
const pageOne = recentIds.slice(0, 3);
const lastTwo = recentIds.slice(-2);
console.log("Page 1:", pageOne);
console.log("Latest 2:", lastTwo);
console.log("Original unchanged:", recentIds);


// ---- Part 5: map and filter ----
console.log("\n=== Part 5: map + filter ===");

// map — add VAT to all prices
const withVAT = inventory.map(product => ({
  ...product,
  priceWithVAT: (product.price * 1.075).toFixed(2)
}));
console.log("First product with VAT:", withVAT[0].name, "→ ₦" + withVAT[0].priceWithVAT);

// filter — in-stock only
const inStockProducts = inventory.filter(product => product.inStock);
console.log("In-stock count:", inStockProducts.length, "of", inventory.length);
console.log("In-stock products:", inStockProducts.map(p => p.name));

// filter — electronics only
const electronics = inventory.filter(product => product.category === "Electronics");
console.log("Electronics:", electronics.map(p => p.name));


// ---- Part 6: combined — forEach summary ----
console.log("\n=== Part 6: forEach Summary ===");

const available = inventory.filter(p => p.inStock);
console.log("Available products:");
available.forEach((product, index) => {
  console.log((index + 1) + ". " + product.name + " — ₦" + product.price + " [" + product.category + "]");
});
