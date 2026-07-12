# Module 16 — Topic 2: .then(), .catch() & Chaining Promises
## Slide Deck — 6 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** .then(), .catch() & Chaining Promises
**Subheadline:** Module 16, Topic 2 of 4 — JavaScript Fundamentals

---

### SLIDE 2 — How .then() Works
**Type:** Code
**Headline:** .then() Receives the Resolved Value — And Returns a New Promise
**Content:**

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(function(response) {
    // response is the value the Promise resolved with
    console.log(response.status);  // 200
    return response.json();        // return a NEW Promise
  })
  .then(function(data) {
    // data is the value the .json() Promise resolved with
    console.log(data.name);        // "Leanne Graham"
    return data.name.toUpperCase();
  })
  .then(function(upper) {
    // upper is what the previous .then() returned
    console.log(upper);  // "LEANNE GRAHAM"
  });
```

Key rules:
- `.then()` always returns a **new Promise**
- If you `return` a value → the next `.then()` receives that value
- If you `return` a Promise → the next `.then()` waits for it and receives its resolved value
- If you don't return anything → the next `.then()` receives `undefined`

**Visual:** Chain of .then() boxes, each with an input arrow (value from previous) and output arrow (returned value becomes input for next)

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
