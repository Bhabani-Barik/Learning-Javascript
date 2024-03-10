// Object literal 

const user = {
    username: "bhabani",
    loginCount: 8,
    signedIn: true,


    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails);// method reference
// console.log(user.getUserDetails());// method execution
// console.log(this);


//Constructor function 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;
    // return keyword Implicitely return the value 

    this.greeting = function(){
        console.log(`Welcome ${this.user}`);
    }

    return this;
}

// const userOne = User("bhabani", 21, true);
// const userTwo = User("Javascript", 12, true);


const userOne = new User("bhabani", 21, true);
const userTwo = new User("Javascript", 12, true);
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);