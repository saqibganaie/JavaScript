// Classes, Objects and Constructors
class Person{
    name = "default"; age; single; // this is not neccessary. I've just written it so that it is easy to keep track of properties
  constructor(name, age, single){
    this.name = name;
    this.age = age;
    this.single = single;
  }
   marry(){
    if (this.single){
        this.single = !this.single;
    }else{
        alert("You are already married! " + this.name)
    }
   } 
   divorce(){
    if (!this.single){
        this.single = !this.single;
    }else{
        alert("You are not married! " + this.name)
    }
   }
}

let Aman = new Person("Aman", 25, true);
console.log(Aman)
Aman.marry();
console.log(Aman)
Aman.divorce();
console.log(Aman)
Aman.divorce();

