/****************** Number ************************************/
const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length); // string , length 3
// console.log(balance.toFixed(2));// precesion value 100.00
// console.log(typeof balance);

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(3));

const hundreads = 1000000;
// console.log(hundreads.toLocaleString());
// console.log(hundreads.toLocaleString('en-IN'));

/************************ MATHS****************************************/

// console.log(Math);
// console.log(Math.abs(-4));// 4 ( abs mean absolute)
// console.log(Math.round(4.3));//4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.2));//5 ( ceil mean top round of a number )
// console.log(Math.floor(4.2));//4
// console.log(Math.floor(4.9));//4

// console.log(Math.min(4, 3, 6, 8));//3
// console.log(Math.max(4, 3, 6, 8));//8

console.log(Math.random());// 'Math.random()' always lies between 0 and 1.

// console.log(Math.random()*10);
// console.log(Math.random() * 10 + 1);

// console.log((Math.random()*10) + 1);
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);// important formula