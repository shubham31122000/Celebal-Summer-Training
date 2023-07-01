let js ={
    name:"Javascript",
    abbreviation:"JS",
    officialSpec:"ECMAScript",
    birthYear:1995,
    creator:"Brendan Eich"
}

//  Javascript is a dynamic language having dynamic types
// it is a weakly typed langauge

// let hello = 23
// undefined
// typeof(hello)
// 'number'
// hello = "hello"
// 'hello'
// typeof(hello)
// 'string'
// const num = 56
// undefined
// const addNum = num + "1"
// undefined
// console.log(addNum)
// undefined
// typeof(addNum)
// 'string'

var x;
// Variable names begin with lowercase letters
// It can't contain symbols or begin with symbols
// It can't begin with number
// mix of uppercase string, lowercasestring and numbers

var checkNetworkConnection ; // must follow camel casing
// checkNetwork // camelCasing
// CheckNetwork // PascalCasing

// let was introduced in ES2015(ES6)
// var has scope constraints

// String
const firstname = 'Sudeep'
const middleName = "abc"
const lastName = `gfg`

// const helloString = `hello my name is ${firstName}. ${10 * 20}`
// undefined
// console.log(helloString)
// hello my name is Sudeep. 200
// "Sudeep"[0]
// 'S'
// "Sudeep".length
// 6
// "Sudeep".indexOf("S")
// 0
// "Sudeep".includes("S")
// true
// "Sudeep".toLowerCase()
// 'sudeep'

// Number

// const PI = 3.14
// undefined
// typeof(PI)
// 'number'
// Math.random()
// 0.7321468295357731
// Math.random()
// 0.6043918876946239
// Math.floor(0.2)
// 0
// 1000 ** 2000
// Infinity
// typeof(Infinity)
// 'number'
// typeof(-Infinity)
// 'number'
// 0 / 0 
// NaN
// typeof(NaN)
// 'number'
// NaN + 1
// NaN
// NaN + "1"
// 'NaN1'
// Object
// Boolean
// true or false
// Equality

// ==   checks only for value ie. loose equality
// ===  checks for both value and type i.e. strict


// null (delibrate nothing)
const name = {
    firsName:"Sudeep",
    lastName:null
}
// NUll is a value of nothing or absence of value

// undefined (accidental nothing)
let anyVariable;
console.log(anyVariable)
// created but not defined

// Symbol
// unique poperties in object

//Falsy values
// false 
// 0
// ""
// null
// undefined
// NaN

// false , 0 and ""
// false == 0
// true
// 0 == ""
// true
// "" == false
// true

// null == null
// true
// undefined == undefined
// true
// null == undefined
// true

// NaN == NaN
// false
// NaN == null
// false
// NaN == undefined
// false
// NaN == false
// false

// In JS, Objects may exist without classes
// Objects are dynamic
// add, delete, update properties at any time
// add, delete, update methods at any time
// no access control, eveything is public

// const account = {};
const account = {
    name:"Bob",
    accNumber: 4525456,
    bank:"ICICI"
};
// account
// {name: 'Bob', accNumber: 4525456, bank: 'ICICI'}

// An object is an unordered collection of properties
// Each property has a name(key) and it is a string, and a value(JS value)
// We use dot notation for accessing the properties
// account.accNumber

// Property names or keys are :
// identified as String
// Must be unique in each object
// Added after object creation

// Property values are:
// Any JS value
// Stored inside the object
// Can be primitive types
// Can be arrays or other objects
// It can be functions(methods)

//account["branch"]
// account.

//delete account.bank

//account
//{name: 'Bob', accNumber: 4525456, branch: 'Bengaluru'}

const person1 = {
    firstName:"Mark",
    lastName:"Cuban",
    age: 66,
    country:"U.S.A",
    skills:[
        "HTML",
        "CSS",
        "JS",
        "React",
        "Python"
        ],
    isMarried:true,
    getFullName: function (){
        return `${this.firstName} ${this.lastName}`
    }
}
person1.getFullName()
// Mark Cuban
//person1.skills.push('Node')
//person1["age"] = 46
// person1.getPersonInfo = function(){
//     return `${this.firstName} ${this.lastName} is ${this.age} years old. The skills are ${this.skills}`
// }

// Object methods
// Object: provides common functionalities to all JS objects

const copyPerson = Object.assign({},person1)
console.log(copyPerson)

const keys = Object.keys(person1)
const values = Object.values(person1)

const entries = Object.entries(person1)
console.log(person1.hasOwnProperty("name"))

// primitive data types vs reference data types

// var personDetails = {
//     name:"Bill Gates",
//     age:71,
//     role:"Developer"
// }
// undefined
// var secondPersonDetails = personDetails
// undefined
// personDetails.name = "Elon Musk"
// 'Elon Musk'
// secondPersonDetails.age = 54
// 54
// personDetails
// {name: 'Elon Musk', age: 54, role: 'Developer'}
// secondPersonDetails
// {name: 'Elon Musk', age: 54, role: 'Developer'}

//Scope
// Global scope
// Function scope

function getDate(){
    var date = new Date();
    return date;
}

getDate();
console.log(date) 
//Uncaught ReferenceError: date is not defined

function getDate(){
    var date = new Date();
    function formatDate(){
        return date.toDateString()
    }
    return formatDate();
}

function discountPrices(prices,discount){
    var discounted = [];
    for (var i = 0;i < prices.length; i++){
        var discountedPrice = prices[i] * (1 - discount)
        var finalPrice = Math.round(discountedPrice * 100)/100
        discounted.push(finalPrice)
    }
    console.log(i)
    console.log(discountedPrice)
    console.log(finalPrice)

    return discounted;
}

function discountPrices(prices,discount){
    let discounted = [];
    for (let i = 0;i < prices.length; i++){
        let discountedPrice = prices[i] * (1 - discount)
        let finalPrice = Math.round(discountedPrice * 100)/100
        discounted.push(finalPrice)
    }
    console.log(i)
    console.log(discountedPrice)
    console.log(finalPrice)

    return discounted;
}
//Uncaught ReferenceError: i is not defined

//var: function scoped
//let: block scoped
//const: block scoped


// Template String

// string concatenation
function makeGreeting(name,email,id){
    return(
        "Hello, "+
        name +
        ". We've emailed you at "+
        email +
        "Your user id is '" +
        id +
        "'."
    )
}

// string interpolation
function makeGreeting(name,email,id){
    return `Hello, ${name}. We've emailed you at ${email}.Your used id is '${id}'`;
}

function makeGreetingTemplate(name,email,id){
    return(
        "<div>" +
        "<h1> Hello, " +
        name +
        ".</h1>" +
        "<p>We've emailed you at" +
        email +
        ". "+
        "Your user id is '" +
        id +
        "'"+
        "</p>"+
        "<div>"
    );
}

// ES6 template strings, multi line strings
function makeGreetingTemplate(name,email,id){
    return `
        <div>
            <h1>Hello , ${name}</h1>
            <p>
                We've email you at ${email},
                Your user id is '${id}'.
            </p>
        </div>
    `
}