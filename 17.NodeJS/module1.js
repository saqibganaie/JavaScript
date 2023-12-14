// ** This way of importing and exporting modules is called Common JS modules.

let myFun = () => {
  console.log("This is imported from another module");
};

let myFun2 = (num) => {
  console.log("This is also imported from another module " + num);
};

module.exports = { myFun, myFun2 };
//module.exports = { myFun: myFun, myFun2: myFun2 }; // * we can also write this way but the above way means same and is cleaner
