# Demo Guide — Creating Objects with Properties and Methods
**Module 9, Topic 1 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 10–12 minutes
**Files:** `script.js`

---

## What This Demo Teaches

Students see objects built from the ground up: basic property access, methods with `this`, nested object and array access chains, and dynamic property addition/deletion. Part 3 (nested access) is the critical teaching moment — students who can navigate `order.items[0].name` are ready for real API data in Module 16.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all four parts output correctly

---

## Demo Steps

### Part 1 — Creating an Object

> *"Four separate variables vs one object. Ask: if you want to pass this student to a function, which version is easier?"*

Run Part 1. Show: full object log, then individual property access.

> *"One variable, four properties. `student.name` reads: go to student, get the property named 'name'. This is dot notation — Topic 2 covers it in depth."*

---

### Part 2 — Methods

1. **Ask before running:**

> *"getGrade uses `this.score`. What is `this` inside an object method?"*

2. Run Part 2. Show: "Pass", then the full introduction.

> *"`this` refers to the object itself. So `this.score` is the same as `studentWithMethods.score`. introduce() calls `this.getGrade()` — a method calling another method on the same object. Both return strings because they have `return` statements."*

---

### Part 3 — Nested Objects

1. **Ask before running:**

> *"order.customer is itself an object. How do we access the customer's city? order.items is an array. How do we access the first item's name?"*

2. Run Part 3. Walk through each access chain.

> *"order.customer.name — follow the path: order → customer object → name property. order.items[0].name — order → items array → index 0 → name property. This is the shape of API data. When we fetch orders from a server in Module 16, the response looks exactly like this."*

---

### Part 4 — Add and Delete

1. **Ask before running:**

> *"profile is a const object with 2 properties. Can we add a new property? Can we update an existing one? Can we delete one?"*

2. Run Part 4. Show all three operations succeed.

> *"const prevents reassigning profile to a different object. It does not prevent modifying the object's contents. We add email and completedModules (2 new props), update level from 'beginner' to 'intermediate', then delete completedModules. After delete, it's gone — accessing it would return undefined."*

---

## Teaching Tips

- **Part 3's chain navigation** is the skill to practise — ask students to predict each output before running: "What is `order.items[1].price`?" (1200)
- **`this` in methods** is notoriously confusing — keep it simple for now: "this = the object. `this.score` = this object's score." The deeper complexities of `this` binding come in later courses
- **If students ask about arrow function methods** — tell them arrow functions have different `this` behavior and shouldn't be used for methods inside object literals; use regular functions or shorthand

---

## What's Next

**Task 69** → Slides for Dot Notation and Bracket Notation
