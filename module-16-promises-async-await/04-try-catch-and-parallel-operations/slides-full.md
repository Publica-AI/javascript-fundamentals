# Module 16 — Topic 4: try/catch & Parallel Operations
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** try/catch & Parallel Operations
**Subheadline:** Module 16, Topic 4 of 4 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Topic 3 taught async/await for sequential operations. Topic 4 completes the picture with two essential patterns: try/catch for error handling (replacing .catch()), and Promise.all() for running multiple async operations simultaneously. These two patterns cover the vast majority of real-world async code. After this topic, students have a complete modern async toolkit.

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

**Speaker Notes:**
This is the async/await equivalent of .catch(). In a .then() chain, errors flow to .catch() at the end. In async/await, you wrap the risky code in try and handle failures in catch. The catch block receives the same error object — whether it's a network failure (fetch rejects the Promise, await re-throws it) or your manual throw (response.ok check). Students familiar with try/catch from other languages (Python, Java) will recognise this immediately. The pattern: try block = happy path, catch block = error path. Same three UI states as Module 15: loading, success, error.

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

**Speaker Notes:**
This is a performance issue students won't notice until you point it out. "These three requests don't depend on each other. Users, posts, and todos are completely independent. Why are we waiting for users to finish before starting posts?" Each await pauses the function. If request 1 takes 200ms, request 2 doesn't even START until 200ms in. Total: 600ms. But if we start all three at the same time, the total is only ~200ms (the slowest one). That's 3x faster. This matters when you're loading a dashboard with 5 independent data sources — sequential takes 5 seconds, parallel takes 1.

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

**Speaker Notes:**
Promise.all takes an array of Promises, starts them all immediately, and waits for all to resolve. The result is an array — in the same order as the input (not the order they finished). We destructure it into named variables: [users, posts, todos]. This is the await for the entire array. Timing: if each request takes 200ms, Promise.all finishes in ~200ms total because they all ran simultaneously. The fail-fast behavior is important: if ANY one Promise rejects, the whole Promise.all rejects immediately. The successful results are thrown away. This means: use Promise.all when you need ALL results, and any single failure means you can't proceed.

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

**Speaker Notes:**
The decision is simple: if B needs A's result, they must be sequential. If they're independent, they should be parallel. You can mix: first get the user (sequential — you need the ID), then in parallel fetch their posts AND notifications (independent — they both use the same ID but don't depend on each other). Show the mixed example: const user = await getUser(id); const [posts, notifs] = await Promise.all([getPosts(user.id), getNotifications(user.id)]). First sequential, then parallel. This is a very common pattern in real applications.

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

**Speaker Notes:**
Module 16 is now complete. Students have the full modern async toolkit: Promises (the mechanism), .then()/.catch() (the original API), async/await (the modern syntax), try/catch (error handling), and Promise.all (parallelism). This covers 95% of async code they'll write professionally. Module 17 switches to a different topic: saving data in the browser so it persists across page reloads. It uses JSON.stringify and JSON.parse from Module 15 — connecting back to earlier material.
