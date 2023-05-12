// Q1.
let btns = document.getElementsByTagName("button");
let display = (e) => {
  alert(`This ${e.target.textContent} is clicked`);
};
for (let count = 0; count < btns.length; count++) {
  btns[count].addEventListener("click", display);
}
//Q2 and Q3
// let a = document.createElement("a");
// btns[1].before(a);
// a.setAttribute("href", "https://google.com");
// a.appendChild(btns[0]);

//Q4.
let textContainer = document.getElementById("text-container");
let getData = async (url) => {
  let rawData = await fetch(url);
  let data = await rawData.json();
  return data;
};
setInterval(async () => {
  let url =
    "https://newsapi.org/v2/everything?q=tesla&from=2023-04-12&sortBy=publishedAt&apiKey=bdb287c4eaaf4412a460fded70b60d4b";
  console.log(await getData(url));
}, 3000);
