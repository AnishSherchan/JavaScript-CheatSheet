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