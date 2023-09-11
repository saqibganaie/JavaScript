// Writing the LoadScript function using promises

const LoadScript = (src)=>{
    return new Promise((resolve, reject)=>{
        let script = document.createElement("script");
        script.src = src;
        script.onload = ()=>{
            setTimeout(()=>{
                resolve("Script is loaded");
            },3000)
        }
        script.onerror = ()=>{
            reject("Script could not be loaded");
        }
        document.body.appendChild(script);
    })
}

let src = "./index1.js"
LoadScript(src).then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error)
});