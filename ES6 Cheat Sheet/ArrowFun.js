// ES6 gives us new syntax for defining function using fat arrow => which is called arrow function
// which helps in reducing code and for clarification
// Normal Function
function greeting(name) {
    return `Welcome ${name}`
}
console.log(greeting("Anish"));

// Arrow Function 
const Greeting = (name) => {
    return `Hello ${name} `
}
console.log(Greeting("Anish"))

//2 variables 
const Greeting2 = (name,age) => {
    return `Hello ${name} hi ${age}`
}
console.log(Greeting2("Anish",20))

// No variabkles 
const Novar = _ =>{
    return `Hello`
}
// While calling a no parameter function use () while calling
console.log(Novar());

function Test() {
    return `test`
}
console.log(Test());