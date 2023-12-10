let arr = [1, 2, 3, 4, 5];
const [a, b, ...rest] = arr;

console.log(a, b, rest);

let obj = {
  name: "Saqib",
  age: 22,
  enroll: "2020BITE002",
};

let { name, age } = obj;
console.log(name, age);
