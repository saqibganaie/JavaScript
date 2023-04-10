let a = 10;
let b = 20;

// arthematic operators
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b); // this means a to the power b
console.log(a % b);
console.log(a++, ++a);
console.log(b--, --b);

// assignment operators

console.log((a = 8));
console.log((a += 4));
console.log((a -= 3));
console.log((a *= 5));
console.log((a /= 10));
console.log((a %= 2));
console.log((a **= 2));

// comparison operators

console.log(a == b); // compares only value
console.log(a != b);
console.log(a === b); // compares value and data type
console.log(a !== b);
console.log(a > b, a < b, a >= b, a <= b);
console.log(a > b ? (a = 2) : (a = 3));

// logical operators

console.log(a > b && (a = 5)); // logical and operator
console.log(a > b || (a = 0)); // logical or operator
console.log(!a);

// seperate topic from operators
// expressions in js

let age = prompt("Enter your age: ");
if (age < 0) alert("Invalid age");
else if (age > 0 && age <= 10) alert("You are a little child");
else if (age > 10 && age <= 20) alert("You are an adult");
