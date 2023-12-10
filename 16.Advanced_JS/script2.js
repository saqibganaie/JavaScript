// Destructuring - Destructuring assignment is used to unpack values from an array, or properties from objects, into distinct variables

// Destructuring array
let arr = [1, 2, 3, 4, 5, 6];
const [a, b] = arr;
const [d, e, ...elems] = arr;

console.log(a, b);
console.log(d, e, elems);

// Destructuring objects

let obj = {
  name: "Saqib",
  age: 22,
  addr: "Donipora, Zadibal, Srinagar",
};

const { name, age } = obj; // while destructuring objects the key name should be same
console.log(name, age);

// Spread operator
let arr2 = [23, 34, 55, 223];
let obj2 = { ...arr }; // This will convert all the arr elements to object elements and store them in obj2 as a whole object.
console.log(obj2);
function myFun(a, b, c, d) {
  return a + b - c * d;
}

let res = myFun(...arr2);
console.log(res);

obj2 = { ...obj2, 0: 33, 1: 88 }; // To change some values of object and copying the rest as it is. This is used in react very much
console.log(obj2);
