# Module Demo Guide — Intro to the Web and JavaScript
**Module 1 — JavaScript Fundamentals**
**Topics covered:** How the Web Works · Where JavaScript Fits In · Running JavaScript in a Web Page
**Type:** Combined module walkthrough
**Duration:** 20–25 minutes
**Files:** `index.html`, `script.js`

---

## What This Demo Teaches

This demo ties all three Module 1 topics into one continuous walkthrough. Students see the full picture: a request leaves the browser and reaches a server (Topic 1), HTML and JavaScript work together to make a page interactive (Topic 2), and `console.log` lets developers see what is happening behind the scenes (Topic 3). By the end, students have watched a page go from a dead static document to a responding, logging, interactive experience.

---

## Setup (Before Class)

1. Open VS Code with `module-demo/index.html` and `module-demo/script.js` visible
2. **Comment out the `<script>` tag** in `index.html` before the demo starts:
```html
<!-- <script src="script.js"></script> -->
```
3. Open `index.html` in Chrome and confirm the button does nothing
4. Have `jumia.com.ng` ready to open in a second Chrome tab

---

## Demo Steps

### Part 1 — The Request That Starts Everything (Topic 1 Recap)

1. Open a fresh Chrome tab and navigate to **jumia.com.ng**
2. Press **F12** → open the **Network** tab
3. Refresh the page (`Ctrl + R`)
4. Point to the waterfall of requests loading in

> **Say to students:** *"Before we write a single line of JavaScript, think about what just happened. Your browser sent a request to Jumia's server. The server sent back HTML, CSS, and JavaScript files. That is the web. Every page you have ever visited started with this request-response cycle. Our demo file does the same thing — when you open it in Chrome, the browser is requesting your local file from your own machine."*

5. Click on the top document request in the Network tab → show the **Headers** tab (URL, method: GET, status: 200)

> *"200 means the server said 'here it is.' If the file didn't exist, you'd see 404 — file not found. These status codes matter when things go wrong."*

---

### Part 2 — HTML Without JavaScript Is Just a Static Document (Topic 2 Recap)

1. Switch to the `module-demo/index.html` tab in Chrome (the `<script>` tag is still commented out)
2. Point to the heading and paragraph — the page looks presentable
3. Click the **"Click Me"** button

> **Nothing happens.**

> **Say to students:** *"HTML gave us the structure. CSS gave it style. But the button is decoration — clicking it does nothing because there is no JavaScript connected to it. This is the exact situation every web page is in before JavaScript arrives."*

4. Switch to VS Code — show `script.js` and read through it with students:
   - We grab the heading and button by their IDs
   - We tell the button to listen for a click
   - When the click happens, we change the heading text and colour

> *"Three jobs. Find the elements. Listen for an event. Respond to it. That is the core of what JavaScript does on a web page."*

---

### Part 3 — Link the Script, See the Difference (Topic 2 + Topic 3)

1. In `index.html`, **uncomment** the `<script>` tag:
```html
<script src="script.js"></script>
```
2. Save and **refresh Chrome**
3. Press **F12** → **Console tab** — show the two startup logs:
```
Page loaded — JavaScript is running.
Ẹ kú ọjọ́! Module 1 demo started.
```

> **Say to students:** *"Two things happened the moment the page loaded: the button became interactive, and JavaScript sent us two messages in the Console. These are `console.log` statements at the top of `script.js` — they ran immediately when the browser linked and executed the file."*

4. Click the **"Click Me"** button — heading changes, button label changes
5. Show the Console — a third log has appeared:
```
Button clicked — JavaScript responded.
```

> *"That third log only ran when we clicked. The Console is not just showing us that code ran — it is showing us exactly when and in what order. This is the most important debugging tool you have."*

---

### Part 4 — Connect It Back

> **Say to students:** *"Let's recap what just happened. The browser made a request and received our files — that's Topic 1. HTML gave us the structure; JavaScript made it interactive — that's Topic 2. `console.log` let us see inside the code as it ran — that's Topic 3. Every web application you will ever build starts with this exact foundation. The rest of the course is building on top of it."*

---

## Teaching Tips

- **Pause after Part 1** and confirm students understand the request-response link before moving on — it becomes relevant again in Module 15 when they hit real APIs
- **The "nothing happens" moment in Part 2** is deliberately frustrating — give it a beat before revealing the script. Let students sit with the disconnect between a nice-looking page and a useless button
- **In Part 3**, make sure students watch the Console appear before clicking the button — the startup logs prove JavaScript ran the moment the page loaded, not just on click
- **If the Console shows an error** (e.g., `Cannot read properties of null`) — it almost certainly means the IDs in `script.js` don't match the IDs in `index.html`. Use it as a live debugging moment
- **Optional close:** ask a student to change the heading text in `script.js` to something of their own — their name, a city, any phrase in any Nigerian language — save, refresh, click. First personalised JavaScript output

---

## What's Next

**Task 8** → Module 1 Assessment & Project
The assessment covers the three conceptual areas from this module: request-response cycle, the three web technologies, and the `<script>` tag / `console.log`. The project has students build a simple annotated web page that demonstrates JavaScript running and logging in a browser.