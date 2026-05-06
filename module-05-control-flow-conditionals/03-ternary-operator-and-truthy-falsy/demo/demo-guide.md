# Demo Guide — Ternary Operator & Truthy/Falsy
**Module 5, Topic 3 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see the ternary operator and the if/else equivalent side by side — identical output, different syntax. Then truthy/falsy values are tested live, including the surprises: `[]` passes an if check, `""` fails it, `0` fails it. The `||` default value pattern closes the demo. Every check is preceded by a prediction question.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Confirm `username = ""` and `balance = 4200` give this output:
```
--- Part 1: Ternary ---
if/else result: Balance low
Ternary result: Balance low
Member: Premium Member
Notification: Please top up your account
--- Part 2: Truthy / Falsy ---
No username — show login
Balance is: 4200
Cart reference exists: (empty array)
Hello, Guest
```

---

## Demo Steps

### Opening — The Compact Decision

Point to the if/else block (lines 17–22) and the ternary on line 25, and say:

> *"These two blocks produce identical output. One is four lines. One is one line. They are the same decision — written two different ways. The ternary doesn't add power. It adds brevity."*

---

### Part 1 — Ternary Operator

1. **Ask before running:**

> *"balance is 4200, minBalance is 5000. The condition is balance >= minBalance. Is that true or false? What will statusLabel2 be?"*

2. Run Part 1:
```
if/else result: Balance low
Ternary result: Balance low
Member: Premium Member
Notification: Please top up your account
```

3. Point to the two statusLabel logs:

> *"Same result, different syntax. The key difference: statusLabel needed let. statusLabel2 can be const — because the ternary evaluates to a value immediately and never needs to be reassigned."*

4. Ask:

> *"When would you NOT use a ternary? If you need to run multiple statements in one branch — like two console.logs and a calculation — you need an if/else block. Ternary is for one value per side."*

---

### Part 2 — Truthy/Falsy

1. Before running, point to `username = ""` and ask:

> *"username is an empty string. If I put it in an if condition — `if (username)` — does the if block run or the else block?"*

Let students answer. Most will say "if" — because they haven't learned falsy yet.

2. Run Part 2:
```
No username — show login
```

> *"The else ran. Empty string is falsy. It behaves like false inside an if condition."*

3. Point to `if (balance)` with balance = 4200:

> *"balance is 4200 — a positive number. Will the if block run?"*

Run — it runs (truthy). Then change `balance` to `0` and ask the same question:

> *"Now balance is 0. Truthy or falsy?"*

Run — the if block does NOT run. Zero is falsy.

4. The critical moment — point to `if (cartItems)` where `cartItems = []`:

> *"cartItems is an empty array. Is that truthy or falsy?"*

Take answers. Most will say falsy (it's empty). Run it:
```
Cart reference exists: []
```

> *"It ran! An empty array is TRUTHY. This surprises almost everyone the first time. The six falsy values are: false, 0, empty string, null, undefined, NaN. An empty array is NOT in that list. It's an object reference — and object references are always truthy."*

5. The `||` pattern:

> *"`username || 'Guest'`. username is an empty string — falsy. So the || expression returns the right side: 'Guest'. If username were 'Ngozi', the left side would be truthy, so it would return 'Ngozi'. This is the standard default value pattern."*

---

## Teaching Tips

- **The `[]` truthy surprise is the headline moment** — give it space. Ask for predictions, show the output, and let the surprise land before explaining
- **Test `Boolean([])` in the DevTools Console** to confirm for doubters: it logs `true`
- **If students ask about `??` (nullish coalescing)** — briefly note it exists but only treats `null` and `undefined` as falsy (not `0` or `""`). Tell them they'll encounter it in later modules

---

## What's Next

**Task 39** → Module 5 Combined Demo
All three topics in one session: build the grade calculator with if/else (Topic 1), rewrite the day scheduler as a switch with the fall-through bug (Topic 2), add a ternary for a Pass/Fail label and test truthy/falsy surprises (Topic 3).