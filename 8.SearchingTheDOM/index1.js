// selecting elements by their class names
let boxes = document.getElementsByClassName("box");
boxes[0].style.background = "red";
boxes[1].style.background = "blue";
boxes[2].style.background = "green";
for (box of boxes) {
  box.style.fontSize = "50px";
}
// selecting elements by their id
let box1 = document.getElementById("box1");
box1.style.color = "white";

// selecting elements by query selector
let boxArr = document.querySelectorAll(".box");
boxArr[1].style.color = "cyan";

let imagesArr = document.getElementById("box1").querySelectorAll(".image"); // this will only select matching query in the box1 element

// there are more selectors like getElementByTagName etc which you can explore on your own
