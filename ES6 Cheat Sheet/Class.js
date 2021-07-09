// Class in Js
class Person {
    constructor(name, Dob) {
        this.name = name;
        this.Dob=Dob;
    }
    getDetails = () =>{
        return `Name: ${this.name} Date of Birth: ${this.Dob}`
    }
}
let john = new Person('Anish', 2001);
console.log(john.getDetails());