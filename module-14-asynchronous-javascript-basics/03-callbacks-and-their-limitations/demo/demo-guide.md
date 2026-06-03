# Demo Guide — Module 14, Topic 3: Callbacks & Their Limitations
**Module 14 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node)

---

## What This Demo Teaches

Students recognise that callbacks are a pattern they've already been using, see how sequential async operations require nesting, experience the readability cliff when nesting reaches 5 levels, and get a preview of how async/await solves the problem in Module 16.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js`
3. Full demo takes ~10 seconds (parts are sequenced with delays)

---

## Demo Steps

### Part 1 — Callbacks You Already Know

> *"A callback is just a function you pass to another function. You've been writing them since Module 11. Let me name them."*

Point to forEach, map, and setTimeout in the output. Name each one: "callback, callback, callback."

> *"Every time you write `function() { ... }` inside parentheses, you're writing a callback. The receiving function (forEach, setTimeout, addEventListener) decides when to call it."*

---

### Part 2 — Sequential Async with Callbacks

> *"Now the real challenge: three async steps that depend on each other. Step 2 needs Step 1's result. Step 3 needs Step 2's result."*

Show output appearing one second apart: verify → fetch → send → done.

> *"Look at the code: `sendWelcomeEmail` is inside `fetchEnrolledCourses` which is inside `verifyStudent`. Each callback contains the next step. This is the only way to guarantee order with callbacks — you nest."*

Open the code and point at the indentation growing rightward.

---

### Part 3 — Callback Hell

> *"What if we have 5 steps? Ask yourself: how would you add a step 6?"*

Show output: 5 steps completing in sequence.

> *"Look at the script — 5 levels of nesting. Each closing brace lines up with a different step. Now imagine adding error handling to each level: `if (err) return;` at every single level. This is called callback hell — or the pyramid of doom."*

Scroll through the code slowly, pointing at each indentation level.

---

### Part 4 — The Problems (and Preview)

> *"Four problems with this pattern — read them on screen."*

Let students read the list. Then show the async/await preview.

> *"Same 3 steps. Flat. Readable. No nesting. That's what Promises and async/await give you — and that's Module 16. But you needed to understand callbacks first, because Promises are built on top of them."*

---

## Teaching Tips

- **Make them predict** — ask "how would you add Step 6?" before showing the nesting problem. Let them feel the pain.
- **Name callbacks everywhere** — point back to forEach, map, filter, addEventListener. The term should feel familiar, not new.
- **Don't teach Promises here** — resist the urge to solve the problem now. The preview is enough motivation. Module 16 delivers the solution.
- **The code works** — emphasise that callback hell isn't broken code. It produces correct results. The problem is human readability and maintainability, not correctness.

---

## What's Next

**Module 14 Combined Demo** → A continuous walkthrough tying together execution order, timers, and callbacks into one narrative.
