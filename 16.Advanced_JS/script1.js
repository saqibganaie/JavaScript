// IIFE - Immediately invoked function expressions
// * It is used to call an async-await expression without making it a function.
// Like this :- 

let myAsync = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
           resolve(100);
        }, 2000)
    })
}

// * without using IIFE
//let fun = async ()=>{
//    let a = await myAsync();
//    console.log(a);
//    let b = await myAsync();
//    console.log(b);
//    let c = await myAsync();
//    console.log(c);
//}
//
//fun();


//* using IIFE, this is the syntax of IIFE

(async ()=>{
    console.log("Inside IIFE")
    let a = await myAsync();
    console.log(a);
    let b = await myAsync();
    console.log(b);
    let c = await myAsync();
    console.log(c);
}
)();