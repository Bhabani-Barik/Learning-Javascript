const user ={
    username: "bhabani",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this); // {} mean 'empty object'.In node environment 'this' refers to empty object(there is no context or  variable in global scope).

//Note : 'Window object ' is global object in browser.

/*
function chai(){
    let username = "bhabani";
    // console.log(this);
    // console.log(this.username);//undefined
}
chai(); */

// const chai = function () {
    // let username = "bhabani";
    // console.log(this.username);
// 
// }
// 
// chai();


/************** Arrow Function **************************/

const chai = () => {
    let username = "bhabani";
    // console.log(this.username);//undefined
    // console.log(this);// {}

}

chai();

/* 
-Arrow function syntax : () => {}
-Also we can hold the arrow function within a variable name.
-Also we can pass the parameter in arrow function as well.
*/


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3, 4));//7


/******************* Implicit return in arrow function ******************/


// In Implicit return we can't use curly braces and return keyword.
// Implicit return mustly used in rect.js library

// const addTwo = (num1, num2) => num1 + num2;//7

// const addTwo = (num1, num2) => (num1 + num2);//7

// console.log(addTwo(3, 4));//7


// For Object return :


// const addTwo = (num1, num2) => {username: "bhabani"};

// console.log(addTwo(3, 4)); //undefined

const addTwo = (num1, num2) => ({username: "bhabani"});

console.log(addTwo(3, 4));






