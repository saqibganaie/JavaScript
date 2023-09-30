class Password{
    pass; passLen;
    string = "abcdefghijklmnopqrstuvwxyz"
    specialChar = "%$!@^&><,."
    numbers = "1234567890"
    constructor(){
        this.passLen = 0;
        this.pass = "";
    }
    createPass(passLen){
        if (passLen < 5){
            alert("Password Length must be atleast 5")
            return -1;
        }
        this.passLen = passLen;
        for (let i = 0; i < this.passLen - 4; i++){
            let randIndex = Math.floor(Math.random() * this.string.length);
            this.pass += this.string.charAt(randIndex);
        }
        for (let i = 0; i < 2; i++){
            let randIndex = Math.floor(Math.random() * 10);
            this.pass += this.specialChar.charAt(randIndex) + this.numbers.charAt(randIndex);
        }
        return this.pass;
    }
}

let passContainer = document.getElementsByClassName("pass-container")[0];
let generateBtn = document.getElementById("generate-pass");
let passLenContainer = document.getElementById("pass-length");
generateBtn.addEventListener("click", ()=>{
    let myPass = new Password();
    let password = myPass.createPass(passLenContainer.value);
    passContainer.textContent = password;
})