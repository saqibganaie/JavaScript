// matches, closest and contains method

// 1. matches
// The matches() method of the Element interface tests whether the element would be selected by the specified CSS selector. It returns true if the element can be selected using the given argument and false otherwise.
let match = box1.matches(".box");
console.log(match);
match = box1.matches(".randomName");
console.log(match);
match = box1.matches("#box1");
console.log(match);

// 2. closest
// The closest() method searches up the DOM tree for elements which matches a specified CSS selector.
imagesArr = document.querySelectorAll(".image");
console.log(imagesArr[1].closest(".image"));

// 3. contains
// returns true if the argument element is inside the given element otherwise false.
let image1 = document.getElementsByClassName("image")[0];
console.log(box1.contains(image1));
let image2 = imagesArr[2];
console.log(box1.contains(image2));
