// Q1 and Q2
let arr = [1, 2, 3, 12, 123];
let userInput = 10;
while (1) {
  userInput = prompt("Enter number : ");
  userInput = Number.parseInt(userInput); // because prompt returns a string data type, so we converted it into number
  if (userInput === 0) break;
  arr.push(userInput);
}
console.log(arr);

// Q3
arr = [10, 20, 12, 15, 100, 120, 150, 11, 16, 132, 1000];
let divisible = (num) => {
  return num % 10 == 0;
};
let newArr = arr.filter(divisible);
console.log(newArr);

// Q4
newArr = arr.map((item) => {
  return item * item;
});
console.log(newArr);

// Q5
let factorial = (num1, num2) => {
  return num1 * num2;
};
let naturalNumArr = [1, 2, 3, 4, , 5, 6, 7, 8];
let fact = naturalNumArr.reduce(factorial);
console.log(fact);
