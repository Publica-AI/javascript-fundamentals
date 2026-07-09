# Module 15 — Topic 2: Fetching Data with the Fetch API
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Fetching Data with the Fetch API
**Subheadline:** Module 15, Topic 2 of 3 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Topic 1 taught JSON format and the parse/stringify methods. Topic 2 puts parse into action: fetch data from a real API and use it. This is the moment students go from "JavaScript running locally" to "JavaScript talking to the internet." It's a significant shift — the data isn't hardcoded anymore, it comes from a server. The pattern (fetch → .json() → use data) will be repeated hundreds of times in their careers.

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

**Speaker Notes:**
fetch is a global function — no import needed, it's built into the browser (and Node 18+). It takes a URL string and sends a GET request. But here's the key point: fetch is asynchronous. It doesn't block and wait for the response. It returns a Promise immediately. The response arrives later, and your .then() callback runs when it does. This is Module 14's async model in action — not setTimeout this time, but a real network request. The "two-step" pattern (parse then use) is because fetch gives you a Response object first — which contains headers, status code, etc. — and you must explicitly say "give me the body as JSON" by calling .json().

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

**Speaker Notes:**
Walk through this slowly. Step 1: fetch sends the request, returns a Promise. Step 2: when the response arrives, the first .then fires — it receives the Response object. We call .json() on it, which ALSO returns a Promise (parsing takes time for large responses). Step 3: when parsing finishes, the second .then fires with the actual data. This is Promise chaining — each .then returns something that the next .then receives. The console.log at the bottom runs FIRST — prove this by running the code. Students will see "This runs FIRST" appear before the API data. Same A/C/B pattern from Module 14, just with fetch instead of setTimeout.

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

**Speaker Notes:**
Most real APIs return arrays — a list of products, a list of users, a list of transactions. After .json() parses it, you have a standard JavaScript array. Everything from Module 12 works: forEach to loop, map to transform, filter to select subsets, reduce to aggregate. This is where Modules 12 and 15 connect — students will now use array HOFs on REAL data from the internet, not hardcoded arrays. Point out that the URL changed from `/users/1` (one user) to `/users` (all users) — that's how REST APIs typically work.

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

**Speaker Notes:**
This is the full picture: fetch data from an API, parse it, build HTML from it, and put it on the page. This is how every modern web application works — Instagram, Twitter, YouTube — they all fetch data and render it dynamically. The map/join pattern from Module 11's createElement topic works perfectly here. For the demo, we'll use a live browser example so students can see the data appear on the actual page. The key point: the page loads first (empty list), then the data arrives and the list fills in. This is the "loading state" pattern — users see an empty page briefly, then content appears.

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

**Speaker Notes:**
This pattern is the single most important takeaway from Module 15. fetch → .json() → use. Students should be able to write it from memory by the end of this module. Topic 3 adds error handling — what happens when the API returns an error (404, 500), when the network is down, or when the URL is wrong. Without error handling, a failed fetch silently fails — the page just stays empty and the user has no idea why.
