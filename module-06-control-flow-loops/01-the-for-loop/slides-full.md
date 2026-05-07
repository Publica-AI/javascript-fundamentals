# Module 6 — Topic 1: The for Loop
## Slide Deck (Full) — 6 Slides with Speaker Notes

---

### SLIDE 1 — Cover
**Type:** Cover
**Headline:** The for Loop
**Subheadline:** Module 6, Topic 1 of 4 — JavaScript Fundamentals

**Speaker Notes:**
Welcome to Module 6 — Control Flow: Loops. So far our code has either run once from top to bottom, or branched based on conditions. But what if you have 500 orders to process? You can't write 500 console.log calls. Loops solve this. A loop runs a block of code multiple times — as many times as you tell it to. The for loop is the classic starting point: it is the most explicit, the most controlled, and the most common loop you will write. By the end of this module you will have four loop tools. Let's start with the fundamental one.

---

### SLIDE 2 — Loop Anatomy
**Type:** Concept
**Headline:** The for Loop Has Three Parts in One Line
**Content:**

```
for ( initialise ; condition ; update ) {
    // code that runs on each iteration
}
```

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
// Output: 0, 1, 2, 3, 4
```

| Part | Code | Meaning |
|------|------|---------|
| **Initialise** | `let i = 0` | Start the counter at 0 |
| **Condition** | `i < 5` | Keep looping while i is less than 5 |
| **Update** | `i++` | After each iteration, add 1 to i |

**The order of events:**
1. Initialise once (i = 0)
2. Check condition → if true, run the block
3. Run the update (i++)
4. Check condition again → repeat until condition is false

**Visual:** A circular flow diagram showing the loop lifecycle — "Initialise: i = 0" leads to a diamond "i < 5?"; the "true" path leads to the code block "run loop body", which leads to "Update: i++", which loops back to the condition diamond; the "false" path exits the loop with label "loop ends"

**Speaker Notes:**
Use the flow diagram to walk through the loop manually before running it. Say: "i starts at 0. Is 0 < 5? Yes — run the block. i becomes 1. Is 1 < 5? Yes — run the block. Continue... i becomes 5. Is 5 < 5? No — loop ends." Ask students how many times this loop runs. Most will say 5. Correct. i goes through 0, 1, 2, 3, 4 — that's five iterations. The variable i is called the loop counter or index. By convention it's always called i (or j, k for nested loops). Run the slide example and show the five lines of output.

---

### SLIDE 3 — Iterating an Array
**Type:** Code
**Headline:** Use a for Loop to Process Every Item in an Array
**Content:**

```js
const prices = [4500, 1200, 8000, 600, 3300];

for (let i = 0; i < prices.length; i++) {
  console.log("Item " + (i + 1) + ": ₦" + prices[i]);
}
// Output:
// Item 1: ₦4500
// Item 2: ₦1200
// Item 3: ₦8000
// Item 4: ₦600
// Item 5: ₦3300
```

- `prices.length` is 5 — the condition `i < 5` stops after index 4 (the last valid index)
- `prices[i]` accesses the element at position `i` on each iteration
- `i + 1` in the label converts from 0-based index to human-readable "Item 1, 2, 3..."
- The loop runs **exactly as many times as there are items** — no matter how many items you add

**Visual:** A horizontal array diagram showing the 5 price boxes with indices 0–4 labeled below each; an arrow labeled "i = 0" points to the first box, then arrows show "i = 1", "i = 2" etc. progressing through each element; the last arrow from index 4 is labeled "i becomes 5 → condition false → loop ends"

**Speaker Notes:**
Ask: why `prices.length` instead of the number 5? Because if you add a sixth price to the array, you don't need to update the loop. The loop automatically runs for however many items exist. This is the habit: always use `array.length` in the condition, never a hardcoded number. Ask: what is `prices[i]` when i is 2? Walk through it — `prices[2]` is 8000. When i is 4? `prices[4]` is 3300. When i is 5? `prices[5]` is undefined — which is why we stop at `i < 5`. This leads directly into the off-by-one error on the next slide.

---

### SLIDE 4 — The Off-By-One Bug
**Type:** Warning
**Headline:** i <= length Causes an Off-By-One Error
**Content:**

```js
const cities = ["Lagos", "Abuja", "Kano", "PH"];

// ❌ BUG — using <= instead of <
for (let i = 0; i <= cities.length; i++) {
  console.log(cities[i]);
}
// Output: Lagos, Abuja, Kano, PH, undefined  ← extra undefined!
// cities[4] does not exist — index 4 is past the end

// ✅ CORRECT — using <
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}
// Output: Lagos, Abuja, Kano, PH  ← no undefined
```

**Why this happens:**
- `cities.length` is 4 — the valid indices are 0, 1, 2, 3
- `i <= 4` allows `i = 4`, but `cities[4]` is `undefined`
- `i < 4` stops before reaching index 4

**The rule:** Always use `i < array.length` — never `i <= array.length`

**Visual:** Two side-by-side array diagrams — left shows the array with indices 0–3 valid (green) and an index 4 box labeled "undefined" in red, with an arrow showing i reaching that point; right shows the same array where i stops at 3 (green checkmark) with a dashed arrow blocked before index 4; labels: "❌ <= goes one too far" and "✅ < stops at the right place"

**Speaker Notes:**
Run the buggy <= version live first. Show the "undefined" at the end of the output. Ask: what is cities[4]? It doesn't exist. Arrays are zero-indexed — a 4-element array has valid indices 0, 1, 2, 3. Index 4 is out of bounds. JavaScript doesn't throw an error — it just returns undefined. But undefined appearing in your output is a sign something is wrong. Then run the correct < version. Ask: which version is cleaner? This is one of the most common bugs beginners write. "Off by one" is so famous in programming it has its own abbreviation: OBOE. The fix is always the same: `< array.length` not `<= array.length`.

---

### SLIDE 5 — Accumulating Inside a Loop
**Type:** Code
**Headline:** Build Running Totals by Updating a Variable on Each Iteration
**Content:**

```js
const orderAmounts = [3200, 1800, 4500, 900, 2700];
let total = 0;   // initialise outside the loop

for (let i = 0; i < orderAmounts.length; i++) {
  total = total + orderAmounts[i];
  console.log("After order " + (i + 1) + ": ₦" + total);
}

console.log("Final total: ₦" + total);
// Output:
// After order 1: ₦3200
// After order 2: ₦5000
// After order 3: ₦9500
// After order 4: ₦10400
// After order 5: ₦13100
// Final total: ₦13100
```

- Declare `total` **before** the loop — not inside it (resetting it each iteration would give 0)
- Each iteration adds the current item to the running total
- After the loop, `total` holds the complete sum

**Visual:** A step-by-step table with five rows — each row shows iteration number, the value added (orderAmounts[i]), and the updated total after each addition: 3200→3200, 1800→5000, 4500→9500, 900→10400, 2700→13100; the final row is highlighted showing the completed total

**Speaker Notes:**
Ask before running: "Where is `let total = 0` declared? Why is it outside the loop?" If it were inside the loop body, it would reset to 0 on every iteration — and you'd never accumulate anything. The pattern: declare the accumulator before the loop, update it inside the loop, use it after the loop. This pattern appears everywhere: calculating cart totals, summing sales figures, counting records, computing averages. Have students verify the math: 3200 + 1800 = 5000, + 4500 = 9500, + 900 = 10400, + 2700 = 13100. That's the breakpoints demo from Module 4 — but now students understand the code behind it.

---

### SLIDE 6 — Summary
**Type:** Summary
**Headline:** What We Covered — The for Loop
**Content:**
- `for (let i = 0; i < length; i++)` — the standard loop structure
- Three parts: **initialise** (start) → **condition** (keep going?) → **update** (next step)
- Always use `i < array.length` — never `<=`
- Access array elements with `array[i]`
- Declare accumulator variables (`total`, `count`) **before** the loop

**When to use a for loop:**
- When you need the index (`i`) to access or display items
- When you need to run a fixed number of times
- When you need to build a total or count while iterating

**Up Next:** Topic 2 — while & do...while Loops

**Speaker Notes:**
The for loop is the most explicit loop — all three control parts are visible in one line. That makes it predictable and easy to reason about. It's also the most appropriate loop when you need the index i — for example, when you need to compare two elements or print "Item 3 of 5". Topic 2 introduces while loops — for when you don't know how many iterations you'll need in advance, just that you want to keep going until a condition changes.