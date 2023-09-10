// promises are non blocking so if we want to run mulitiple promises parallely then we can.
// e.g 
function runVideo1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Video1 started running")
        }, 5000);
    })
   
}
function runVideo2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Video2 started running")
        }, 3000);
    })
   
}
function runVideo3(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Video3 started running")
        }, 8000);
    })
   
}


// * To run mulitple promises at the same time we can use Promise.all([])
// But Promise.all([]) has a blocking nature so if any one of the functions in it is taking a long time to execute then other functions will have to wait.
Promise.all([
    runVideo1(),
    runVideo2(),
    runVideo3(),
]).then((messages)=>{ // This will contain an array of messages
    console.log(messages)
})

// If we want to do something when any one of the functions has finished then we can use Promise.race([])
// This will only print the message of the first executed function
Promise.race([
    runVideo1(),
    runVideo2(),
    runVideo3(),
]).then((message)=>{ // This will be a single message
    console.log(message)
})


// By writing it like this, the slow function will not block the execution of other functions
runVideo1().then((message)=>{
    console.log(message)
})
runVideo2().then((message)=>{
    console.log(message)
})
runVideo3().then((message)=>{
    console.log(message)
})
