/*
Function Declaration :

function myFunction(parameter){
    //Statement
}
myFunction(argument);
*/

function sayMyName() {
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("A");
    console.log("N");
    console.log("I");
}

/* Note:
for reference : sayMyName
for execution : sayMyName(); */

// sayMyName();

/*Add two numbers using function

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumbers();//NaN (argument not passed so that it return NaN mean Not a number)

// addTwoNumbers(5, 10);//15
// addTwoNumbers(5, "10");//510
// addTwoNumbers(5, "a");//5a
// addTwoNumbers(5, null);//5

const result = addTwoNumbers(3, 5);

console.log("Result: ", result);//undefined */

function addTwoNumbers(number1, number2){
    /*
    let result = number1 + number2;
    return result;
    //After return statement there will no code execution further.
    */

   //Another way 
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);//8

/*
function loginUserMessage(username){
    return `${username} just logged in`;
}

// console.log(loginUserMessage("bhabani")); //bhabani just logged in
// console.log(loginUserMessage(""));// just logged in
console.log(loginUserMessage());// undefined just logged in

//when argument not passed when function call then it response 'undefined'

*/

/*
function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("Please enter a username: ");
    //     return
    // }
    // return `${username} just logged in` 
    if(!username){
        console.log("Please enter a username: ");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()); */


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username: ");
        return
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Bhabani")); //Value over-ride
// console.log(loginUserMessage());//By-default value 




/********* Functions With Objects *************/

// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(2)); //2


// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(200, 400, 500));//200

//Note : rest operator and spread operator are same but meaning different at different case

// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200, 400 , 100, 300,30000));//it return value in array format 

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
console.log(calculateCartPrice(200, 400, 600, 1000, 40000));

// Function with Object pass as an argument 
const user = {
    username: "tom",
    price: 200
    // prices: 200 // undefined
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

// function with object pass as an array

const myNewArrray = [200, 400, 100, 600];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArrray));//400
console.log(returnSecondValue([200, 400, 500, 1000]));//400