# Module 18 — Topic 1: Destructuring Arrays & Objects
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Destructuring Arrays & Objects
**Subheadline:** Module 18, Topic 1 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Module 18 is the final module — modern JavaScript syntax that makes code shorter and more expressive. Topic 1 covers destructuring: extracting values from arrays and objects into named variables in a single line. Students have already seen this in Module 16 (`const [users, posts] = await Promise.all(...)`) — now they'll understand the full syntax.

---

### SLIDE 2 — Array Destructuring
**Type:** Code
**Headline:** Extract Array Elements into Named Variables in One Line
**Content:**

```js
const [first, second, third] = [88, 72, 91];
console.log(first);   // 88
console.log(second);  // 72

const [a, , c] = [10, 20, 30];
console.log(c);  // 30 (skipped 20)

const [x, y, z = 0] = [5, 10];
console.log(z);  // 0 (default)
```

- `const [a, b, c] = array` — extract elements by position
- Skip with `, ,` (empty slots)
- Provide defaults with `= value` for missing elements

**Visual:** Array `[88, 72, 91]` with arrows pointing from index 0→first, 1→second, 2→third

**Speaker Notes:**
Array destructuring matches by position. The first variable gets index 0, the second gets index 1, etc. You can skip elements with empty commas. You can set defaults for missing elements. The classic use case students already know: `const [users, posts] = await Promise.all([fetchUsers, fetchPosts])`. Another: swapping variables: `[a, b] = [b, a]`. Point out this is syntactic sugar — it does the same thing as manual index access, just shorter.

---

### SLIDE 3 — Object Destructuring
**Type:** Code
**Headline:** Extract Object Properties into Named Variables — By Key Name
**Content:**

```js
const student = { name: "Amara Obi", email: "amara@publica.ng", score: 88 };

const { name, score } = student;
console.log(name);   // "Amara Obi"
console.log(score);  // 88

const { name: studentName } = student;  // rename
const { grade = "N/A" } = student;      // default
```

- `const { key1, key2 } = object` — extract by property name
- Rename: `{ name: newName }`
- Defaults: `{ key = defaultValue }`

**Visual:** Object with arrows from property names to matching variable names

**Speaker Notes:**
Object destructuring matches by KEY NAME, not position. `{ score }` finds the `score` property regardless of where it appears in the object. Renaming is for when the property name conflicts with an existing variable or isn't descriptive enough. Defaults handle optional properties — very common with API responses that may or may not include certain fields.

---

### SLIDE 4 — Destructuring in Function Parameters
**Type:** Code
**Headline:** Destructure Right in the Parameter List — Clean and Readable
**Content:**

```js
function displayStudent({ name, course, score }) {
  console.log(name + " — " + course + " (" + score + ")");
}

displayStudent({ name: "Amara", course: "JS", score: 88 });
```

- Destructure directly in the function signature
- Makes function signatures self-documenting
- Very common in modern JavaScript

**Visual:** Function signature with arrows from passed object properties to parameter variables

**Speaker Notes:**
This is probably the most-used destructuring pattern in professional code. Instead of accessing `student.name`, `student.score` throughout the function body, you destructure in the parameter. The function signature now documents which properties it needs. This is used everywhere in React, Express, and modern APIs.

---

### SLIDE 5 — Nested Destructuring
**Type:** Code
**Headline:** Destructure Nested Objects and Arrays
**Content:**

```js
const student = { name: "Amara", address: { city: "Lagos" }, scores: [88, 92] };

const { address: { city } } = student;
console.log(city);  // "Lagos"

const { scores: [first] } = student;
console.log(first);  // 88
```

- `{ address: { city } }` — drill into nested objects
- `{ scores: [a, b] }` — destructure nested arrays
- Common with API responses: `{ data: { results } }`

**Visual:** Nested object with arrows drilling through levels

**Speaker Notes:**
Nested destructuring is powerful but can get unreadable fast. The rule of thumb: go one level deep max in most cases. For deeply nested API responses, consider destructuring in two steps for clarity. The `{ data: { results } }` pattern is extremely common with Axios and other HTTP libraries.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Destructuring Arrays & Objects
**Content:**

| Feature | Array | Object |
|---------|-------|--------|
| Syntax | `[a, b] = arr` | `{ key } = obj` |
| Matches by | Position | Property name |
| Skip/rename | `, ,` to skip | `{ name: alias }` |
| Defaults | `[a = 0]` | `{ key = val }` |
| In params | `function([a, b])` | `function({ name })` |

**Up Next:** Topic 2 — Spread & Rest Operators

**Visual:** Side-by-side comparison of array and object destructuring

**Speaker Notes:**
Arrays by position, objects by name. Both support defaults and work in function parameters. Students should start using destructuring immediately in their code — it's cleaner and more expressive. Topic 2 introduces spread and rest, which work naturally with destructuring.
