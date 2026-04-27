// Grab the heading and the button from the page
const heading = document.getElementById("main-heading");
const button = document.getElementById("change-btn");

// Listen for a click on the button
button.addEventListener("click", function () {
    heading.textContent = "JavaScript Changed This!";
    heading.style.color = "#27ae60";
    button.textContent = "Click Again";
});