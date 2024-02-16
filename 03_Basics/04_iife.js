/** Immediately Invoked Function Expressions (IIFE) */

// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai(); //DB CONNECTED

// In IIFE way 
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})(); //DB CONNECTED


/** IIFE : '()();' , 1st () for function definition and 2nd () for execution call, and ';' used for end of the line .

- Why we use IIFE?
 One of the common issues in JavaScript development is global scope pollution, where variables declared in one part of the code can unintentionally affect other parts. IIFE helps mitigate this problem by keeping variables and functions within their own scope, preventing global pollution.

*/

// IIFE by arrow function

( () => {
    //unnamed IIFE 
    console.log(`DB Connected TWO`);
})(); //DB Connected TWO


// Parameter and argument pass in arrow function
( (name) => {
    //unnamed IIFE with parameter pass
    console.log(`${name} DB connected`);
})("MongoDB"); //MongoDB DB connected
