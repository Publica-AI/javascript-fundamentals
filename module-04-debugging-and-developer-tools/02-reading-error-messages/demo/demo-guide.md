# Demo Guide — Reading Error Messages
**Module 4, Topic 2 of 3 — JavaScript Fundamentals**
**Type:** Live debugging walkthrough
**Duration:** 10–12 minutes
**Files:** `index.html`, `script.js`

---

## What This Demo Teaches

Students watch all three error types appear live — one at a time. Each bug is commented out until the teacher reveals it. The pattern for each is the same: uncomment → run → read the error aloud with the class → fix it live. This repetition builds the habit: error → read → locate → fix. Never guess.

---

## Setup (Before Class)

1. Open `index.html` in Chrome with DevTools (F12) open on the **Console** tab
2. Open `script.js` in VS Code — make sure all three bug blocks are still **commented out**
3. Confirm the clean output runs correctly before class:
```
Student: Amara Obi
Score: 88
Course: JavaScript Fundamentals
Modules: 18
```

---

## Demo Steps

### Opening — The Working Code

Point to the clean output in the Console and say:

> *"This is the working code. Four clean logs, no errors. Now I am going to introduce three bugs into this file — one at a time. Each bug will cause a different type of error. Your job: read the error before I fix it and tell me what you think is wrong."*

---

### Bug 1 — ReferenceError

1. **In VS Code, uncomment this line:**
```js
console.log("Student:", studentname);
```

2. Save and refresh the page. The Console shows:
```
Uncaught ReferenceError: studentname is not defined
    at script.js:12
```

3. **Ask students:**

> *"Read this error with me. What type is it? What is the message? What line? Now look at line 12 — can you see the problem?"*

4. Let students identify the misspelling (`studentname` vs `studentName`).

5. Fix it live:
```js
console.log("Student:", studentName);
```

> **Say:** *"The error said 'studentname is not defined' — not because the variable doesn't exist, but because JavaScript is case-sensitive. studentname and studentName are two different identifiers. The error told us the exact name it couldn't find. We searched for it, spotted the wrong casing, and fixed it in 10 seconds."*

---

### Bug 2 — TypeError

1. **Uncomment this line (keep Bug 1 fixed):**
```js
console.log("Score:", score.toUpperCase());
```

2. Save and refresh. The Console shows:
```
Uncaught TypeError: score.toUpperCase is not a function
    at script.js:20
```

3. **Ask students:**

> *"New error type — TypeError. The message says 'score.toUpperCase is not a function'. What does that tell you about the variable `score`?"*

4. Let students identify that `score` is a number (88), not a string. `toUpperCase()` is a string method.

5. Fix it live:
```js
console.log("Score:", score);
```

> **Say:** *"TypeError means you performed an operation that the value's type does not support. score is a number — it has no toUpperCase method. The error told us exactly which method failed and on which line. No guessing."*

---

### Bug 3 — SyntaxError

1. **Uncomment the entire summary block:**
```js
const summary = {
  student: studentName,
  course: courseInfo.title
  modules: courseInfo.modules
};
console.log("Summary:", summary);
```

2. Save and refresh. The Console shows:
```
Uncaught SyntaxError: Unexpected identifier 'modules'
    at script.js:28
```

3. **Point out that the clean output at the bottom also disappeared:**

> *"Notice something different — ALL the console.log calls below are gone too. Why? Because a SyntaxError stops the entire file from running. Not just the broken section — everything. Zero lines executed."*

4. **Ask students:**

> *"The error says 'Unexpected identifier modules' at line 28. Where is the actual bug?"*

Let students look at the line above — the missing comma after `courseInfo.title`.

5. Fix it live:
```js
const summary = {
  student: studentName,
  course: courseInfo.title,   // ← comma added
  modules: courseInfo.modules
};
```

> **Say:** *"SyntaxError is the trickiest because the reported line is where JavaScript gave up — not always where the mistake is. Here the error reported line 28 (modules) but the bug was on line 27 (missing comma). Always look at the line before the one reported."*

---

### Closing

Show the full clean output again with all three bugs fixed:

> *"Three bugs, three error types, three fixes. Every time you see a red error in your Console, your first step is: read the type, read the message, click the line link. The error is not your enemy — it is a note telling you exactly what went wrong. Treat it like that."*

---

## Teaching Tips

- **One bug at a time** — never uncomment two bugs at once or students lose track of which error belongs to which bug
- **Read errors aloud** — have students say the error message out loud before fixing. Verbalising it builds the reading habit
- **The SyntaxError "whole file stops" point is critical** — it explains why sometimes nothing logs at all and beginners are confused. Make sure it lands clearly
- **If the SyntaxError line number seems wrong** — use it as a teaching moment: "the reported line is where JavaScript gave up. The bug is somewhere before it"

---

## What's Next

**Task 29** → Slides for Breakpoints & Stepping Through Code
Students will learn to pause their code mid-execution using breakpoints in Chrome DevTools and read variable values in the Scope panel.