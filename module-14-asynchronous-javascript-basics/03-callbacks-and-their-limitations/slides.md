# Module 14 — Topic 3: Callbacks & Their Limitations
## Slide Deck — 5 Slides

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** Callbacks & Their Limitations
**Subheadline:** Module 14, Topic 3 of 3 — JavaScript Fundamentals

---

### SLIDE 2 — What Is a Callback?
**Type:** Code
**Headline:** A Callback Is a Function Passed to Another Function — To Be Called Later
**Content:**

```js
// You've been using callbacks since Module 11!

// Event listener — callback runs when clicked
button.addEventListener("click", function() {
  console.log("Clicked!");
});

// setTimeout — callback runs after delay
setTimeout(function() {
  console.log("2 seconds later");
}, 2000);

// Array methods — callback runs for each element
const names = ["Amara", "Chidi", "Funmi"];
names.forEach(function(name) {
  console.log("Hello, " + name);
});
```

- A callback is any function you pass as an argument to be executed later
- `addEventListener`, `setTimeout`, `forEach`, `map`, `filter` — all take callbacks
- The receiving function decides *when* to call your callback
- Callbacks are the foundation of asynchronous JavaScript

**Visual:** Three boxes (addEventListener, setTimeout, forEach) each with an arrow pointing to a function being handed in as an argument, labeled "callback"

---

### SLIDE 3 — Sequential Async with Callbacks
**Type:** Code
**Headline:** When Async Steps Depend on Each Other — Nest the Callbacks
**Content:**

```js
// Simulating: verify user → fetch courses → send welcome email
// Each step takes time and depends on the previous step's result

function verifyUser(email, callback) {
  setTimeout(function() {
    console.log("✓ User verified: " + email);
    callback(email);
  }, 1000);
}

function fetchCourses(email, callback) {
  setTimeout(function() {
    const courses = ["JavaScript", "HTML & CSS"];
    console.log("✓ Courses fetched for " + email);
    callback(courses);
  }, 1000);
}

function sendWelcome(courses, callback) {
  setTimeout(function() {
    console.log("✓ Welcome email sent with " + courses.length + " courses");
    callback();
  }, 1000);
}

// Sequential execution via nesting:
verifyUser("amara@example.com", function(email) {
  fetchCourses(email, function(courses) {
    sendWelcome(courses, function() {
      console.log("All done!");
    });
  });
});
```

- Each function takes a callback that receives the result
- To run sequentially, nest each step inside the previous callback
- This works — but look at the indentation growing deeper

**Visual:** Three async operations shown as a waterfall — each starts when the previous completes, forming a nested staircase pattern in the code

---

### SLIDE 4 — Callback Hell (The Pyramid of Doom)
**Type:** Code
**Headline:** Callback Hell — Deeply Nested Callbacks Become Unreadable and Hard to Manage
**Content:**

```js
// Adding error handling makes it worse:
verifyUser(email, function(err, user) {
  if (err) { handleError(err); return; }
  fetchCourses(user.id, function(err, courses) {
    if (err) { handleError(err); return; }
    checkPayment(user.id, function(err, payment) {
      if (err) { handleError(err); return; }
      grantAccess(user.id, courses, function(err, result) {
        if (err) { handleError(err); return; }
        sendConfirmation(user.email, function(err) {
          if (err) { handleError(err); return; }
          console.log("Done!");
        });
      });
    });
  });
});
```

Problems with callback hell:
- **Hard to read** — the pyramid of indentation makes logic hard to follow
- **Hard to debug** — which error belongs to which step?
- **Hard to extend** — adding step 6 means nesting even deeper
- **No easy way to handle errors** — each level needs its own error check

**Visual:** The code formatted to emphasise the rightward drift — a pyramid/staircase shape with increasing indentation highlighted in red. An arrow pointing right labeled "growing complexity"

---

### SLIDE 5 — Summary
**Type:** Summary
**Headline:** What We Covered — Callbacks & Their Limitations
**Content:**

- A **callback** is a function passed to another function, called at the right time
- You've used callbacks in: `addEventListener`, `setTimeout`, `forEach`, `map`, `filter`, `reduce`
- For sequential async work, callbacks must be **nested** — each step runs inside the previous
- Deep nesting creates **callback hell** (pyramid of doom): hard to read, debug, and extend
- This is a real problem — and it's exactly what **Promises** and **async/await** solve (Module 16)

**The pattern to recognise:**
```js
step1(function() {
  step2(function() {
    step3(function() {
      // deeper and deeper...
    });
  });
});
```

**Up Next:** Module 15 — Working with JSON & Fetch API

**Visual:** A before/after teaser: left side shows the nested pyramid; right side shows a flat, readable async/await version (blurred/greyed out with "Module 16" label) as a preview of what's coming
