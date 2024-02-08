/*
There are two types of data types i.e-
 1. Primitive data types
 2. Non-primitive data types / Reference type

Primitive data types : (call by value)

     In primitive data types 7 basic types are avilable i.e- 
        1. String
        2. Number
        3. Boolean
        4. null
        5. undefined
        6. Symbol
        7. BigInt  

Non-primitive data types ( Reference types ) :
    => Non-primitive data type , return type is 'Object'.

        1. Array
        2. Objects
        3. Functions

*/

// Number dataType
const score = 100;
const scoreValue = 100.3;

//Boolean dataType
const isLoggedIn = false;

const outsideTemp = null;

let userEmail; //undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); //false


// const bigNumber =  345567538346354384388234n;

//Array

const heros = ["Thor", "SpiderMan", "Hulk", "captainAmerica"];

//objects

let myObj = {
    name: "Tonny",
    age: 21,
}

//Function

const myFunction = function(){
    console.log("Hello World");
}

//How to know data type of a value ? [ ans: use 'typeof' ]
 
console.log(typeof bigNumber);//undefined

console.log(typeof outsideTemp);//object

console.log(typeof scoreValue);// number

console.log(typeof myFunction);//function (it's also known as object function)

console.log(typeof heros);//object

/* Reference docs 
https://262.ecma-international.org/5.1/#sec-11.4.3

*/
