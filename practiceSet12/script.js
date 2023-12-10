// Sol 1.
//let delayPrint = (str1, str2) => {
//  setTimeout(() => {
//    console.log(str1, str2);
//  }, 2000);
//};
//
//delayPrint("Hello", "World");

// Sol 2.

//let arr = [1, 2, 3, 4, 5];
//function getAvg(a, b, c, d, e) {
//  return (a + b + c + d + e) / 5;
//}
//let res = getAvg(...arr);
//console.log(res);

// Sol 3.
//let myFun = (time) => {
//  return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      console.log(`Time taken to be executed ${time}`);
//      resolve(time);
//    }, time);
//  });
//};
//
//(async () => {
//  await myFun(5000);
//  await myFun(3000);
//  await myFun(2000);
//})();

// Sol 4.

// Simple Interst calculator

let calculateSI = () => {
  let principalAmount = document.getElementById("principal-amount").value;
  console.log(principalAmount);
  let rateOfInterest = document.getElementById("rate-of-interest").value / 100;
  let time = document.getElementById("time").value;
  let simpleInterest = principalAmount * (1 + rateOfInterest * time);

  return simpleInterest;
};

let updateSI = () => {
  let simpleInterest = calculateSI();
  let simpleInterestContainer = document.getElementById("simple-interest");
  simpleInterestContainer.value = simpleInterest;
};

// * for practice only
//function updateRange() {
//  let range = document.getElementById("range-scale").value;
//  let rangeContainer = document.getElementById("range-container");
//  rangeContainer.style.width = `${range * 2}px`;
//}
//
//window.onload = () => {
//  let range = document.getElementById("range-scale").value;
//  let rangeContainer = document.getElementById("range-container");
//  rangeContainer.style.width = `${range * 2}px`;
//};
