// Module 18, Topic 3 Demo — main entry point
// Open index.html in browser (must use a local server for modules)

import Student from "./Student.js";
import { formatPrice, VAT_RATE, COURSES } from "./utils.js";

// ---- Part 1: Using named imports ----
console.log("--- Part 1: Named Imports ---");

console.log("Available courses:", COURSES);
console.log("Course price:", formatPrice(15000));
console.log("With VAT:", formatPrice(Math.round(15000 * (1 + VAT_RATE))));


// ---- Part 2: Using default import (class) ----
console.log("\n--- Part 2: Default Import (Class) ---");

const amara = new Student("Amara Obi", "amara@publica.ng", 88);
const chidi = new Student("Chidi Nwosu", "chidi@publica.ng", 45);
const funmi = new Student("Funmi Adeyemi", "funmi@publica.ng", 72);

console.log(amara.getInfo());
console.log(chidi.getInfo());
console.log(funmi.getInfo());


// ---- Part 3: Combining modules ----
console.log("\n--- Part 3: Modules Working Together ---");

const students = [amara, chidi, funmi];

const passing = students.filter(s => s.grade === "Pass");
console.log("Passing:", passing.map(s => s.name).join(", "));

const report = students.map(s => ({
  name: s.name,
  score: s.score,
  grade: s.grade,
  tuition: formatPrice(15000)
}));

console.log("Report:");
report.forEach(r => {
  console.log("  " + r.name + " | " + r.grade + " | " + r.tuition);
});


// ---- Part 4: DOM rendering (if in browser) ----
const output = document.querySelector("#output");
if (output) {
  const html = students.map(s =>
    "<li><strong>" + s.name + "</strong> — " + s.grade + " (" + s.score + ")</li>"
  ).join("");
  output.innerHTML = html;
}

console.log("\n--- Modules demo complete ---");
console.log("Each file has its own scope. No global pollution.");
console.log("utils.js → named exports. Student.js → default export.");
console.log("script.js → imports both and uses them together.");
