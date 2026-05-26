# Module 13 — Topic 1: Defining Classes and Constructors
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Defining Classes and Constructors
**Subheadline:** Module 13, Topic 1 of 3 — JavaScript Fundamentals

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
