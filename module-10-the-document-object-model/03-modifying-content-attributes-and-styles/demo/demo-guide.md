# Demo Guide — Module 10, Topic 3: Modifying Content, Attributes, and Styles
**Module 10 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `index.html`, `demo/script.js`

---

## What This Demo Teaches

Students see live DOM mutations in the browser: textContent and innerHTML updating the page visibly, attributes changing the image and link href, classList toggling a hidden alert box, and inline styles changing color and font weight. The emphasis is on watching the browser re-render in real time as each line runs.

---

## Setup (Before Class)

1. Open `index.html` in Chrome
2. Open DevTools → Console (F12)
3. Keep the page visible alongside the console — changes will be visible on the page
4. Have `script.js` open in VS Code

---

## Demo Steps

### Part 1 — textContent vs innerHTML

> *"The greeting says 'Welcome' and status says 'Loading…'. Ask: after we run Part 1, what will the greeting say?"*

Run Part 1. Point to the live page — heading now reads "Welcome, Amara!" and status has updated. Show the card title with the italic tag rendered.

> *"textContent changed the text but treated everything literally. innerHTML parsed the `<em>` tag and made it italic. Read the innerHTML back — it shows the full tag string."*

---

### Part 2 — Attributes

> *"The image is a broken placeholder. Ask: how do we change what image is displayed?"*

Run Part 2. Point to the image updating with the placeholder URL. Show the link href change in DevTools (Elements panel).

> *"getAttribute reads, setAttribute writes. The `disabled = true` line greys out the button on the page. You can see this directly on the button — it's now visually disabled."*

---

### Part 3 — classList

> *"There's an alert box on the page — you can't see it because it has a 'hidden' class that sets display:none. Ask: what does classList.remove('hidden') do?"*

Run Part 3. Point to the alert box appearing, then disappearing with toggle.

> *"toggle is the most useful one — it checks the current state and does the opposite. That's the show/hide pattern every web app uses. Inspect the card element in DevTools — you can see the 'highlight' class added to its class list."*

---

### Part 4 — Inline Styles

> *"Ask: what's the JavaScript property name for the CSS property `font-weight`?"*

Run Part 4. Point to the price text turning navy blue and bold, and the heading getting a bottom border.

> *"camelCase for hyphenated names — fontWeight, borderBottom, paddingBottom. Setting a style to an empty string removes it from the inline style — the element falls back to whatever the stylesheet says."*

---

## Teaching Tips

- **Run with DevTools Elements panel open** for Parts 2 and 3 — watching class attributes change in real time makes classList concrete
- **Part 1 textContent vs innerHTML** — type `greeting.innerHTML = "<script>alert('xss')</script>"` in the console and show what happens (the text renders literally with textContent, but innerHTML would execute it) — this makes the XSS warning real rather than theoretical
- Keep instructor commentary short for Part 4 — camelCase is easy to remember once seen once

---

## What's Next

**Module Demo** → Combines all three topics in a single Publica Academy course card interaction pipeline
