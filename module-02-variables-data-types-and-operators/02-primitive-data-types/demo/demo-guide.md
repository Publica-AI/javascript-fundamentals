# Demo Guide — Primitive Data Types
**Module 2, Topic 2 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 8–10 minutes
**Files:** `script.js` (run via `<script>` tag or DevTools Console)

---

## What This Demo Teaches

Students will declare one variable of each primitive type, inspect each with `typeof`, and watch the `typeof null` quirk live. The third part — showing that `"2500" + 500` gives `"2500500"` — is the most memorable moment and the one they will thank you for later when they encounter it in real code.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run it linked from a simple HTML file or paste parts directly into the DevTools Console

---

## Demo Steps

### Part 1 — One Variable of Each Type

1. Show the five declarations in VS Code — do not run yet
2. **Ask students for each variable:**

> *"I've declared `name` as `"Ada Okonkwo"`. What type is that? What will `console.log(name)` print?"*

3. Repeat the question for `price`, `isEnrolled`, `discount`, and `userInput`
4. Run the script — show the Console output:
```
Ada Okonkwo
2500
true
null
undefined
```

> **Say to students:** *"Five values, five types. Notice `userInput` — I declared it but never assigned a value. JavaScript automatically sets it to `undefined`. It's not an error. It just means no one has put a value in that container yet."*

---

### Part 2 — typeof for Each

1. Point to the five `typeof` lines in Part 2
2. **Ask the prediction question before each one:**

> *"What do you think `typeof name` returns?"*

> *"What do you think `typeof discount` returns?"*

3. Run Part 2 and show the output:
```
string
number
boolean
object      ← pause here
undefined
```

4. **Pause at `typeof null` showing `"object"`:**

> **Say to students:** *"You probably expected `'null'`. So did every JavaScript developer when this was first discovered. `typeof null` returning `'object'` is a bug in JavaScript that has existed since 1995. They cannot fix it now without breaking the entire web. So it stays. You just have to know it."*

5. Write it on the board or in a comment: `typeof null → "object" (quirk — memorise this)`

---

### Part 3 — The String-vs-Number Bug

1. Show the `strAmount` and `numAmount` declarations
2. **Ask students:**

> *"Both look like the number 2500. What's the difference? What will each one give when I add 500?"*

3. Run the final two logs:
```
2500500
3000
```

4. **Let students react** — most will be surprised

> **Say to students:** *"The string version concatenated — it treated `500` as more text to stick on the end. The number version did actual maths. This is one of the most common bugs in JavaScript. Whenever you read a number from a form input, a URL, or any text source, it arrives as a string. You must convert it to a number before doing arithmetic. We will cover that conversion in Module 3."*

---

## Teaching Tips

- **Never skip the prediction questions** — they are what makes the `typeof null` moment land with impact
- **Write `typeof null → "object"` visibly** — students need to see it confirmed and framed as something to memorise, not figure out
- **Linger on Part 3** — the string-vs-number bug causes real bugs in real projects. This is the moment you earn their trust as a teacher who is preparing them for production code
- **Optional extension:** ask students to type `typeof 42`, `typeof "hello"`, and `typeof true` into their own DevTools Console

---

## What's Next

**Task 13** → Slides for *'Arithmetic, Comparison & Logical Operators'*
We have values and types — now we need to operate on them. Next, we learn how to calculate, compare, and combine values using JavaScript operators.