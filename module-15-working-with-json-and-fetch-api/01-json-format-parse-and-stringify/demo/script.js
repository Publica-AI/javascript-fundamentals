// Module 15, Topic 1 Demo — JSON Format, JSON.parse & JSON.stringify
// Context: Publica Academy student data
// Run in Node

// ---- Part 1: JSON is a string, not an object ----
console.log("--- Part 1: JSON Is a String ---");

const jsonString = '{"name":"Amara Obi","email":"amara@publica.ng","score":88}';

console.log(typeof jsonString);    // "string"
console.log(jsonString.name);      // undefined — it's a string!
console.log(jsonString.length);    // 55 — string length, not property count

// This is what an API response looks like — raw text.
// You cannot use dot notation on a string.


// ---- Part 2: JSON.parse() ----
console.log("\n--- Part 2: JSON.parse() ---");

const student = JSON.parse(jsonString);

console.log(typeof student);       // "object" — now it's usable!
console.log(student.name);         // "Amara Obi"
console.log(student.email);        // "amara@publica.ng"
console.log(student.score);        // 88

// Parse an array of objects
const coursesJSON = '[{"id":1,"title":"JavaScript Fundamentals","price":15000},{"id":2,"title":"HTML & CSS Basics","price":12000},{"id":3,"title":"Git & GitHub","price":10000}]';

const courses = JSON.parse(coursesJSON);
console.log(courses.length);       // 3
console.log(courses[0].title);     // "JavaScript Fundamentals"
console.log(courses[2].price);     // 10000

// Use array methods on parsed data
const titles = courses.map(c => c.title);
console.log(titles);  // ["JavaScript Fundamentals", "HTML & CSS Basics", "Git & GitHub"]


// ---- Part 3: JSON.stringify() ----
console.log("\n--- Part 3: JSON.stringify() ---");

const newStudent = {
  name: "Chidi Nwosu",
  email: "chidi@example.com",
  courses: ["JavaScript", "HTML & CSS"],
  score: 72,
  enrolled: true
};

const json = JSON.stringify(newStudent);
console.log(json);
console.log(typeof json);  // "string"

// Pretty print
console.log("\nPretty printed:");
console.log(JSON.stringify(newStudent, null, 2));


// ---- Part 4: What stringify removes ----
console.log("\n--- Part 4: What Stringify Removes ---");

const problematic = {
  name: "Funmi",
  greet: function() { return "Hello!"; },  // function — removed
  score: undefined,                         // undefined — removed
  email: null,                             // null — kept!
  enrolled: true
};

console.log(JSON.stringify(problematic, null, 2));
// greet and score are silently dropped
// null is valid JSON — it stays


// ---- Part 5: Parse errors ----
console.log("\n--- Part 5: Invalid JSON Throws SyntaxError ---");

const invalidExamples = [
  "{'name': 'Amara'}",         // single quotes
  '{"name": "Amara",}',        // trailing comma
  '{name: "Amara"}',           // unquoted key
  'undefined',                  // not valid JSON
];

invalidExamples.forEach(function(bad) {
  try {
    JSON.parse(bad);
  } catch (e) {
    console.log("INVALID: " + bad);
    console.log("  Error: " + e.message + "\n");
  }
});
