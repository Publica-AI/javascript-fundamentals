# Module 13 — Topic 1: Defining Classes and Constructors
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Defining Classes and Constructors
**Subheadline:** Module 13, Topic 1 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Module 13 introduces object-oriented programming — a way of organising code around blueprints (classes) that produce objects (instances). You've already worked extensively with objects. Classes formalise the pattern of creating many objects with the same shape and methods. By the end of this topic you'll be able to define a class, create instances from it, and apply all the array methods you know from Module 12 to arrays of instances.

---

### SLIDE 2 — What Is a Class?
**Type:** Concept
**Headline:** A Class Is a Blueprint — Instances Are the Objects Built from It
**Content:**

```js
// Object literal — one specific student
const student = {
  name: "Amara Obi",
  score: 88,
  getGrade() { return this.score >= 70 ? "Pass" : "Fail"; }
};

// Class — a blueprint for creating many students
class Student {
  constructor(name, score) {
    this.name  = name;
    this.score = score;
  }

  getGrade() {
    return this.score >= 70 ? "Pass" : "Fail";
  }
}

const amara = new Student("Amara Obi", 88);
const chidi = new Student("Chidi Nwosu", 45);

console.log(amara.getGrade());  // Pass
console.log(chidi.getGrade());  // Fail
```

**Object literal vs class:**
| | Object literal | Class |
|-|---------------|-------|
| Use for | One object | Many objects of the same shape |
| Reuse | Copy-paste | `new ClassName()` |
| Methods | Defined once per object | Defined once, shared by all instances |

**Visual:** An object literal box on the left labeled "one student"; a class box on the right with three `new Student()` arrows creating three separate student instances, all sharing the same method definitions

**Speaker Notes:**
You've been writing object literals since Module 9 — `{ name: "Amara", score: 88 }`. That works perfectly for one object. But what if you have a hundred students, all with the same properties and methods? You'd copy-paste the same structure a hundred times. A class solves this: define the structure once, then `new Student(...)` creates as many instances as you need. Each instance has its own property values but shares the same method definitions. This is the core benefit of classes: one definition, infinite reuse.

---

### SLIDE 3 — The constructor Method
**Type:** Code
**Headline:** constructor Runs When You Call new — It Sets Up the Instance's Properties
**Content:**

```js
class Course {
  constructor(title, price, level) {
    this.title  = title;
    this.price  = price;
    this.level  = level;
    this.enrolled = 0;  // default value
  }

  getLabel() {
    return this.title + " — ₦" + this.price.toLocaleString() + " [" + this.level + "]";
  }

  enroll() {
    this.enrolled += 1;
    return "Enrolled! Total: " + this.enrolled;
  }
}

const jsCourse   = new Course("JavaScript Fundamentals", 15000, "Beginner");
const htmlCourse = new Course("HTML & CSS Basics",       12000, "Beginner");

console.log(jsCourse.getLabel());
// JavaScript Fundamentals — ₦15,000 [Beginner]

console.log(jsCourse.enroll());  // Enrolled! Total: 1
console.log(jsCourse.enroll());  // Enrolled! Total: 2
console.log(htmlCourse.enrolled); // 0 — separate instance
```

- `constructor(...)` is called automatically when `new` is used
- `this` inside the constructor refers to the **new instance being created**
- Properties set with `this.x = value` become the instance's own properties
- Methods defined in the class body are shared by all instances (on the prototype)

**Visual:** The `new Course(...)` call on the left; an arrow into the constructor; `this.title`, `this.price`, `this.level` being set; the resulting jsCourse object shown with all three properties; htmlCourse shown as a separate object with its own values

**Speaker Notes:**
The constructor is the setup function that runs whenever you call `new`. The arguments you pass to `new Course(...)` become the parameters of the constructor. Inside the constructor, `this` refers to the new object being created — `this.title = title` sets the title property on that new object. Notice `this.enrolled = 0` — you can set default values in the constructor for properties that don't come from arguments. When we call `jsCourse.enroll()` twice, `jsCourse.enrolled` becomes 2. But `htmlCourse.enrolled` is still 0 — completely separate instance.

---

### SLIDE 4 — Instances Are Independent
**Type:** Code
**Headline:** Each Instance Has Its Own Property Values — Methods Are Shared
**Content:**

```js
class Product {
  constructor(name, price, stock) {
    this.name  = name;
    this.price = price;
    this.stock = stock;
  }

  getInfo() {
    const status = this.stock > 0 ? "In stock" : "Out of stock";
    return this.name + " — ₦" + this.price + " (" + status + ")";
  }

  buy(qty) {
    if (qty > this.stock) return "Not enough stock";
    this.stock -= qty;
    return "Purchased " + qty + ". Remaining: " + this.stock;
  }
}

const earbuds = new Product("Wireless Earbuds", 4500, 10);
const cable   = new Product("USB Cable",        800,   3);

console.log(earbuds.getInfo());  // Wireless Earbuds — ₦4500 (In stock)
console.log(earbuds.buy(3));     // Purchased 3. Remaining: 7
console.log(earbuds.stock);      // 7

console.log(cable.stock);        // 3 — unchanged by earbuds.buy()
```

- Changing `earbuds.stock` does not affect `cable.stock`
- Both instances share the same `getInfo` and `buy` methods (defined once)
- `instanceof` checks what class an object was created from

```js
console.log(earbuds instanceof Product);  // true
console.log(earbuds instanceof Array);    // false
```

**Visual:** Two product instances side by side — earbuds (stock: 7 after purchase) and cable (stock: 3 unchanged); a shared methods box above both, showing getInfo and buy with lines connecting to both instances

**Speaker Notes:**
Properties are per-instance: earbuds has `stock: 10` initially, cable has `stock: 3`. Calling `buy` on earbuds changes `earbuds.stock` but not `cable.stock` — they're completely separate. Methods, however, are shared — both earbuds and cable use the exact same `getInfo` and `buy` function definitions. This is efficient: JavaScript doesn't copy the methods for every instance; it stores them once on the prototype. `instanceof` is useful for type-checking — it tells you whether an object was created by a specific class.

---

### SLIDE 5 — Arrays of Class Instances
**Type:** Code
**Headline:** Create Arrays of Instances and Apply Higher-Order Functions — This Is Why Classes Shine
**Content:**

```js
class Student {
  constructor(name, score, course) {
    this.name   = name;
    this.score  = score;
    this.course = course;
  }

  getGrade() {
    if (this.score >= 70) return "Pass";
    if (this.score >= 50) return "Borderline";
    return "Fail";
  }

  getSummary() {
    return this.name + " — " + this.score + "% — " + this.getGrade();
  }
}

const students = [
  new Student("Amara Obi",    88, "JavaScript"),
  new Student("Chidi Nwosu",  45, "HTML & CSS"),
  new Student("Funmi Adeyemi", 72, "JavaScript"),
  new Student("Gbenga Lawal", 91, "JavaScript")
];

// Higher-order functions work exactly the same on class instances
const passers = students.filter(s => s.getGrade() === "Pass");
console.log(passers.map(s => s.getSummary()));
// ["Amara Obi — 88% — Pass", "Funmi Adeyemi — 72% — Pass", "Gbenga Lawal — 91% — Pass"]

const average = Math.round(
  students.reduce((acc, s) => acc + s.score, 0) / students.length
);
console.log("Average:", average);  // 74
```

**Visual:** An array of four Student instances; filter separating out the three passers; map converting each to a summary string; the final array of strings shown

**Speaker Notes:**
This is where classes and array methods connect. An array of class instances is just an array — all the methods from Module 12 work identically. `filter(s => s.getGrade() === "Pass")` calls the class method on each instance. `reduce((acc, s) => acc + s.score, 0)` accesses the score property. The objects in the array happen to be class instances, but from the array method's perspective they're just objects — it calls the callback for each one. This combination — classes for data modelling, array methods for data processing — is the pattern used throughout real JavaScript applications.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Defining Classes and Constructors
**Content:**

- A class is a blueprint for creating multiple objects of the same shape
- `constructor(...)` runs when `new` is called — sets instance properties with `this.x = value`
- Methods defined in the class body are shared by all instances
- Each instance has its own property values but shares method definitions
- `instanceof` checks which class an object was created from
- Arrays of class instances work with all array higher-order functions

**Quick reference:**
```js
class Thing {
  constructor(prop) {
    this.prop = prop;    // instance property
  }
  getLabel() {           // shared method
    return this.prop;
  }
}

const t = new Thing("value");
console.log(t.prop);         // value
console.log(t.getLabel());   // value
console.log(t instanceof Thing); // true
```

**Up Next:** Topic 2 — Inheritance and super

**Visual:** Summary card with the class anatomy labeled — class keyword, constructor, this.property, method definition, and new call; each part labeled

**Speaker Notes:**
Three things to remember: classes are blueprints, constructors set properties, methods are shared. The `new` keyword is what triggers the constructor and creates the instance. In Topic 2 we extend this with inheritance — building a more specific class from a general one using `extends` and `super`. This allows a `PremiumStudent` class to inherit everything from `Student` and add its own specific behaviour.
