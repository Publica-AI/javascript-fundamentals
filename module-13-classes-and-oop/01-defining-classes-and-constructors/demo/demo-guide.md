# Demo Guide — Module 13, Topic 1: Defining Classes and Constructors
**Module 13 — JavaScript Fundamentals**
**Type:** Topic demo
**Duration:** 10–12 minutes
**Files:** `demo/script.js` (run in Node)

---

## What This Demo Teaches

Students see a class definition, multiple instantiation, independent instance state, instanceof type checking, and arrays of instances used with HOFs from Module 12.

---

## Setup (Before Class)

1. Open `script.js` in VS Code
2. Run: `node script.js`

---

## Demo Steps

### Part 1 — Class Definition + Instantiation

> *"We need to create many courses. Ask: how would you create 10 courses with object literals?"*

Pause for answers (copy-paste the object 10 times). Then show the class.

Run Part 1. Show three different instances with getLabel(). Show enroll() mutating jsCourse.enrolled to 2 while htmlCourse stays at 0.

> *"One class definition, three instances. Each has its own enrolled counter. Calling enroll() on jsCourse doesn't affect htmlCourse — independent state."*

---

### Part 2 — Methods + this

> *"Ask: what does `this` refer to inside getSummary()?"*

Run Part 2. Show all three summaries. Point out that `getSummary` calls `this.getGrade()` — a method calling another method via this.

> *"this always refers to the instance the method is called on. amara.getSummary() — this is amara. chidi.getSummary() — this is chidi. Each call uses that instance's own data."*

---

### Part 3 — instanceof

> *"Ask: what does instanceof return for `amara instanceof Course`?"*

Run Part 3. Show true/false results.

> *"instanceof checks the class an object was created from. amara was created from Student, not Course — so instanceof Course is false."*

---

### Part 4 — Arrays of Instances + HOFs

> *"We have an array of Student instances. Ask: do the HOFs from Module 12 work on this array?"*

Run Part 4. Show filter, map, reduce, sort all working on Student instances.

> *"Exactly the same syntax as Module 12. The callback just calls methods on each instance. filter(s => s.getGrade() === 'Pass') — calling the class method inside the callback."*

---

## Teaching Tips

- **Contrast with object literal** explicitly at the start — ask students what they would do without classes for 10 students
- **Part 1 independent enrolled counters** is the key concept — demonstrate it twice so it sinks in
- The connection to Module 12 HOFs in Part 4 is important to make explicit — show the class is just an object and all the same tools apply

---

## What's Next

**Topic 2** → Inheritance and super — building a child class from a parent class
