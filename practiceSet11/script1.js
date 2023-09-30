// Q1. and Q2.
class Complex{
    real; imaginary;
    constructor(real, imag){
        this.real = real;
        this.imaginary = imag;
    }
   
    add(complex1, complex2){
        let newReal = complex1.real + complex2.real;
        let newImag = complex1.imaginary + complex2.imaginary;
        return newReal + " + i" + newImag;
    }
    get number(){
        return this.real + " + i" + this.imaginary
    }
    set real(newReal){
        this._real = newReal;
    }
    set imaginary(newImag){
        this._imaginary = newImag;
    }
}
let c1 = new Complex(10, 5);
console.log(c1.number)

let c2 = new Complex(3, 2);
let c3 = c1.add(c1, c2);
console.log(c3)


c1.real = 20;
c1.imaginary = 100;
console.log(c1.number);