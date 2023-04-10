let header = document.body.firstElementChild;
let nav = header.firstElementChild;
let changeNavColor = () => {
  let color = prompt("Input color for navbar");
  nav.style.background = color;
};
changeNavColor();
