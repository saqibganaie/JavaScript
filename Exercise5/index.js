
const contentElem = document.getElementsByClassName("content")[0];

let beginHacking = async ()=>{
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1);
    },2000)
})
}
let hackedUsername = async ()=>{
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1);
    },4000)
})
}
let connectToFacebook = async ()=>{
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1);
    },3000)
})
}

async function hack(name, username){
    //console.log("Initializing Hack Program...");

    contentElem.innerHTML = "<p>Initializing Hack Program...</p>";

    await beginHacking();
    //console.log(`Hacking ${name}'s username`);
    contentElem.innerHTML += `<p>Hacking ${name}'s username</p>`;
    
    await hackedUsername();
    //console.log(`Username found ${username}`);
    contentElem.innerHTML += `<p>Username found ${username}</p>`;
    
    await connectToFacebook();
    //console.log("Connecting to facebook...");
    contentElem.innerHTML += "<p>Connecting to facebook...</p>";
}
hack("Saqib", "Saqibhussain596")