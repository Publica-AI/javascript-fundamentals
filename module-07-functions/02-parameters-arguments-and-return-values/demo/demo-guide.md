# Demo Guide — Parameters, Arguments & Return Values
**Module 7, Topic 2 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see parameters and arguments in use, then see what happens when argument order is wrong (Part 1), default parameters preventing undefined (Part 2), return values making computed results available downstream (Part 3), early returns as a cleaner alternative to nested if/else (Part 4), and the crucial contrast between a function that only prints vs one that returns (Part 5).

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all five parts output correctly
3. Note: Part 1 intentionally includes a wrong-order call to demonstrate positional assignment

---

## Demo Steps

### Part 1 — Parameters & Arguments

1. **Ask before running:**

> *"greetStudent takes two parameters: name and course. We're calling it with 'Amara Obi' and 'JavaScript Fundamentals'. Which is which?"*

2. Run Part 1 (all three calls). Show the correct and incorrect outputs.

> *"First call: correct order — name gets 'Amara Obi', course gets 'JavaScript Fundamentals'. Third call: reversed — name gets 'JavaScript Fundamentals'. Arguments go to parameters by position. There's no label matching — order is everything."*

---

### Part 2 — Default Parameters

1. **Ask before running:**

> *"applyDiscount has `discount = 0.1`. What happens when we call it with just one argument? What about when we pass 0 explicitly?"*

2. Run Part 2. Show all three calls.

> *"Omitting discount uses 10%. Passing 0.2 overrides the default with 20%. Passing 0 explicitly uses 0% — no discount at all. The default only kicks in when the argument is missing (undefined). Passing 0 is not the same as passing nothing."*

---

### Part 3 — Return Values

1. **Ask before running:**

> *"calculateTotal returns the total instead of printing it. What does that let us do with the result that we couldn't do with a console.log?"*

2. Run Part 3. Show: total stored in cartTotal, then used in the VAT calculation.

> *"We stored it. We calculated with it. We can pass it to another function, use it in a conditional, add it to a string. return is the handoff — the function computed something and gave it back. The caller decides what to do with it."*

---

### Part 4 — Early Returns

1. **Ask before running:**

> *"getGrade has three return statements. For a score of 85, which return runs? For 55? For 30?"*

2. Run Part 4. Show: Pass, Borderline, Fail.

> *"Each return exits the function immediately. For 85, the first check is true and 'Pass' comes back — the other two return statements are never reached. This is the early return pattern: check the most specific case first, exit as soon as you know the answer."*

---

### Part 5 — No Return = undefined

1. **Ask before running:**

> *"printTotal does the same calculation but calls console.log instead of return. What value does `result` get?"*

2. Run Part 5. Show: the total is printed inside the function, but `result` is undefined.

> *"undefined. The function ran — we can see the total printed. But nothing came back. A function that only console.logs its result is a dead end — the value exists inside the function and then disappears. Always return when you need to use the computed value outside the function."*

---

## Teaching Tips

- **The Part 1 reversed-order call** makes argument-to-parameter position mapping concrete and memorable — students laugh when they see "enrolled in Amara Obi"
- **Part 5 is the most important contrast** — many beginners write functions that only print, then wonder why `const x = myFunction()` gives them undefined
- **If students ask about returning multiple values** — JavaScript functions return one value; if you need multiple, return an object or array (covered in Module 8/9)

---

## What's Next

**Task 55** → Slides for Arrow Functions & Scope Basics
