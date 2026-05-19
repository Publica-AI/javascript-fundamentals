# Demo Guide — Module 10, Topic 1: Understanding the DOM Tree
**Module 10 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 8–10 minutes
**Files:** `index.html`, `demo/script.js`

---

## What This Demo Teaches

Students see the DOM as a live JavaScript object by reading properties off real page elements. The four parts show: the `document` object itself, reading `tagName`/`id`/`className`/`textContent` off an element, navigating the tree with `querySelector` and `querySelectorAll`, and the null-crash that results from script placement in the `<head>`.

---

## Setup (Before Class)

1. Open `index.html` in Chrome
2. Open DevTools → Console (F12)
3. Have `script.js` open in VS Code on the left half of the screen
4. The page should show the heading and paragraph before any JavaScript runs

---

## Demo Steps

### Part 1 — The document Object

> *"Before we select any element, let's look at what `document` actually is. Ask: what type do you expect `typeof document` to return?"*

Run Part 1. Show: title string, the body element printed as HTML, `typeof document` = "object".

> *"`document` is just a JavaScript object. It has properties like `.title` and `.body`. The DOM is not magic — it's objects all the way down."*

---

### Part 2 — Reading Element Properties

> *"Now let's grab the h1 by its id and read its properties. Ask: what will `tagName` return — 'h1' or 'H1'?"*

Run Part 2. Show: `H1` (uppercase), `page-title`, `main-heading`, `Welcome to Publica Academy`.

> *"tagName is always uppercase — that's the DOM spec. The other three — id, className, textContent — are the properties you'll read constantly in every project."*

---

### Part 3 — Navigating the Tree

> *"The DOM is a tree. We can navigate it. Ask: how many direct children does the body have in our HTML?"*

Run Part 3. Show: `children.length` = 3 (h1, p, ul), then the intro paragraph text, then list items.

> *"`querySelectorAll` returns a NodeList — like an array. We access items by index: `[0]`, `[1]`. The length is 2 because there are two `<li>` tags. We'll go deep on selecting elements in Topic 2."*

---

### Part 4 — Script Placement

> *"The subtitle element logs correctly here. Why? Because our script is at the bottom of body. Ask: what would happen if we moved the script tag to the `<head>`?"*

Run Part 4. Show: `subtitle` element logs the full `<p>` tag.

Now move the `<script>` tag to the `<head>` in `index.html`, save, and refresh.

> *"See — null. The element doesn't exist yet when the script runs. That's the error: `Cannot read properties of null`. This is the most common DOM bug beginners hit. The fix: script at the bottom of body."*

Move the script back before wrapping up.

---

## Teaching Tips

- **Part 1 typeof check** reinforces that `document` is an ordinary JS object — this helps students stop treating DOM APIs as special magic
- **Part 4 live breakage** is worth doing — seeing null crash in real time is more memorable than any slide
- Mention that `querySelector` is a preview of Topic 2 — don't go into detail on selectors yet

---

## What's Next

**Topic 2** → Selecting Elements — querySelector, getElementById, querySelectorAll, and working with NodeLists
