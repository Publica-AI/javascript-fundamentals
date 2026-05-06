# Demo Guide — switch Statements
**Module 5, Topic 2 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see a switch statement built around a Publica Academy class schedule and a payment status handler. The critical moment is Part 2 — running the fall-through bug first, then adding the missing break to show the fix. Students must predict the output before each run. The payment status example in Part 3 reinforces that switch works just as well on string values from real-world APIs.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Confirm `day = "Monday"` and `status = "pending"` produce clean output
3. Before class: comment out the break on the Monday case in Part 2 so the fall-through bug runs on first attempt

---

## Demo Steps

### Opening — What Switch Looks Like

Before running, point to Part 1's switch block and say:

> *"This switch checks one variable — the day — against a list of exact values. It's like an if/else if chain but written for fixed string or number values. Let me point to the four parts: the switch expression, the case labels, the break keywords, and the default. Ask yourself: what happens if I change the day variable at the top?"*

---

### Part 1 — Day Scheduler

1. **Ask before running (day = "Monday"):**

> *"day is 'Monday'. Which case matches? What will the output be?"*

2. Run Part 1:
```
Monday: Module kick-off — full attendance required
```

3. Change `day` to `"Wednesday"` and ask again before running:
```
Wednesday: Regular class day
```

4. Point to the Tuesday/Wednesday/Thursday group:

> *"Three cases with no code before the break. They share one block. Tuesday, Wednesday, and Thursday all produce 'Regular class day'. That's intentional grouping."*

5. Change `day` to `"Sunday"`:
```
Sunday: Weekend — no scheduled classes
```

6. Change `day` to `"Holiday"`:
```
Invalid day: Holiday
```

> *"The default caught it — just like else in an if/else chain."*

---

### Part 2 — Fall-Through Bug

1. Make sure the `break` is **missing** after the Monday case in Part 2. Ask:

> *"day is still 'Monday'. Part 2 has a switch on the same variable but I removed the break from the Monday case. What do you predict the output will be?"*

2. Run Part 2:
```
(Bug demo) Monday message
(Bug demo) Tuesday message — also runs for Monday!
```

Ask: "Why did Tuesday also run? Monday was the only match!"

> *"Without break, JavaScript does not stop after the matching case. It continues executing every line below until it hits a break or the end of the switch. This is called fall-through — and it's almost always a bug."*

3. Add the break after the Monday case. Run again:
```
(Bug demo) Monday message
```

> *"One break. The bug is fixed. This is the most important rule of switch: every case needs a break unless you intentionally want fall-through."*

---

### Part 3 — Payment Status

1. With `status = "pending"`, **ask before running:**

> *"status is 'pending'. Switch is comparing using ===. Which case matches?"*

2. Run Part 3:
```
Payment pending — awaiting bank confirmation
```

3. Change `status` to `"success"` and run. Then `"failed"`. Then `"cancelled"` (not in any case):
```
Unknown status: cancelled
```

> **Say:** *"Payment status values like 'success', 'pending', 'failed' come from real payment APIs — Paystack, Flutterwave, Stripe. Switch is exactly the right tool for handling them. When you build payment integrations in later modules, this pattern will appear."*

---

## Teaching Tips

- **Run the fall-through bug live** — don't just describe it. Students need to see the unexpected output to feel why break is non-negotiable
- **Prediction before every run** — for switch demos, prediction is easy because students can trace the exact match. Use this to keep the class active
- **If students ask about performance** — switch is typically slightly faster than long if/else chains because JavaScript can sometimes optimise it as a lookup table. But at this stage, readability matters more than performance

---

## What's Next

**Task 37** → Slides for Ternary Operator & Truthy/Falsy
Students will see a compact one-line syntax for simple two-way decisions, and learn which values JavaScript treats as falsy.