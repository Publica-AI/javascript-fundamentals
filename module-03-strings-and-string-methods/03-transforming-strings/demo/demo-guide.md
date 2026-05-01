# Demo Guide — Transforming Strings
**Module 3, Topic 3 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students will see the real problem first — messy user input — and then watch each transformation method fix a specific piece of it. The structure is deliberate: show the messy string, show what's wrong, apply the fix. Part 5 brings it together into a full cleaning pipeline that produces three clean, production-ready strings from four messy raw inputs.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. **Before running anything**, point to the raw input variables at the top of the file and ask students to read them aloud — they will immediately see the problems (spaces, wrong case, dashes)

---

## Demo Steps

### Opening — Show the Problem First

Before running any code, point to the raw input strings:

> *"A user just submitted our registration form. This is exactly what they typed. What problems do you see?"*

Let students call out: extra spaces, wrong case on the email, dashes in the phone number. Write their observations on the board or in the chat. Then say:

> *"Our job is to clean this data before we store it or use it. Let's fix it one method at a time."*

---

### Part 1 — trim()

1. **Ask before running:**

> *"The raw name is '  ngozi OKONKWO  '. What's the length including those spaces? What should it be after trimming?"*

2. Run Part 1:
```
--- BEFORE trim() ---
Name: "  ngozi OKONKWO  "
Length: 18
--- AFTER trim() ---
Name: "ngozi OKONKWO"
Length: 13
```

> **Say to students:** *"Six characters were just spaces — JavaScript was counting them. After trim(), only the real characters remain. If you try to compare '  ngozi  ' === 'ngozi', it fails. After trim(), it would pass. This is why you always trim before comparing or storing."*

---

### Part 2 — toLowerCase() / toUpperCase()

1. Show the chained call `rawEmail.trim().toLowerCase()`
2. **Ask:**

> *"The email is '  ADA@GMAIL.COM  '. After trim() it becomes 'ADA@GMAIL.COM'. After toLowerCase() — what should it be?"*

3. Run Part 2:
```
--- Case Methods ---
ada@gmail.com
LAGOS
```

> **Say to students:** *"Two methods chained. Trim removes the spaces, toLowerCase fixes the case. Result: a consistent, compareable email. Notice the city went the other way — to uppercase for display. Same method, different direction."*

---

### Part 3 — replace() and replaceAll()

1. **Ask before running:**

> *"The phone is '080-345-678-90'. If I use replace('-', '') — just replace — how many dashes will be removed?"*

2. Wait for answers — then run Part 3:
```
--- replace() vs replaceAll() ---
080345-678-90
08034567890
Clean phone: 08034567890
```

> **Say to students:** *"replace() only removed the first dash. The other two are still there. replaceAll() removed every single one. This is a common mistake. If you need to strip all occurrences of something, always use replaceAll()."*

---

### Part 4 — slice()

1. Show the two phone slices first — straightforward
2. Then show the domain extraction — **ask:**

> *"I want just the domain part from 'ada@gmail.com' — everything after the @. The @ is at some position. How do I find that position and use it to slice from the right place?"*

3. Walk through `cleanEmail.indexOf("@") + 1` — indexOf finds the @ position, +1 moves past it
4. Run Part 4:
```
--- slice() ---
080
34567890
Email domain: gmail.com
```

> **Say to students:** *"We combined indexOf from Topic 2 with slice from this topic. indexOf told us where the @ is. Slice started one character after it. This is how real email parsing works."*

---

### Part 5 — The Full Cleaning Pipeline

1. Show all three pipeline statements together before running

> *"This is the full clean. Three raw strings in, three production-ready strings out. Everything chained."*

2. Run Part 5:
```
--- FULL CLEANING PIPELINE ---
Email: ada@gmail.com
Name:  ngozi O.
Phone: 08034567890
```

> **Say to students:** *"This is the pattern you will use in every form, every registration page, every user input handler you build. Raw data comes in messy. You clean it before you store it or compare it. trim() → toLowerCase() → replace() — that's the pipeline. Memorise it."*

---

## Teaching Tips

- **Start with the messy data** — the lesson has no impact if students don't first feel the problem. The "what problems do you see?" question at the start sets up every method as a solution to a specific issue they identified
- **For Part 3**, the single-vs-all behaviour of replace is worth writing on the board: `replace = first only | replaceAll = every one`
- **Part 4's domain extraction** combines methods from Topics 2 and 3 — highlight this as "chaining concepts, not just chaining methods"
- **If time is short**, skip Part 4 and go straight from Part 3 to Part 5 — the pipeline is the essential takeaway

---

## What's Next

**Task 23** → Module 3 combined demo
The full module session: build a greeting with template literals, validate a registration email with includes/startsWith/endsWith, then clean the same email with trim/toLowerCase/replace — one continuous input-handling story.