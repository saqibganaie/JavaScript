// for loop
let numOfTerms = 5;
let sum = 0;
for (let i = 0; i < numOfTerms; i++) {
  sum += i + 1;
}
console.log(sum);

// for in loop
// this loop is used to loop through object items.

let obj = {
  Saqib: 100,
  Adnan: 90,
  Jameel: 80,
  Zeeshan: 70,
};
for (let a in obj) {
  console.log(a, obj[a]);
}
let student = {
  name: "Saqib",
  age: 21,
  enroll: "2020BITE002",
  grade: "A+",
};
for (let prop in student) {
  console.log(prop, student[prop]); // we can't use student.prop here because js will think that prop is a property name of object and try to call it. (like this {
  //     prop : something,
  //   })
}
// for of loop
// this loop is used to loop through iterable data types such as strings or arrays
for (let a of "Saqib") {
  console.log(a);
}

// while loop
let count = 0;
while (count < 6) {
  console.log(count * 10);
  count++;
}

// do-while loop
do {
  console.log(count * 2);
  count++;
} while (count < 10);
