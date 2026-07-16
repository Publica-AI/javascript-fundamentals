# Module 16 — Topic 3: async Functions & the await Keyword
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** async Functions & the await Keyword
**Subheadline:** Module 16, Topic 3 of 4 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Topic 2 taught flat Promise chains with .then(). Topic 3 introduces async/await — syntactic sugar that makes async code look synchronous. Students will see that every .then() chain can be rewritten with await, the code becomes flat and readable, and the mental model stays the same: Promises under the hood. This is the modern way to write async JavaScript and what students will use in production.

---

### SLIDE 2 — async/await Is Syntactic Sugar Over Promises
**Type:** Code
**Headline:** async/await — Write Async Code That Reads Like Synchronous Code
**Content:**

```js
// .then() chain (Topic 2):
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(function(response) { return response.json(); })
  .then(function(user) { console.log(user.name); });

// Same thing with async/await:
async function loadUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();
  console.log(user.name);
}

loadUser();
```

- `async` before a function makes it return a Promise automatically
- `await` pauses execution until a Promise resolves, then gives you the value
- `await` can only be used inside an `async` function
- The code reads top-to-bottom like synchronous code — but it's still async!

**Visual:** Side-by-side: left shows the .then() chain (3 lines with callbacks), right shows async/await (3 flat lines with variable assignments). Arrow labeled "same behavior, cleaner syntax"

**Speaker Notes:**
Show both versions side by side. The .then() version has callbacks, return statements, and nested function syntax. The async/await version reads like the synchronous code students wrote in Modules 1–13. `const response = await fetch(url)` — looks like a normal variable assignment. But the await keyword is doing the same work as .then() — it waits for the Promise to resolve and gives you the value. It's not new functionality, it's new SYNTAX for the same Promise mechanism. The rule: if something returns a Promise, you can await it.

---

### SLIDE 3 — How await Works
**Type:** Code
**Headline:** await Pauses the Function — Not the Whole Program
**Content:**

```js
async function demo() {
  console.log("A — Before await");

  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  // ↑ Function pauses here until fetch resolves

  console.log("B — After await (response arrived)");
  console.log("Status:", response.status);

  const user = await response.json();
  // ↑ Function pauses again until .json() resolves

  console.log("C — User:", user.name);
}

demo();
console.log("D — This runs BEFORE B and C!");
```

Output: A → D → B → C

- `await` pauses only the `async` function — other code keeps running
- "D" runs before "B" because the function is paused at the first await
- Each `await` resumes when its Promise resolves
- The async function is still non-blocking from the outside

**Visual:** Timeline: A logs → D logs (main thread continues) → fetch resolves → B logs → .json() resolves → C logs

**Speaker Notes:**
This is critical: await pauses the FUNCTION, not the program. Code outside the async function keeps running. That's why "D" appears before "B" — while the async function is paused at await fetch, the main thread continues to the next line (which is the console.log after the demo() call). This is the same behavior as Module 14's async pattern: code after an async operation runs first. The function looks synchronous INSIDE, but is still non-blocking OUTSIDE. Prove this by running the code and showing the output order: A → D → B → C.

---

### SLIDE 4 — Refactoring .then() to async/await
**Type:** Code
**Headline:** Any .then() Chain Can Be Rewritten with async/await
**Content:**

```js
// BEFORE: .then() chain
function loadUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
      if (!response.ok) throw new Error("HTTP " + response.status);
      return response.json();
    })
    .then(function(users) {
      return users.map(function(u) { return u.name; });
    });
}

// AFTER: async/await
async function loadUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("HTTP " + response.status);
  const users = await response.json();
  return users.map(function(u) { return u.name; });
}

// Both return a Promise that resolves to an array of names
loadUsers().then(function(names) { console.log(names); });
```

Refactoring rules:
1. Add `async` before the function
2. Replace `.then(function(x) { return ... })` with `const x = await ...`
3. Remove `.then()` wrapping — just write the logic flat
4. The function still returns a Promise (async functions always do)

**Visual:** Arrows mapping each .then() block to its equivalent await line — showing the 1:1 correspondence

**Speaker Notes:**
Walk through the refactoring step by step. Original: fetch → .then(check ok, return json) → .then(map names). Refactored: await fetch → check ok → await json → map names. Same logic, same error handling (throw still works), same return value (a Promise of names). The refactoring is mechanical: every .then(function(x) { ... }) becomes const x = await .... Students should practice this conversion on their Module 15 code. Point out that the caller doesn't change — loadUsers() still returns a Promise, so the caller can .then() on it or await it from another async function.

---

### SLIDE 5 — async Functions Always Return a Promise
**Type:** Code
**Headline:** An async Function Always Returns a Promise — Even if You Return a Plain Value
**Content:**

```js
async function getGreeting() {
  return "Hello, Amara!";  // plain string
}

// But getGreeting() returns a Promise:
console.log(getGreeting());  // Promise { "Hello, Amara!" }

getGreeting().then(function(message) {
  console.log(message);  // "Hello, Amara!"
});

// You can await it from another async function:
async function main() {
  const msg = await getGreeting();
  console.log(msg);  // "Hello, Amara!"
}
main();
```

- Any value you `return` from an async function is wrapped in a resolved Promise
- If you `throw` inside an async function, it returns a rejected Promise
- This means async functions compose: you can `await` any async function

**Visual:** async function → return "Hello" → automatically becomes → Promise.resolve("Hello")

**Speaker Notes:**
This surprises students: "I returned a string, why is it a Promise?" Because async functions ALWAYS return Promises. JavaScript wraps your return value in Promise.resolve() automatically. This is what makes composition work — you can await any async function from another async function. And if you throw inside an async function, it's equivalent to returning Promise.reject(error). This connects to Topic 4 where we'll use try/catch — throw in an async function is caught by try/catch just like synchronous throws.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — async Functions & the await Keyword
**Content:**

- `async function name() {}` — marks a function as async; it always returns a Promise
- `await promise` — pauses the async function until the Promise resolves; gives you the value
- `await` only works inside `async` functions
- The function pauses — **not** the rest of the program (still non-blocking)
- Any `.then()` chain can be rewritten flat with async/await
- `return value` in an async function → `Promise.resolve(value)`

**Refactoring recipe:**
```js
// .then() style
fetch(url).then(r => r.json()).then(data => console.log(data));

// async/await style
async function load() {
  const r = await fetch(url);
  const data = await r.json();
  console.log(data);
}
```

**Up Next:** Topic 4 — try/catch & Parallel Operations

**Visual:** Before/after showing the .then() chain and the async/await version with connecting arrows

**Speaker Notes:**
async/await is now the standard way to write async JavaScript. .then() chains are still valid and students will encounter them in older code, but new code should prefer async/await for readability. The key mental model: await is .then() without the callback wrapping. Topic 4 adds error handling with try/catch (replaces .catch()) and parallel execution with Promise.all() (run multiple operations simultaneously instead of sequentially). That completes the async toolkit.
