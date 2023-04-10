const prompt = require("prompt-sync")();

let score = 100; // total number of guesses
let userInput;
const randNum = Math.floor(Math.random() * 101);
// console.log(randNum);
userInput = prompt("Enter number: ");
userInput = Number.parseInt(userInput);
while (userInput !== randNum) {
  switch (userInput > randNum) {
    case true:
      console.log("Guess lower 👇");
      userInput = prompt("Enter number again 🤦‍♂️ : ");
      userInput = Number.parseInt(userInput);
      score--;
      break;
    case false:
      console.log("Guess higher 👆");
      userInput = prompt("Enter number again 😮‍💨 : ");
      userInput = Number.parseInt(userInput);
      score--;
      break;
  }
}
console.log("Finally! You guessed right ⛅ 🥳 \n YOUR SCORE IS : " + score);
