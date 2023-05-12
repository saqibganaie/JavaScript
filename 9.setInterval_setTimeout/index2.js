// Event handlers, e and e.target
// e means event and it has many properties
// you can see these properties by console.log(e);
// e.target returns the target html element
let container = document.getElementsByClassName("container")[0];
let addCyan = (e) => {
  let elem = e.target;
  elem.classList.toggle("bg-cyan");
  console.log(e);
  console.log(e.target);
};
container.addEventListener("click", addCyan);

setTimeout(() => {
  container.removeEventListener("click", addCyan); // removes the event listener but only that function will be remove which will passed in this as argument in case the element has multiple eventListeners with different functions
}, 4000);

let div = document.createElement("div");
div.className = "box";
container.after(div);
