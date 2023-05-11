// html attributes
let img1 = document.getElementById("image1");
console.log(img1.getAttribute("class"));
console.log(img1.hasAttribute("class")); // will return true
console.log(img1.hasAttribute("style")); // will return false
img1.setAttribute("class", "sachin img"); // will overwrite the previous attribute and set the new one
console.log(img1.attributes);
// * we can also add custom attributes in HTML
// for doing this just write data-YourAttributeName in the html element
// i added data-saqib = "cool" in box2 element in the html file
let bx2 = document.getElementById("box2");
console.log(bx2.dataset); // this will log all the custom attributes that i have added to an element
console.log(bx2.dataset.saqib); // this will log the value of the specific attribute that i have added in this case "cool"
