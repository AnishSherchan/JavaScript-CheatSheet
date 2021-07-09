Variables in JS (ES6)
1. In ES6  we can define variables using let and const
2. let variables value can be changed on code once decleared.
3. Const variables value cannot be changed once decleared.
ex: let name = "Anish Sherchan";
    let age = 22;
    let istrue = true;
    let obj1 = {
        name : 'Anish',
        age : '20'
    }
---------------------------------------------------------------------------------
Template String in ES6 JS
1. In ES6 JS Template String is used for making Templates for String.
2. Is also used for creating and concatinating Strings in JS.
ex: let name = "Anish Sherchan";
    let Greeting = `Hello ${name}`;
    console.log(Greeting); // prints Hello Anish Sherchan
---------------------------------------------------------------------------------
Arrow Functions
1. In ES6 JS Arrow Functions is used for clarification and code reducation.
2. It is denoted by fat arrow "=>".
ex: 
function Greeting(fname,lname){
    return `Hello ${fname} ${lanme}`
}
//Arrow function given below
const Greeting = (fname,lname) => {
    return `Hello ${fname} ${lanme}`
}
// No variabkles 
const Novar = _ =>{
    return `Hello`
}
// While calling a no parameter function use () while calling
console.log(Novar());
---------------------------------------------------------------------------------
Rest Operator
1. Rest Operator helps in taking many args in function if there is more parameter passed.
ex: 
// Rest Operator
const sum1 = (...args) => {
    console.log(`First Number ${args[0]}`);
    let sum = 0;
    console.log(` Second Number ${args[1]}`);
    for (let i = 0; i < args.length + 1 ; i++) {
        sum = sum + i;
    }
    
    console.log(sum)
}
sum1(1,2,3,4);

// Another Example of Rest Operator 
const sum2 = (num1, num2, ...args) => {
    let suM = num1 + num2;
    console.log(suM);
    for (let i = 0; i < args.length ; i++) {
        suM = suM + args[i];
        console.log(args[i]);
    }
    console.log(suM)
}
sum2(2,3,4,5);
-----------------------------------------------------------------------------------
Spread Operator
1. helps in manupulatin arrays and objects in easy way for concatinanting, key and pairs for objects and for cloning
eg:
// Sperade array helps in expanding any arrays and objets into element in any case of array and key value pair in case of obkect
let Array1 = [1,2,3,4];
let Array2 = [5,6,7,8];

// making copy of an array using Spread operator
let Copy = [...Array1]; // Here array1 is copied in a new varibale which is not affected if array1 is affected
console.log(Copy);
Array1.push(1);
console.log(Array1);
console.log(Copy);//Its not Affected here 


//Concatinating 2 arrays using Spread 
let concat = [...Copy,...Array2];
console.log(concat);

let concat2 = [0,...Copy,2222, ...Array2,11];
console.log(concat2);

// Object
let mObj1 = {
    ame: 'Anish Sherchan',
    Age : '20'
}
let mObj2 = {
    name: 'Manish Bomzon',
    age: '22'
}
let mObj3 = {...mObj1, ...mObj2};
console.log(mObj3);
-----------------------------------------------------------------------------------------------
Distructive
1. Helps in distrubute huge arrays and objects into varibale
// it allows to unpack arrays or object into bunch of variables which makes in working with array and object more easy
const name = "Anish Raj Sherchan";
const nameArry = name.split(' ');
console.log(nameArry);
// 
let fname = nameArry[0]; //['Anish', 'Sherchan'] here the given array 
let lname = nameArry[2];
let full = `${fname} ${lname}`
console.log(full);
// using distructive for same use here index is mostly importatnt 
let [firstname, ,lastname] = nameArry;
console.log(firstname);
console.log(lastname);
let [,middle,]=nameArry;
console.log(middle);
//for only 2 index
const name2 = "Mnish Sherchan";
const nameArry2 = name.split(' ');
let[suru,last]=nameArry2;
console.log(suru);

// Distructive or object ,,,, While working with object we must use { } 
const person = {
    Gender: 'Male',
    Age: 22
}

let {Gender, Age} = person;
console.log(Gender);  //Here Gender is male which is prinyted againsts the key valuwhere key is gender

// Here the lkey is not same as the variable Gender2 in below so the Gemder2 is sent undefinied.. So in object key must be same as variable
let {Gender2, Age2} = person;
console.log(Gender2);
-----------------------------------------------------------------------------------------------------------------------------------------------
Map()
// Type of call back function which helps in mapping and manupulating the array and objects
example: here we take a array and a new array is made by multiplying each element
const A = [1,2,3,4,5];
const B = [];
A.map((data)=>{
    B.push(data * 2);
})
console.log(B);
// Mapping on objects
const obj = [{
    name: 'Anish Sherchan',
    age: '20',
    DOB: '2000'
},{
    name: 'Manish Bomzon',
    age: '20',
    DOB: '2000'
}]
const newpersons = obj.map((info)=>{
    return {
        name: info.name,
        age: info.age
    }
})
console.log(newpersons);
-----------------------------------------------------------------------------------------------------------------------------------------------
reduce()
// reduce() is as same as map() were as reduce has accumulator (acc) which can be int string or any which is also passed as parameter in fun
finding sum of all element in an array

const ss = [1,2,3,4];
sum = 0;
ss.reduce((acc,item)=>{
    sum = sum + item;
    return acc;
},0)
console.log(sum)
-----------------------------------------------------------------------------------------------------------------------------------------------
filter()
// it used for filtering array ab=nd objects 
let array=[1,2,3,4,5];
const array2 = array.filter(item=>{
    return item % 2 == 0;
})
console.log(array2);
// Array of objects 
const obj = [{
    name : 'Anish Sherchan',
    exprience : 10,
    type : 'F/O'
},{
    name : 'Manish Bomzon',
    exprience : 5,
    type : 'F/O' 
}]

const selectPilot = obj.filter(exp=>{
    if (exp.exprience > 1) {
        return {
            name : exp.name,
            exprience : exp.exprience
        };
    }
})
console.log(selectPilot);

let newPilot2 = obj.map((pilots)=>
{
    if (pilots.exprience>1) {
        return {
            name : pilots.name,
            exprience : pilots.exprience
        };
    }
})
console.log(newPilot2);
-----------------------------------------------------------------------------------------------------------------------------------------------
find() findIndex()
const a = [1,2,3,4,5];
a.find(item+>{
    console.log(item % 2 == 0)
})             prints 2 

FindIndex()
a.findIndex(item=>{
    consle.log(item %2 == 0)
})
returns => 1
-----------------------------------------------------------------------------------------------------------------------------------------------
Class
It is as same as java where class has methods and consreuctors
class Helloworld(){
    constructor(){

    }
    Greeting=()=>{
        consle.log(`Helloworld!!`)
    }
}
let a = new Helloworld();
a.Greeting();
-----------------------------------------------------------------------------------------------------------------------------------------------
Inheritance
Inherotance is obtained by using extend keyword
class Person{
    constructor(Name){
        this.name = Name;
    }
    getName=()=>{
        return ` Name: ${this.name}`;
    }
}
class Helloworld extends Person{
    constructor(Name){
        super(Name)
    }
    Greeting=()=>{
        console.log(`Helloworld!! ${this.getName()}`)
    }
}
let a = new Helloworld('Anish Sherchan');
a.Greeting();
-----------------------------------------------------------------------------------------------------------------------------------------------
Promises()
// will be done soon