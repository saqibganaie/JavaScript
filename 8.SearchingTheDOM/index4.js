// html insertion methods
let textBox = document.getElementById("text-box");
textBox.innerHTML += "<h1>Hello there</h1>";
let div = document.createElement("div"); // this will create a div element
div.innerHTML = "<h1>Hi</h1>";
textBox.appendChild(div); // this will add the div element in the textBox as it's child
// the elment in the argument will be added inside the textBox but at last
let bx1 = document.getElementById("box1");
textBox.prepend(bx1); // the element will be added inside the textBox but at first position
textBox.before(box2); // this will add the elment outside the textBox on top of it
textBox.after(box3); // this will add the element outside the textBox below it.
// this is very useful when you have to add a lot of elements
// you can use combination of for loop and this to add a of elements
textBox.replaceWith(div);

// * adding adcent html
div.insertAdjacentHTML("beforebegin", "<h1>BeforeBegin</h1>");
div.insertAdjacentHTML("beforeend", "<h1>BeforeEnd</h1>");
div.insertAdjacentHTML("afterend", "<h1>AfterEnd</h1>");
div.insertAdjacentHTML("afterbegin", "<h1>AfterBegin</h1>");
div.remove();
