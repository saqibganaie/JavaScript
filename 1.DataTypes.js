// There are 7 types of primitive data types in js

// N - null
// N - Number
// S - Symbol
// S - String
// B - Boolean
// B - BigInt
// U - undefined

let a = null; // null
let b = 245; // Number
let c = Symbol("This is a symbol"); // Symbol
let d = "String"; // String
let e = true; // Boolean
let f = BigInt("100000000000"); // BigInt (you can pass either number or string in it)
let F = 1000000n; // another way of writing a BigInt
let g = undefined;

console.log(a, b, c, d, e, f, F, g);

// Objects are non primitive data types in js

let tempObj = {
  Name: "Saqib",
  age: 21,
  course: "B.Tech",
  enroll: "2020BITE002",
};
console.log(tempObj["Name"]);
console.log(tempObj.age);
