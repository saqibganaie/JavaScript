// Arrow functions revisited

let obj = {
  name: "Saqib",
  enroll: "2020BITE002",
  show: function () {
    console.log("My name is", this.name); // Here the 'this' keyword refers to the object
    // if we make a function inside a function like below then this keyword will refer to the window object and not our object. This will happen only if we create a normal syntax function like this -> function foo(){};
    // We can get the lexical this in the normal syntax function by storing it in a variable beforehand like this
    let that = this;
    function foo() {
      console.log("Inside foo name is", this.name);
      console.log("Inside foo with myObj name is", that.name);
    }
    foo();
    // But if we create an arrow function then it will treat the 'this' as the lexical object i.e our object.
    let myFoo = () => {
      console.log("Inside myFoo name is", this.name);
    };
    myFoo();
  },
};

obj.show();
