// Iterates the array for us and we pass callback function to perform operation on each array item
// array1 = array2.map((data) => {
//  // Function
// }

const mArray = [1,2,3,4,5];
//using normal way for manupulating array
let newArray = [];
const Double = (Arrays) => {
    for (let i = 0; i < Arrays.length; i++) {
        newArray.push(Arrays[i]*2);
    }
}
Double(mArray);
console.log(newArray); 
// Using Map
let mapArray = mArray.map((item) =>{
    return item * 2;
})
console.log(mapArray);


// Array of objects 
const obj = [{
    name : 'Anish Sherchan',
    exprience : '10 Years',
    type : 'F/O'
},{
    name : 'Manish Bomzon',
    exprience : '10 Years',
    type : 'F/O' 
}]

let newPilot = obj.map((pilots)=>{
    return pilots;
})
// for only extracting certain things
let newPilot2 = obj.map((pilots)=>{
    return {
        name : pilots.name,
        exprience : pilots.exprience
    };
})
console.log(newPilot);
console.log(newPilot2);

// Test
let Test1 = [1,2,3,4,5];
let values = Test1.map((data,pos)=>{
    console.log(data);
})
