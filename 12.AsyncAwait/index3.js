// Error object  
try {
    let a = 0;
    console.log(a);
    //console.log(b);
    //throw new Error("This is custom error")
    throw new ReferenceError("This is refrence error thrown explicitly")
}catch(error){
    // * The error object has three properties - name, message and stack
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

// Finally clause - It will run indefinitely
// Even if there is error in catch block it will run 
try{
    console.log("try block");
    console.log(a);
}catch(err){
    console.log("Error name is " + err.name);
    console.log(b); // this will throw an unhandeled error
}finally{
    console.log("I am finally block and I will always run")
}