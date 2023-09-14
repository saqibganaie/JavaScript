const apiKey = "95e3dedf220f41ac956cd6f618a65f5c";
const url = `https://newsapi.org/v2/everything?q=apple&from=2023-09-13&to=2023-09-13&sortBy=popularity&apiKey=${apiKey}`
const newsImageContainer = document.getElementById("news-image")
const newsDescription = document.getElementById("news-description")
const newsPublishedAt = document.getElementById("news-published-at")
const nextNewsBtn = document.getElementById("next-news-btn");
let newsData="";
window.onload = async ()=>{
    let data = await getData(url);
    newsData = data;
    populateContent(data);
}
async function getData(url){
    let p = await fetch(url);
    let data = await p.json();
    return data.articles;
}
function populateContent(data){
    const randIndex = Math.floor(Math.random() * data.length);
    const newsArticle = data[randIndex];
    newsImageContainer.innerHTML = `<img src=${newsArticle.urlToImage} alt="News Image">`
    newsDescription.textContent = newsArticle.description;
    newsPublishedAt.textContent = `Published At : ${newsArticle.publishedAt}`;
}

nextNewsBtn.addEventListener("click", ()=>{
    populateContent(newsData);
})
