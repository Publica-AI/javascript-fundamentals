# Module 16 — Topic 1: Promise States & Creating Promises
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Promise States & Creating Promises
**Subheadline:** Module 16, Topic 1 of 4 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Module 15 taught students to use fetch with .then() chains. They were using Promises without knowing the name. Module 16 peels back the layer: what IS a Promise? What states does it have? How do you create your own? This gives students the mental model to understand why .then() and .catch() work, and prepares them for async/await in Topic 3.

---

### SLIDE 2 — What Is a Promise?
**Type:** Concept
**Headline:** A Promise Is an Object That Represents a Future Value
**Content:**

A Promise is like a receipt for a food order:
- You place the order → you get a receipt (Promise created)
- The kitchen is working → your food isn't ready yet (pending)
- Food arrives → order fulfilled (resolved/fulfilled)
- Kitchen ran out of ingredients → order can't be filled (rejected)

Three states of a Promise:
1. **Pending** — the operation is still in progress
2. **Fulfilled** (resolved) — the operation succeeded; the Promise holds a value
3. **Rejected** — the operation failed; the Promise holds an error

Once a Promise is fulfilled or rejected, it **never changes state again**.

**Visual:** A state diagram: Pending (yellow) → Fulfilled (green, with value) OR Rejected (red, with error). No arrows going backwards.

**Speaker Notes:**
The food order analogy works well in Nigeria — think of ordering jollof rice at a restaurant. You get a receipt (the Promise). The kitchen is working (pending). If they have all the ingredients, your food arrives (fulfilled). If they run out of rice, they tell you sorry (rejected). Once you get your food, it doesn't un-arrive. Once they reject, they don't then give you the food 5 minutes later. A Promise settles once and stays settled. This immutability is key — it makes Promises predictable.

---

### SLIDE 3 — fetch() Returns a Promise
**Type:** Code
**Headline:** You Already Used Promises — fetch() Returns One
**Content:**

```js
// fetch returns a Promise
const promise = fetch("https://jsonplaceholder.typicode.com/users/1");

console.log(promise);  // Promise { <pending> }

// The Promise resolves when the response arrives
promise
  .then(function(response) {
    console.log("Fulfilled! Status:", response.status);
    return response.json();
  })
  .then(function(data) {
    console.log("Data:", data.name);
  });
```

- `fetch()` returns a Promise immediately (in pending state)
- `.then()` registers a callback that runs when the Promise fulfills
- The value passed to `.then()` is whatever the Promise resolved with
- You've been using Promises since Module 15 — now you understand what they are

**Visual:** Timeline: fetch() called → Promise (pending) → server responds → Promise (fulfilled) → .then() fires

**Speaker Notes:**
This is the reveal moment: "You've been using Promises this whole time." Every fetch call in Module 15 returned a Promise. The .then() they wrote was registering a fulfillment handler. The .catch() was registering a rejection handler. Console.log the promise variable to show `Promise { <pending> }` — this proves it's an object in the pending state. Once the response arrives, it transitions to fulfilled, and the .then() callback fires with the response as its argument. This isn't new syntax — it's naming what they already know.

---

### SLIDE 4 — Creating a Promise with new Promise()
**Type:** Code
**Headline:** new Promise(resolve, reject) — Create Your Own Promise
**Content:**

```js
function checkEnrolment(studentId) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (studentId > 0) {
        resolve({ id: studentId, status: "enrolled" });
      } else {
        reject(new Error("Invalid student ID"));
      }
    }, 1000);
  });
}

// Using the Promise:
checkEnrolment(42)
  .then(function(result) {
    console.log(result.status);  // "enrolled"
  })
  .catch(function(error) {
    console.log(error.message);
  });
```

- `new Promise(executor)` — the executor receives `resolve` and `reject` functions
- Call `resolve(value)` when the operation succeeds
- Call `reject(error)` when it fails
- The Promise transitions from pending → fulfilled (if resolve) or pending → rejected (if reject)

**Visual:** The executor function shown with two paths: resolve(value) → .then(value) and reject(error) → .catch(error)

**Speaker Notes:**
Now students create their own Promise. The constructor takes one argument: a function (called the executor) which itself receives two arguments: resolve and reject. These are functions given to you by the Promise system. Call resolve(value) when your async operation succeeds — the Promise fulfills with that value. Call reject(error) when it fails — the Promise rejects with that error. The setTimeout simulates an async operation. After 1 second, we check the condition and either resolve or reject. The consumer uses .then() and .catch() exactly like they do with fetch. Point out: you only need to create Promises when wrapping non-Promise async code (like setTimeout). Most real code uses existing Promises from fetch, database libraries, etc.

---

### SLIDE 5 — Why Promises Over Callbacks?
**Type:** Concept
**Headline:** Promises Solve Callback Hell — They Enable Flat Chaining
**Content:**

**Callbacks (Module 14 — nested):**
```js
step1(function(result1) {
  step2(result1, function(result2) {
    step3(result2, function(result3) {
      // deeper and deeper...
    });
  });
});
```

**Promises (flat chain):**
```js
step1()
  .then(function(result1) { return step2(result1); })
  .then(function(result2) { return step3(result2); })
  .then(function(result3) { /* done */ })
  .catch(function(error)  { /* any error */ });
```

Advantages:
- **Flat structure** — no nesting, reads top to bottom
- **Single error handler** — one `.catch()` handles all errors in the chain
- **Composable** — Promises can be combined with `Promise.all()` (Topic 4)

**Visual:** Left: nested pyramid code (callback hell). Right: flat vertical chain (Promises). Arrow labeled "same result, readable code"

**Speaker Notes:**
This is the callback hell solution we previewed in Module 14. Same three steps, same sequential logic — but flat instead of nested. Each .then() returns the next Promise, and the chain continues. If any step fails, execution jumps to .catch() — one error handler for the entire chain instead of checking errors at every level. This is why Promises were invented. They don't change what's possible (callbacks could do everything), they change how readable and maintainable the code is. Topic 2 goes deeper into chaining mechanics.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — Promise States & Creating Promises
**Content:**

- A **Promise** is an object representing a value that will exist in the future
- Three states: **pending** → **fulfilled** (with value) or **rejected** (with error)
- `fetch()` returns a Promise — you've been using them already
- `new Promise(function(resolve, reject) { ... })` creates a custom Promise
- Call `resolve(value)` for success, `reject(error)` for failure
- Promises enable flat chaining instead of nested callbacks

**Up Next:** Topic 2 — .then(), .catch() & Chaining Promises

**Visual:** Promise lifecycle diagram: new Promise → pending → resolve(value) → fulfilled → .then(value) // reject(error) → rejected → .catch(error)

**Speaker Notes:**
Recap the three key ideas: Promises have three states (and settle once), fetch already uses them, and you can create your own. The critical shift from Module 14: Promises represent the future value AS AN OBJECT you can pass around, chain on, and compose. Callbacks are fire-and-forget — once you pass a function in, you lose control. Promises give you a handle on the async operation. Topic 2 explores chaining deeply: what .then() actually returns, how to sequence multiple steps flat, and how .catch() works in a chain.
