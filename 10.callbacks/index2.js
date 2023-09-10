
// Callbacks
// A JavaScript callback is a function which is to be executed after another function has finished execution. A more formal definition would be - Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.



function loadScript(src, callbackFun){
let script = document.createElement("script");
script.src = src;
script.onload = function(){
    console.log("Successfully loaded script")
    callbackFun(null, src);
}
script.onerror = ()=>{ 
    console.log("Error while loading script")
    callbackFun(new Error("Error while loading script. Please debug your code."), src)// * this error handling is done in the callback function itself.
}
console.log("Last line")
document.body.appendChild(script);
}

let src = "./index4.js";
loadScript(src, success); // * Important if we write function then we are passing an object refrence to our original function(){} but if we write function() then we are passing the return value of our original function(){}. For e.g if we wrote success() or success here these both will have different meaning based on the explaination above.

function success(error, src){
    if (error){
        console.log(error);
        return;
    }
    console.log("Script loaded successfully. Path of script : " + src);
    return 10;
}

//function greet(callback){
//    console.log("hello1")
//    console.log("hello2")
//    console.log("hello3")
//    callback();
//    console.log("hello4")
//    console.log("hello5")
//    console.log("hello6")
//}
//
//function myCallbackFun(){
//    console.log("CallBack hello")
//    setTimeout(()=>{
//        console.log("yello")
//    },2000)
//}
//
//greet(myCallbackFun);