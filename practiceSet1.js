// Sol 1
let str = "Saqib";
let num = 420;
console.log(str + num);

// Sol 2
console.log(typeof (str + num));

// Sol 3
const tempObj = {
  stuName: "Saqib",
  age: 21,
};
console.log(tempObj);
// tempObj = 22; // error

// Sol 4

tempObj.bodyCount = 0; // 😢 // using .dot notation
tempObj["num"] = 10000; // using square bracketts
console.log(tempObj);

// Sol 5

const dict = {
  mendicant: "a pauper who lives by begging",
  meretricious: "tastelessly showy",
  vitiate: "make perfect",
  vapid: "lacking significance or liveliness or spirit or zest",
  ruddy: "inclined to a healthy reddish color",
};
console.log(dict.mendicant);
console.log(dict["vitiate"]);
