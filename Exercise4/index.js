let hourElem = document.getElementById("hour");
let minElem = document.getElementById("min");
let secElem = document.getElementById("sec");

let updateTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hourElem.textContent = hours % 12;
  minElem.textContent = min;
  secElem.textContent = sec;
};
setInterval(updateTime, 1000);
