# Demo Guide — Breakpoints & Stepping Through Code
**Module 4, Topic 3 of 3 — JavaScript Fundamentals**
**Type:** Live DevTools walkthrough
**Duration:** 10–12 minutes
**Files:** `index.html`, `script.js`

---

## What This Demo Teaches

Students watch a breakpoint pause a running loop mid-execution, then step through each iteration using F10 and F8 while reading the Scope panel. The loop only runs four times — short enough to complete in class — but long enough that students experience the full debugging cycle. The goal: by the end of this demo, every student should be able to set a breakpoint, step through code, and read variable values from the Scope panel independently.

---

## Setup (Before Class)

1. Open `index.html` in Chrome with DevTools open — start on the **Console** tab
2. Confirm the script runs cleanly:
```
Cart total: ₦7100
Items in cart: 4
```
3. Switch to the **Sources** tab and navigate to `script.js` in the file tree

---

## Demo Steps

### Opening — The Problem with console.log

Before setting any breakpoint, say:

> *"Right now I know the cart total is ₦7100. But what if it were wrong? How would I figure out which item is causing the problem? I could add a console.log inside the loop — but there is a better way that gives me everything at once without changing the code."*

---

### Step 1 — Set the Breakpoint

1. In the Sources tab, find `script.js` in the left file tree and click it
2. **Click line 14** (the `cartTotal = cartTotal + cartItems[i].price;` line) — a blue dot appears

> *"That blue dot is a breakpoint. I am telling the browser: when you reach line 14, pause and wait for me."*

3. Refresh the page — the browser pauses. The yellow arrow appears on line 14

> *"Execution is frozen. Nothing else has run yet. The loop started, we entered iteration 0, and the browser stopped right before line 14 executes."*

---

### Step 2 — Read the Scope Panel

4. Point to the **Scope panel** on the right:

> *"Look at the Scope panel. What do you see? i is 0. cartTotal is 0. cartItems[i].price — what is that? Let's hover over cartItems[i] in the code to check."*

Hover over `cartItems[i]` in the code — the tooltip shows the object `{ name: "Wireless Earbuds", price: 4500 }`.

> *"So right now: i = 0, cartTotal = 0, and the item we are about to add is the Wireless Earbuds at ₦4500. Let's execute this line and watch what changes."*

---

### Step 3 — Step Through With F10

5. Press **F10** — the addition runs. The yellow arrow moves to the end of the loop body

> *"Ask: what is cartTotal now?"* Let students read the Scope panel — it now shows `cartTotal: 4500`.

6. Press **F8** (Resume) — code runs to the breakpoint again for iteration 2

> *"The loop hit the breakpoint again. Now i = 1. cartTotal = 4500. We are about to add the Phone Case at ₦1200. Press F10."*

7. Press **F10** — Scope panel shows `cartTotal: 5700`

8. Press **F8** again for iteration 3:

> *"i = 2, cartTotal = 5700. Screen Protector — ₦800. After this we expect 6500."*

9. Press **F10** — Scope panel shows `cartTotal: 6500`

10. Press **F8** for iteration 4:

> *"Last item — USB-C Cable at ₦600. After this the loop ends."*

11. Press **F10** — Scope panel shows `cartTotal: 7100`

12. Press **F8** — loop is done. Code continues to the console.log calls. The Console shows:
```
Cart total: ₦7100
Items in cart: 4
```

> **Say:** *"We watched every single addition happen. 0 → 4500 → 5700 → 6500 → 7100. If at any step the value were wrong, we would have caught it at exactly that iteration. That is the power of breakpoints — you watch your code run in slow motion."*

---

### Step 4 — Remove the Breakpoint

13. Click the blue dot on line 14 to remove it:

> *"To remove a breakpoint, click the dot again. If I refresh now, the code runs normally with no pauses."*

14. Refresh — code runs to completion with no pause.

---

## Teaching Tips

- **Have students call out values before each F10** — "What do we expect cartTotal to be after this step?" This keeps them engaged and builds prediction habit
- **The hover tooltip** is a bonus: hovering over any variable in the Sources code panel shows its current value as a tooltip. Show this after Step 2
- **If students ask "how do I debug without a loop?"** — set the breakpoint on any line you want to inspect, not just inside loops. Anywhere in the file
- **If the Scope panel is not visible** — it is on the right side of the Sources tab. If it is closed, look for the vertical "Scope" text on the right panel edge and click it to expand

---

## What's Next

**Task 31** → Module 4 Combined Demo
All three tools in one session: console methods on student data → uncomment and fix the three bugs → set a breakpoint and step through the cart loop.