// Module 11, Topic 3 Demo — Creating and Removing Elements
// Context: Publica Academy module list and course catalogue
// Run in browser with index.html open

// ---- Part 1: createElement — add module to list ----
console.log("--- Part 1: createElement + appendChild ---");

const moduleInput = document.getElementById("module-input");
const addBtn      = document.getElementById("add-btn");
const moduleList  = document.getElementById("module-list");

addBtn.addEventListener("click", () => {
  const text = moduleInput.value.trim();
  if (!text) return;

  // Step 1: create
  const li = document.createElement("li");

  // Step 2: configure
  li.textContent = text;

  // Step 3: append
  moduleList.appendChild(li);
  moduleInput.value = "";

  console.log("Added item:", li.textContent);
  console.log("List length:", moduleList.children.length);
});


// ---- Part 2: create with delete button (closure) ----
console.log("--- Part 2: Delete Button with Closure ---");

// Re-wire add button to include a delete button on each item
addBtn.removeEventListener("click", addBtn._handler);  // clean up

addBtn.addEventListener("click", () => {
  const text = moduleInput.value.trim();
  if (!text) return;

  const li         = document.createElement("li");
  const span       = document.createElement("span");
  const deleteBtn  = document.createElement("button");

  span.textContent      = text;
  deleteBtn.textContent = "×";
  deleteBtn.className   = "btn-delete";

  // Closure — captures this specific li
  deleteBtn.addEventListener("click", () => {
    li.remove();
    console.log("Removed:", text);
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  moduleList.appendChild(li);
  moduleInput.value = "";
});


// ---- Part 3: innerHTML with map/join — course catalogue ----
console.log("--- Part 3: innerHTML + map/join ---");

const courses = [
  { id: "js",   title: "JavaScript Fundamentals", price: 15000 },
  { id: "html", title: "HTML & CSS Basics",        price: 12000 },
  { id: "git",  title: "Git & GitHub",             price: 10000 }
];

const courseGrid = document.getElementById("course-grid");

courseGrid.innerHTML = courses.map(course => `
  <div class="course-card" data-id="${course.id}">
    <h3>${course.title}</h3>
    <p>₦${course.price.toLocaleString()}</p>
    <button class="enroll-btn">Enroll</button>
  </div>
`).join("");

console.log("Cards rendered:", courseGrid.children.length);  // 3

// Event delegation on the grid for enroll buttons
courseGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("enroll-btn")) {
    const card = e.target.closest(".course-card");
    console.log("Enrolling in:", card.getAttribute("data-id"));
  }
});


// ---- Part 4: remove and clear ----
console.log("--- Part 4: remove() and clear ---");

const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {
  const count = moduleList.children.length;
  moduleList.innerHTML = "";
  console.log("Cleared", count, "items");
});
