// In es6 keyword extend is used for inherting any class
class Person {
    constructor(name, Dob) {
        this.name = name;
        this.Dob=Dob;
    }
    getDetails = () =>{
        return `Name: ${this.name} Date of Birth: ${this.Dob}`
    }
}
// while Extending any class in es6 we must define super() for the constructor of parent class
class Pilot extends Person {   
    constructor(name, DOB, exp, type, lisence) {
        super(name, DOB);
        this.exprience = exp;
        this.type = type;
        this.lisence  = lisence;
    }
    getData = () =>{
        return `Exprience: ${this.exprience}, Type: ${this.type}, Lisence: ${this.lisence} and details ${this.getDetails()}`
    }
}
var john = new Pilot("Anish",2001,10, "First Office", "CPL");
console.log(john)       
console.log(john.getData());
