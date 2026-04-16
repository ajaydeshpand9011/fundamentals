/* ------- ------- */
/* Conditional Statements */
/* ------- ------- */

const age = 97;

/* If */
if(age >= 18){
    console.log("Can Drive the car");
} 

/* If-else */
if(age >= 18){
    console.log("Can Drive the car");
} else {
    console.log("Not Allowed")
}

/* If-elif-else */
let light = "Green";
if(light == "Red"){
    console.log("Stop");
} else if(light == "Yellow") {
    console.log("Look");
} else if(light == "Green") {
    console.log("Go");
} else {
    console.log("End of Code");
}
console.log("----------");

/* ------- ------- */
/* String */
/* ------- ------- */

let str1 = "This is a string 1"
console.log(str1)

let str2 = 'This is a string 2'
console.log(str2)

// let str3 = """This is python's tutorial""" <- Not Allowed In JS
// console.log(str3) 

let str4 = "This is a string 4.\nWe are creating in python"
console.log(str4)

let str5 = "This is a string 5.\tWe are creating in python"
console.log(str5)
console.log("----------");

/* ------- ------- */
/* String Operations */
/* ------- ------- */

let str6 = "Apna"
let str7 = "College"

// Concatenation
let final = str6 + str7
console.log(final)
console.log("----------");

// Indexing
console.log(final[6]);
console.log("----------");

let str10 = "hello world";

// Search & Check
// includes(), startsWith(), endsWith(), indexOf(), lastIndexOf(), search()

console.log(str10.includes("world"));
console.log(str10.startsWith("l"));
console.log(str10.endsWith("d"));
console.log(str10.indexOf("d"));
console.log(str10.lastIndexOf("l"));
console.log(str10.search("l"));

// Character Access
// charAt(index), charCodeAt(index), at(index)
console.log(str10.charAt(2));       // returns "" if not found
console.log(str10.charCodeAt(2));   // returns Unicode (UTF‑16) 
console.log(str10.at(2));           // returns undefined if not found

console.log("----------");

/* ------- ------- */
/* String Function */
/* ------- ------- */

// Case & formatting
// toUpperCase(), toLowerCase(), trim()

let str8 = "  hello ";
let result1 = str8.trim().toUpperCase();
console.log(result1)

let str9 = "HELLO    ";
let result2 = str9.trim().toLowerCase();
console.log(result2)
console.log("----------");


// Extract / Replace / Modify
// slice(start, end), substring(start, end), replace(search, value), replaceAll(search, value)

console.log(str10.slice(0, 6));
console.log(str10.substring(1, 3));

// First Occurence 
console.log(str10.replace("hello", "JS"));

// All Occurence 
console.log(str10.replaceAll("world", "JS"));
console.log("----------");

// Combine
// concat()
"Hello".concat(" ", "World"); // "Hello World"

// Repeat / Pad
// repeat(n), padStart(length, char), padEnd(length, char)

console.log("x".repeat(5));  
console.log("5".padStart(3, "0")); 
console.log("0".padEnd(4, "1"));
console.log("----------");



