# Demo Guide — Module 13, Topic 2: Inheritance and super
**Module 13 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node)

---

## What This Demo Teaches

Students see the full inheritance mechanism: extends and super(), method override vs super.method(), a two-level Account/SavingsAccount hierarchy, and an array of mixed types each calling their own getInfo() version (polymorphism in action).

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js`

---

## Demo Steps

### Part 1 — extends + super

> *"Ask: if Student extends User, does Student have access to greet()?"*

Run Part 1. Show greet() and getInfo() working on a Student instance (inherited). Show getEnrolment() (own). Show both instanceof results: true.

> *"super(name, email) calls User's constructor. Without it, name and email would never be set — you'd get undefined. super must come before any use of this in the child constructor."*

---

### Part 2 — Override + super.method()

> *"Admin has its own getInfo. Ask: when admin.getInfo() is called, which version runs?"*

Run Part 2. Show admin getting the Admin version. Show inst getting the User version plus the appended instructor info.

> *"Admin replaces getInfo completely. Instructor extends it with super.getInfo(). Both call admin.greet() — that's inherited and unchanged. The mixed array in Part 4 is the payoff: forEach calls getInfo on each user, and each runs its own version."*

---

### Part 3 — Account Hierarchy

> *"Ask: does SavingsAccount have a deposit method?"*

Run Part 3. Show deposit working (inherited from Account). Show getProgress (own).

> *"savings.deposit() works even though SavingsAccount didn't define it — JavaScript walks up the chain to Account. getBalance() works inside getProgress() for the same reason."*

---

### Part 4 — Array of Mixed Users

> *"Watch what happens when we call getInfo() on each user in the array."*

Run Part 4. Show each type getting its own version of getInfo().

> *"This is polymorphism — the same method call produces different output depending on which class the instance belongs to. The forEach doesn't need to know which type each user is — it just calls getInfo() and each object handles it correctly."*

---

## Teaching Tips

- **super() must be first** — demonstrate the error by commenting out `super(name, email)` and trying to use `this.course = course` first: "ReferenceError: Must call super constructor"
- **Part 4 polymorphism** is a key concept — name it explicitly: "This is called polymorphism — many forms"
- Contrast Admin (replaces) vs Instructor (extends with super) explicitly before running

---

## What's Next

**Topic 3** → Static Methods and Private Fields
