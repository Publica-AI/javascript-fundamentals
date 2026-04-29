# Demo Guide — Variables: let, const & var
**Module 2, Topic 1 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 8–10 minutes
**Files:** `script.js` (run via a `<script>` tag or pasted into the DevTools Console)

---

## What This Demo Teaches

Students will see the difference between `const` and `let` in action: `const` locks a value in place, `let` allows it to change. The highlight of the demo is deliberately causing a TypeError — live, in the Console — to show that `const` protection is real and immediate.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Make sure the `country = "Ghana"` line at the bottom is **commented out**
3. Have a minimal HTML file ready that links to `script.js`, or be ready to paste code into the DevTools Console directly

---

## Demo Steps

### Part 1 — Declaring const Variables

1. Show the two `const` declarations in VS Code
2. Before running, **ask students:**

> *"I'm going to declare a variable called `country` and set it to the string 'Nigeria'. What do you think will print when I log it?"*

3. Run the script (or paste lines 4–8 into the Console) — show the output:
```
Nigeria
JavaScript Fundamentals
```

> **Say to students:** *"Exactly what we assigned. The `const` keyword tells JavaScript: this value is set — don't let anyone change it. It's a locked box."*

---

### Part 2 — Declaring let Variables and Reassigning Them

1. Point to the `let week = 1` and `let score = 0` declarations
2. **Ask students:**

> *"I log `week` — what do you expect? Now I reassign it to 2 and log again — what changes?"*

3. Run the full script up to the reassignment section and show:
```
1
0
2
85
```

> **Say to students:** *"`let` allows the update — the second log reflects the new value. This is how you would track a student's score as they answer questions, or what week of the course we're on. Values that change should be `let`."*

---

### Part 3 — The TypeError (Live Error)

1. **Ask students:**

> *"I declared `country` as `const`. What do you think will happen if I try to set it to 'Ghana'?"*

2. Allow students to predict — write their guesses on a whiteboard or in the chat
3. Uncomment the line `country = "Ghana";` in VS Code
4. Save and run — the Console shows:

```
TypeError: Assignment to constant variable.
```

> **Say to students:** *"The browser refuses. This error is not a failure — it's the language catching a mistake the moment it happens. If you didn't want `country` to change, you declared it correctly. If you did want it to change, you should have used `let`. The error is telling you exactly what went wrong and exactly where."*

5. Re-comment the line and run the script cleanly again to restore normal output

---

## Teaching Tips

- **Prediction questions are the most important part of this demo** — never just run code and explain after. Always ask first. It makes students think, reveals misconceptions, and makes the result stick
- **Normalise the red error in the Console** — many beginners feel they have "broken something" when they see red text. Explicitly say: "Getting errors means JavaScript is responding to your code. That's good."
- **If a student asks "why not just use `let` for everything?"** — answer: `const` is self-documenting. When you see `const` in code, you know that value never changes. It reduces the number of things you have to track in your head
- **Optional extension:** have students open their own DevTools Console and type the `const`/`let` declarations themselves — they can see the TypeError in their own browser

---

## What's Next

**Task 11** → Slides for *'Primitive Data Types'*
Variables store values — but what kinds of values exist? Next, we learn the five primitive types: string, number, boolean, null, and undefined.