// Destructuring - Destructuring assignment is used to unpack values from an array, or properties from objects, into distinct variables

// Destructuring array 
let arr = [1, 2, 3, 4, 5, 6];
const [a, b] = arr;
const [d, e, ...elems] = arr;

console.log(a, b);
console.log(d, e, elems);


// Destructuring objects

let obj = {
    name : "Saqib",
    age : 22,
    addr : "Donipora, Zadibal, Srinagar"
}

const {var1, var2} = obj;
console.log(var1, var2);