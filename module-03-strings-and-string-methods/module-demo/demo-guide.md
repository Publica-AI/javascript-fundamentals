# Module Demo Guide — Strings & String Methods
**Module 3 — JavaScript Fundamentals**
**Topics covered:** String Basics & Template Literals · Searching & Checking Strings · Transforming Strings
**Type:** Combined module walkthrough
**Duration:** 20–25 minutes
**Files:** `script.js`

---

## What This Demo Teaches

This demo processes a single user registration form submission from start to finish — one continuous story. Students watch the same raw email address get formatted with a template literal, validated with search methods, cleaned with transformation methods, and finally sliced into parts. Every topic feeds the next, and the payoff is a multi-line confirmation message that looks like real application output.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Make sure students can see the raw input variables at the top — they set up the entire demo

---

## Demo Steps

### Opening — Show the Raw Input

Point to the three raw variables at the top of the file and ask:

> *"This is what a user submitted on a registration form. Before we store or display anything, what problems do you immediately see?"*

Let students identify: leading/trailing spaces, wrong case on the email, dashes in the phone number.

> *"Exactly. By the end of this demo, we will have turned these three messy strings into clean, usable data — using what you learned in all three topics today."*

---

### Part 1 — Template Literals

1. Run Part 1 and show the output:
```
=== PART 1: Template Literals ===
Welcome to Publica Academy!
You entered: "  NGOZI@PUBLICA.NG  "
Name on file: "  Ngozi Eze  "
Registration fee: ₦13500 (10% early-bird discount applied)
```

> **Say to students:** *"The template literal embedded the app name, the raw email (spaces and all), and even calculated the discounted fee inside ${}. This is Topic 1 in action. But notice the email — it still has spaces and wrong case. We haven't cleaned it yet."*

---

### Part 2 — Searching & Checking

1. Walk through the validation checks before running — **ask:**

> *"The raw email is '  NGOZI@PUBLICA.NG  '. I'm trimming it first before checking. Does it have an @? Does it end with '.ng'? Does it start with '0'?"*

2. Run Part 2:
```
=== PART 2: Checking the Raw Email ===
Has @:          true
Has dot:        true
@ at position:  5
Ends with .ng:  true
Starts with 0:  false
Basic validation: true
```

> **Say to students:** *"We used includes(), indexOf(), endsWith(), and startsWith() — all four methods from Topic 2. The email passes the basic validation. Now that we know it's valid, we can clean it for storage."*

---

### Part 3 — Transforming

1. Show the three cleaning statements and ask students to predict each output:

> *"rawEmail.trim().toLowerCase() — step by step. What does trim do? What does toLowerCase do?"*

2. Run Part 3:
```
=== PART 3: Cleaning the Input ===
Clean email:  ngozi@publica.ng
Clean name:   Ngozi Eze
Clean phone:  081234567890
Email domain: publica.ng
First name:   Ngozi
Network:      081
```

> **Say to students:** *"Three messy strings cleaned. And then we sliced them apart — the domain after the @, the first name before the space, the network prefix from the phone. indexOf told us where to cut; slice did the cutting."*

---

### Part 4 — Final Confirmation

1. Show the multi-line template literal before running:

> *"This is the confirmation message that would appear on screen after a successful registration. Every value comes from the cleaned variables — not the raw ones."*

2. Run Part 4:
```
=== PART 4: Confirmation ===

Registration confirmed!
-----------------------
Name:   Ngozi Eze
Email:  ngozi@publica.ng
Phone:  081234567890
Domain: publica.ng
-----------------------
```

> **Say to students:** *"One registration form submission. Four stages: format it for display (template literals), validate it (search methods), clean it (transform methods), then present it (multi-line template literal). This is the full string workflow. Every time a user fills in a form on any web application you build, this is exactly what happens behind the scenes."*

---

## Teaching Tips

- **The through-line is the same data** — students should notice `rawEmail` appearing in Parts 1, 2, and 3 in different states. Point this out explicitly after Part 3
- **Part 4 should land as a "wow" moment** — the raw messy input at the top becomes clean, formatted output at the bottom. Pause here and let students appreciate what the full pipeline produced
- **If students ask "what if the email is invalid?"** — tell them they've already built the check in Part 2. In Module 4 (conditionals) they'll learn how to skip the cleaning step if validation fails

---

## What's Next

**Task 24** → Module 3 Assessment & Project
The assessment covers template literals, the four search methods, and the transformation methods. The project gives students a Nigerian business context and asks them to process and log string data from a starter HTML page.