# Module 13 — Topic 3: Static Methods and Private Fields
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Static Methods and Private Fields
**Subheadline:** Module 13, Topic 3 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — Static Methods
**Type:** Code
**Headline:** static Methods Belong to the Class Itself — Not to Any Instance
**Content:**

```js
class Student {
  constructor(name, score) {
    this.name  = name;
    this.score = score;
  }

  getGrade() {
    return this.score >= 70 ? "Pass" : "Fail";
  }

  // Static method — called on the class, not an instance
  static fromCSV(csvLine) {
    const [name, score] = csvLine.split(",");
    return new Student(name.trim(), Number(score.trim()));
  }

  static getAverage(students) {
    const total = students.reduce((acc, s) => acc + s.score, 0);
    return Math.round(total / students.length);
  }
}

// Call on the class — not on an instance
const amara = Student.fromCSV("Amara Obi, 88");
console.log(amara.name);   // Amara Obi
console.log(amara.score);  // 88

const students = [
  new Student("Amara",  88),
  new Student("Chidi",  45),
  new Student("Funmi",  72)
];
console.log(Student.getAverage(students));  // 68

// Cannot call static on an instance
// amara.fromCSV("...")  // TypeError
```

- `static` methods are called on the class (`Student.method()`)
- Cannot be called on instances — `instance.staticMethod()` throws a TypeError
- Common uses: factory methods (create instances from different data formats), utility functions that work with the class but don't belong to any one instance

**Visual:** Two call paths — `Student.fromCSV(...)` going to the static method box on the class; `amara.getGrade()` going to the instance method box; a crossed-out arrow showing `amara.fromCSV(...)` is invalid

---

### SLIDE 3 — Private Fields
**Type:** Code
**Headline:** Private Fields (#) Can Only Be Accessed Inside the Class — They Enforce Encapsulation
**Content:**

```js
class BankAccount {
  #balance;      // private field — # prefix
  #pin;

  constructor(owner, balance, pin) {
    this.owner  = owner;
    this.#balance = balance;
    this.#pin     = pin;
  }

  getBalance() {
    return "₦" + this.#balance.toLocaleString();
  }

  withdraw(amount, pin) {
    if (pin !== this.#pin) return "Wrong PIN";
    if (amount > this.#balance) return "Insufficient funds";
    this.#balance -= amount;
    return "Withdrawn ₦" + amount + ". " + this.getBalance();
  }
}

const account = new BankAccount("Amara Obi", 50000, 1234);
console.log(account.getBalance());     // ₦50,000
console.log(account.withdraw(5000, 1234)); // Withdrawn ₦5,000. ₦45,000
console.log(account.withdraw(5000, 9999)); // Wrong PIN

// Cannot access private fields from outside
// console.log(account.#balance);  // SyntaxError
// console.log(account.#pin);      // SyntaxError
```

- Declare private fields at the top of the class with `#name`
- Access with `this.#name` inside the class
- Any access from outside the class throws a SyntaxError
- This protects internal state — external code can't corrupt it directly

**Visual:** The BankAccount class with a locked padlock icon over #balance and #pin; public methods (getBalance, withdraw) shown as the only authorised access routes; an arrow from outside being blocked with "SyntaxError" label

---

### SLIDE 4 — Getters and Setters
**Type:** Code
**Headline:** get and set — Computed Properties That Read Like Fields
**Content:**

```js
class Product {
  #price;
  #stock;

  constructor(name, price, stock) {
    this.name    = name;
    this.#price  = price;
    this.#stock  = stock;
  }

  // Getter — accessed as a property, not a method call
  get price() {
    return "₦" + this.#price.toLocaleString();
  }

  // Getter with computation
  get status() {
    return this.#stock > 0 ? "In stock (" + this.#stock + ")" : "Out of stock";
  }

  // Setter — validates before assigning
  set price(newPrice) {
    if (newPrice < 0) throw new Error("Price cannot be negative");
    this.#price = newPrice;
  }
}

const earbuds = new Product("Wireless Earbuds", 4500, 10);

// Access like a property — no () needed
console.log(earbuds.price);   // ₦4,500
console.log(earbuds.status);  // In stock (10)

// Assign like a property — no () needed
earbuds.price = 3999;
console.log(earbuds.price);   // ₦3,999
```

- `get prop()` — define a computed property read as `instance.prop` (no parentheses)
- `set prop(value)` — define validation logic before assigning to a private field
- Getters/setters provide a controlled interface to private data

**Visual:** The earbuds instance accessing `earbuds.price` — an arrow into the get price() getter which reads #price and formats it; contrast with `earbuds.#price` (blocked); the setter shown validating before writing

---

### SLIDE 5 — Static Properties
**Type:** Code
**Headline:** Static Properties Belong to the Class — Shared Across All Instances
**Content:**

```js
class Course {
  static count = 0;           // shared across all instances
  static VAT_RATE = 0.075;    // constant

  #price;

  constructor(title, price) {
    this.title  = title;
    this.#price = price;
    Course.count += 1;        // increment on every new instance
  }

  get priceWithVAT() {
    return Math.round(this.#price * (1 + Course.VAT_RATE));
  }

  static getCount() {
    return "Courses created: " + Course.count;
  }
}

const js   = new Course("JavaScript Fundamentals", 15000);
const html = new Course("HTML & CSS Basics",       12000);
const git  = new Course("Git & GitHub",            10000);

console.log(Course.count);        // 3
console.log(Course.getCount());   // Courses created: 3

console.log(js.priceWithVAT);     // 16125 (15000 * 1.075)
console.log(git.priceWithVAT);    // 10750
```

- `static count = 0` — a class-level counter, incremented in the constructor
- Static properties are accessed as `ClassName.property`, not `instance.property`
- Useful for: counters, constants, configuration shared across all instances

**Visual:** Three Course instances shown with arrows pointing up to a shared `Course.count = 3` counter on the class; the VAT_RATE constant on the class used by the instance's priceWithVAT getter

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Static Methods and Private Fields
**Content:**

- `static method()` — called on the class, not on instances; good for factories and utilities
- `#field` — private field, accessible only inside the class; declared at top of class body
- `get prop()` — computed property, accessed without parentheses
- `set prop(value)` — setter with validation before writing to private state
- `static count = 0` — class-level property shared across all instances

**Quick reference:**
```js
class Thing {
  static count = 0;
  #value;

  constructor(v) {
    this.#value = v;
    Thing.count++;
  }

  get value() { return this.#value; }           // getter
  set value(v) { if (v >= 0) this.#value = v; } // validated setter

  static getCount() { return Thing.count; }     // static method
}
```

**Up Next:** Module 14 — Asynchronous JavaScript Basics

**Visual:** Summary card with the class anatomy showing all features together: static field, private field, constructor, getter/setter, static method — each labeled
