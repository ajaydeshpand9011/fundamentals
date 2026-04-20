/* ------- ------- */
/* Objects */
/* ------- ------- */

// Object
let info = {
    name: "Ajay",
    subjects: ["Python", "C", "Java"],   // array
    topics: ["dict", "set"],             // tuple → array in JS
    age: 29,
    marks: 94.4
};

console.log(info);
console.log(typeof info); // object

// empty object
let null_dict = {};
console.log(null_dict);

// update value
info.marks = 96.4;
console.log(info);

// Nested Object
let student = {
    name: "Rahul Kumar",
    subjects: {
        physics: 89,
        chemistry: 78,
        maths: 81
    }
};

// Access nested value
console.log(student.subjects.physics);

// Methods (similar to keys, values, items)
console.log(Object.keys(student));    // ["name", "subjects"]
console.log(Object.values(student));
console.log(Object.entries(student));

// Access chemistry
console.log(student.subjects.chemistry); // direct access

// Safe access (like .get())
console.log(student.subjects?.chemistry); // undefined if not found

// Update object
student.city = "Delhi";
// OR
Object.assign(student, { city: "Delhi" });
console.log(student);

/* ------- ------- */
/* Set */
/* ------- ------- */

// Set (duplicates removed automatically)
let collection1 = new Set([1, 2, 2, 4, "hello", "world", "world"]);
console.log(collection1);
console.log(typeof collection1); // object


// empty set
let collection2 = new Set();
console.log(collection2);

// add values
collection2.add(1);
collection2.add(2);
collection2.add("Hello");

// remove value
collection2.delete(2);

console.log(collection2);

// remove random element (no direct pop like Python)
let firstValue = collection2.values().next().value;
collection2.delete(firstValue);

console.log(collection2);

// clear set
collection2.clear();
console.log(collection2);

// union & intersection
let set1 = new Set([1, 2, 3]);
let set2 = new Set([3, 4, 5]);

// union
let union = new Set([...set1, ...set2]);
console.log(union);

// intersection
let intersection = new Set([...set1].filter(x => set2.has(x)));
console.log(intersection);