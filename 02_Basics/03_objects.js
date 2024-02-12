/* ================= OBJECTS ==================================

There are two way to declare an object in Javascript
    i.e- 1. Constructor 
         2. Literal

    note : "Singleton" : when we create an object using constructor then it will make a singleton object.
    ex: Object.create
*/

/* Object Literals */


const mySymbol = Symbol("key1");

const JsUser = {
    name: "Bhabani",
    "full name": "Bhabani Shankar Barik",
    // mySymbol: "myKey1", // string
    [mySymbol]: "myKey1", // correct syntax
    age: 18,
    location: "Bhubaneswar",
    email: "bhabani@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser[email]);// error
// console.log(JsUser["email"]);

// console.log(JsUser.full name); // error
// console.log(JsUser."full name"); // error
// console.log(JsUser["full name"]); //correct syntax

// console.log(JsUser.mySymbol);
// console.log(typeof JsUser.mySymbol);//string 
// console.log(JsUser[mySymbol]); // correct syntax
console.log(JsUser);

JsUser.email = "bhabani@xyz.com";

// if we don't want to change the value 

// Object.freeze(JsUser);
JsUser.email = "bhabani@abc.com" // never change after freeze() used
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello Js User");
}

// console.log(JsUser.greeting);//undefined
// console.log(JsUser.greeting());// error: JsUser.greeting is not a function

// console.log(JsUser.greeting());
// console.log(JsUser.greeting);//[Function (anonymous)]


JsUser.greetingTwo = function() {
    console.log(`Hello Js user,${this.name}`);
}

console.log(JsUser.greetingTwo());

