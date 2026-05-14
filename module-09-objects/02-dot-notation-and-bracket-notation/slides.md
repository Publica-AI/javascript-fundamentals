# Module 9 — Topic 2: Dot Notation and Bracket Notation
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Dot Notation and Bracket Notation
**Subheadline:** Module 9, Topic 2 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — Two Ways to Access Properties
**Type:** Concept
**Headline:** Dot Notation for Known Keys — Bracket Notation for Dynamic Keys
**Content:**

```js
const product = {
  name:     "Wireless Earbuds",
  price:    4500,
  inStock:  true,
  "sku-id": "SKU-001"  // ← key with a hyphen — requires brackets
};

// Dot notation — clean syntax, works when key is a valid identifier
console.log(product.name);    // Wireless Earbuds
console.log(product.price);   // 4500

// Bracket notation — works with any key, including special characters
console.log(product["name"]);    // Wireless Earbuds
console.log(product["price"]);   // 4500
console.log(product["sku-id"]);  // SKU-001
// product.sku-id would be a SyntaxError — hyphens not valid in identifiers
```

- Dot notation: `object.key` — simple, readable, works for most property names
- Bracket notation: `object["key"]` — required for keys with special characters or spaces
- Both access the same properties — choose based on what the key looks like

**Visual:** Two access paths shown for the same product object — left side labeled "dot notation" shows `product.name` connecting to "Wireless Earbuds" with a clean line; right side labeled "bracket notation" shows `product["name"]` connecting to the same value; below, a third example shows `product["sku-id"]` with a green checkmark and `product.sku-id` with a red X and "SyntaxError" label

---

### SLIDE 3 — Bracket Notation with Variables
**Type:** Code
**Headline:** Bracket Notation Is Required When the Key Is a Variable
**Content:**

```js
const student = {
  name:    "Amara Obi",
  score:   88,
  course:  "JavaScript",
  passed:  true
};

// Access with a variable key — only works with brackets
const field = "score";
console.log(student[field]);   // 88 — evaluates `field` first, gets 'score'
console.log(student.field);    // undefined — looks for a property literally named 'field'

// Practical use: dynamic field access from user input
const fields = ["name", "score", "course"];

for (const key of fields) {
  console.log(key + ": " + student[key]);
}
// Output:
// name: Amara Obi
// score: 88
// course: JavaScript
```

- `student[field]` evaluates `field` (gets `"score"`), then looks up `student["score"]`
- `student.field` literally looks for a property named `"field"` — which doesn't exist
- Bracket notation with a variable is essential for dynamic, programmatic property access

**Visual:** Two paths from a `field = "score"` variable — left path labeled "bracket notation": `student[field]` → evaluates field → `student["score"]` → 88 (green); right path labeled "dot notation": `student.field` → looks for property named "field" → undefined (red); annotation: "dot notation uses the literal text after the dot, brackets evaluate the expression inside"

---

### SLIDE 4 — Dynamic Property Access Patterns
**Type:** Code
**Headline:** Bracket Notation Enables Runtime Property Selection
**Content:**

```js
const order = {
  id:       "ORD-001",
  customer: "Amara Obi",
  amount:   4500,
  status:   "delivered"
};

// Build a display from any array of keys
function displayFields(obj, keys) {
  for (const key of keys) {
    console.log(key + ": " + obj[key]);
  }
}

displayFields(order, ["id", "customer", "amount"]);
// id: ORD-001
// customer: Amara Obi
// amount: 4500

displayFields(order, ["customer", "status"]);
// customer: Amara Obi
// status: delivered
```

- `obj[key]` where `key` is a loop variable — accesses any property by name
- The same function works for any object and any list of keys
- This pattern is how generic display utilities are built

**Visual:** A function box labeled "displayFields(obj, keys)" with two input arrows: one from the order object and one from the keys array; inside the function box, a loop shows `key` cycling through "id", "customer", "amount" and feeding each into `obj[key]` to produce the output lines on the right

---

### SLIDE 5 — Checking and Destructuring
**Type:** Code
**Headline:** Check If a Property Exists — Destructure to Extract Multiple Values
**Content:**

```js
const user = { name: "Bayo Ade", score: 72, role: "student" };

// Check if a property exists — 'in' operator
console.log("name" in user);    // true
console.log("email" in user);   // false

// Destructuring — extract multiple properties into variables
const { name, score } = user;
console.log(name);   // Bayo Ade
console.log(score);  // 72

// Destructuring with rename
const { name: studentName, role: userRole } = user;
console.log(studentName);  // Bayo Ade
console.log(userRole);     // student

// Destructuring with default value
const { email = "no email on file" } = user;
console.log(email);  // no email on file
```

- `"key" in object` returns `true` if the property exists (even if value is undefined)
- Destructuring: `const { key1, key2 } = object` — shorthand for multiple property assignments
- Rename syntax: `const { key: newName } = object`
- Default values: `const { key = default } = object`

**Visual:** A user object on the left; three destructuring patterns shown as arrows from the object to named variables on the right — "const { name, score }" extracts two properties into two variables; "const { name: studentName }" shows the rename with an arrow from "name" to the renamed variable "studentName"; "const { email = 'no email' }" shows the default kicking in with a dashed arrow when the property doesn't exist

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Dot and Bracket Notation
**Content:**

| Syntax | When to use | Example |
|--------|------------|---------|
| `obj.key` | Known key, valid identifier | `student.name` |
| `obj["key"]` | Special characters in key | `product["sku-id"]` |
| `obj[variable]` | Key is stored in a variable | `obj[fieldName]` |
| `"key" in obj` | Check if property exists | `"email" in user` |
| `const { a, b } = obj` | Extract multiple properties | Destructuring |

**Decision rule:**
- Key is known and simple → dot notation
- Key has special characters → bracket with string
- Key is in a variable → bracket with variable

**Up Next:** Topic 3 — Iterating Objects: for...in and Object.keys
