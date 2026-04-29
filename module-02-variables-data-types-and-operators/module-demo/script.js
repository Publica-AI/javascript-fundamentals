// Module 2 — Combined Demo
// Topics: Variables: let, const & var | Primitive Data Types | Arithmetic, Comparison & Logical Operators
// Context: Chowdeck food order — one continuous story through all three topics

// ============================================================
// PART 1 — Variables (Topic 1)
// Declare the data for a food order using const and let
// ============================================================

const restaurant  = "Mama Chidi's Kitchen";  // const — won't change
const dish        = "Jollof Rice & Chicken"; // const — the item we ordered
let   quantity    = 1;                        // let — may increase
let   orderStatus = "pending";               // let — will update as order progresses

console.log("Restaurant:", restaurant);
console.log("Dish:",       dish);
console.log("Quantity:",   quantity);
console.log("Status:",     orderStatus);

// Update let variables as the order progresses
quantity    = 2;              // customer adds another portion
orderStatus = "confirmed";

console.log("Updated quantity:", quantity);
console.log("Updated status:",   orderStatus);

// Trying to reassign const — uncomment to show TypeError:
// restaurant = "Tantalizers"; // TypeError: Assignment to constant variable.


// ============================================================
// PART 2 — Data Types (Topic 2)
// Inspect each variable's type and show the null quirk
// ============================================================

const pricePerUnit = 2500;       // number
const isPaid       = false;      // boolean — order not yet paid
const promoCode    = null;       // null — no promo applied

console.log(typeof restaurant);  // "string"
console.log(typeof pricePerUnit);// "number"
console.log(typeof isPaid);      // "boolean"
console.log(typeof promoCode);   // "object" ← null quirk!
console.log(typeof orderStatus); // "string"

// The string-vs-number bug:
const inputQty = "2";  // arrived from a form as a string
console.log(inputQty + 1);            // "21" — string concatenation!
console.log(Number(inputQty) + 1);    // 3   — convert first, then add


// ============================================================
// PART 3 — Operators (Topic 3)
// Use the same variables to calculate the order total
// ============================================================

const subtotal    = pricePerUnit * quantity;  // 5000
const deliveryFee = 350;
const total       = subtotal + deliveryFee;   // 5350
const change      = 6000 - total;             // 650 — customer paid with ₦6,000

console.log("Subtotal (₦):",    subtotal);
console.log("Delivery fee:",    deliveryFee);
console.log("Total:",           total);
console.log("Change:",          change);

// Comparison — is the order above the free-delivery threshold?
const freeDeliveryMin = 5000;
console.log("Qualifies for free delivery:", subtotal >= freeDeliveryMin); // true

// Logical — is the customer eligible for a loyalty discount?
const isReturningCustomer = true;
const hasPromoCode        = false;

const getsDiscount = isReturningCustomer || hasPromoCode;
console.log("Gets loyalty discount:", getsDiscount); // true — returning customer

// NOT — is the order not yet paid?
console.log("Payment pending:", !isPaid); // true — !false = true
