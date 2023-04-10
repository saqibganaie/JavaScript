// alert, prompt and confirm

alert("Please provide value for a"); // return type of alert is undefined
let a = Number.parseInt(prompt("Enter value of a : ", "100")); // returns a string type data so we typecasted it // value after the ,(comma) will be the default value in the input feild for prompt
alert(`You entered value of type ${typeof a}`);

let wantToWrite = confirm("Do you want to write a in document?"); // returns a true of false value

if (wantToWrite) document.write(a);
else document.write("Such empty 🙁");
