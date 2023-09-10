// Promises :- Promises in JavaScript are objects that represent the outcome (success or failure) of an asynchronous operation. They make it easier to work with asynchronous code by providing a structured way to handle results or errors when they become available. Promises have three states: pending, fulfilled (success), and rejected (failure). You can use .then() to handle success and .catch() to handle errors.

// let loadScript = new Promise((resolve, reject)=>{ // * The new promise object does not accept any other parameter except these two so dont try to pass other params.
//    let script = document.createElement("script");
//    script.src = src;
//    script.onload = () => {
//        resolve("Your promise is resolved.");
//    }
//    script.onerror = () => {
//        reject("Your promise is rejected.");
//    }
    //document.body.appendChild(script); 

//})
// * In the above implementation we could not pass the src param so we can do the below implementation.



function loadScript(src){
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve("Your promise is resolved.");
            }
            script.onerror = () => {
                reject("Your promise is rejected.");
            }
            document.body.appendChild(script); 
    })
}

let mySource = "./index1.js";


loadScript(mySource).then((message)=>{
    console.log("Script loaded. Then block executed. You have data. " + message);
}).catch((message)=>{
    console.log("Script failed to load. Catch block executed. You dont have data. " + message);
})
