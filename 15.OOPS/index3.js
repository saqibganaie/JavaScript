// Inheritance in JS
class Parent{
    name; age;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    fun1(){
        alert("fun1 in parent");
    }
    run(){
        alert("Run in parent class");
    }
}
class Child extends Parent{
    name; age;
    constructor(name, age){
        super(); // *super() keyword must be called.
        this.name = name; 
        this.age = age;
    }
    run(){
        alert("Run in child class")
    }
    fun2(){
        super.fun1();
        console.log("I am function2 in child")
    }
}

let p1 = new Parent("Dad", 50);
let c1 = new Child("Me", 22)
c1.fun1();
c1.run();
c1.fun2();