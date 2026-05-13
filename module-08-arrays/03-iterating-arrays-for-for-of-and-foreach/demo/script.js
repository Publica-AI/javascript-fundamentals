// Topic 3 Demo — Iterating Arrays: for, for...of & forEach
// Context: Konga order analytics and product pricing

// ---- The data ----
const prices = [4500, 1200, 8000, 600, 3300];

const orders = [
  { id: "ORD-001", customer: "Amara Obi",   amount: 4500,  status: "delivered" },
  { id: "ORD-002", customer: "Bayo Ade",    amount: 1200,  status: "delivered" },
  { id: "ORD-003", customer: "Chidi Nweke", amount: 8000,  status: "cancelled" },
  { id: "ORD-004", customer: "Dami Lawal",  amount: 600,   status: "delivered" },
  { id: "ORD-005", customer: "Emeka Eze",   amount: 3300,  status: "pending"   }
];


// ---- Part 1: Three iteration styles — same output ----
console.log("--- Part 1: Three Iteration Styles ---");

// Classic for loop (with index)
console.log("for loop:");
for (let i = 0; i < prices.length; i++) {
  console.log("Item " + (i + 1) + ": ₦" + prices[i]);
}

// for...of
console.log("for...of:");
for (const price of prices) {
  console.log("₦" + price);
}

// forEach with arrow
console.log("forEach:");
prices.forEach(price => console.log("₦" + price));


// ---- Part 2: forEach on array of objects ----
console.log("--- Part 2: forEach on Objects ---");

orders.forEach(order => {
  console.log(order.id + " | " + order.customer + " | ₦" + order.amount + " | " + order.status);
});

// forEach with index
orders.forEach((order, index) => {
  console.log((index + 1) + ". " + order.customer);
});


// ---- Part 3: forEach can't use break — for...of can ----
console.log("--- Part 3: break in for...of ---");

// for...of with break — stop at first cancelled
for (const order of orders) {
  if (order.status === "cancelled") {
    console.log("Stopped at:", order.id);
    break;
  }
  console.log("Processed:", order.customer);
}


// ---- Part 4: map — transform to new array ----
console.log("--- Part 4: map ---");

const withVAT = prices.map(price => price * 1.075);
console.log("Original:", prices);
console.log("With VAT:", withVAT);

const orderSummaries = orders.map(order => order.customer + " — ₦" + order.amount);
console.log("Summaries:", orderSummaries);


// ---- Part 5: filter — keep matching elements ----
console.log("--- Part 5: filter ---");

const expensive = prices.filter(price => price > 3000);
console.log("Expensive (>₦3000):", expensive);
console.log("Original unchanged:", prices);

const delivered = orders.filter(order => order.status === "delivered");
console.log("Delivered orders:");
delivered.forEach(order => console.log(" ", order.customer));
