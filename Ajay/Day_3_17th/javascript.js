/* ------- ------- */
/* Arrays */
/* ------- ------- */

// MUTABLE METHODS

// 1). Add
let arr0 = [1, 2];
arr0.push(3);           // push() → add at end
arr0.unshift(0);        // unshift() → add at beginning
console.log(arr0);

// 2). Remove
let arr1 = [4,5,6,7];
arr1.pop();             // removes last
arr1.unshift();         // removes first
console.log(arr1);

// 3). Modify/Replace
// * splice()
// add / remove / replace anything
let arr2 = [1,2,3,4];
arr2.splice(1, 2);      // remove → [1,4]
arr2.splice(1, 0, 99);  // insert → [1,99,4]
arr2.splice(1, 1, 100); // replace → [1,100,4]
console.log(arr2);

// 4) Reorder
let arr3 = [3,1,2];
arr3.sort();             // [1,2,3]
arr3.reverse();          // [3,2,1]

// 5) Fill / Overwrite
let arr4 = [1,2,3];
arr4.fill(0);            // [0,0,0]

// IMMUTABLE METHODS (do NOT change original)

// 1) Traversal / Transformation
[1,2,3].map((x) => x*2)                 // [2, 4, 6]
[1,2,3,4].filter(x => x % 2 === 0); // [2,4]
[1,2,3].reduce((sum, x) => sum + x, 0); // 6

// 2) Searching
[1,2,3].find(x => x > 1);      // 2
[1,2,3].includes(2);           // true

// 3) Copy / Slice
let arr5 = [1,2,3,4];
arr5.slice(1,4);
[1,2].concat([3,4]); // [1,2,3,4]
console.log(slice);

// 4) Convert/Iterate
[1,2,3].join("-"); // "1-2-3"

// Spread operator
let newArr = [...arr5];
console.log(newArr);

/* ------- ------- */
/* Tuples */
/* ------- ------- */

// JavaScript does NOT have real tuples like Python.