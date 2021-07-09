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