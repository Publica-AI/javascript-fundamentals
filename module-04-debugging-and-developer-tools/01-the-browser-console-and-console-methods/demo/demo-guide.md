# Demo Guide — The Browser Console & Console Methods
**Module 4, Topic 1 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `index.html`, `script.js`

---

## What This Demo Teaches

Students see all four console methods in action on real data — a student results list and a savings account scenario. The structure is deliberate: log first (the tool they already know), then warn and error (so they see the visual difference live), then table (the "wow" moment that makes arrays readable). Each part runs in the same script, and the page itself shows nothing — everything goes to the Console tab.

---

## Setup (Before Class)

1. Open `index.html` in Chrome
2. Press **F12** to open DevTools — make sure the **Console** tab is active
3. Open `script.js` in VS Code so students can see the code on the left and the Console output on the right

---

## Demo Steps

### Opening — The Console Tab

Before running anything, point to the blank page in Chrome and ask:

> *"This page has no visible content. But when I run the script, the browser will tell me everything the code did. Where do I look?"*

Let students answer — they should say the Console. Open DevTools, click Console, then say:

> *"This is the conversation between your JavaScript and you. Every console method you call sends a message here. Let's see all four."*

---

### Part 1 — console.log()

1. **Ask before running Part 1:**

> *"I have `console.log("Balance:", balance)` where balance is 500. How many arguments am I passing? What will the output look like?"*

2. Run Part 1 and show the output:
```
=== console.log ===
App: Publica Academy
City: Lagos
Balance: 500
Min balance: 1000
Students: 4 enrolled
```

> **Say to students:** *"Notice the last line — three arguments: a string, a number, and another string. They all appear on one line separated by spaces. The label pattern `console.log("Balance:", balance)` is something you will write hundreds of times. Always label your logs."*

---

### Part 2 — console.warn() and console.error()

1. **Ask before running Part 2:**

> *"I have two console calls — one with warn, one with error. How do you think the Console will display them differently from log?"*

2. Run Part 2 and show the output — the yellow warn line and the red error line will appear:
```
=== console.warn & console.error ===
[yellow] Low balance — below minimum of ₦1000
[red]    Password cannot be empty!
Code is still running after warn and error
```

> **Say to students:** *"The code did not stop. Both warn and error are visual signals — yellow for 'pay attention', red for 'this is a problem'. The last log proves execution continued past both of them. Now scan your Console quickly — which line jumps out? That's exactly why these exist."*

3. **Point out the filter buttons** at the top of the Console toolbar:

> *"See these filter buttons — Default, Verbose, Warnings, Errors? You can click 'Errors' to show only red lines, or 'Warnings' to show only yellow. In a large application with hundreds of logs, this filter is how you find problems instantly."*

---

### Part 3 — console.table()

1. **Ask before running Part 3:**

> *"I have an array of four student objects — each has name, score, and passed. If I use console.log(students), what do you think we'll see?"*

2. Run **only** `console.log(students)` first (comment out console.table temporarily) — show the collapsed tree:

> *"See this collapsed arrow? You have to expand it. And expand each object. For four students that's manageable, but imagine 400 API records. Not readable."*

3. Now run `console.table(students)`:
```
=== console.table ===
| (index) | name          | score | passed |
|---------|---------------|-------|--------|
|    0    | "Amara Obi"   |  88   |  true  |
|    1    | "Bayo Ade"    |  74   |  true  |
|    2    | "Chidi Nweke" |  48   |  false |
|    3    | "Dami Lawal"  |  91   |  true  |
```

> **Say to students:** *"Every array of objects — API response, database query, student records, product list — use console.table while you are debugging it. It is the fastest way to understand your data."*

4. **Click a column header** to sort the table:

> *"You can click 'score' to sort by score. Chrome gives you this for free — no code needed. This is for debugging only, not for production."*

---

## Teaching Tips

- **Run console.log(students) before console.table** — the contrast is the lesson. Students need to feel the problem before seeing the solution
- **The production rule is important** — emphasise it at the end: before any code goes live, search the file for "console.log" and remove every instance
- **If students ask whether errors stop the code** — emphasise no: `console.error()` only logs. It does not throw. The JavaScript `throw` keyword is what actually stops execution — they will see that in Module 14

---

## What's Next

**Task 27** → Slides for Reading Error Messages
Students will learn to read the three most common error types — ReferenceError, TypeError, SyntaxError — and understand what each message is telling them.
