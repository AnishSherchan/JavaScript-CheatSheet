// It is as same as map but it passes result of call back function from one iteration to next
// syntax 
// arr.reduce((acc,item)=>{
//  call backfunction body (must retuirn the acc)
// }, acc default value)

const list = [1,2,3];
// Finding sum of the elements inside the array
const sum = list.reduce((acc,item)=>{
    return item + acc;
},0)
console.log(sum);
 
const obj = [{
    name : 'Anish Sherchan',
    exprience : 10,
    type : 'F/O'
},{
    name : 'Manish Bomzon',
    exprience : 10,
    type : 'F/O' 
}]
//Total exprience of pilots combined
const totalexprience = obj.reduce((acc, pilot)=>{
    return acc +pilot.exprience;
},0);
console.log(totalexprience);