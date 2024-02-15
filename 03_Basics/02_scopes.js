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
    // console.log("INNER: ", a); // 10
}

// console.log(a); // 300

/******************** Nested scope ******************/ 

function one(){
    const username = "bhabani";

    function two(){
        const website = "youtube"
        console.log(username);
    }
    
    // console.log(website); // error 'child property can't access by parent'

    two(); //bhabani 'parent property can access by child'
}

// one();


if(true) {
    const username = "bhabani";
    if(username === "bhabani") {
        const website = " youtube";
        // console.log(username + website);// bhabani youtube
    }
    //console.log(website);//error
}
// console.log(username);


/************************** Interesting Topic ************************/

// console.log(addone(5));

function addone(num){  // it's simply declare a function
    return num + 1;
}

// addone(5); 
console.log(addone(5));


// addTwo(5); // error
const addTwo = function(num){ // it's also declare a function but it give reference to a variable or (declare a function and hold with a variable)
    return num + 2;
}

addTwo(5);