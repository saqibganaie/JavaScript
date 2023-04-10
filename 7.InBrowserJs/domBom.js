// how to access child nodes

console.log(document.body.firstChild); // first child nodes of body i.e can be text node, comment or any other node
console.log(document.body.firstElementChild); // this will return the first element child i.e html element
console.log(document.body.lastChild); // last child nodes of body
console.log(document.body.childNodes); // all child nodes of body. This childNodes is not array it is a collection hence you cannot use array methods on it.

// to convert it to array you can use the Array.from method
let arr = Array.from(document.body.childNodes);
console.log(arr);
console.log(document.body.hasChildNodes()); // returns true of false

// accessing parent nodes/elements
let a = document.body.firstChild;
console.log(a.parentElement);
console.log(a.parentNode);

console.log(document.documentElement.parentNode); // node returns anything that is the parent of the element (here html has parent node document so it returned document)
console.log(document.documentElement.parentElement); // element only returns a value if it is an actual html element (in this case documentElement is html so html doesn't have any parent html element hence it returned null)
