// Error handling using try catch

// whenever there is an error the execution of code stops. So, if we dont want the script to stop executing then we handle these errors using try catch block.

// The below code will throw error

//let a = 10;
//let c = 20;
//console.log(a);
//console.log(b); //* this will throw error and stop exection of code.
//console.log(c);

// To handle it do this

//let c = 20;
//try{
//    let a = 10;
//    console.log(a)
//    console.log(b);
//}catch{
//    console.log("Undefined variable");
//}
//
//console.log(c)


// the try catch block will not be able to catch the error if it is in a setTimeout() block. So to avoid this issue just use another try catch block inside the setTimeout() block

// e.g
try{
    let a = 10;
    console.log(a)
    setTimeout(()=>{
        try{
        console.log(b)
        }catch{
            console.log("Error inside timeout function")
        }
    }, 2000)
}catch{
    console.log("Error while running")
}

console.log("End")
