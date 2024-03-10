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


