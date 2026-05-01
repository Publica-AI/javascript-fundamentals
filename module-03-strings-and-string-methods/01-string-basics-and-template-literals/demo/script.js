// Topic 1 Demo — String Basics & Template Literals
// Context: Building a personalised greeting for a Publica Academy student

const studentName = "Chukwuemeka";
const city        = "Port Harcourt";
const course      = "JavaScript Fundamentals";
const moduleNum   = 3;
const progress    = 17;  // percentage of course completed


// ---- Part 1: Concatenation (old way) ----
const greeting1 = "Welcome, " + studentName + "! You are in " + city + ".";
const progress1 = "You are on Module " + moduleNum + " of " + course + ". Progress: " + progress + "%.";

console.log(greeting1);
console.log(progress1);


// ---- Part 2: Template literal (modern way) ----
const greeting2 = `Welcome, ${studentName}! You are in ${city}.`;
const progress2 = `You are on Module ${moduleNum} of ${course}. Progress: ${progress}%.`;

console.log(greeting2);
console.log(progress2);


// ---- Part 3: Expressions inside ${} ----
const price    = 15000;  // course price in Naira
const discount = 0.1;    // 10% discount

console.log(`Full price: ₦${price}`);
console.log(`Your discounted price: ₦${price - price * discount}`);
console.log(`${studentName.toUpperCase()} — keep going!`);


// ---- Part 4: Multi-line string ----
const certificate = `
Certificate of Enrollment
--------------------------
Student: ${studentName}
City:    ${city}
Course:  ${course}
--------------------------
`;

console.log(certificate);