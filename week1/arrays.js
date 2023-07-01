arrays.js
let a1 = [] // array literal
let a2 = Array() // array as a function
let a3 = new Array() // call to Array constructor 

const numbers = [1,23,4,5,6]
// typeof(numbers)
// Object

// mutation
// mutable method
// const numbersBackward =  numbers.reverse()
// numbers
//[6, 5, 4, 23, 1]
// numbersBackward

for (let i = 0; i< numbers.length;i++){
    console.log(numbers[i])
}
// const numbersBackward = [...numbers]

// const numbers = [1,23,4,5,6]

// undefined
// const numbersReverse = [...numbers]
// undefined
// numbers
// (5) [1, 23, 4, 5, 6]
// numbersReverse
// (5) [1, 23, 4, 5, 6]
// numbersReverse.reverse()
// (5) [6, 5, 4, 23, 1]
// numbers
// (5) [1, 23, 4, 5, 6]
// numbersReverse
// (5) [6, 5, 4, 23, 1]

numbers.push(7)
numbers.slice(2,4) // immutable doesn't change the original array
numbers.splice(3,2) // mutable

// array.map()
// It returns a new array by transforming the array by applying the callback function on each element 
// of the array.
// Immutable

const nums = [1,23,4,5,6,35,12,45]
let multiplesArray = []
function multiplyByTen(num){
    return num * 10;
}
for(let i =0 ; i < nums.length; i++){
    multiplesArray[i] = multiplyByTen(nums[i]);
}
console.log(multiplesArray)

// function multiplyByTen(num){
//     return num * 10;
// }

// undefined
// const numbers = [1,23,4,5,6,35,12,45]

// undefined
// const tenMultiplesArray = numbers.map(multiplyByTen)
// undefined
// console.log(tenMultiplesArray)
// VM119:1 (8) [10, 230, 40, 50, 60, 350, 120, 450]

//ForEach

// const countries = ["India","England","Iceland","Australia","Norway"]
// undefined
// countries.forEach( function(country,i){
//     console.log(i,country.toUpperCase())
// });
//  'INDIA'
//  'ENGLAND'
//  'ICELAND'
//  'AUSTRALIA'
//  'NORWAY'
// undefined
// countries.forEach((country,i) => console.log(i,country.toUpperCase()))
// VM1420:1 0 'INDIA'
// VM1420:1 1 'ENGLAND'
// VM1420:1 2 'ICELAND'
// VM1420:1 3 'AUSTRALIA'
// VM1420:1 4 'NORWAY'

// regular function
function changeCOuntries(country,i){
    console.log(i,country.toUpperCase())
}
// anonymous function expression
const changeCntrieNames = function (country,i){
    console.log(i,country.toUpperCase())
}
// Arrow function expression
const changeCntrieName = (country,i) => console.log(i,country.toUpperCase())

const changeCountries = (country,i) => console.log(i,country.toUpperCase())
changeCountries()


// Filter
// It loop through all the elemnts of the original array and filter out the elemnets that matches
// the condition  in the callback function
// Immutable

// function(country){
//     country.includes('land')
// }
// const countries = ["India","England","Iceland","Australia","Norway"]
// countries.includes("land")
// undefined
// const countriesWithLand = countries.filter(country => country.includes('land'))
// undefined
// countriesWithLand
// (2) ['England', 'Iceland']
// const numbers = [1,23,4,5,6,35,12,45]

// undefined
// const evenNumbers = numbers.filter(num => num % 2 === 0)
// undefined
// evenNumbers
// (3) [4, 6, 12]
// const oddNumbers = numbers.filter(num => num % 2 !== 0)
// undefined
// oddNumbers
// (5) [1, 23, 5, 35, 45]

// function checkAdultAge(age){
//     return age >= 18
// }

// const ages = [23,24,56,12,15,45]
// const filteredAgesArray = ages.filter(checkAdultAge)

// console.log(filteredAgesArray)
// const personAges = [34, 23,5,66,12,45]
// const filteredAges = personAges.filter((age) => age >= 18)

// array.reduce()
// It appplies a reducer function to each and every element of the original array 
// and returns an output value

const numbersArray = [1,3,4,5,8,9,23]
const sums = numbersArray.reduce((prev,curr) => prev + curr)

const result = numbersArray.reduce((acc,curt) => acc * curt)
const product = numbers.reduce((acc,curt) => {
    console.log("acc:"+ acc);
    console.log("curt"+curt);
    return acc * curt
} )

const stringsArray = ["This", "is", "reduce", "function","!"]
const combinedString = stringsArray.reduce((acc,curr) => acc + " " + curr)
//'This is reduce function !'
// find
// find method gives us the first occurrence of an element in the array based on the condition


// const firstEvenNumber = numbers.find((num) => num % 2 === 0)
// undefined
// firstEvenNumber
// 4
// numbers
// (7) [1, 3, 4, 5, 8, 9, 23]
// const firstEvenNumber = numbers.findIndex((num) => num % 2 === 0)
// undefined
// firstEvenNumber
// 2