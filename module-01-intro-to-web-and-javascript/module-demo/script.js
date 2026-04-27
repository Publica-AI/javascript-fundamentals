// Module 1 — Combined Demo
// Topics: How the Web Works | Where JavaScript Fits In | Running JavaScript in a Web Page

console.log("Page loaded — JavaScript is running.");
console.log("Ẹ kú ọjọ́! Module 1 demo started.");

const heading = document.getElementById("main-heading");
const btn     = document.getElementById("action-btn");

btn.addEventListener("click", function () {
    heading.textContent = "JavaScript Just Changed This!";
    heading.style.color = "#27ae60";
    btn.textContent     = "It Worked!";
    console.log("Button clicked — JavaScript responded.");
});