// Filter iterates through array to create a new array, here we filter the old array to decide which array is to be added on new
// arr.filter(item=>{
    // return True/false to add / skip the current ite,
// })
let arrya=[1,2,3,4]; 
const newarray = arrya.filter(item =>{
    return item % 2 == 0;
})
console.log(newarray);

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