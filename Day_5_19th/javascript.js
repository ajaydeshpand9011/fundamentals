/* ------- ------- */
/* Loops */
/* ------- ------- */

/* while */
let count = 1;
while(count <= 5){
    console.log("Hello World");
    count += 1;
}

console.log("---------------");

let i = 5;
while(i >= 1){
    console.log("Reverse")
    i -= 1;
}

console.log("---------------");

/* for */
let nums = [4, 2, 5, 6, 1]
for(let i = 0; i < nums.length; i++){
    console.log(nums[i])
}

console.log("---------------");

/* for (arrays)*/
for(let num of nums){
    console.log(num)
}

console.log("---------------");

/* for (objects) */
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, obj[key]);
}

console.log("---------------");

/* forEach (no return) */
nums.forEach(num => {
  console.log(num);
});

console.log("---------------");

/* map (returns new array) */
let doubled = nums.map(num => num * 2);
console.log(doubled);

