# Module 9 — Topic 1: Creating Objects with Properties and Methods
## Slide Deck (Full) — 6 Slides with Speaker Notes

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Creating Objects with Properties and Methods
**Subheadline:** Module 9, Topic 1 of 3 — JavaScript Fundamentals

**Speaker Notes:**
Module 8 gave students arrays — ordered lists. Module 9 introduces the other fundamental data structure: objects. While arrays organise data by position, objects organise data by name. Together, arrays of objects are the dominant pattern in every web application: a list of orders, a collection of users, a product catalogue. Topic 1 covers the core object model: creating objects, properties, methods, nested structures, and dynamic modification. By the end of this topic, students can model any real-world entity as a JavaScript object.

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

**Speaker Notes:**
Ask: "What's wrong with the first version?" If you want to pass a student to a function, you'd need to pass 4 separate parameters. If you want to put 20 students in an array, you'd need 4 arrays (names, scores, courses, passed) all keeping track of each other by index. An object solves this: one variable holds all related data. Now you can put the student in an array, pass it to a function, or return it from a function — as a single unit. Ask: "What's the difference between an array and an object?" Array: ordered by position (index). Object: ordered by name (key). Use arrays for lists of similar things. Use objects for a single entity with named properties.

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

**Speaker Notes:**
`this` is one of JavaScript's most confusing concepts, but at the object literal level it's straightforward: `this` means "the object this method belongs to." So `this.score` inside `student.getGrade()` is the same as `student.score`. The method can access and use the object's own data via `this`. The shorthand syntax (`introduce() { }`) is preferred in modern JavaScript — it's equivalent to `introduce: function() { }` but shorter. Note: arrow functions should NOT be used as object methods because they handle `this` differently (covered in more advanced courses). For now: use regular functions or shorthand for methods.

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

**Speaker Notes:**
This is the slide that connects to real-world development. When students call an API in Module 16 (Fetch), the response will look exactly like this — a nested structure with objects inside objects and arrays inside objects. Walk through each access chain step by step: `order.customer.name` — first get the customer object from order, then get name from that. `order.items[0].name` — first get the items array, then get index 0, then get name from that object. The pattern is always: navigate down the tree one level at a time. Have students practice in their head: "What does `order.items[1].price` give us?" 1200.

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

**Speaker Notes:**
Ask: "Can you add properties to a const object?" Yes — same reason you can push to a const array. const prevents reassigning the variable, not modifying the object's contents. After `delete profile.completedModules`, that property is gone — accessing `profile.completedModules` would return undefined. Point out that `delete` returns true on success. In practice, delete is used less often than you might expect — it's more common to set a property to null or undefined to "clear" it rather than removing the key entirely. But for removing sensitive data (like a temporary token) or cleaning up objects, delete is correct.

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

**Speaker Notes:**
The table covers the complete object model for this topic. Ask students to name a real-world entity they've worked with in previous modules and describe how they'd model it as an object — what properties, what methods? For example: a Konga product has id, name, price, category, inStock (properties) and a displaySummary() method that formats all the details. Topic 2 goes deeper on two ways to access properties — dot notation (which students have been using) and bracket notation (which is needed when the property name is stored in a variable, comes from user input, or contains special characters).
