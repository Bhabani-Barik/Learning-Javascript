/**** ARRAY ***********/

const myArray = [0, 1, 2, 3, 4, 5];
const myHeros = ["ShaktiMan", "TonnyStark"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArray[0]);

// Array Methods

// myArray.push(6); // Add a value in the end of an array
// myArray.push(7);
// myArray.pop(); // remove a value in the end of an array

// myArray.unshift(9); // Add a value in staring position of the array
// myArray.shift(); // Remove a value in starting position of the array

/* 
    console.log(myArray.includes(9)); 

 '.includes()' return boolean value , Basically it is used to asking question , ex : if the element present in the array then it return  true value neither it return false value. 
 
 */

// console.log(myArray.indexOf(9));
// console.log(myArray.indexOf(3));

/*
const newArray = myArray.join();

console.log(myArray); // return array value
console.log(typeof myArray); //object

console.log(newArray); 
// return array value but here datatype converted into string.
console.log(typeof newArray);// string

*/

// slice, splice

console.log("A", myArray); //Original Array

const myn1 = myArray.slice(1, 3);
console.log(myn1);
console.log("B", myArray); // Original Array using slice()

const myn2 = myArray.splice(1, 3);
console.log(myn2);
console.log("c", myArray); // Original Array using splice()
