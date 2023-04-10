// Q1.
let nav = document.getElementsByTagName("nav")[0];
let ul = nav.firstElementChild;
ul.firstElementChild.style.color = "red";

// Q2.
ul.firstElementChild.style.color = "green";
ul.lastElementChild.style.color = "green";

let liArr = Array.from(document.getElementsByTagName("li")); // we did Array.from to convert the list into an array so that we can use array methods on it
liArr.forEach((element) => {
  element.style.background = "cyan";
});
