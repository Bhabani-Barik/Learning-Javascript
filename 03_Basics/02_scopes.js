/* 
let a = 10; //Global Scope
const b = 20;//Global Scope
var c = 30;//Global Scope

console.log(a);
console.log(b);
console.log(c); */

/*
if(true) {
    let a = 10; //Block scope / Local scope
    const b = 20; //Block scope / Local scope
    var c = 30; //Block scope / Local scope
    // c = 30; //Block scope / Local scope
}
// console.log(a); //not defined 
// console.log(b); // not defined
console.log(c); // 30 */

/*
var c = 300;

if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // c = 30;
}
// console.log(a); //not defined 
// console.log(b); // not defined
console.log(c); // 30 */

let a = 300;

if(true) {
    let a = 10;
    const b = 20;
    console.log("INNER: ", a); // 10
}

console.log(a); // 300