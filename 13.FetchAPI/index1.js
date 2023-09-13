// Fetching API - syntax -> fetch(url, options) 
// options are POST, GET etc. By default the options is a GET request.
//let p = fetch("https://api.oceandrivers.com/static/resources.json")
////let p = fetch("https://goweather.herokuapp.com/weather/")
//
//p.then((response)=>{
//    console.log(response.status); // to check the status of our api response
//    console.log(response.ok);
//    console.log(response.headers)
//    return response.json(); // We can use response.text(), response.formData() etc
//}).then((data)=>{
//    console.log(data)
//})


// * Creating a POST request using jsonplaceholder

//let options = {
//    method : "POST",
//    headers : {
//        "Content-type" : "application/json", // defines the content-type of your data
//    },
//    body : JSON.stringify({
//        title : "Saqib's data",
//        body : "My name is Saqib",
//        userId : 1,
//    })
//}
//
//fetch('https://jsonplaceholder.typicode.com/posts', options)
//.then((response)=>response.json())
//.then((response)=>console.log(response))


async function postData(title, body, userId){
    let options = {
        method : "POST",
        headers : {
            "Content-type" : "application/json",
        },
        body : JSON.stringify({
            title : `${title}`,
            body : `${body}`,
            userId : `${userId}`,
        })
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = await p.json();
    console.log(response, response.id)
}

async function getData(id){
    let p = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let data = await p.json();
    console.log(data);
}


async function run(){
    await postData("My title", "MY Body", 11);
    await postData("My title 2", "MY Body 2", 12);
    await getData(12)
}
run();
