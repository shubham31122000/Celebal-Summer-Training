// declaring a function without a parameter
function functionName(){

}
functionName()

// function with a parameter 
// function sumofArray(arr){
//     let sum = 0;
//     for( let i =0; i < arr.length;i++){
//         sum = sum + arr[i];
//     }
//     return sum
// }
// undefined
// let sum = sumofArray([2,3,4,5,66])
// undefined
// console.log(sum)
//80

// function sumOfNumbers(){
//     console.log(arguments)
// }
// undefined
// sumOfNumbers(2,3,4)
// VM1689:2 Arguments(3) [2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]0: 21: 32: 4callee: ƒ sumOfNumbers()length: 3Symbol(Symbol.iterator): ƒ values()[[Prototype]]: Object
// undefined
// function sumOfNumbers(){
//     let sum = 0;
//     for (let i =0 ; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum
// }
    
// undefined
// sumOfNumbers(2,3,5,6)
// 16
// sumOfNumbers(45,546,54,6456,4654,654,645,64)
// 13118
square(5)
// Hoisting is the reason that w can call a function before the declaration 

function square(num){
    return num * num;
}


// Anonymous functions

// function(num){
//     return num * num;
// }
// squareFun(5)// will not work as hoisting is only for regular functions
// function expression
const squareFun = function(num){
    return num * num;
}

squareFun(5)
// Functions are first class citizens in JS

// Arrow functions

// -> thin arrow
// => fat arrow

// 1. remove the function keyword and add =>
// const square1 = (num) => {
//     return num * num;
// }
// 2. put it in 1 line
// const square1 = (num) => { return num * num; }
// 3. remove both return and curly braces together
// const square1 = (num) => num * num; 
// 4. Remove the paranthesis for the parameter if there is only 1 param
const square1 = num => num * num; 

//const square1 = (num) => { num * num; } // remove both return and curly braces together

function add(a, b = 3){
    const total = a + b;
    return total;
}

// const addArrow = function(a, b = 3){
//     const total = a + b;
//     return total;
// }

// const addArrow = (a, b = 3) => {
//     const total = a + b;
//     return total;
// }

const addArrow = (a, b = 3) => a + b;

// Arrow function to get the max value for 2 numbers

// const printFullName = (first,last) =>{
//     return{
//         name:`${first} ${last}`,
//         age: 20
//     }
// }

// const printFullName = (first,last) =>{ name:`${first} ${last}`,age: 20 }

const printFullName = (first,last) => ({ name:`${first} ${last}`,age: 20 })