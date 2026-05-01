// Module 3 — Combined Demo
// Topics: String Basics & Template Literals | Searching & Checking Strings | Transforming Strings
// Context: Processing a single user registration — one continuous input-handling story

// ============================================================
// SETUP — Raw data from a registration form
// ============================================================

let rawEmail = "  NGOZI@PUBLICA.NG  ";   // note: spaces and uppercase
let rawName  = "  Ngozi Eze  ";
let rawPhone = "081-234-567-890";


// ============================================================
// PART 1 — Template Literals (Topic 1)
// Build a welcome message before we clean anything
// ============================================================

const appName = "Publica Academy";

console.log("=== PART 1: Template Literals ===");
console.log(`Welcome to ${appName}!`);
console.log(`You entered: "${rawEmail}"`);
console.log(`Name on file: "${rawName}"`);
console.log(`Registration fee: ₦${15000 * 0.9} (10% early-bird discount applied)`);


// ============================================================
// PART 2 — Searching & Checking (Topic 2)
// Validate the raw email BEFORE cleaning it
// ============================================================

console.log("=== PART 2: Checking the Raw Email ===");

const trimmedForCheck = rawEmail.trim();

console.log(`Has @:          ${trimmedForCheck.includes("@")}`);       // true
console.log(`Has dot:        ${trimmedForCheck.includes(".")}`);       // true
console.log(`@ at position:  ${trimmedForCheck.indexOf("@")}`);       // 5
console.log(`Ends with .ng:  ${trimmedForCheck.toLowerCase().endsWith(".ng")}`); // true
console.log(`Starts with 0:  ${trimmedForCheck.startsWith("0")}`);    // false

const looksValid = trimmedForCheck.includes("@") && trimmedForCheck.includes(".");
console.log(`Basic validation: ${looksValid}`);  // true


// ============================================================
// PART 3 — Transforming (Topic 3)
// Clean the same email — and the other inputs
// ============================================================

console.log("=== PART 3: Cleaning the Input ===");

const cleanEmail = rawEmail.trim().toLowerCase();
const cleanName  = rawName.trim();
const cleanPhone = rawPhone.replaceAll("-", "");

console.log(`Clean email:  ${cleanEmail}`);   // ngozi@publica.ng
console.log(`Clean name:   ${cleanName}`);    // Ngozi Eze
console.log(`Clean phone:  ${cleanPhone}`);   // 081234567890

// Extract parts using slice and indexOf
const emailDomain = cleanEmail.slice(cleanEmail.indexOf("@") + 1);
const firstName   = cleanName.slice(0, cleanName.indexOf(" "));
const netPrefix   = cleanPhone.slice(0, 3);

console.log(`Email domain: ${emailDomain}`);  // publica.ng
console.log(`First name:   ${firstName}`);    // Ngozi
console.log(`Network:      ${netPrefix}`);    // 081


// ============================================================
// PART 4 — Final confirmation message using everything
// ============================================================

console.log("=== PART 4: Confirmation ===");
console.log(`
Registration confirmed!
-----------------------
Name:   ${cleanName}
Email:  ${cleanEmail}
Phone:  ${cleanPhone}
Domain: ${emailDomain}
-----------------------
`);