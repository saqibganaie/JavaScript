let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
// let choice = prompt("Do you want the boxes to be colored");
// let timerId = setTimeout(() => {
//   box1.classList.add("bg-cyan");
//   box2.classList.add("bg-aqua");
// }, 1000);
// if (choice == "no") {
//   clearTimeout(timerId); // clears the timeout i.e the timeout will not run
// }
let toggleColor = (a, b) => {
  console.log(`sum : ${a + b}`);
  box1.classList.toggle("bg-cyan");
  box2.classList.toggle("bg-aqua");
};
let timerId2 = setInterval(toggleColor, 1000, 1, 2); // this is setInterval which runs after each given interval
// we can also pass functions, timer, args like this in setTimeout and setInterval as well
setTimeout(() => {
  clearInterval(timerId2);
}, 10000);
