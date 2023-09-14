// Local Storage - Local Storage is a web browser feature for storing key-value data persistently on a user's device, even after the browser is closed.

// * To set item in local storage we do
localStorage.setItem("Name", "Saqib"); // This will create a key value pair in local storage with Name as key and Saqib as value.
localStorage.setItem("Age", 22);
localStorage.setItem("Department", "Information Technology");

//// * To get and item we can do
//localStorage.getItem("Name"); // Key is passed as argument to get it's value
//
//// * To remove item we can do 
//localStorage.removeItem("Name");
//
//// * To clear the entire local storage we do
//
//localStorage.clear();

//// * To update item just use setItem() with the same key and different value. Like this
//
//localStorage.setItem("Name", "Azhar")
//
//// * To get the key at a specific index we use
//
//let myKey = localStorage.key(0)
//console.log(myKey)

// * Note - Only strings in the form of key value pari can be stored in localStorage
// if we want to store an object in localStorage then we do 
//* JSON.stringigy(object); -> converts object to string
//* JSON.parse(string) -> converts string to object (must be a valid JSON);

//let obj = {
//    "Name" : "Saqib",
//    "Health" : "Super",
//    "InsideObj" : {
//        "P1" : "Person1",
//         P2 : "person2"
//    }
//}
//console.log(obj)
//let objStr = JSON.stringify(obj);
//console.log(objStr)

let myStr = '{"Name" : "Saqib"}'; // This is a valid JSON you can replace the sinlge commas with backticks (`) but the key value pairs should always be in double commas
console.log(myStr)
let strObj = JSON.parse(myStr);
console.log(strObj)