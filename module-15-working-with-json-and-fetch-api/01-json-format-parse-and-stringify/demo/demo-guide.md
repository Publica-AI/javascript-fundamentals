# Demo Guide — Module 15, Topic 1: JSON Format, JSON.parse & JSON.stringify
**Module 15 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node)

---

## What This Demo Teaches

Students see that JSON is a string (not an object), learn to convert between JSON strings and JavaScript values using parse/stringify, discover what stringify silently removes, and experience the SyntaxError that invalid JSON produces — preparing them for real API data in Topic 2.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js`

---

## Demo Steps

### Part 1 — JSON Is a String

> *"Ask: if I have a variable holding `'{"name":"Amara"}'`, can I do `.name` on it?"*

Run Part 1. Show `typeof` is "string", `.name` is undefined, `.length` is 55 (character count).

> *"This is what API data looks like when it arrives — a big string of text. You can't use it as an object until you parse it. That's what JSON.parse does."*

---

### Part 2 — JSON.parse()

> *"Now we convert the string into a real object."*

Show `typeof student` is "object" and all properties are accessible. Show the array parse and using `.map()` on the result.

> *"After parse, it's a normal JavaScript object — dot notation, bracket notation, array methods — everything works. The API sends text; you parse it; now you can code with it."*

---

### Part 3 — JSON.stringify()

> *"Going the other direction — object to string."*

Show the compact output (one line), then the pretty-printed version with 2-space indent.

> *"stringify is for when YOU need to send data or store it. APIs expect string bodies. localStorage only stores strings. You'll use this in Module 17."*

---

### Part 4 — What Stringify Removes

> *"Ask: what happens to the function property? What about undefined?"*

Show that `greet` (function) and `score` (undefined) disappear, but `null` stays.

> *"Functions and undefined are silently dropped — no error, no warning. null is valid JSON so it stays. This is a gotcha if you accidentally try to send an object with methods to an API — they just vanish."*

---

### Part 5 — Invalid JSON Throws SyntaxError

> *"Four examples of bad JSON — each one breaks the rules."*

Show each error message. Point to the specific rule each one violates.

> *"Single quotes on keys — invalid. Trailing comma — invalid. Unquoted keys — invalid. These are the most common mistakes when writing JSON by hand. The error messages from JSON.parse are your friend — they tell you exactly what's wrong."*

---

## Teaching Tips

- **Type checking** — have students predict `typeof` before showing it. This cements the "JSON is a string" lesson.
- **Parse then use** — the sequence is always: receive string → parse → use. Burn this in.
- **Stringify then send/store** — the reverse: have object → stringify → send/store. Two directions.
- **Common mistakes** — single quotes and trailing commas are the two most frequent JSON errors in the real world.

---

## What's Next

**Topic 2** → Fetching Data with the Fetch API — making HTTP requests and parsing real API responses.
