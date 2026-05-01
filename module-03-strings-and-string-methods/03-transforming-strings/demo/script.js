// Topic 3 Demo — Transforming Strings
// Context: Cleaning and formatting a messy form registration input

// ---- The raw input — exactly as a user might type it ----
const rawEmail    = "  ADA@GMAIL.COM  ";   // extra spaces + wrong case
const rawName     = "  ngozi OKONKWO  ";   // extra spaces + inconsistent case
const rawPhone    = "080-345-678-90";      // dashes that should be stripped
const rawCity     = "  lagos  ";           // spaces + lowercase


// ---- Part 1: trim() ----
console.log("--- BEFORE trim() ---");
console.log(`Name: "${rawName}"`);
console.log(`Length: ${rawName.length}`);  // 16 — spaces counted

console.log("--- AFTER trim() ---");
const trimmedName = rawName.trim();
console.log(`Name: "${trimmedName}"`);
console.log(`Length: ${trimmedName.length}`); // 12 — no spaces


// ---- Part 2: toLowerCase() / toUpperCase() ----
console.log("--- Case Methods ---");
const cleanEmail = rawEmail.trim().toLowerCase();
console.log(cleanEmail);                      // "ada@gmail.com"

const displayCity = rawCity.trim().toUpperCase();
console.log(displayCity);                     // "LAGOS"


// ---- Part 3: replace() and replaceAll() ----
console.log("--- replace() vs replaceAll() ---");
console.log(rawPhone.replace("-", ""));       // "080345-678-90" — only first dash removed
console.log(rawPhone.replaceAll("-", ""));    // "08034567890"   — all dashes removed

const cleanPhone = rawPhone.replaceAll("-", "");
console.log(`Clean phone: ${cleanPhone}`);


// ---- Part 4: slice() ----
console.log("--- slice() ---");
console.log(cleanPhone.slice(0, 3));   // "080" — network prefix
console.log(cleanPhone.slice(3));      // "34567890" — subscriber number

const domain = cleanEmail.slice(cleanEmail.indexOf("@") + 1);
console.log(`Email domain: ${domain}`);   // "gmail.com"


// ---- Part 5: The full cleaning pipeline ----
console.log("--- FULL CLEANING PIPELINE ---");
const finalEmail = rawEmail.trim().toLowerCase();
const finalName  = rawName.trim().toLowerCase().replace("okonkwo", "O.");
const finalPhone = rawPhone.replaceAll("-", "");

console.log(`Email: ${finalEmail}`);   // "ada@gmail.com"
console.log(`Name:  ${finalName}`);    // "ngozi O."
console.log(`Phone: ${finalPhone}`);   // "08034567890"