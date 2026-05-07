// Topic 1 Demo — The for Loop
// Context: Processing a Konga product price list and calculating cart total

// ---- The price list ----
const prices = [4500, 1200, 8000, 600, 3300];
const items  = ["Wireless Earbuds", "Phone Case", "Tecno Spark 20 Pro", "USB-C Cable", "Screen Protector"];


// ---- Part 1: Basic for loop ----
console.log("--- Part 1: Basic for Loop ---");

for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}


// ---- Part 2: Iterating the array ----
console.log("--- Part 2: Price List ---");

for (let i = 0; i < prices.length; i++) {
  console.log("Item " + (i + 1) + ": " + items[i] + " — ₦" + prices[i]);
}


// ---- Part 3: The off-by-one bug (run with <= first, then fix to <) ----
console.log("--- Part 3: Off-By-One Bug ---");

// BUG: i <= prices.length — run first to show the undefined at the end
for (let i = 0; i <= prices.length; i++) {
  console.log(prices[i]);      // ← last output will be undefined
}
// After showing the bug, change <= to < and run again to fix it


// ---- Part 4: Accumulate total ----
console.log("--- Part 4: Running Total ---");

let cartTotal = 0;

for (let i = 0; i < prices.length; i++) {
  cartTotal = cartTotal + prices[i];
  console.log("After adding " + items[i] + ": ₦" + cartTotal);
}

console.log("Cart total: ₦" + cartTotal);