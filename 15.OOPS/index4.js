// static methods - these methods are only accessed using the Class name and not the object

class Animal{
    constructor(name){
        this.name = name;
    }
    walk(){
        alert(`${Animal.capitalize(this.name)} is walking`);
    }
   static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);
    }
}

let myAnimal = new Animal("lion");
myAnimal.walk();
console.log(Animal.capitalize("dog"))