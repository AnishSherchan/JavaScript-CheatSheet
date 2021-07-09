/*
Template string is a string which allows to embedding expression inside it. We use back tick for template string ` ` the expression are embedded by 
wrapping inside ${ }
*/
//Example 
const name = "Anish";
const Greeting = `Hello ${name}`;
console.log(Greeting);

//Function for greeting
function Rgreeting(fname,lname) {
    return `Hello ${fname} ${lname}`;
}
const fname= "Anish";
const lname = "Sherchan";
console.log(Rgreeting(fname,lname));

//RGB example
let red = 10;
let green = 20;
let black = 1;

const rgb = `rbg(${red}, ${green}, ${black})`;
console.log(rgb);