# Module 13 — Topic 2: Inheritance and super
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Inheritance and super
**Subheadline:** Module 13, Topic 2 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — What Is Inheritance?
**Type:** Concept
**Headline:** extends Creates a Child Class That Inherits All Parent Properties and Methods
**Content:**

```js
class User {
  constructor(name, email) {
    this.name  = name;
    this.email = email;
  }

  greet() {
    return "Hello, " + this.name + "!";
  }
}

// Student extends User — inherits name, email, greet()
class Student extends User {
  constructor(name, email, course) {
    super(name, email);   // call the parent constructor
    this.course = course; // add the new property
  }

  getEnrolment() {
    return this.name + " is enrolled in " + this.course;
  }
}

const amara = new Student("Amara Obi", "amara@example.com", "JavaScript");

console.log(amara.greet());        // Hello, Amara Obi!   (inherited)
console.log(amara.getEnrolment()); // Amara Obi is enrolled in JavaScript (own)
console.log(amara instanceof Student); // true
console.log(amara instanceof User);    // true
```

- `extends User` means Student inherits everything from User
- `super(name, email)` calls the parent constructor — **must be first in the child constructor**
- The child can add its own properties and methods beyond what the parent defines

**Visual:** Two class boxes — User (parent) on top with name, email, greet(); Student (child) below connected by an extends arrow; Student shown with all inherited properties plus course and getEnrolment()

---

### SLIDE 3 — super and Method Override
**Type:** Code
**Headline:** Override a Parent Method to Customise Behaviour — Call super.method() to Keep the Original
**Content:**

```js
class User {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return "User: " + this.name;
  }
}

class Admin extends User {
  constructor(name, role) {
    super(name);
    this.role = role;
  }

  // Override getInfo — replace the parent version
  getInfo() {
    return "Admin [" + this.role + "]: " + this.name;
  }
}

class Instructor extends User {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  // Override — call parent version and add to it
  getInfo() {
    return super.getInfo() + " | Instructor: " + this.subject;
  }
}

const admin = new Admin("Publica Team", "superadmin");
console.log(admin.getInfo());
// Admin [superadmin]: Publica Team

const instructor = new Instructor("Dr. Eze", "JavaScript");
console.log(instructor.getInfo());
// User: Dr. Eze | Instructor: JavaScript
```

- A child method with the same name as a parent method **overrides** it
- `super.methodName()` calls the parent version — useful for extending, not replacing
- `super(...)` in the constructor calls the parent constructor

**Visual:** Three class boxes — User with getInfo; Admin overriding with its own version (red X over parent); Instructor extending with super.getInfo() call (green + symbol showing combination)

---

### SLIDE 4 — Inheritance Chain Example
**Type:** Code
**Headline:** Build a Hierarchy — Each Level Adds Specifics on Top of the General
**Content:**

```js
class Account {
  constructor(owner, balance) {
    this.owner   = owner;
    this.balance = balance;
  }

  getBalance() {
    return "₦" + this.balance.toLocaleString();
  }

  deposit(amount) {
    this.balance += amount;
    return "Deposited ₦" + amount + ". New balance: " + this.getBalance();
  }
}

class SavingsAccount extends Account {
  constructor(owner, balance, goal) {
    super(owner, balance);
    this.goal = goal;
  }

  getProgress() {
    const pct = Math.round((this.balance / this.goal) * 100);
    return this.getBalance() + " of ₦" + this.goal.toLocaleString() + " (" + pct + "%)";
  }
}

const savings = new SavingsAccount("Amara Obi", 18000, 50000);
console.log(savings.deposit(5000));   // inherited method — works
// Deposited ₦5000. New balance: ₦23,000

console.log(savings.getProgress());   // own method
// ₦23,000 of ₦50,000 (46%)

console.log(savings instanceof SavingsAccount); // true
console.log(savings instanceof Account);         // true
```

**Visual:** Account class on top with owner, balance, getBalance(), deposit(); SavingsAccount below with extends arrow, adding goal and getProgress(); a savings instance shown using both inherited and own methods

---

### SLIDE 5 — When to Use Inheritance
**Type:** Concept
**Headline:** Use Inheritance When a Child Is a Specialised Version of the Parent
**Content:**

**Good candidates for inheritance:**
```
User
├── Student  (adds course, score, getGrade)
├── Admin    (adds role, permissions)
└── Instructor (adds subject, modules)

Account
├── SavingsAccount  (adds goal, getProgress)
└── CurrentAccount  (adds overdraftLimit, canWithdraw)

Product
├── PhysicalProduct (adds weight, shippingCost)
└── DigitalProduct  (adds downloadUrl, fileSize)
```

**The "is-a" test:** A child should pass the "is a" test:
- `Student` is a `User` ✓
- `SavingsAccount` is an `Account` ✓
- `Order` is a `User` ✗ — don't force it

**Composition over inheritance for unrelated behaviour:**
- Don't make a `Cart` extend `User` just because carts belong to users
- Instead, give `Cart` a `userId` property (composition)

**Visual:** A hierarchy diagram showing good inheritance (User → Student/Admin/Instructor) on the left, contrasted with a bad example (Order extends User — crossed out) on the right; the "is-a" test label shown

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Inheritance and super
**Content:**

- `class Child extends Parent` — child inherits all parent properties and methods
- `super(...)` in the constructor — must be called first; runs the parent constructor
- `super.method()` — calls the parent version of an overridden method
- Overriding — define the same method name in the child to replace the parent's version
- `instanceof` — returns `true` for the instance's class AND all ancestor classes
- Use "is-a" test to decide whether inheritance is appropriate

**Quick reference:**
```js
class Child extends Parent {
  constructor(a, b, c) {
    super(a, b);     // parent constructor first
    this.c = c;      // child-specific property
  }

  method() {
    return super.method() + " — extended";  // call parent + add
  }
}
```

**Up Next:** Topic 3 — Static Methods and Private Fields

**Visual:** Summary card with the extends/super anatomy labeled and the "is-a" decision test shown as a two-step checklist
