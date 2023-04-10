// snake, water and gun game
// snake > water, water > gun , gun > snake
const prompt = require("prompt-sync")();
let arr = ["s", "w", "g"];
let gameCount = 0;
while (gameCount < 10) {
  let userInput = prompt("Enter your choice S/W/G : ");
  userInput = userInput.toLowerCase();
  let computerInput = Math.floor(Math.random() * 3); // ranges between 0 to 2;
  console.log("Computer's choice : " + arr[computerInput]);
  if (userInput === arr[computerInput]) {
    console.log("It's a draw");
    gameCount++;
    continue;
  }
  switch (userInput) {
    case "s":
      if (computerInput == 1) {
        console.log("You won");
      } else {
        console.log("You lost");
      }
      break;
    case "w":
      if (computerInput == 2) {
        console.log("You won");
      } else {
        console.log("You lost");
      }
      break;
    case "g":
      if (computerInput == 0) {
        console.log("You won");
      } else {
        console.log("You lost");
      }
      break;
    default:
      console.log("Enter correct choice!");
      continue;
  }
  gameCount++;
}
