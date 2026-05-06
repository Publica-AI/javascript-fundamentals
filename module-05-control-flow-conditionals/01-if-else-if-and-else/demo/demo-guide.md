# Demo Guide — if, else if & else
**Module 5, Topic 1 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see a grade calculator built step by step — first a simple pass/fail, then a full A–F chain, then the wrong-order bug demonstrated live. Every part uses the same `score` variable at the top so students can predict the output before each run. The wrong-order demonstration is the critical moment: students see that the same code can produce the wrong answer if conditions are ordered incorrectly.

---

## Setup (Before Class)

1. Open `script.js` in VS Code and run it with Node or a browser + DevTools
2. Confirm `score = 74` produces:
```
--- Part 1: Basic if/else ---
Amara Obi passed!
--- Part 2: Grade Assignment ---
Grade: B — Merit
--- Part 3: Wrong Order Bug ---
(Wrong order) Result: Pass or higher
--- Part 4: Combined Conditions ---
Certificate eligible: yes
Resit required: no
```

---

## Demo Steps

### Opening — Change One Variable, Different Paths

Point to line 6 (`let score = 74`) and say:

> *"Every output in this demo changes based on one number. I'm going to change score a few times throughout — and every time I change it, a different branch of the code will run. That's the whole point of conditionals."*

---

### Part 1 — Basic if/else

1. **Ask before running:**

> *"Score is 74. This if/else checks: is score >= 50? True or false?"*

Let students answer (true). Run Part 1.

```
Amara Obi passed!
```

2. Change `score` to **40**, run again:
```
Amara Obi needs to retake the exam.
```

> *"Same code, different path. The condition was false this time, so the else block ran. Set score back to 74."*

---

### Part 2 — if / else if / else Chain

1. **Ask before running:**

> *"Score is 74. There are five conditions — A, B, C, D, F. Which grade does 74 get? Walk me through the logic."*

Let students reason through it: 74 >= 80? No. 74 >= 70? Yes → Grade B. Run Part 2.

```
Grade: B — Merit
```

2. Change score to **90**, ask again before running. Then **55**, then **40**.

> *"The chain checks from top to bottom. The first condition that's true — that block runs, and everything else is skipped."*

---

### Part 3 — Wrong Order Bug

1. **Ask before running:**

> *"Same score: 74. But this time the conditions are in a different order — lowest first. What grade do you predict?"*

2. Run Part 3 with score = 74:
```
(Wrong order) Result: Pass or higher
```

> *"74 should be a B — Merit. But it got 'Pass or higher'. Why?"*

3. Ask students to identify the problem. Then explain:

> *"score >= 50 was the first condition. 74 satisfies it. JavaScript stopped there. It never looked at >= 70. That code is unreachable. The rule: put the most specific condition first. In this case, the highest number first."*

---

### Part 4 — Combined Conditions

1. **Ask before running (score still 74, attended = true):**

> *"The first check needs BOTH score >= 50 AND attended to be true. Is 74 >= 50? Yes. Is attended true? Yes. So?"*

2. Run Part 4:
```
Certificate eligible: yes
Resit required: no
```

3. Change `attended` to **false** and ask:

> *"Now attended is false. Does the && check pass? No — both must be true. What about the || check — does the resit condition fire?"*

Change and run to confirm.

---

## Teaching Tips

- **Always ask students to predict before running** — this builds the mental model faster than watching passively
- **The wrong-order bug is the key teaching moment** — make sure students feel the "ah, that's why order matters" moment
- **If students ask about nested if statements** — briefly acknowledge they exist but tell them chaining else if is almost always cleaner

---

## What's Next

**Task 35** → Slides for switch Statements
Students will see a cleaner syntax for checking a single variable against multiple fixed values.