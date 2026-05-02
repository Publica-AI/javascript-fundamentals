# Module Demo Guide — Debugging & Developer Tools
**Module 4 — JavaScript Fundamentals**
**Topics covered:** The Browser Console & Console Methods · Reading Error Messages · Breakpoints & Stepping Through Code
**Type:** Combined module walkthrough
**Duration:** 25–30 minutes
**Files:** `index.html`, `script.js`

---

## What This Demo Teaches

Three tools in one session, all on the same student results data. Part 1 shows all four console methods running on real data. Part 2 introduces the three error types one at a time — same bug-then-fix pattern as the topic demo. Part 3 sets a breakpoint inside a loop and steps through it watching the score accumulation. The story is one continuous debugging session: inspect the data → fix the bugs → understand the loop.

---

## Setup (Before Class)

1. Open `index.html` in Chrome with DevTools on the **Console** tab
2. Confirm the clean output:
```
=== PART 1: Console Methods ===
Course: JavaScript Fundamentals
Enrolled: 4 students
[yellow] 1 student(s) did not pass
[table]  | (index) | name | score | passed |
=== PART 2: Error Messages ===
Course: JavaScript Fundamentals
Min pass score: 50
=== PART 3: Breakpoints ===
Total score: 301
Average score: 75.25
```
3. Confirm all three bug blocks in Part 2 are **commented out**

---

## Demo Steps

### Opening — One Tool at a Time

Before running anything, say:

> *"Developers use three tools to understand what their code is doing: the Console (to see values), error messages (to find bugs), and breakpoints (to pause execution and inspect). Today we use all three on the same data. Let's go."*

---

### Part 1 — Console Methods

1. Run Part 1 and show the output:
```
=== PART 1: Console Methods ===
Course: JavaScript Fundamentals
Enrolled: 4 students
[yellow] 1 student(s) did not pass
[table showing all 4 students]
```

> **Say to students:** *"The yellow warn tells us Chidi didn't pass — that's a potential problem worth flagging. The table at the bottom shows all four students at a glance. Compare this to running console.log(students) — click the expand arrow and show the difference."*

2. Run `console.log(students)` separately in the Console to show the collapsed tree, then contrast it with the table already visible above.

> *"console.table is always the right choice when your data is an array of objects. That covers Topic 1."*

---

### Part 2 — Error Messages

1. Point to the clean logs at the bottom of Part 2 and say:

> *"This code is clean right now. I am going to introduce three bugs. Same rules as before: read the error before touching the code."*

2. **Bug 1 — ReferenceError:** Uncomment `console.log("Course:", coursename)`, save and refresh.
```
Uncaught ReferenceError: coursename is not defined
```

Ask: "What type? What's the message? What line?" → Fix: `courseName`

3. **Bug 2 — TypeError:** Uncomment `console.log("Min pass:", minPassScore.toUpperCase())`, save and refresh.
```
Uncaught TypeError: minPassScore.toUpperCase is not a function
```

Ask: "What does this tell us about minPassScore?" → Fix: remove `.toUpperCase()`

4. **Bug 3 — SyntaxError:** Uncomment the summary object block, save and refresh.
```
Uncaught SyntaxError: Unexpected identifier 'count'
```

Point out that Part 1 and Part 3 output also disappeared:

> *"All output is gone. SyntaxError stops the whole file. The bug is the missing comma after `courseName`. Work backwards from the reported line."* → Fix: add the comma.

> **Say to students:** *"Three error types, three fixes. You now know exactly what ReferenceError, TypeError, and SyntaxError mean and how to fix each. That covers Topic 2."*

---

### Part 3 — Breakpoints

1. All bugs are fixed. Switch to the **Sources** tab.

> *"Part 3 calculates the average score by looping through all four students. I want to watch the total build up one student at a time. I'll set a breakpoint on line 72 — inside the loop."*

2. Click line 72 in `script.js` — the blue dot appears on `totalScore = totalScore + students[i].score`

3. Refresh. Code pauses at line 72.

> *"Paused. Scope panel shows: i = 0, totalScore = 0. Amara's score is 88. Let's execute this line."*

4. Press **F10** → Scope panel: `totalScore = 88`

> *"88 added. Press F8 to resume to the next iteration."*

5. Press **F8** → pauses again: `i = 1`, `totalScore = 88`

> *"Bayo is next — score 74. After this we expect 162."*

6. Press **F10** → `totalScore = 162`. Press **F8** → `i = 2`, Chidi's score is 48

7. Press **F10** → `totalScore = 210`. Press **F8** → `i = 3`, Dami's score is 91

8. Press **F10** → `totalScore = 301`. Press **F8** → loop ends. Code runs to completion.

```
=== PART 3: Breakpoints ===
Total score: 301
Average score: 75.25
```

> **Say to students:** *"We watched every addition: 0 → 88 → 162 → 210 → 301. Four iterations, four steps. If the total had been wrong at any point, we would have caught it the moment it happened — not after the fact by adding console.logs."*

---

### Closing

> *"Three topics. One session. Console methods to inspect data, error messages to find bugs, breakpoints to pause and watch execution. These are the tools that separate someone who can write code from someone who can debug it. You now have all three."*

---

## Teaching Tips

- **Part 2 pace** — don't rush the bug-fix cycle. Each error type should get its own moment: show the error, read it aloud, ask students to diagnose, then fix
- **For Part 3, have students predict each value** before pressing F10 — "Amara is 88, so totalScore will be...?" — this keeps the class active and builds the mental model
- **If a student asks why the average is 75.25 and not a round number** — it's not supposed to be. That's a good teaching moment: 301 / 4 = 75.25. JavaScript gives you the full decimal result

---

## What's Next

**Task 32** → Module 4 Assessment & Project
The assessment tests console method usage, error message identification, and breakpoint concepts. The project gives students a buggy starter script.js to fix using the debugging tools from this module.