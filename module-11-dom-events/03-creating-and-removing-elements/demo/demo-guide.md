# Demo Guide — Module 11, Topic 3: Creating and Removing Elements
**Module 11 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `index.html`, `demo/script.js`

---

## What This Demo Teaches

Students see element creation and deletion happen in the browser. The four parts cover: the three-step createElement/configure/append flow, delete buttons with closures capturing the right element, innerHTML with map/join rendering a course catalogue, and clearing a list with innerHTML = "".

---

## Setup (Before Class)

1. Open `index.html` in Chrome
2. Open DevTools Console (F12)
3. Have `script.js` visible in VS Code

---

## Demo Steps

### Part 1 — createElement + appendChild

> *"The list is empty. Ask: what are the three steps to add an element to the DOM?"*

Type "Module 4 — Arrays" in the input and click Add. Show the item appearing in the list. Show the console: "Added item: Module 4 — Arrays", "List length: 1".

Add two more items. Show length incrementing.

> *"createElement creates the element but doesn't add it. appendChild is the step that makes it appear on the page. The children.length property counts direct children."*

---

### Part 2 — Delete Button with Closure

> *"Now each item gets a × button. The clever part is the closure. Ask: if I have three items and click × on the first one, how does it know to remove that specific item?"*

Add three items with delete buttons. Click × on the middle one. Show only that item removed.

> *"The arrow function `() => li.remove()` captures the li variable from the moment it was created. Each × button has its own closure over its own li — they don't share."*

---

### Part 3 — innerHTML + map/join

> *"We have an array of course objects. Ask: what does map().join('') return — an array or a string?"*

Run Part 3 (already runs on load). Show the three course cards rendered.

> *"Map creates an array of HTML strings. join('') concatenates them with no separator. The result is one long HTML string. innerHTML parses it and renders the elements. Event delegation on the parent grid handles the enroll buttons."*

Click an enroll button — show the console log.

---

### Part 4 — remove() and clear

> *"Type several modules and add them. Ask: what does `parent.innerHTML = ''` do?"*

Add three items, then click Clear All. Show all items vanish and the console log: "Cleared 3 items".

> *"innerHTML = '' removes all child nodes at once. Efficient. Count the children first before clearing so we can log how many were removed."*

---

## Teaching Tips

- **Let students add items in Part 1** — having them type and click themselves makes the DOM change feel real
- **The closure in Part 2** is worth pausing on — students who've seen closures in functions may need the reminder that the same concept applies here in event handlers
- **event delegation with `.closest()`** in Part 3 is a bonus technique — `.closest(".course-card")` walks up the DOM tree from the target until it finds an ancestor matching the selector

---

## What's Next

**Module Demo** → Combines all three topics in a complete Publica Academy notification and course management interface
