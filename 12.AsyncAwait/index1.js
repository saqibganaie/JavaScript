// async/await in JavaScript is a modern syntax for handling asynchronous operations, allowing you to write asynchronous code that looks more like traditional synchronous code. It involves marking a function as async to use the await keyword inside it, which pauses execution until an asynchronous task completes, making your code easier to read and maintain.

// async/await only blocks the execution withing the async function and does not blocks other methods.

async function getWeatherData(){
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("It 50 deg C in Delhi with a mild humid weather.")
        }, 6000)
    })
    let jammuWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("It is 40 deg C in Jammu with moist weather.")
        }, 3000)
    })

    console.log("Fetching Delhi Weather data ...")
    let delhiData = await(delhiWeather);
    console.log(`Fetched Delhi data : ${delhiData}`)
        console.log("Fetching Jammu Weather data ...")
    let jammuData = await(jammuWeather)
    
    console.log(`Fetched Jammu data : ${jammuData}`)
}
async function getWeatherData2(){
    let srinagarWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("It 50 deg C in srinagar with a mild humid weather.")
        }, 6000)
    })
    let punjabWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("It is 40 deg C in punjab with moist weather.")
        }, 3000)
    })

    console.log("Fetching srinagar Weather data ...")
    let srinagarData = await(srinagarWeather);
    console.log(`Fetched srinagar data : ${srinagarData}`)
        console.log("Fetching punjab Weather data ...")
    let punjabData = await(punjabWeather)
    
    console.log(`Fetched punjab data : ${punjabData}`)
}

// Here the async functions getWeatherData will run parallely without stopping each others execution. 
//getWeatherData();
//getWeatherData2();

// If we want to run these functions one after the other then we can create another async function and run them both in it by using await keyword.
// e.g
//let run = async ()=>{
//    await getWeatherData();
//    await getWeatherData2();
//
//}
//run();