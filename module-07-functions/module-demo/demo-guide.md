# Demo Guide — Module 7 Combined Demo: Functions
**Module 7 — JavaScript Fundamentals**
**Type:** End-of-module live walkthrough
**Duration:** 15–18 minutes
**Files:** `script.js`

---

## What This Demo Teaches

The module demo builds a complete Konga order processing pipeline using only functions. Each part demonstrates one of the three topic clusters: define/call (Part 1), return values and default parameters (Part 2), arrow functions (Part 3), and scope (Part 4). The same orders dataset runs through every function — students see how individual, well-named functions compose into a larger system.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all four parts output correctly
3. Note: Part 2 subtotal should be ₦9600 (4500 + 1200 + 600 + 3300 — excludes ORD-003 cancelled ₦8000)
4. Note: VAT total should be ₦9600 × 1.075 = ₦10320.00

---

## Demo Steps

### Part 1 — Named Function

> *"We have a printOrderSummary function that takes one order object. We're calling it in a for...of loop — once per order. How many lines of output do we expect?"*

Run Part 1. Show: 5 lines, one per order.

> *"The loop handles the repetition. The function handles the display. Each function has one job — the loop's job is iteration, the function's job is formatting. That separation makes both easier to change."*

---

### Part 2 — Return Values

1. **Ask before running:**

> *"calculateTotal loops the orders and skips cancelled ones. Which order gets skipped? What's the subtotal?"*

2. Run Part 2. Show: subtotal ₦9600, total with VAT ₦10320.00.

> *"ORD-003 (Chidi Nweke, ₦8000) is cancelled — skipped. The remaining four total ₦9600. Then we pass that to applyTax — which returns the amount plus 7.5% VAT. Notice applyTax has a default rate of 0.075. We could pass a different rate, but the standard is 7.5%."*

> *"Point out how the functions chain: calculateTotal returns subtotal, subtotal goes into applyTax, applyTax returns the final amount. That's composition — functions as building blocks."*

---

### Part 3 — Arrow Functions

1. **Ask before running:**

> *"getStatusLabel is an arrow function that maps a status string to a display label. formatCurrency formats a number with the Naira symbol. isPaid checks if an order is delivered. What will the output look like?"*

2. Run Part 3. Show: each customer with their status label and formatted price; delivered count.

> *"Notice isPaid is passed directly to .filter() — `orders.filter(isPaid)`. We haven't covered .filter() yet, but preview it: .filter() keeps only the elements for which the function returns true. isPaid returns true only for delivered orders. The .length gives us the count. Module 8 covers all of this in detail."*

---

### Part 4 — Scope

> *"Both generateInvoice and generateReceipt declare a variable named `tax`. Will they conflict?"*

Run Part 4. Show: both outputs are correct and independent.

> *"No conflict — each function call creates its own local scope. The `tax` in generateInvoice and the `tax` in generateReceipt are separate variables that happen to share a name. They live in different boxes."*

Uncomment `console.log(tax)`. Run.

> *"ReferenceError. `tax` is local to the functions — it doesn't exist in the outer scope. Re-comment it."*

---

## Teaching Tips

- **Part 2 composition** is the key insight: `applyTax(calculateTotal(orders))` would work in one line — functions can be chained because they return values. Show this as an alternative
- **Part 3 `.filter(isPaid)`** is intentional foreshadowing — don't explain .filter() in depth, just plant the seed: "this is what arrow functions are for in Module 8"
- **The uncomment in Part 4** always makes scope click — run it, show the error, explain, re-comment

---

## What's Next

**Task 58** → Module 7 Assessment & Project JSONs
