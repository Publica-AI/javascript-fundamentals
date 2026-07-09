# Module 15 — Topic 1: JSON Format, JSON.parse & JSON.stringify
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** JSON Format, JSON.parse & JSON.stringify
**Subheadline:** Module 15, Topic 1 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Module 14 introduced asynchronous JavaScript — scheduling code to run later. Module 15 answers the question: "what data do you get back when you call an API?" The answer is almost always JSON. This topic teaches the format itself and the two methods that convert between JSON strings and JavaScript objects. Students need this before Topic 2, where they'll actually call fetch() and parse the response.

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

**Speaker Notes:**
JSON stands for JavaScript Object Notation. It was inspired by JavaScript object syntax, but it's a language-independent format — Python, Java, Go, Ruby all use JSON too. The critical point for students: JSON is TEXT. It's a string. When an API sends you data, what arrives is a string of characters that looks like an object but isn't one — you can't do `.name` on it until you parse it. Point out the strict rules: every key must be in double quotes (not single quotes, not unquoted like in JS objects). No trailing commas. No comments. No functions. If students ask "why these rules?" — because parsers in every programming language need unambiguous syntax to work reliably.

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

**Speaker Notes:**
This is the most common confusion for beginners: "It looks like an object, so why can't I use .name?" Because it's wrapped in quotes — it's a string. `typeof jsonString` is "string". You have to call JSON.parse() on it first to get an actual object. Show this in the console if you can: type the jsonString variable, show it's a string, try .name (undefined), then parse it and try .name (works). The table of differences is worth spending time on — especially the double-quote requirement for keys, which will be the most common JSON validation error students encounter.

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

**Speaker Notes:**
JSON.parse is the most-used of the two methods. Every API call returns a JSON string — you parse it to get usable data. Show both cases: parsing an object and parsing an array (since APIs often return arrays of items). Point out that the return value of parse is a REAL JavaScript object or array — you can use dot notation, bracket notation, destructuring, array methods — everything works. Mention the error case: if the string isn't valid JSON (missing quote, trailing comma, single quotes on keys), parse throws SyntaxError. In Topic 2, students will see this happen naturally when fetch() returns the JSON response and they call .json() on it — which is essentially JSON.parse under the hood.

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

**Speaker Notes:**
Stringify goes the other direction: you have a JavaScript object, and you need to turn it into a string. Two main use cases: sending data to an API (the request body must be a string), and storing data in localStorage (which only stores strings — they'll see this in Module 17). Point out the three-argument form: `JSON.stringify(value, null, 2)`. The `null` is a replacer function (ignore it), and `2` is the indentation. This is purely for readability — use it for debugging or display, not for sending to APIs. The silently-removed items are a gotcha: if your object has a function property or an undefined value, stringify just drops them without warning.

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

**Speaker Notes:**
Two methods, two directions. JSON.parse takes a string and gives you a usable object. JSON.stringify takes an object and gives you a portable string. Students will use parse in Topic 2 when they fetch data from APIs, and they'll use stringify in Module 17 when they store data in localStorage. Both are used constantly in professional JavaScript — probably the most-used built-in methods after console.log. Make sure students are clear on which direction each one goes before moving on.
