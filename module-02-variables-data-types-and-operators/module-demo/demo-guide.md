# Module Demo Guide — Variables, Data Types & Operators
**Module 2 — JavaScript Fundamentals**
**Topics covered:** Variables: let, const & var · Primitive Data Types · Arithmetic, Comparison & Logical Operators
**Type:** Combined module walkthrough
**Duration:** 20–25 minutes
**Files:** `script.js`

---

## What This Demo Teaches

This demo builds a Chowdeck food order from scratch, carrying the same variables through all three Module 2 topics. Students see variables declared (Topic 1), their types inspected (Topic 2), and those same variables used in calculations and comparisons (Topic 3). The data flows as one story — declare the order, understand its types, calculate its cost.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Make sure the `restaurant = "Tantalizers"` line is commented out
3. Have the DevTools Console open and ready

---

## Demo Steps

### Part 1 — Variables (Topic 1 Recap)

1. Show the four variable declarations
2. **Before running, ask:**

> *"I'm declaring `restaurant` as `const`. Can I change it later? What about `quantity` — it's `let`. Can I change that?"*

3. Run Part 1:
```
Restaurant: Mama Chidi's Kitchen
Dish: Jollof Rice & Chicken
Quantity: 1
Status: pending
Updated quantity: 2
Updated status: confirmed
```

4. **Uncomment the `restaurant = "Tantalizers"` line briefly:**

> *"Watch what happens when I try to change a const — "* → show the TypeError → re-comment it

> **Say to students:** *"`const` locks the restaurant name in. `let` lets the quantity and status evolve as the order progresses. That's the rule: const for facts, let for state."*

---

### Part 2 — Data Types (Topic 2 Recap)

1. Point to the new variables: `pricePerUnit` (number), `isPaid` (boolean), `promoCode` (null)
2. **Ask prediction questions:**

> *"What type is 2500? What type is false? What type is null?"*

3. Run the `typeof` section:
```
string
number
boolean
object     ← pause here
string
```

4. Pause on `typeof promoCode` showing `"object"`:

> *"Who remembers? Why does typeof null return 'object'?" — let students answer. Confirm: it's the 1995 bug, it cannot be fixed, we just know it.*

5. Run the string-vs-number section:
```
21         ← string concatenation
3          ← actual addition
```

> *"`inputQty` is the string `"2"` — as if it came from a form input. Adding 1 gives `"21"` not `3`. `Number()` converts it to an actual number first. This will happen to you in real projects.*"

---

### Part 3 — Operators (Topic 3 Recap)

1. Walk through the arithmetic:

> *"Subtotal: 2500 times 2 — what's that? Plus ₦350 delivery. Customer hands over ₦6,000 — how much change?"*

2. Run the arithmetic section:
```
Subtotal (₦): 5000
Delivery fee: 350
Total: 5350
Change: 650
```

3. Run the comparison:

> *"The free delivery threshold is ₦5,000. Our subtotal is ₦5,000. Is 5000 >= 5000?"*

```
Qualifies for free delivery: true
```

4. Walk through the logical operators:

> *"Loyalty discount: returning customer OR has promo code. isReturningCustomer is true, hasPromoCode is false. One is enough for OR — what's the result?"*

5. Run the logical section:
```
Gets loyalty discount: true
Payment pending: true
```

> **Say to students:** *"The same variables we declared in Part 1 powered the calculations in Part 3. We checked their types in Part 2. That's the whole module in one flow: store → inspect → operate. Every JavaScript program you'll ever write follows this pattern."*

---

## Teaching Tips

- **Don't introduce new variables in the module demo** — the power of this session is that students recognise the variables from Part 1 appearing in the calculations. Familiarity builds confidence
- **The `Number(inputQty)` conversion** is worth 30 seconds of emphasis — students will hit this bug in Module 10 when they read values from HTML inputs
- **For logical operators**, ask students to call out the result before you reveal it — by Part 3 of the module demo, they should be fast enough to predict all of them
- **Optional close:** change `isPaid` to `true` and ask students to predict what `!isPaid` becomes — shows that `!` is reactive, not fixed

---

## What's Next

**Task 16** → Module 2 Assessment & Project
The assessment covers variable declaration rules, type identification (including the null quirk), and operator behaviour. The project gives students a Naija business context and asks them to write script.js that calculates realistic values.
