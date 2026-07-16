// Module 17, Topic 1 Demo — localStorage vs sessionStorage
// Context: Demonstrating persistence difference
// Open index.html in browser

// ---- Part 1: localStorage counter ----
var localCount = Number(localStorage.getItem("visitCount")) || 0;
document.querySelector("#local-count").textContent = localCount;

document.querySelector("#btn-local-inc").addEventListener("click", function() {
  localCount++;
  localStorage.setItem("visitCount", String(localCount));
  document.querySelector("#local-count").textContent = localCount;
  document.querySelector("#local-output").textContent =
    "Stored in localStorage. Refresh the page — it persists!";
  console.log("localStorage visitCount:", localCount);
});

document.querySelector("#btn-local-clear").addEventListener("click", function() {
  localStorage.removeItem("visitCount");
  localCount = 0;
  document.querySelector("#local-count").textContent = 0;
  document.querySelector("#local-output").textContent = "Cleared! Counter reset.";
  console.log("localStorage cleared");
});


// ---- Part 2: sessionStorage counter ----
var sessionCount = Number(sessionStorage.getItem("sessionCount")) || 0;
document.querySelector("#session-count").textContent = sessionCount;

document.querySelector("#btn-session-inc").addEventListener("click", function() {
  sessionCount++;
  sessionStorage.setItem("sessionCount", String(sessionCount));
  document.querySelector("#session-count").textContent = sessionCount;
  document.querySelector("#session-output").textContent =
    "Stored in sessionStorage. Refresh works — close tab resets!";
  console.log("sessionStorage sessionCount:", sessionCount);
});

document.querySelector("#btn-session-clear").addEventListener("click", function() {
  sessionStorage.removeItem("sessionCount");
  sessionCount = 0;
  document.querySelector("#session-count").textContent = 0;
  document.querySelector("#session-output").textContent = "Cleared! Counter reset.";
  console.log("sessionStorage cleared");
});


// ---- Part 3: Console explanations ----
console.log("--- Module 17, Topic 1: localStorage vs sessionStorage ---");
console.log("localStorage visitCount:", localStorage.getItem("visitCount"));
console.log("sessionStorage sessionCount:", sessionStorage.getItem("sessionCount"));
console.log("");
console.log("Try these experiments:");
console.log("1. Increment both counters, then REFRESH the page — both persist");
console.log("2. Close this TAB and reopen — localStorage persists, sessionStorage resets");
console.log("3. Open a NEW TAB of this page — localStorage is shared, sessionStorage is 0");
console.log("");
console.log("Open DevTools → Application → Local Storage / Session Storage to inspect");
