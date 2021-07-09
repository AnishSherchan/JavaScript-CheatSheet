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
