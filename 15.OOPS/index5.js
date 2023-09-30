// getters, setters and instancof operator

class Animal{
    constructor(name, isDomestic){
        this.name = name;
        this.isDomestic = isDomestic;
    }
    run(){
        console.log(`${this.name} is running`)
    }
    get name(){
        return this._name;  // we will have to write _name here because the getter function has the same name.
    }
    set name(newName){
        this._name = newName;
    }
}
class Human{

}
class NewAnimal extends Animal{
    run(){
        console.log("New Animal is running")
    }
}

let lion = new Animal("Lion", false);
let cow = new Animal("Cow", true);
console.log(lion.name)
lion.name = "sher"
lion.run();
cow.run();

let newAnimal = new NewAnimal();
console.log(lion instanceof Animal);
console.log(cow instanceof Human)

// If we inherit a class then the instanceof keyword gives true for the parent class as well.
console.log(newAnimal instanceof Animal)
console.log(newAnimal instanceof NewAnimal)