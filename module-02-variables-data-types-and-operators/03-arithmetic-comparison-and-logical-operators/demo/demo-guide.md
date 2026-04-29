# Demo Guide — Arithmetic, Comparison & Logical Operators
**Module 2, Topic 3 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js` (run via `<script>` tag or DevTools Console)

---

## What This Demo Teaches

Students will watch a Jumia-style cart checkout calculation built step by step with arithmetic operators, see the `%` operator used to check free delivery eligibility, witness the `===` vs `==` type mismatch live, and use logical operators to evaluate discount conditions. The demo uses Naira amounts throughout.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Have the Console open and ready

---

## Demo Steps

### Part 1 — Cart Calculations

1. Show the three given values: `itemPrice`, `quantity`, `discount`
2. **Ask before each calculation:**

> *"If each item costs ₦4,500 and we buy 3, what's the subtotal?"*

> *"After a ₦500 discount, what's the total?"*

> *"VAT in Nigeria is 7.5%. How do we calculate that?"*

3. Run Part 1 and show the Console:
```
Subtotal (₦): 13500
Total after discount: 13000
VAT (7.5%): 975
Grand Total: 13975
```

> **Say to students:** *"Each calculation feeds the next. `subtotal` uses `itemPrice` and `quantity`. `total` uses `subtotal`. `grandTotal` uses `total` and `vat`. This is how real e-commerce pricing works — a chain of dependent calculations."*

---

### Part 2 — % (Remainder) for Free Delivery

1. Introduce the scenario: every 5th order gets free delivery
2. **Ask:**

> *"Order number 10. Does 10 divide evenly by 5? What's the remainder?"*

3. Run the `orderNumber % 5` checks:
```
0
true
2
false
```

> **Say to students:** *"Order 10 has no remainder when divided by 5 — it's a multiple of 5. So `10 % 5 === 0` is `true`, and this customer gets free delivery. Order 7 has a remainder of 2 — not a multiple of 5, so `false`. The `%` operator is the standard way to check divisibility and cycle through patterns. You will use it often."*

---

### Part 3 — === vs == (The Type Mismatch)

1. Show `userInput` (a string `"4500"`) and `actualPrice` (a number `4500`)
2. **Ask:**

> *"These both represent 4500. Are they actually equal in JavaScript?"*

3. Run both comparisons:
```
false   ← ===
true    ← ==
```

> **Say to students:** *"With `===`, JavaScript sees two different types and returns `false` — correct. With `==`, JavaScript converts the string to a number behind the scenes and says 'they're equal' — dangerous. That silent type conversion is hiding a real bug: somewhere your code has the wrong type and you don't know it. Always use `===`. Never use `==`."*

---

### Part 4 — Logical Operators

1. Walk through the four variables: `accountBalance`, `minOrder`, `isPremiumUser`, `hasPromoCode`
2. **For each logical expression, ask students to predict before running:**

> *"Free delivery requires balance ≥ minOrder AND isPremiumUser. The balance is 8000 — that's above 5000. But isPremiumUser is false. What does `&&` give us?"*

> *"10% discount requires isPremiumUser OR hasPromoCode. isPremiumUser is false, but hasPromoCode is true. What does `||` give us?"*

3. Run Part 4:
```
Free delivery: false
Gets 10% discount: true
Store is open: true
```

> **Say to students:** *"AND requires both — failing one condition fails everything. OR only needs one — one true condition is enough. NOT flips whatever it gets. These three operators are how you build any decision-making logic in JavaScript."*

---

## Teaching Tips

- **Use Naija amounts** throughout — ₦4,500 for an item on Jumia resonates more than $45
- **The `===` vs `==` demo should be dramatic** — let students say "they look the same" before showing that `===` says no
- **For Part 4**, draw a truth table on the board for `&&` and `||` if students look confused — four rows covers all cases
- **If time allows:** ask a student to modify `isPremiumUser` to `true` and rerun — both conditions become true; what changes?

---

## What's Next

**Task 15** → Module 2 combined demo
Brings together variables, types, and operators into one continuous session — declare typed variables, inspect them with `typeof`, then use them in calculations and comparisons.
