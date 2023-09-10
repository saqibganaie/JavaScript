// Problems with callbacks:-

// 1. We give access of another function to another function which creates security risks.

// 2. Callback hell/Pyramid of Doom :- 
// When there are multiple callbacks in a function then it grows horizontally and to the right shaping the code like a pyramid and making it very difficult to maintiain.

// We use promises to solve these issues.

// e.g of callback hell.

function access(token, callback1){
    if (token){
        callback1;
    }
    else {
        console.log("You dont have access.");
    }
}

access(true, (error, token)=>{
    if (error){
        console.log("Not authorized")
    }
    access(true, (error, token)=>{
        if (error){
            console.log("Not authorized")
        }
        access(true, (error, token)=>{
            if (error){
                console.log("Not authorized")
            }
            access(true, (error, token)=>{
                if (error){
                    console.log("Not authorized")
                }
                
            })
        })
    })
})