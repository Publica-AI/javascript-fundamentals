# Module 18 — Topic 1: Destructuring Arrays & Objects
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Destructuring Arrays & Objects
**Subheadline:** Module 18, Topic 1 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — Array Destructuring
**Type:** Code
**Headline:** Extract Array Elements into Named Variables in One Line
**Content:**

```js
// Without destructuring:
const scores = [88, 72, 91];
const first = scores[0];
const second = scores[1];
const third = scores[2];

// With destructuring:
const [first, second, third] = [88, 72, 91];
console.log(first);   // 88
console.log(second);  // 72
console.log(third);   // 91

// Skip elements with empty slots
const [a, , c] = [10, 20, 30];
console.log(a);  // 10
console.log(c);  // 30 (skipped 20)

// Default values
const [x, y, z = 0] = [5, 10];
console.log(z);  // 0 (default — array had no third element)
```

- `const [a, b, c] = array` — extract elements by position
- Skip with `, ,` (empty slots)
- Provide defaults with `= value` for missing elements
- Works with any iterable (arrays, strings, etc.)

**Visual:** Array `[88, 72, 91]` with arrows pointing from index 0→first, 1→second, 2→third

---

### SLIDE 3 — Object Destructuring
**Type:** Code
**Headline:** Extract Object Properties into Named Variables — By Key Name
**Content:**

```js
const student = {
  name: "Amara Obi",
  email: "amara@publica.ng",
  score: 88,
  course: "JavaScript"
};

// Without destructuring:
const name = student.name;
const score = student.score;

// With destructuring:
const { name, score, course } = student;
console.log(name);    // "Amara Obi"
console.log(score);   // 88
console.log(course);  // "JavaScript"

// Rename variables
const { name: studentName, email: studentEmail } = student;
console.log(studentName);  // "Amara Obi"

// Default values
const { grade = "N/A" } = student;
console.log(grade);  // "N/A" (property doesn't exist)
```

- `const { key1, key2 } = object` — extract by property name (not position)
- Rename: `{ name: newName }` — extract `name` but call it `newName`
- Defaults: `{ key = defaultValue }` — if property is undefined

**Visual:** Object with arrows from property names to matching variable names; rename shown as key→alias

---

### SLIDE 4 — Destructuring in Function Parameters
**Type:** Code
**Headline:** Destructure Right in the Parameter List — Clean and Readable
**Content:**

```js
// Without destructuring:
function displayStudent(student) {
  console.log(student.name + " — " + student.course);
}

// With destructuring in parameter:
function displayStudent({ name, course, score }) {
  console.log(name + " — " + course + " (" + score + ")");
}

const amara = { name: "Amara Obi", course: "JavaScript", score: 88 };
displayStudent(amara);  // "Amara Obi — JavaScript (88)"

// Works with arrays too:
function getFirst([first, second]) {
  return first;
}
console.log(getFirst([10, 20, 30]));  // 10
```

- Destructure directly in the function signature
- No need for `param.name`, `param.score` inside the function
- Makes function signatures self-documenting — you see what properties are used
- Very common in modern JavaScript frameworks and APIs

**Visual:** Function signature `({ name, course })` with arrows from the passed object's properties into the parameter variables

---

### SLIDE 5 — Nested Destructuring
**Type:** Code
**Headline:** Destructure Nested Objects and Arrays
**Content:**

```js
const student = {
  name: "Amara Obi",
  scores: [88, 92, 79],
  address: {
    city: "Lagos",
    state: "Lagos"
  }
};

// Nested object destructuring
const { name, address: { city } } = student;
console.log(city);  // "Lagos"

// Nested array inside object
const { scores: [first, second] } = student;
console.log(first);   // 88
console.log(second);  // 92

// API response pattern
const { data: { users } } = { data: { users: ["Amara", "Chidi"] } };
console.log(users);  // ["Amara", "Chidi"]
```

- `{ address: { city } }` — destructure into `city` from nested object
- `{ scores: [a, b] }` — destructure array inside object
- Common with API responses: `{ data: { results } }`

**Visual:** Nested object with arrows drilling through levels: student → address → city extracted into a variable

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Destructuring Arrays & Objects
**Content:**

| Feature | Array | Object |
|---------|-------|--------|
| Syntax | `[a, b] = arr` | `{ key } = obj` |
| Matches by | Position (index) | Property name |
| Skip/rename | `, ,` to skip | `{ name: alias }` |
| Defaults | `[a = 0]` | `{ key = val }` |
| In params | `function([a, b])` | `function({ name })` |

- Destructuring extracts values into variables in one concise line
- Arrays match by **position**, objects match by **key name**
- Works in: variable declarations, function parameters, loops, nested structures
- You've already seen it: `const [a, b] = await Promise.all([...])`

**Up Next:** Topic 2 — Spread & Rest Operators

**Visual:** Side-by-side: array destructuring (position-based arrows) vs object destructuring (name-based arrows)
