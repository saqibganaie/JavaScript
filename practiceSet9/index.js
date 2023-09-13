// Q1. 
//async function loadScript(src){
//    return new Promise((resolve, reject) => {
//        let script = document.createElement("script");
//        script.src = src;
//        script.onload = ()=>{
//            setTimeout(()=>{
//                resolve("Script is loaded");
//            }, 3000)
//        };
//        script.onerror = ()=>{
//            reject("Error while loading script");
//        }
//        document.body.appendChild(script)
//    })
//}
//
//let src = "../1.DataTypes.js";

//loadScript(src).then((message)=>{
//    alert(message);
//})

//Q2. 
//async function run(src){
//    await loadScript(src);
//    alert("Script loaded using async await");
//}
//run(src);

// Q3.
//let rejectPromise = new Promise((resolve, reject)=>{
//    setTimeout(()=>{
//        reject("API is not reponding");
//    }, 3000);
//})
//
//async function getRejectedVal(){
//    try{
//        let rejectedVal = await rejectPromise;
//        console.log("Success!");
//    }catch(error){
//        console.log("Error is : " + error);
//    }
//}
//
//getRejectedVal();


// Q4.

//async function getData1(){
//    return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//            resolve("Data 1 fetched");
//        }, 3000);
//    })
//}
//async function getData2(){
//    return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//            resolve("Data 2 fetched");
//        }, 5000);
//    })
//}
//async function getData3(){
//    return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//            resolve("Data 3 fetched");
//        }, 1000);
//    })
//}
//
//async function getAllData(){
//    console.time("Get All Data");
//  let messages =  await Promise.all([getData1(), getData2(), getData3()]);
//  console.log("All promises ran");
//  console.log(messages);
//  console.timeEnd("Get All Data");
//}
//getAllData();
//
//async function getAllDataOneByOne(){
//    console.time("Get one by one");
//    let message1 = await getData1();
//    console.log(message1);
//    let message2 = await getData2();
//    console.log(message2);
//    let message3 = await getData3();
//    console.log(message3);
//    console.timeEnd("Get one by one");
//}
//
//getAllDataOneByOne()