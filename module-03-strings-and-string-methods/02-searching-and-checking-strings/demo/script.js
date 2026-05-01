// Topic 2 Demo — Searching & Checking Strings
// Context: Validating a user sign-up form on Publica Academy

const email    = "ngozi@publica.ng";
const website  = "https://publicaacademy.com";
const filename = "module-3-notes.pdf";
const phone    = "08034567890";


// ---- Part 1: includes() ----
console.log("--- includes() ---");
console.log(email.includes("@"));         // true  — has @
console.log(email.includes("gmail"));     // false — not Gmail
console.log(email.includes("@") && email.includes(".")); // true — basic email check


// ---- Part 2: indexOf() ----
console.log("--- indexOf() ---");
console.log(email.indexOf("@"));          // 5  — @ is at position 5
console.log(email.indexOf("yahoo"));      // -1 — not found
console.log(`@ is at position: ${email.indexOf("@")}`);
console.log(`Not found returns: ${email.indexOf("yahoo")}`);


// ---- Part 3: startsWith() ----
console.log("--- startsWith() ---");
console.log(website.startsWith("https")); // true  — secure URL
console.log(website.startsWith("http:"));// false — not plain http
console.log(phone.startsWith("080"));     // true  — MTN prefix
console.log(phone.startsWith("090"));     // false — not Airtel


// ---- Part 4: endsWith() ----
console.log("--- endsWith() ---");
console.log(filename.endsWith(".pdf"));   // true  — is a PDF
console.log(filename.endsWith(".docx"));  // false — not Word doc
console.log(email.endsWith(".ng"));       // true  — Nigerian domain


// ---- Part 5: Combined validation ----
console.log("--- Email Validation ---");
const hasAt      = email.includes("@");
const hasDot     = email.includes(".");
const notTooShort = email.length > 5;

const isValid = hasAt && hasDot && notTooShort;
console.log(`Email "${email}" is valid: ${isValid}`);

// Test with an invalid email
const badEmail  = "notanemail";
const badIsValid = badEmail.includes("@") && badEmail.includes(".");
console.log(`Email "${badEmail}" is valid: ${badIsValid}`);