// Module 18, Topic 3 Demo — utils.js (named exports)

export function formatPrice(amount) {
  return "₦" + amount.toLocaleString();
}

export function getGrade(score) {
  if (score >= 70) return "Pass";
  if (score >= 50) return "Borderline";
  return "Fail";
}

export const VAT_RATE = 0.075;

export const COURSES = ["JavaScript", "HTML & CSS", "Git & GitHub"];
