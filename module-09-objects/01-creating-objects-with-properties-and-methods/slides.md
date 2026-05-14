# Module 9 — Topic 1: Creating Objects with Properties and Methods
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Creating Objects with Properties and Methods
**Subheadline:** Module 9, Topic 1 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — What Is an Object?
**Type:** Concept
**Headline:** An Object Groups Related Data and Behaviour Under One Name
**Content:**

```js
// Five separate variables — no grouping, hard to pass around
const studentName = "Amara Obi";
const studentScore = 88;
const studentCourse = "JavaScript Fundamentals";
const studentPassed = true;

// One object — all data grouped under a single variable
const student = {
  name:    "Amara Obi",
  score:   88,
  course:  "JavaScript Fundamentals",
  passed:  true
};

console.log(student.name);   // Amara Obi
console.log(student.score);  // 88
```

- An object is a collection of **key-value pairs** (also called properties)
- Keys are strings; values can be any type (string, number, boolean, array, another object)
- Created with curly braces `{ }` — each pair is `key: value`, separated by commas
- Access properties with dot notation: `object.key`

**Visual:** Two code blocks side by side — left labeled "5 loose variables" shows the four separate declarations with a red annotation "hard to pass to a function or loop"; right labeled "1 object" shows the student object with green arrows connecting each key to its value, labeled "grouped by concept"

---

### SLIDE 3 — Object Methods
**Type:** Code
**Headline:** Methods Are Functions Stored as Object Properties
**Content:**

```js
const student = {
  name:  "Amara Obi",
  score: 88,

  // Method — a function stored as a property
  getGrade: function() {
    if (this.score >= 70) return "Pass";
    if (this.score >= 50) return "Borderline";
    return "Fail";
  },

  // Method shorthand (modern syntax)
  introduce() {
    return "Hi, I'm " + this.name + " and my grade is " + this.getGrade();
  }
};

console.log(student.getGrade());   // Pass
console.log(student.introduce());  // Hi, I'm Amara Obi and my grade is Pass
```

- A method is a function that lives inside an object
- `this` refers to the object the method belongs to — `this.score` is `student.score`
- Shorthand syntax: `methodName() { }` instead of `methodName: function() { }`
- Call a method with `object.methodName()`

**Visual:** The student object shown as a card with two sections — top section labeled "properties" shows name and score; bottom section labeled "methods" shows getGrade and introduce; arrows from `this.score` inside getGrade and `this.name` inside introduce point back to the properties section, labeled "this = the object itself"

---

### SLIDE 4 — Nested Objects
**Type:** Code
**Headline:** Object Properties Can Be Other Objects or Arrays
**Content:**

```js
const order = {
  id: "ORD-001",
  customer: {
    name:  "Amara Obi",
    email: "amara@example.com",
    city:  "Lagos"
  },
  items: [
    { name: "Wireless Earbuds", price: 4500 },
    { name: "Phone Case",       price: 1200 }
  ],
  total: 5700
};

// Access nested object properties
console.log(order.customer.name);   // Amara Obi
console.log(order.customer.city);   // Lagos

// Access array inside object
console.log(order.items[0].name);   // Wireless Earbuds
console.log(order.items[1].price);  // 1200
console.log(order.items.length);    // 2
```

- Objects can contain other objects — access with chained dot notation
- Objects can contain arrays — access with dot notation then bracket notation
- This is the standard shape of real-world API data

**Visual:** A tree diagram — the root order object branches into three leaf paths: `id` → "ORD-001", `customer` → nested object with three properties, `items` → array with two objects; chained access paths are drawn as arrows: `order.customer.name` traces through the tree to "Amara Obi"; `order.items[0].name` traces through the array

---

### SLIDE 5 — Adding and Deleting Properties
**Type:** Code
**Headline:** Properties Can Be Added or Removed After an Object Is Created
**Content:**

```js
const profile = {
  username: "amara_js",
  level: "beginner"
};

console.log(profile);  // { username: 'amara_js', level: 'beginner' }

// Add new properties
profile.email = "amara@publica.ng";
profile.completedModules = 3;
console.log(profile);
// { username: 'amara_js', level: 'beginner', email: 'amara@publica.ng', completedModules: 3 }

// Update an existing property
profile.level = "intermediate";
console.log(profile.level);  // intermediate

// Delete a property
delete profile.completedModules;
console.log(profile);
// { username: 'amara_js', level: 'intermediate', email: 'amara@publica.ng' }
```

- Assign to `object.newKey = value` to add a property
- Assign to `object.existingKey = value` to update a property
- `delete object.key` removes a property permanently

**Visual:** Three snapshots of the profile object — first shows the initial 2 properties; second shows 4 properties after additions with two new keys highlighted in green; third shows 3 properties after delete with the deleted key shown with a strikethrough in red; arrows show the progression from snapshot to snapshot

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Creating Objects with Properties and Methods
**Content:**

| Concept | Syntax | Purpose |
|---------|--------|---------|
| Create object | `{ key: value }` | Group related data |
| Access property | `object.key` | Read a value |
| Method | `methodName() { }` inside object | Behaviour tied to the object |
| `this` | Inside method: refers to the object | Access the object's own data |
| Nested access | `order.customer.city` | Navigate nested structure |
| Add property | `object.newKey = value` | Extend the object |
| Delete property | `delete object.key` | Remove a property |

**Key insight:** Objects model real-world entities — a student, an order, a product, a user. Properties describe **what it is**. Methods describe **what it can do**.

**Up Next:** Topic 2 — Dot Notation and Bracket Notation
