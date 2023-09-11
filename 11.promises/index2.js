// promises are non blocking so if we want to run mulitiple promises parallely then we can.
// e.g 
function runVideo1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //resolve("Video1 started running")
            reject("Error")
        }, 2000);
    })
   
}
function runVideo2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Video2 started running")
        }, 4000);
    })
   
}
function runVideo3(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Video3 started running")
        }, 3000);
    })
   
}

// * Promise API - Methods provided by js for handling promises.

 
//* 1. To run mulitple promises at the same time we can use Promise.all([])
// But Promise.all([]) has a blocking nature so if any one of the functions in it is taking a long time to execute then other functions will have to wait.
//* if there is even single reject from any promise in it then Promise.all will not give output but instead give error.
//Promise.all([
//    runVideo1(),
//    runVideo2(),
//    runVideo3(),
//]).then((messages)=>{ // This will contain an array of messages
//    console.log(messages)
//}).catch((error)=>{ // This will catch the first error/reject and print it
//    console.log(error)
//})

// * 2. If we want to get output even if any promise rejects then we can use Promise.allSettled

//Promise.allSettled([
//    runVideo1(),runVideo2(), runVideo3()
//]).then((messages)=>{ // This will print an object having status, value, reason of the promise
//    console.log(messages)
//})


//* 3. If we want to do something when any one of the functions has finished then we can use Promise.race([])
// This will only print the message of the first executed function wheather it is resolved or rejected
//Promise.race([
//    runVideo1(),
//    runVideo2(),
//    runVideo3(),
//]).then((message)=>{ // This will be a single message
//    console.log(message)
//})

// By writing it like this, the slow function will not block the execution of other functions
//runVideo1().then((message)=>{
//    console.log(message)
//})
//runVideo2().then((message)=>{
//    console.log(message)
//})
//runVideo3().then((message)=>{
//    console.log(message)
//})

// * 4. If we want to print the response of the first resolved promise then we use Promise.any(). Throws Aggregate error if all the promises are rejected.

//Promise.any([
//    runVideo1(), runVideo2(), runVideo3()
//]).then((message)=>{
//    console.log(message)
//})

// * 5. If we want to just write a promise which will just throw a resolve then we use Promise.resolve()

//let myProm = Promise.resolve(100);
//myProm.then((val)=>{
//    console.log(val)
//})


// * 6. If we want to create a promise which will just reject then we use Promise.reject()

//let rejectProm = Promise.reject(-100);
//rejectProm.catch((val)=>{
//    console.log(val);
//})



