# Module 16 — Topic 2: .then(), .catch() & Chaining Promises
## Slide Deck (Full — with Speaker Notes) — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** .then(), .catch() & Chaining Promises
**Subheadline:** Module 16, Topic 2 of 4 — JavaScript Fundamentals

**Visual:** Module cover with title and subheadline centered

**Speaker Notes:**
Topic 1 introduced what Promises are and how to create them. Topic 2 teaches the mechanics of .then() chaining — the key technique that makes Promises better than nested callbacks. Students will understand that .then() always returns a new Promise, that the return value determines what the next .then() receives, and that .catch() handles all errors from anywhere in the chain.

---

### SLIDE 2 — How .then() Works
**Type:** Code
**Headline:** .then() Receives the Resolved Value — And Returns a New Promise
**Content:**

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(function(response) {
    console.log(response.status);  // 200
    return response.json();        // return a NEW Promise
  })
  .then(function(data) {
    console.log(data.name);        // "Leanne Graham"
    return data.name.toUpperCase();
  })
  .then(function(upper) {
    console.log(upper);  // "LEANNE GRAHAM"
  });
```

Key rules:
- `.then()` always returns a **new Promise**
- If you `return` a value → the next `.then()` receives that value
- If you `return` a Promise → the next `.then()` waits for it and receives its resolved value
- If you don't return anything → the next `.then()` receives `undefined`

**Visual:** Chain of .then() boxes, each with an input arrow (value from previous) and output arrow (returned value becomes input for next)

**Speaker Notes:**
The critical insight: .then() doesn't just run a callback — it returns a BRAND NEW Promise. That's what enables chaining. The return value inside .then() determines what the next .then() gets. Return a plain value (like a string) → the next .then() gets it immediately. Return a Promise (like response.json()) → the next .then() waits for that Promise to resolve, then gets its value. Return nothing → the next .then() gets undefined. This third case is the #1 bug — forgetting to return.

---

### SLIDE 3 — Chaining Sequential Async Steps
**Type:** Code
**Headline:** Return a Promise from .then() to Chain Sequential Async Operations
**Content:**

```js
function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(resolve, ms);
  });
}

function processEnrolment(studentName) {
  console.log("Starting enrolment for " + studentName);

  return delay(1000)
    .then(function() {
      console.log("✓ Identity verified");
      return delay(1000);
    })
    .then(function() {
      console.log("✓ Payment processed");
      return delay(1000);
    })
    .then(function() {
      console.log("✓ Access granted");
      return studentName + " enrolled successfully";
    });
}

processEnrolment("Amara Obi").then(function(message) {
  console.log(message);  // "Amara Obi enrolled successfully"
});
```

- Each `.then()` returns a Promise → the next `.then()` waits for it
- **No nesting** — each step is at the same indentation level
- This is the flat alternative to callback hell

**Visual:** Three boxes in a vertical chain (verify → pay → access) with flat indentation, contrasted with the nested callback pyramid doing the same thing

**Speaker Notes:**
Compare this to the Module 14 callback version. Same three sequential async steps — but flat. No pyramid. No growing indentation. Each .then() is at the same level. The key: each .then() returns `delay(1000)`, which is a Promise. The next .then() waits for that Promise to resolve before running. This is how you do sequential async with Promises. The function itself returns a Promise too — so the caller can .then() on the result. Promises compose: you can build complex chains from simple Promise-returning functions.

---

### SLIDE 4 — .catch() Handles Rejections
**Type:** Code
**Headline:** .catch() Catches Any Error in the Chain — From Any Step
**Content:**

```js
fetch("https://jsonplaceholder.typicode.com/users/9999")
  .then(function(response) {
    if (!response.ok) {
      throw new Error("User not found: " + response.status);
    }
    return response.json();
  })
  .then(function(user) {
    console.log(user.name);  // never runs — error was thrown above
  })
  .catch(function(error) {
    console.log("Caught:", error.message);
    // "Caught: User not found: 404"
  });
```

- `.catch()` is shorthand for `.then(null, errorHandler)`
- If any `.then()` throws or returns a rejected Promise → chain jumps to `.catch()`
- One `.catch()` at the end handles errors from **any step** in the chain
- After `.catch()` runs, the chain can continue (it returns a new Promise)

**Visual:** A chain of .then() boxes with a red arrow from any box jumping directly to the .catch() at the bottom — skipping all subsequent .then() calls

**Speaker Notes:**
This is the single error handler that callbacks couldn't give us. With callbacks, you had to check for errors at every nesting level. With Promises, one .catch() at the end catches everything. If any .then() throws (explicitly with `throw` or by returning a rejected Promise), the chain skips all subsequent .then() calls and jumps to .catch(). The error object is passed to .catch() as its argument. This is the same pattern from Module 15's safe fetch — we throw when response.ok is false, and .catch() receives it. But now students understand the MECHANISM: throw inside .then() rejects the Promise that .then() returns, which propagates down the chain.

---

### SLIDE 5 — Common Chaining Mistakes
**Type:** Code
**Headline:** Mistakes to Avoid When Chaining Promises
**Content:**

```js
// ❌ MISTAKE 1: Forgetting to return
fetch(url)
  .then(function(response) {
    response.json();  // no return! Next .then gets undefined
  })
  .then(function(data) {
    console.log(data);  // undefined — not the parsed data!
  });

// ❌ MISTAKE 2: Nesting instead of chaining
fetch(url)
  .then(function(response) {
    response.json().then(function(data) {  // nested — defeats the purpose!
      console.log(data);
    });
  });

// ✓ CORRECT: return + flat chain
fetch(url)
  .then(function(response) {
    return response.json();  // return the Promise
  })
  .then(function(data) {
    console.log(data);       // receives the resolved value
  });
```

- Always **return** from `.then()` — otherwise the chain breaks
- Never nest `.then()` inside `.then()` — chain flat instead
- Always end with `.catch()` — unhandled rejections cause silent bugs

**Visual:** Three code blocks: "Forgot return" (red X), "Nested" (red X), "Correct" (green check) — highlighting the return keyword

**Speaker Notes:**
Two bugs students will hit constantly. Bug 1: forgetting return. Without return, the .then() callback returns undefined, and the next .then() gets undefined instead of the data. This is subtle because there's no error — just undefined data that causes confusing bugs downstream. Bug 2: nesting .then() inside .then() — which defeats the entire purpose of chaining. If you find yourself indenting .then() inside .then(), you've gone back to callback style. The fix is always: return the Promise, put the next .then() outside at the same level. Drill this: "return, don't nest."

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — .then(), .catch() & Chaining
**Content:**

- `.then()` returns a new Promise — enabling chaining
- Return a **value** → next .then() receives it immediately
- Return a **Promise** → next .then() waits for it to resolve
- `.catch()` handles rejections from any step in the chain
- **Always return** from .then() — forgetting breaks the chain
- **Never nest** .then() inside .then() — chain flat instead

**The pattern:**
```js
doStep1()
  .then(result1 => doStep2(result1))
  .then(result2 => doStep3(result2))
  .then(result3 => { /* done */ })
  .catch(error => { /* any error from any step */ });
```

**Up Next:** Topic 3 — async Functions & the await Keyword

**Visual:** A flat chain diagram: step1 → step2 → step3 → done, with a single .catch() below catching from any point

**Speaker Notes:**
Two rules to memorise: always return, never nest. With those two rules, Promise chains stay flat and readable. .catch() at the end is the safety net. Topic 3 introduces async/await, which makes this even simpler — instead of .then() chains, you'll write code that looks synchronous but runs asynchronously. It's syntactic sugar over Promises — everything you learned here still applies, just with cleaner syntax.
