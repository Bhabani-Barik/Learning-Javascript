/** if statement  :

 In javascript 'if statement' will execute when condition is true. If condition is false then 'if statement' will not be execute. 

if (true){
    // Statement will be execute.
}

if(false){
    // Statement will not be execute.
}

*/

/**  Comparison Operator 
 <, >, <=, >=, ==, !=, ===, !==

const temperature = 31;

if(temperature === 42 ){
    console.log("less than 40");
} else {
    console.log("temperature is greater than 40");
}

console.log("executed");  */


// Scope
// const score = 200;

// if(score > 100) {
//     const power = "fly";
//     console.log(`User power:${power}`);
// }
// console.log(`User power:${power}`); // error: power is not defined (block scope)


/** Short hand notation 

const balance = 1000;

// if (balance > 500) console.log("test");// implicit scope 
// if(balance > 500) console.log("test"), console.log("test2");//not recommend 

*/

/** Nesting  

const balance = 1000;

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}  */


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if ( loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}

