console.log(sum(10, 20)); // this will work fine because normal functions are hoisted.
// normal function
function sum(a, b) {
  return a + b;
}

// console.log(sum2(10, 20)); // this will not work because Arrow functions are not hoisted as they are also function expressions where the function is assigned as a value to the variable

// arrow function
let sum2 = (a, b) => {
  return a + b;
};

// let temp = sum2(10, 20);
// console.log(temp);
