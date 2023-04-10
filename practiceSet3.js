// sol1
let obj = {
  Harry: 98,
  Deepak: 78,
  Chintu: 53,
};
for (let i = 0; i < Object.keys(obj).length; i++) {
  let name = Object.keys(obj)[i];
  let marks = obj[Object.keys(obj)[i]];
  console.log("Marks of " + name + " is : " + marks);
}

//  sol2
obj = {
  Harry: 98,
  Deepak: 78,
  Chintu: 53,
};
for (let item in obj) {
  console.log(obj[item]);
}

// Q3
let correctNum = 5;
let userInput = 0;
while (userInput != correctNum) {
  console.log("Try again");
  userInput++;
}

// Q4
let findMean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};
let mean = findMean(1, 2, 3, 4, 5);
console.log(mean);
