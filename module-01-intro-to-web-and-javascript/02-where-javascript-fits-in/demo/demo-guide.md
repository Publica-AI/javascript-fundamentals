# Demo Guide — Where JavaScript Fits In
**Module 1, Topic 2 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough
**Duration:** 8–10 minutes
**Files:** `index.html`, `script.js`

---

## What This Demo Teaches

Students will see the exact difference between a static page (HTML + CSS only) and an interactive page (HTML + CSS + JavaScript). By the end, they will understand that JavaScript is what gives a button its behaviour — and that without it, clicking does nothing.

---

## Setup (Before Class)

1. Open `index.html` in VS Code
2. Open `index.html` in Chrome (double-click the file or right-click → Open with → Chrome)
3. **Comment out the `<script>` tag** before the demo starts:
```html
<!-- <script src="script.js"></script> -->
```
4. Save the file — the page should now have no JavaScript linked

---

## Demo Steps

### Step 1 — Show the Static Page (No JavaScript)
1. Point to the page in Chrome — a heading, a paragraph, and a button
2. Click the **"Change the Heading"** button

> **Nothing happens.**

> **Say to students:** *"Look — I click the button and nothing happens. This page has HTML and CSS. It looks fine. But it can't do anything. A button with no JavaScript attached to it is just decoration."*

3. Open DevTools → **Console tab** and type:
```js
document.getElementById("main-heading")
```
Press Enter — students can see the heading element exists in the DOM.

> *"The element is there. JavaScript can see it. We just haven't written any instructions yet."*

---

### Step 2 — Show the Script File
1. Switch to VS Code
2. Open `script.js` and read through it with the class — do not run it yet:

```js
const heading = document.getElementById("main-heading");
const button  = document.getElementById("change-btn");

button.addEventListener("click", function () {
    heading.textContent = "JavaScript Changed This!";
    heading.style.color = "#27ae60";
    button.textContent  = "Click Again";
});
```

> **Say to students:** *"Three things are happening here. First, we grab the heading and the button from the page. Second, we tell the button to listen for a click. Third, when that click happens, we change the heading text and colour. This is JavaScript — it reads the page, listens for events, and updates what the user sees."*

---

### Step 3 — Link the Script and Show the Difference
1. Back in `index.html`, **uncomment** the `<script>` tag:
```html
<script src="script.js"></script>
```
2. Save the file
3. Refresh Chrome
4. Click the **"Change the Heading"** button

> **The heading changes to "JavaScript Changed This!" in green. The button label also changes.**

> **Say to students:** *"Same HTML. Same CSS. Same button. The only difference is one line — the script tag that links our JavaScript file. That one line is what turns a static page into an interactive one. This is exactly where JavaScript fits in."*

---

### Step 4 — Connect It Back to Real Sites
> *"When you click 'Add to Cart' on Jumia — JavaScript updates the cart count. When you type in a search box and suggestions appear — JavaScript is watching and responding. When a form catches your invalid email before it's even sent — JavaScript checked it. All of that is the same principle you just saw: HTML holds the elements, JavaScript listens and responds."*

---

## Teaching Tips

- **Emphasise the before/after:** the static vs interactive contrast is the whole point of this demo — give students a moment to experience the "nothing happens" frustration before revealing the script
- **Don't rush step 2:** reading through `script.js` together, even if students don't understand every word yet, starts building familiarity with JavaScript syntax
- **If students ask "what is addEventListener?"** — tell them it's coming in Module 11; for now just know it means "watch for a click"
- **Optional follow-up:** ask a student to change the heading text in `script.js` to something of their choice, save, and refresh — they just wrote their first JavaScript edit

---

## What's Next

**Task 5** → Slides for *'Running JavaScript in a Web Page'*
Students have now seen JavaScript in action. Next, they'll learn the two ways to add JavaScript to a page (inline vs external) and how to use `console.log` to see output.