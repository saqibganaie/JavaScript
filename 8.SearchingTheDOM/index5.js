// manipulating classNames and classLists
let redBox = document.getElementById("red-box");
let yellowBox = document.getElementById("yellow-box");
redBox.className = "bg-red text-dark"; // you can add multiple classes by putting space in between them
yellowBox.classList.add("bg-yellow"); // you cannot add multiple classes
redBox.classList.remove("text-dark");
redBox.addEventListener("click", () => {
  redBox.classList.toggle("bg-red"); // toggle through the className i.e add and remove it on given condition
  console.log(redBox.classList.contains("bg-red")); // will return true or false depending on the existence of className
});
