# Module 15 — Topic 1: JSON Format, JSON.parse & JSON.stringify
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** JSON Format, JSON.parse & JSON.stringify
**Subheadline:** Module 15, Topic 1 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — What Is JSON?
**Type:** Concept
**Headline:** JSON — JavaScript Object Notation — A Universal Data Format
**Content:**

```json
{
  "name": "Amara Obi",
  "email": "amara@publica.ng",
  "enrolled": true,
  "courses": ["JavaScript", "HTML & CSS"],
  "score": 88
}
```

- JSON is a **text format** for storing and transmitting data
- Used by virtually every API on the internet (REST, GraphQL responses)
- Looks like a JavaScript object — but it's a **string**, not an object
- Keys must be in **double quotes** (no single quotes, no unquoted keys)
- Values can be: strings, numbers, booleans, null, arrays, objects
- **No** functions, undefined, comments, or trailing commas allowed

**Visual:** A JSON string labeled "data as text (string)" with an arrow pointing to a JavaScript object labeled "data as a live object you can use"

---

### SLIDE 3 — JSON vs JavaScript Object
**Type:** Code
**Headline:** JSON Is a String — A JavaScript Object Is a Live Data Structure
**Content:**

```js
// JavaScript object (live — you can access properties)
const student = {
  name: "Amara Obi",
  score: 88,
  enrolled: true
};
console.log(student.name);  // "Amara Obi" — works!

// JSON string (text — you cannot access properties)
const jsonString = '{"name":"Amara Obi","score":88,"enrolled":true}';
console.log(jsonString.name);  // undefined — it's just a string!
```

Key differences:
| Feature | JavaScript Object | JSON String |
|---------|------------------|-------------|
| Type | object | string |
| Keys | unquoted or quoted | **must** be double-quoted |
| Can access `.name` | Yes | No — must parse first |
| Can contain functions | Yes | No |
| Trailing commas | Allowed | **Not allowed** |

**Visual:** Two boxes: left labeled "JS Object" showing `{ name: "Amara" }` with a green check for `.name`; right labeled "JSON string" showing `'{"name":"Amara"}'` with a red X for `.name`

---

### SLIDE 4 — JSON.parse()
**Type:** Code
**Headline:** JSON.parse() — Convert a JSON String into a JavaScript Object
**Content:**

```js
// JSON string (as received from an API)
const json = '{"name":"Amara Obi","score":88,"courses":["JavaScript","HTML"]}';

// Parse into a usable object
const student = JSON.parse(json);

console.log(student.name);       // "Amara Obi"
console.log(student.score);      // 88
console.log(student.courses[0]); // "JavaScript"

// Parse an array
const jsonArr = '[{"id":1,"title":"JS"},{"id":2,"title":"CSS"}]';
const courses = JSON.parse(jsonArr);
console.log(courses.length);     // 2
console.log(courses[0].title);   // "JS"
```

- `JSON.parse(string)` → returns a JavaScript value (object, array, number, etc.)
- If the string is invalid JSON, it throws a **SyntaxError**
- This is how you make API response data usable in your code

**Visual:** A flow arrow: `'{"name":"Amara"}'` → `JSON.parse()` → `{ name: "Amara" }` (now you can access `.name`)

---

### SLIDE 5 — JSON.stringify()
**Type:** Code
**Headline:** JSON.stringify() — Convert a JavaScript Value into a JSON String
**Content:**

```js
const student = {
  name: "Chidi Nwosu",
  score: 72,
  courses: ["JavaScript", "Git"]
};

// Convert to JSON string
const json = JSON.stringify(student);
console.log(json);
// '{"name":"Chidi Nwosu","score":72,"courses":["JavaScript","Git"]}'

console.log(typeof json);  // "string"

// Pretty print with indentation (2 spaces)
const pretty = JSON.stringify(student, null, 2);
console.log(pretty);
// {
//   "name": "Chidi Nwosu",
//   "score": 72,
//   "courses": ["JavaScript", "Git"]
// }
```

- `JSON.stringify(value)` → returns a JSON string
- Functions and `undefined` values are **silently removed**
- Use `JSON.stringify(value, null, 2)` for readable, indented output
- Used to: send data to APIs, store data in localStorage

**Visual:** A flow arrow reversed: `{ name: "Chidi" }` → `JSON.stringify()` → `'{"name":"Chidi"}'` (now it's a portable text string)

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — JSON Format, Parse & Stringify
**Content:**

- **JSON** is a text format — looks like JS objects but is a string
- Keys must be **double-quoted**; no functions, undefined, or trailing commas
- `JSON.parse(string)` → JS value (object, array, etc.)
- `JSON.stringify(value)` → JSON string
- `JSON.stringify(value, null, 2)` → pretty-printed JSON string
- Parse is for reading data (API → your code); stringify is for sending/storing data

| Direction | Method | Use Case |
|-----------|--------|----------|
| String → Object | `JSON.parse()` | Reading API responses |
| Object → String | `JSON.stringify()` | Sending data, localStorage |

**Up Next:** Topic 2 — Fetching Data with the Fetch API

**Visual:** Two-directional arrow diagram: "JSON String" ← `JSON.stringify()` / `JSON.parse()` → "JS Object"
