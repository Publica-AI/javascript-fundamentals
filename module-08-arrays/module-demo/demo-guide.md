# Demo Guide — Module 8 Combined Demo: Arrays
**Module 8 — JavaScript Fundamentals**
**Type:** End-of-module live walkthrough
**Duration:** 15–18 minutes
**Files:** `script.js`

---

## What This Demo Teaches

The module demo builds a Jumia inventory management system using every array skill from Module 8. Students see: access on an array of objects (Part 1), a cart built with push/pop (Part 2), stock list management with splice (Part 3), pagination with slice (Part 4), pricing and availability filtering with map and filter (Part 5), and a formatted available-products report built by chaining filter and forEach (Part 6). No new concepts — only patterns from Topics 1–3 composed together.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run once to confirm all six parts output correctly
3. Note: inventory has 7 products, 5 in stock (PRD-003 and PRD-007 are out of stock)
4. The spread `...product` in Part 5 map may be unfamiliar — explain it briefly: "copies all existing properties, then adds priceWithVAT"

---

## Demo Steps

### Part 1 — Access

> *"inventory.length is 7. Ask: what does `inventory[inventory.length - 1].name` give us?"*

Run Part 1. Show: 7, Wireless Earbuds, Mechanical Keyboard, 8000.

> *"Array of 7 objects. Last index is 6. inventory[6].name gives us the last product's name. Point out the chain: inventory[2] gets the object, .price gets its price."*

---

### Part 2 — Cart (push/pop)

> *"We build the cart with push — adding 3 products from the inventory array. We pass the whole object, not just the name. Then pop removes the last one."*

Run Part 2. Show: cart grows to 3, pops Laptop Bag, has 2.

> *"The cart stores references to inventory objects. map here is used just for display — to show the names. Point out: we're using map on the result of a previous operation. Functions and methods compose."*

---

### Part 3 — Splice

> *"stockList has 5 items. We splice to replace the 'Old Model Phone' with the new one, then insert Laptop Bag."*

Run Part 3. Show before and after states.

> *"splice(2, 1, 'Tecno Spark') — at index 2, delete 1 and insert this. splice(2, 0, 'Laptop Bag') — at index 2, delete 0 and insert this. Replacement then insertion."*

---

### Part 4 — Slice

> *"We want page 1 (first 3) and the latest 2. slice doesn't touch the original."*

Run Part 4. Point to "Original unchanged" output.

> *"Pagination is a common use case for slice: `ids.slice(0, 10)` for page 1, `ids.slice(10, 20)` for page 2. Safe — the source array is never modified."*

---

### Part 5 — map + filter

1. **Ask before running:**

> *"map adds a priceWithVAT field to every product. filter(p => p.inStock) keeps only available ones. filter(p => p.category === 'Electronics') keeps only electronics. How many should be in each filtered result?"*

2. Run Part 5. Show: 5 in-stock, 3 electronics (Earbuds, Tecno, Keyboard — but Tecno and Keyboard are out of stock).

> *"Map adds data to every object without changing the original. Filter creates a subset. Chaining them: filter then map, or map then filter — both valid, order depends on what you need."*

---

### Part 6 — Combined

> *"The final part: filter to get available products, then forEach to print each with numbering."*

Run Part 6. Show the formatted numbered list.

> *"Real-world pattern: fetch data (inventory), filter to relevant records (in-stock), loop to display. Three operations, clean and readable."*

---

## Teaching Tips

- **The spread operator `...product` in Part 5** is used for completeness but isn't required for the lesson — if students ask, explain it briefly: "copies all properties from product into the new object, then we add one more"
- **Part 6's chained filter + forEach** is the showcase — this is how data is processed in every modern web app from inventory displays to search results
- **If time allows**: show what the Part 5 filter looks like if chained: `inventory.filter(p => p.inStock).map(p => p.name)` — one expression

---

## What's Next

**Task 66** → Module 8 Assessment & Project JSONs
