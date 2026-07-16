// Module 17, Topic 3 Demo — Storing & Retrieving JSON Data
// Context: Publica Academy persistent course tracker
// Open in browser console

console.log("--- Module 17, Topic 3: Storing JSON Data ---\n");

// ---- Part 1: Save and load an object ----
console.log("--- Part 1: Save & Load Object ---");

var student = {
  name: "Amara Obi",
  email: "amara@publica.ng",
  score: 88,
  enrolled: true,
  courses: ["JavaScript", "HTML & CSS"]
};

localStorage.setItem("current_student", JSON.stringify(student));
console.log("Saved:", localStorage.getItem("current_student"));

var loaded = JSON.parse(localStorage.getItem("current_student"));
console.log("Name:", loaded.name);
console.log("Score:", loaded.score, "(type:", typeof loaded.score + ")");
console.log("Enrolled:", loaded.enrolled, "(type:", typeof loaded.enrolled + ")");
console.log("Courses:", loaded.courses);


// ---- Part 2: Save and load an array ----
console.log("\n--- Part 2: Save & Load Array ---");

var courses = [
  { id: 1, title: "JavaScript Fundamentals", price: 15000, enrolled: 42 },
  { id: 2, title: "HTML & CSS Basics", price: 12000, enrolled: 67 },
  { id: 3, title: "Git & GitHub", price: 10000, enrolled: 31 }
];

localStorage.setItem("courses", JSON.stringify(courses));

var loadedCourses = JSON.parse(localStorage.getItem("courses"));
console.log("Count:", loadedCourses.length);
console.log("First:", loadedCourses[0].title);

// Array methods work after parsing
var popular = loadedCourses.filter(function(c) { return c.enrolled > 40; });
console.log("Popular courses:", popular.map(function(c) { return c.title; }));


// ---- Part 3: Safe loading with fallback ----
console.log("\n--- Part 3: Safe Loading ---");

// Key doesn't exist yet
var goals = JSON.parse(localStorage.getItem("savings_goals")) || [];
console.log("First visit - goals:", goals);  // []

// Add some data
goals.push({ name: "New Laptop", target: 500000, saved: 120000 });
goals.push({ name: "Course Bundle", target: 50000, saved: 50000 });
localStorage.setItem("savings_goals", JSON.stringify(goals));

// Reload (simulating page refresh)
var reloaded = JSON.parse(localStorage.getItem("savings_goals")) || [];
console.log("After save - goals:", reloaded.length);  // 2
console.log("Goal 1:", reloaded[0].name, "—", reloaded[0].saved + "/" + reloaded[0].target);


// ---- Part 4: Complete CRUD pattern ----
console.log("\n--- Part 4: Full CRUD Pattern ---");

// Load
var todos = JSON.parse(localStorage.getItem("demo_todos")) || [];

function saveTodos() {
  localStorage.setItem("demo_todos", JSON.stringify(todos));
}

// Create
function addTodo(text) {
  todos.push({ id: Date.now(), text: text, done: false });
  saveTodos();
  console.log("  Added:", text);
}

// Update
function toggleTodo(id) {
  var todo = todos.find(function(t) { return t.id === id; });
  if (todo) {
    todo.done = !todo.done;
    saveTodos();
    console.log("  Toggled:", todo.text, "→", todo.done ? "done" : "pending");
  }
}

// Delete
function deleteTodo(id) {
  var before = todos.length;
  todos = todos.filter(function(t) { return t.id !== id; });
  saveTodos();
  console.log("  Deleted 1 todo (" + before + " → " + todos.length + ")");
}

// Demo
addTodo("Complete Module 17");
addTodo("Start Module 18");
addTodo("Build mini-project");

console.log("  All todos:", todos.map(function(t) { return t.text; }));

toggleTodo(todos[0].id);
deleteTodo(todos[1].id);

console.log("  Final state:", todos);
console.log("\n  Refresh the page — todos persist!");
console.log("  (Check Application → Local Storage → demo_todos)");
