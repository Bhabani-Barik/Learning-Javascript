//Object Creation
// const tinderUser = new Object(); // Singleton Object
// console.log(tinderUser); // {}

// Another Way 
const tinderUser = {} //Non-singleton Object

tinderUser.id = "123abc";
tinderUser.name = "Tom";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);//{} 

const regularUser = {
    email: "tom@gmail.com",
    fullname : {
        userfullname : {
            firstname: "tom",
            lastname: "cruise"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2}; //Object inside object

// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2, obj4);//better way to merge object

/* Use spread operator
const obj3 = {...obj1, ...obj2}; // Better & easy way to merge object
console.log(obj3); */


// When data response from the database in array of object format

const users = [
    {
       id: 1,
       email: "xyz@gmail.com"
    },
    {
        id: 1,
        email: "xyz@gmail.com"
     },
     {
        id: 1,
        email: "xyz@gmail.com"
     },
     {
        id: 1,
        email: "xyz@gmail.com"
     },
     {
        id: 1,
        email: "xyz@gmail.com"
     },
     {
        id: 1,
        email: "xyz@gmail.com"
     },
];

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // Important
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
console.log(tinderUser.hasOwnProperty('isLogged')); //false




