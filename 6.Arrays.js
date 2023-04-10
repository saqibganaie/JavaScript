// Arrays are variables which can hold more than one value.
// Arrays are mutable and hence can be changed.
// typeof of arrays is objects

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
console.log(arr[5]); // will be undefined because arr length is only 5 and last index will be 5 - 1 = 4
arr[5] = 100; // adding new element in the array
console.log(arr);

arr = [
  10,
  20,
  "Saqib",
  true,
  10.43,
  "a",
  null,
  undefined,
  BigInt("10000000000"),
  Symbol("#"),
];
let i = 0;
for (let element of arr) {
  console.log(element, typeof element);
}

// ** Array Methods
// ** Unlike strings arrays are mutable hence the methods in arrays *can* actually change the original array.
let methodArr = [1, 2, 3, 4, 5];

// toString
let a = methodArr.toString(); // converts arr to string
console.log(a);

// join
let b = methodArr.join(" and "); // joins elements of arr with the given argument between them
console.log(b);

// pop
methodArr.pop(); // removes the last element of array
console.log(methodArr);

// push
let p = methodArr.push(5); // adds given element to the last of array and returns the new length of array
console.log(methodArr, p);

// shift
methodArr.shift(); // removes the first element from array
console.log(methodArr);

// unshift
let r = methodArr.unshift(10); // adds given element to the first position of array and returns the new length of array
console.log(methodArr, r);

// delete
console.log(methodArr.length);
delete methodArr[0]; // deletes the given element from array but does not changes the length of array because the deleted element is replaced with an empty item
console.log(methodArr, methodArr.length);

// concat
let num1 = [1, 2, 34, 12, 19];
let num2 = [12, 3, 23];
let num3 = [12, 15, 16, 32];
let newArray = num1.concat(num2, num3); // concats the argument arrays with the given array
console.log(newArray);

// sort
let temp = [12, 1, 20, 11, 41, 5, 19, 322, 211];
temp.sort(); // sorts the array in alphabetical order i.e 1 will be treated as A and 2 as B and so on, even if 5 is less than 12 it will be considered greater here because the first digit of 12 is 1 i.e A and 5 is E.
console.log(temp);

// in order to tackle the above issue we can provide a compare function to sort() method. So if the return value of the compare function will be positive then it will sort the elements else it will not sort the elements.
let compare = (a, b) => {
  return a - b; // this will sort the array in ascending order // we can alter the return value in order to sort in according to our desires.
};
temp.sort(compare);
console.log(temp);

// reverse
num1.reverse(); // reverses the array
console.log(num1);

slice;
let arr1 = [1, 23, 11, 15, 155];
let newArr = arr1.slice(2); // slices the array from given index to end
console.log(newArr);

newArr = arr1.slice(1, 4); // slices the array from index1 to index2 - 1
console.log(newArr);

// splice
arr1.splice(2, 1, 22, 11, 1024); // syntax -> .splice(starting position to add elemnts, num of elements to remove, ...elements to add)
console.log(arr1);

// ** Loops for array

// simple for loop
let arr = [1, 2, 324, 123, 12, 122];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// forEach loop

arr.forEach((element, index, arr) => {
  // takes 3 arguments element , index and array
  console.log(element * 2, index, arr);
});

Array.from(object / string);
let name = "Saqib";
// name.forEach((element) => {
//   console.log(element, "hi");
// }); // we cannot use forEach loop as it is not an array
temp = Array.from(name); // makes an array copy of argument array and returns it
console.log(temp);
temp.forEach((element) => {
  console.log(element, "hi");
});

// for of loop
for (let element of arr) {
  // the element here represents the element itself
  console.log(element);
}

// for in loop
for (let item in arr) {
  // the item represents the index of elements
  console.log(item, arr[item]);
}

// ** map, filter and reduce

// difference between map and forEach is that map returns a new array by performing some action on each element of array and forEach does not return any array, forEach only loops through the elements of the array

// map
let arr = [1, 1, 22, 12, 154, 112];
a = arr.map((element, index, arr) => {
  console.log(element, index, arr);
  return element * 2;
});
console.log(a);

// filter
b = arr.filter((element) => {
  return element < 15; // filters out and returns those elements for which the condition holds true // if we did the same thing in map then it would have returned the boolean value of condition i.e true/false.
});
console.log(b);

//reduce
let c = arr.reduce((element1, element2) => {
  return element1 + element2; // it will add first two elemnts then take that sum as element1 and the 3rd element as element2 and add both and update the sum, then sum is element1 again and 4th element is element2 and so on. It will keep on doing this until no element is left and return the sum of all the elements.
  // we can provide any kind of function in this
  // funcitons can even be declared outside this and then used here.
});
console.log(c);
