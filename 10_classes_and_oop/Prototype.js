// let myName = "Bhabani";
// console.log(myName.length);//7

// let myName = "Bhabani          ";
// let myFullName = "BhabaniShankarBarik"

// console.log(myName.truelength); //undefined
// console.log(myName.trim().length);//7
// console.log(myFullName.trueLength());




let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.bhabani = function(){
    console.log(`bhabani is present in all objects`);
}


Array.prototype.heyBhabani = function(){
    console.log(`Bhabani says hello`);
}


// heroPower.bhabani();
// myHeros.bhabani();
// myHeros.heyBhabani();
// heroPower.heyBhabani();


// inheritance


const user = {
    name: "xyz",
    email: "xyz@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment:'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user


// new approach ( modern syntax)


Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "webEngineer     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength();

"bhabani".trueLength()
"iceTea".trueLength()