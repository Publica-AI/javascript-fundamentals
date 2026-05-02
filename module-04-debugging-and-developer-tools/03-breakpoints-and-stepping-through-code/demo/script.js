// Topic 3 Demo — Breakpoints & Stepping Through Code
// Context: A simple price accumulator for a Konga shopping cart
// Instructions: Set a breakpoint on line 14 (inside the loop), then step through

// ---- The cart data ----
const cartItems = [
  { name: "Wireless Earbuds", price: 4500 },
  { name: "Phone Case",       price: 1200 },
  { name: "Screen Protector", price: 800  },
  { name: "USB-C Cable",      price: 600  }
];

let cartTotal = 0;

// Set a breakpoint on the line below (line 14) using the Sources tab in DevTools
for (let i = 0; i < cartItems.length; i++) {
  cartTotal = cartTotal + cartItems[i].price;
}

console.log("Cart total: ₦" + cartTotal);
console.log("Items in cart:", cartItems.length);