// To make a prototype of an object

let a = {
    name : "Saqib",
    age : 22
}
console.log(a.name)

let p = {
    addr : "54 st. park ave",
}

p.__proto__ = a;

console.log(p.name)
console.log(p.addr)

p.__proto__ = {
    friends : 10,
}
console.log(p.friends)
