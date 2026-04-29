// Topic 1 Demo — Variables: let, const & var

// ---- Part 1: Declaring const variables ----
const country = "Nigeria";
const course  = "JavaScript Fundamentals";

console.log(country); // What will this print?
console.log(course);  // What will this print?


// ---- Part 2: Declaring let variables and reassigning them ----
let week  = 1;
let score = 0;

console.log(week);  // 1
console.log(score); // 0

week  = 2;
score = 85;

console.log(week);  // 2 — value updated
console.log(score); // 85 — value updated


// ---- Part 3: Trying to reassign a const (this will throw an error) ----
// Uncomment the line below to show the TypeError live:
// country = "Ghana"; // TypeError: Assignment to constant variable.