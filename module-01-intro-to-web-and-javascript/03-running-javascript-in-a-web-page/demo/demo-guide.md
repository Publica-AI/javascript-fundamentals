# Demo Guide — Running JavaScript in a Web Page
**Module 1, Topic 3 of 3 — JavaScript Fundamentals**
**Type:** Live code walkthrough (build from scratch)
**Duration:** 8–10 minutes
**Files:** `index.html`, `script.js`

---

## What This Demo Teaches

Students will build a working HTML + JavaScript setup from scratch — creating both files, linking them together, writing their first `console.log` statements, and seeing the output in the DevTools Console. By the end, every student has JavaScript running in their own browser.

---

## Setup (Before Class)

1. Open VS Code in an empty folder (or create a new folder called `topic-3-demo`)
2. **Do not pre-create any files** — this is a live build from scratch
3. Have Chrome open and ready
4. Keep DevTools closed at the start — you'll open it together with students

---

## Demo Steps

### Step 1 — Create the HTML File

1. In VS Code, create a new file: **`index.html`**
2. Type the basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Practice</title>
</head>
<body>

    <h1>JavaScript for Naija Developers</h1>
    <p>Open the Console (F12) to see the output from script.js</p>

    <script src="script.js"></script>
</body>
</html>
```

> **Say to students:** *"Notice where the `<script>` tag is — right before the closing `</body>` tag. That's the rule. The HTML loads first, then the browser runs our JavaScript."*

3. Save the file

---

### Step 2 — Create the JavaScript File

1. Create a new file: **`script.js`** (in the same folder as `index.html`)
2. Write three `console.log` statements:

```js
console.log("Hello, World!");
console.log("Ẹ kú ọjọ́! Learning JavaScript from Nigeria.");
console.log("The console shows output from my code.");
```

3. Save the file

> **Say to students:** *"We have three log statements. Each one will print a message to the Console. The browser will run them in order — top to bottom, exactly as written."*

---

### Step 3 — Open the Page in Chrome

1. Right-click `index.html` → **Open with → Chrome** (or drag the file into Chrome)
2. The page appears — students can see the heading and paragraph

> **Say to students:** *"The page looks fine — but we haven't seen our `console.log` output yet. That goes to the Console, not the page. Let's open DevTools."*

---

### Step 4 — Open DevTools and See the Output

1. Press **F12** (or `Ctrl + Shift + I`)
2. Click the **Console** tab

> **Three lines of output appear:**
> ```
> Hello, World!
> Ẹ kú ọjọ́! Learning JavaScript from Nigeria.
> The console shows output from my code.
> ```

> **Say to students:** *"There they are — in the exact order we wrote them. Notice the file name and line number on the right side of each output. Line 1 is our first log, line 2 is the second, line 3 is the third. This is how you will check your code throughout the entire course."*

---

### Step 5 — Add a Fourth Log Live

1. Switch back to VS Code, add a fourth line to `script.js`:

```js
console.log(42);
```

2. Save the file
3. Switch to Chrome and **refresh** (`Ctrl + R`)

> **The number 42 appears as a fourth line in the Console.**

> **Say to students:** *"You can log strings, numbers, anything. And every time you change your code, refresh the browser — the Console clears and reruns everything. That refresh habit will save you a lot of confusion."*

---

## Teaching Tips

- **Make sure every student opens DevTools themselves** — don't move on until everyone can see the Console tab
- **Point out the file name and line number** on the right side of each Console output — students should know this exists before they need it for debugging
- **If the Console is empty:** the most common cause is a typo in the `src` path — `script.js` must match the file name exactly, including case
- **If a student asks "why doesn't it show on the page?"** — reinforce: `console.log` is for developers, not users; it never touches the visible page
- **Optional follow-up:** ask students to add their own `console.log` with their name or a Yoruba/Igbo/Hausa greeting, save, and refresh

---

## What's Next

**Task 7** → Module 1 combined demo
Students have now seen all three topics in action. The module demo brings them together in a single walkthrough — from how the web works, through JavaScript's role, to running code in a real page.