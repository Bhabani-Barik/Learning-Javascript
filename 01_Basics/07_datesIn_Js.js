/* DATES */

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate); //Object

/* 
let myCreatedDate = new Date(2024, 0, 23); // Month starts from index '0' in Javascript
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString()); 
*/

/*
let myCreatedDate = new Date(2023, 0, 23, 5, 3); // Date & Time 
console.log(myCreatedDate.toLocaleString());
*/

// let myCreatedDate = new Date("2024-07-21"); // yy-mm-dd
// console.log(myCreatedDate.toLocaleString());//mm-dd-yy

let myCreatedDate = new Date("01-14-2024");//mm-dd-yy
// console.log(myCreatedDate.toLocaleString());//mm-dd-yy

/*************** TIME STAMP *******************************************/

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());

// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
// console.log(newDate.getMonth());// months  start from index '0' in js
// console.log(newDate.getDay()); // Day start from index '0' in Js

// console.log(newDate.getMonth() + 1);


// Using String Interpolation 
// console.log(`Today date is ${newDate.getDate()} and the year is ${newDate.getFullYear()}`);


newDate.toLocaleString('default', {
    weekday: "long",
});


//Note: Shortcut - 'ctrl + spacebar' : suggestion