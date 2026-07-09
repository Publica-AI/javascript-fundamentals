# Module 15 — Topic 2: Fetching Data with the Fetch API
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Fetching Data with the Fetch API
**Subheadline:** Module 15, Topic 2 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — What Is fetch()?
**Type:** Concept
**Headline:** fetch() — The Built-In Way to Make HTTP Requests from JavaScript
**Content:**

```js
fetch("https://jsonplaceholder.typicode.com/users/1");
```

- `fetch(url)` sends a GET request to the given URL
- It returns a **Promise** (async — the response arrives later)
- Available in all modern browsers and Node 18+
- Replaces the older `XMLHttpRequest` (much simpler syntax)
- The response is NOT the data itself — it's a Response object you must process

**How it connects to Module 14:**
- fetch is asynchronous — it doesn't block
- The `.then()` callback runs when the response arrives
- This is a real-world use of the callback/Promise pattern

**Visual:** A diagram: your code → fetch(url) → internet → server responds → .then() fires with the Response

---

### SLIDE 3 — Basic Fetch Pattern
**Type:** Code
**Headline:** The Two-Step Pattern: fetch() → .then(parse) → .then(use)
**Content:**

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(function(response) {
    return response.json();  // Step 1: parse the JSON body
  })
  .then(function(data) {
    console.log(data.name);   // Step 2: use the data
    console.log(data.email);
  });

console.log("This runs FIRST — fetch is async!");
```

- `fetch(url)` returns a Promise that resolves to a Response object
- `response.json()` parses the body as JSON (also returns a Promise)
- The second `.then()` receives the actual parsed data
- Code after fetch runs immediately — it doesn't wait (async!)

The two-step `.then()` chain:
1. `.then(response => response.json())` — parse
2. `.then(data => ...)` — use

**Visual:** A flowchart: fetch(url) → Response object → .json() → parsed data (JS object) → use it

---

### SLIDE 4 — Fetching an Array of Items
**Type:** Code
**Headline:** Most APIs Return Arrays — Loop Through the Data
**Content:**

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function(response) {
    return response.json();
  })
  .then(function(users) {
    console.log(users.length + " users loaded");

    users.forEach(function(user) {
      console.log(user.name + " — " + user.email);
    });

    // Use array methods from Module 12
    const names = users.map(function(user) {
      return user.name;
    });
    console.log(names);
  });
```

- APIs typically return arrays of objects (list of users, products, posts)
- After parsing, you have a normal JavaScript array
- Use forEach, map, filter, reduce — everything from Module 12 works

**Visual:** The API response shown as a JSON array `[{...}, {...}, {...}]`; after `.json()` it becomes a JavaScript array with `.forEach`, `.map`, `.filter` available

---

### SLIDE 5 — Displaying Data in the DOM
**Type:** Code
**Headline:** Fetch + DOM — Load Data and Render It on the Page
**Content:**

```js
const list = document.querySelector("#user-list");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function(response) {
    return response.json();
  })
  .then(function(users) {
    const html = users.map(function(user) {
      return "<li><strong>" + user.name + "</strong> — " + user.email + "</li>";
    }).join("");

    list.innerHTML = html;
  });
```

- Fetch the data → parse it → build HTML → inject into the DOM
- This is the real-world pattern: API → data → page update
- Combines Module 10 (DOM), Module 12 (map/join), and Module 15 (fetch)

**Visual:** Three-stage pipeline: API cloud → JavaScript (fetch + parse) → DOM (rendered list on the page)

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Fetching Data with the Fetch API
**Content:**

- `fetch(url)` sends a GET request and returns a Promise
- Two-step `.then()` chain: `response.json()` then use the data
- Code after fetch runs immediately (async — non-blocking)
- Parsed data is a normal JS object/array — use any method you know
- Combine with DOM methods to display API data on the page

**The pattern to memorise:**
```js
fetch(url)
  .then(response => response.json())
  .then(data => {
    // use data here
  });
```

**Up Next:** Topic 3 — Handling Errors & Checking response.ok

**Visual:** The fetch pattern as a horizontal pipeline: URL → fetch() → Response → .json() → Data → DOM/Console
