# Demo Guide — Searching & Checking Strings
**Module 3, Topic 2 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 8–10 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students will see all four search methods in action on realistic Nigerian inputs — an email address, a website URL, a filename, and a phone number. The climax is Part 5: building a live email validator by combining `includes()`, `endsWith()`, and `.length` with the logical operators from Module 2. The invalid email test at the end shows that the validation actually catches a real bad input.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Have the Console open and ready

---

## Demo Steps

### Part 1 — includes()

1. Show the email string: `"ngozi@publica.ng"`
2. **Ask before running:**

> *"I want to check if this email has an @ sign. What method do I use? What will it return?"*

3. Run Part 1:
```
--- includes() ---
true
false
true
```

> **Say to students:** *"It returns a boolean — yes or no. That's all you need for most checks. The third log combines two includes() calls with && — a basic sanity check: does it have an @ AND a dot? Both true means it at least looks like an email."*

---

### Part 2 — indexOf()

1. **Ask before running:**

> *"The string is 'ngozi@publica.ng'. Character positions start at 0. Count along — what position is the @ at?"*

2. Let students count: n=0, g=1, o=2, z=3, i=4, @=5
3. Run Part 2:
```
--- indexOf() ---
5
-1
@ is at position: 5
Not found returns: -1
```

> **Say to students:** *"Position 5 — exactly where we counted. And -1 means 'not found'. JavaScript uses -1 because 0 is a valid position — it's the very first character. So -1 can only mean 'does not exist in this string'."*

---

### Part 3 — startsWith()

1. **Ask before running:**

> *"I have a URL 'https://publicaacademy.com'. Does it start with 'https'? Does it start with 'http:' — notice the colon is different. What about the phone number — does it start with '080'?"*

2. Run Part 3:
```
--- startsWith() ---
true
false
true
false
```

> **Say to students:** *"The URL check is the most common use of startsWith — making sure links are secure. The phone prefix check is practical for Nigerian numbers. Notice 'https' and 'http:' give different results — it has to match exactly, character by character."*

---

### Part 4 — endsWith()

1. **Ask before running:**

> *"The filename is 'module-3-notes.pdf'. Does it end with '.pdf'? Does it end with '.docx'? And the email — does it end with '.ng'?"*

2. Run Part 4:
```
--- endsWith() ---
true
false
true
```

> **Say to students:** *"The '.ng' ending tells you it's a Nigerian domain. You'd use this to show a Nigerian flag or apply a local tax rate. endsWith is how you check file types — does this upload end with '.jpg' or '.png'?"*

---

### Part 5 — Combined Validation

1. Walk through the three boolean checks before running:

> *"We check for @, a dot, and that the string is longer than 5 characters. If all three are true, the email looks valid. If any one of them is false, the whole thing is false. Which operator does that?"*

2. Students should answer: `&&`
3. Run Part 5:
```
--- Email Validation ---
Email "ngozi@publica.ng" is valid: true
Email "notanemail" is valid: false
```

> **Say to students:** *"The good email passes all three checks — true. 'notanemail' has no @ and no dot — both checks fail — false. This is exactly how a real registration form works before it even sends data to the server. JavaScript checks the input, gives you the result as a boolean, and you decide what to do with it."*

---

## Teaching Tips

- **Ask prediction questions on every part** — especially for indexOf, have students physically count positions on the whiteboard or in chat before you run the code
- **The -1 for "not found" always needs emphasis** — write it on the board: `indexOf returns -1 if nothing was found`
- **Part 5 is the payoff** — the bad email test shows students this is real, useful code, not just an exercise
- **Optional extension:** change the email to `"notvalid"` and walk through which checks fail — students see exactly where the validation breaks

---

## What's Next

**Task 21** → Slides for *'Transforming Strings'*
We've checked strings. Now we change them — trim spaces, change case, replace characters, and slice out the parts we need.