// Helps to find values from group of array and also for index
// Find()
array1 = [1,2,3,4,5];
const number = array1.find(item => {
    return item % 2 == 0; //Once found the loop is stoped
})
console.log(array1);
const index = array1.findIndex(item=>{
    return item % 2 == 0;
})
console.log(`The index of number ${number} is index ${index} and the array is ${array1}`);
