# Demo Guide — Defining and Calling Functions
**Module 7, Topic 1 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see functions built step by step: basic definition and call → the difference between referencing and calling → hoisting in action → naming → the DRY principle demonstrated with a three-call report generator. Part 2 (reference vs call) is the critical teaching moment — it makes the role of `()` permanently clear by showing what happens without them.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all five parts output correctly

---

## Demo Steps

### Part 1 — Basic Function

1. **Ask before running:**

> *"What do you think the output of calling showWelcome() twice will be? Will it be different each time?"*

2. Run Part 1. Show: same two lines printed twice.

> *"Defined once, called twice. If we needed to add a third call, we write one line: showWelcome(). If the message changes, we update two lines in the function body and all calls benefit."*

---

### Part 2 — Reference vs Call

1. **Ask before running:**

> *"What do you expect `console.log(showWelcome)` to print — the function definition or the welcome message?"*

2. Run Part 2. Show: the function definition is logged, then the second call actually runs it.

> *"Without `()`, you get the function itself — an object in memory. With `()`, JavaScript executes it. This is why `showWelcome` and `showWelcome()` are two completely different things. The parentheses are the trigger."*

---

### Part 3 — Hoisting

1. **Ask before running:**

> *"printDivider() is called before the function is defined. Will this cause an error?"*

2. Run Part 3. Show: the divider prints — no error.

> *"Function declarations are hoisted — JavaScript reads the whole file before executing it, and pulls declarations to the top. So calling it before its definition is valid. But don't rely on this habit — always define functions before you use them. It makes code easier to read."*

---

### Part 4 — Named Function

> *"The function is called printOrderSummary — a verb (print) plus a subject (OrderSummary). What would we name a function that calculates a total? That validates an email address?"*

Run Part 4. Show the formatted order summary.

> *"Any time you find yourself writing a block that has a single clear job, give it a name. That name becomes documentation."*

---

### Part 5 — DRY Principle

1. **Ask before running:**

> *"printReport takes two inputs — a label and an array of amounts. We're calling it three times with different data. How many times is the for loop written?"*

2. Run Part 5. Show: three reports, one function.

> *"Once. If we need to change the report format — say, add a count of items — we change it in one place and all three calls update. If we'd copy-pasted the loop three times, we'd need to update three places. Every copy-paste is a future bug waiting to happen."*

---

## Teaching Tips

- **Part 2 is the critical moment** — students who confuse `showWelcome` and `showWelcome()` will write bugs that are hard to debug; make this contrast memorable
- **For Part 5**, point out that `printReport("Weekend Sales", [...])` adds a third report with zero extra logic — that's the power of DRY in action
- If students ask about the parameters (label, amounts) in Part 5 — tell them this is a preview of Topic 2, which covers parameters in full

---

## What's Next

**Task 53** → Slides for Parameters, Arguments & Return Values
