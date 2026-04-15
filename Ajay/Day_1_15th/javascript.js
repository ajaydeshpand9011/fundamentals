/* ------- ------- */
/* Print */
/* ------- ------- */

console.log("Hello World");

/* ------- ------- */
/* Variable */
/* ------- ------- */

let name = "Ajay"
console.log(name);

/* ------- ------- */
/* variable declaration keywords */
/* ------- ------- */

let a = 4;
const b = "322";
var c = false;
d = null;
console.log(a, b, c, d);

/* ------- ------- */
/* Datatypes */
/* ------- ------- */

// Primitive 
// Number 
const wholeNumber = 44;
console.log(typeof wholeNumber)

const pie = 3.14;
console.log(typeof pie)

// String
const userName = "Ajay"
console.log(typeof userName)

// Boolean
const isEligible = false;
console.log(typeof isEligible)

// Null
let timepass = null;
console.log(typeof timepass)

// Undefined
timepass = undefined;
console.log(typeof timepass)

// Non-Primitive 
// Object [typeof = "object"]
const person = {
  name: "Ajay",
  age: 25
};
console.log(typeof person); 

// Array [But typeof = "object"]
const arr = [1, 2, 3];
console.log(typeof arr);     

// Function [typeof = "function"]
function greet() {
  return "Hello";
}
console.log(typeof greet);  

/* ------- ------- */
/* Operators */
/* ------- ------- */

let num1 = 5;
let num2 = 2;

// Arithematic
// +, -, *, /, ^, %

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ^ num2);

// Relation/Comparision
// ==, !=, >, <, >=, <=

console.log(num1 == num2);
console.log(num1 != num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// Assigment 
// =, +=, -=, *=, /=, %=, **=

num3 = 6;
console.log(num3);

num3 += 2;
console.log(num3);

num3 -= 2;
console.log(num3);

num3 *= 2;
console.log(num3);

num3 /= 2;
console.log(num3);

num3 %= 2;
console.log(num3);

num3 **= 2;
console.log(num3);

/* ------- ------- */
/* 
    Type Conversion 
    (Automatic)
*/
/* ------- ------- */

// Converts int to float automatically because float is superior
num5 = 2 
num6 = 4.25

sum1 = num5 + num6
console.log(sum1)

//  Converts int to float automatically because float is superior
num7 = "2"
num8 = "444"

sum2 = num7 + num8
console.log(sum2)

// # Cannot add string to float ✅
sum3 = "2" + 4.25 
console.log(sum3)

/* ------- ------- */
/* Type Casting
/* (Manually) 
/* ------- ------- */

// 1. String → Number
let num11 = Number("123");     // 123
let num12 = parseInt("123px"); // 123
let num13 = parseFloat("3.14");// 3.14

Number("abc"); // NaN

// 2. Number → String
let str1 = String(100);   // "100"
let str2 = (3.14).toString(); // "3.14"

Boolean(1);        // true
Boolean(0);        // false
Boolean("");       // false
Boolean("hello");  // true

// "5" + 2    // "52"  (string concatenation)
// "5" - 2    // 3     (converted to number)

/* ------- ------- */
/* Input
/* ------- ------- */

/* Not Avaiable from Node JS  */
/* Avaiable from Browser  */

