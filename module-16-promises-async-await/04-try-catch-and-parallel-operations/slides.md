# Module 16 — Topic 4: try/catch & Parallel Operations
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** try/catch & Parallel Operations
**Subheadline:** Module 16, Topic 4 of 4 — JavaScript Fundamentals

---

### SLIDE 2 — try/catch with async/await
**Type:** Code
**Headline:** try/catch Replaces .catch() — Handle Async Errors Naturally
**Content:**

```js
async function loadUser(id) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const user = await response.json();
    console.log("Loaded:", user.name);
  } catch (error) {
    console.log("Failed:", error.message);
  }
}

loadUser(1);     // Loaded: Leanne Graham
loadUser(9999);  // Failed: HTTP 404
```

- `try { ... }` wraps the code that might fail
- `catch (error) { ... }` runs if anything in the try block throws or rejects
- Handles BOTH network errors (fetch rejects) AND HTTP errors (you throw)
- Same three states: loading → success (try completes) → error (catch fires)

**Visual:** try block containing await calls; if any rejects → arrow to catch block. Same flow as .then()/.catch() but with familiar control-flow syntax

---

### SLIDE 3 — The Sequential Problem
**Type:** Code
**Headline:** Sequential await Is Slow — Each Waits for the Previous
**Content:**

```js
async function loadAllSequential() {
  console.time("sequential");

  const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then(r => r.json());        // ~200ms

  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(r => r.json());        // ~200ms

  const todos = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then(r => r.json());        // ~200ms

  console.timeEnd("sequential");  // ~600ms total
  console.log(users.length, posts.length, todos.length);
}
```

- Each `await` waits for the previous to finish before starting the next
- If requests are independent, this wastes time
- Three 200ms requests take 600ms total sequentially
- Solution: run them in **parallel** with `Promise.all()`

**Visual:** Three arrows in sequence (one after another, total = 600ms) vs three arrows starting at the same time (parallel, total = 200ms)

---

### SLIDE 4 — Promise.all() for Parallel Execution
**Type:** Code
**Headline:** Promise.all() — Run Multiple Promises Simultaneously
**Content:**

```js
async function loadAllParallel() {
  console.time("parallel");

  const [users, posts, todos] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/todos").then(r => r.json())
  ]);

  console.timeEnd("parallel");  // ~200ms total (all ran simultaneously!)
  console.log(users.length, posts.length, todos.length);
}
```

- `Promise.all([p1, p2, p3])` starts all Promises at once
- Returns a single Promise that resolves when ALL input Promises resolve
- The resolved value is an array of results (in the same order as input)
- If ANY Promise rejects → Promise.all() rejects immediately (fail-fast)
- Use destructuring `[a, b, c]` to name the results

**Visual:** Three parallel arrows all starting together, a gate at the end labeled "all resolved", then a single result array [users, posts, todos]

---

### SLIDE 5 — When to Use Sequential vs Parallel
**Type:** Concept
**Headline:** Sequential When Steps Depend on Each Other — Parallel When Independent
**Content:**

**Sequential (each step needs the previous result):**
```js
const user = await getUser(id);           // need user first
const courses = await getCourses(user.id); // need user.id
const grades = await getGrades(courses);   // need courses
```

**Parallel (independent operations):**
```js
const [user, posts, notifications] = await Promise.all([
  getUser(id),
  getPosts(id),
  getNotifications(id)
]);
```

Decision rule:
- Does step 2 **need** step 1's result? → Sequential (await one after another)
- Are the operations **independent**? → Parallel (Promise.all)
- Mix both: fetch user first (need the ID), then fetch their posts and notifications in parallel

**Visual:** A flowchart: "Does B depend on A's result?" → Yes → Sequential / No → Parallel

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — try/catch & Parallel Operations
**Content:**

- `try/catch` handles errors in async/await code (replaces .catch())
- Catches both network errors and thrown HTTP errors in one block
- Sequential `await` runs one after another — slow for independent operations
- `Promise.all([p1, p2, p3])` runs Promises in parallel — resolves when all done
- Results come back in an array (same order as input)
- If any Promise rejects → Promise.all() rejects (fail-fast)

**Decision:** Dependent steps → sequential await. Independent operations → Promise.all.

**Up Next:** Module 17 — Local Storage & State Persistence

**Visual:** Summary card: try/catch pattern on left, Promise.all pattern on right, decision arrow between them
