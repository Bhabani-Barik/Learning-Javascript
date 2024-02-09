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


/********************* MEMORY ******************************/

/* 
    There is two types of memory. i.e- 
        1. Stack Memory ( Used in all Premitive data types)(Pass value as a copy mean when we change something i.e- with the copy statement or value , not on the original )

        2. Heap Memory ( Used in all Non-Primitive data types)(Pass value as a reference, mean when we change something i.e- with the original statement or value )

*/

let myLaptopname = "DELL";

let anotherName = "MacBook";

console.log(myLaptopname);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "xyz@google.com";

console.log(userOne.email);
console.log(userTwo.email);