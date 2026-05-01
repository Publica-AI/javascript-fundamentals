# Demo Guide — String Basics & Template Literals
**Module 3, Topic 1 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 8–10 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students will see concatenation and template literals produce identical output — then feel the difference in readability. The key moment is Part 2: students realise the template literal version is cleaner, faster to write, and easier to read. Part 3 shows that `${}` is not limited to variables — any expression works. Part 4 closes with a multi-line certificate that looks like real output.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Have a browser open with the Console ready

---

## Demo Steps

### Part 1 — Concatenation (The Old Way)

1. Show the concatenation lines — **before running, ask:**

> *"I want to build this greeting: 'Welcome, Chukwuemeka! You are in Port Harcourt.' How many + signs do you count in my concatenation?"*

2. Let students count — the answer is 4 for the greeting alone
3. Run Part 1 and show the output:
```
Welcome, Chukwuemeka! You are in Port Harcourt.
You are on Module 3 of JavaScript Fundamentals. Progress: 17%.
```

> **Say to students:** *"It works. But look at that code — strings opening and closing, + signs everywhere. Any time you change the message you have to count the quotes. There is a better way."*

---

### Part 2 — Template Literals (The Modern Way)

1. Point to the template literal versions — **ask:**

> *"Same output, same variables. Which version do you find easier to read?"*

2. Run Part 2 — show the Console produces identical output to Part 1

> **Say to students:** *"Identical result. But the template literal version reads almost like plain English. You can see exactly what the string will say without mentally parsing + signs. This is why the industry uses backticks for any string that contains a variable. From this module forward, if you reach for + to build a string with a variable inside, stop yourself and use a backtick instead."*

---

### Part 3 — Expressions Inside ${}

1. Show the three expression examples — **before running, ask:**

> *"The full price is ₦15,000 with a 10% discount. What should the discounted price be? And what do you think ${studentName.toUpperCase()} will print?"*

2. Run Part 3:
```
Full price: ₦15000
Your discounted price: ₦13500
CHUKWUEMEKA — keep going!
```

> **Say to students:** *"The ${} ran the maths right inside the string. And it called toUpperCase — a method we haven't formally covered yet, but you can already read what it does. That's the power of expressions inside ${}. You don't always need an extra variable to hold the result."*

---

### Part 4 — Multi-Line Certificate

1. Show the multi-line template literal — point out there are no `\n` escape characters
2. Run Part 4 — the Console shows the certificate formatted across multiple lines

> **Say to students:** *"The string just has actual line breaks in it — press Enter inside backticks and the string preserves it. This is how developers build HTML snippets, email templates, and formatted outputs without going crazy with \n characters. The string looks like what it produces."*

---

## Teaching Tips

- **Let students feel the contrast between Parts 1 and 2 before explaining** — ask them to count the + signs first, then reveal the template literal. The "aha" moment lands harder when they experience the problem before seeing the solution
- **The toUpperCase() in Part 3** will spark questions — say "we cover all the string methods in Topics 2 and 3 of this module; right now just notice it works inside ${}"
- **Optional:** change the student name to one of the students in the room — the class engages immediately when their name appears on screen

---

## What's Next

**Task 19** → Slides for *'Searching & Checking Strings'*
We know how to build strings. Next: how to interrogate them — does this string contain an @? Does it start with 'http'? Does it end with '.ng'?