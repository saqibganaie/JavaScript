// Q1
console.log('har"'.length);

// Q2
let greet = "Hello World this is Saqib";

// .includes("str", start) returns true if string contains str otherwise returns false. it is case sensitive
console.log(greet.includes("this"));
console.log(greet.includes("Hello", 3)); // starts to check from 2nd index i.e 3rd position

// .startsWith("str", start) // returns true if string starts with str otherwise returns false. It is case sensitive

console.log(greet.startsWith("Hello"));
console.log(greet.startsWith("World", 6));

// .endsWith("str", end) returns true if string ends with str else false. It is case sensitive

console.log(greet.endsWith("Saqib"));
console.log(greet.endsWith("is", 19));

// Q3

let convertToLower = (string) => {
  return string.toLowerCase();
};

console.log(convertToLower("SAQIb"));

// Q4
let str = "Please give Rs 1000";
let amount = str.slice(str.indexOf("1000"));
amount = Number.parseInt(amount);
console.log(typeof amount, amount);
