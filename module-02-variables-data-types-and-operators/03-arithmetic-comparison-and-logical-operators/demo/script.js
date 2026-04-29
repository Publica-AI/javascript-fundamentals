// Topic 3 Demo — Arithmetic, Comparison & Logical Operators
// Context: Jumia cart checkout — calculating totals, checking discount eligibility

// ---- Part 1: Arithmetic — Cart Total ----
const itemPrice = 4500;   // price per item in Naira
const quantity  = 3;
const discount  = 500;    // flat discount in Naira

const subtotal   = itemPrice * quantity;   // 13500
const total      = subtotal - discount;    // 13000
const vat        = total * 0.075;          // 975
const grandTotal = total + vat;            // 13975

console.log("Subtotal (₦):",         subtotal);
console.log("Total after discount:", total);
console.log("VAT (7.5%):",           vat);
console.log("Grand Total:",          grandTotal);


// ---- Part 2: % (remainder) — Check if order qualifies for free delivery ----
// Free delivery on every 5th order
const orderNumber = 10;

console.log(orderNumber % 5);           // 0 — no remainder
console.log(orderNumber % 5 === 0);     // true — qualifies for free delivery!

const orderNumber2 = 7;
console.log(orderNumber2 % 5);          // 2
console.log(orderNumber2 % 5 === 0);    // false — does not qualify


// ---- Part 3: === vs == ----
const userInput   = "4500";   // amount typed into a form field — arrives as a string
const actualPrice = 4500;     // stored as a number

console.log(userInput === actualPrice); // false — different types
console.log(userInput == actualPrice);  // true  — == is dangerous: hides the type mismatch


// ---- Part 4: Logical operators — Discount eligibility ----
const accountBalance = 8000;
const minOrder       = 5000;
const isPremiumUser  = false;
const hasPromoCode   = true;

// Free delivery: balance >= minOrder AND user is premium
const getFreeDelivery = accountBalance >= minOrder && isPremiumUser;
console.log("Free delivery:", getFreeDelivery); // false — isPremiumUser is false

// 10% discount: user is premium OR has a promo code
const getDiscount = isPremiumUser || hasPromoCode;
console.log("Gets 10% discount:", getDiscount); // true — has promo code

// NOT: flip an active status
const isClosed = false;
console.log("Store is open:", !isClosed);       // true
