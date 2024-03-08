/** 
-> http://bluebirdjs.com/docs/api-reference.html

->https://github.com/petkaantonov/bluebird

#### Javascript runtime engine:
-> https://github.com/v8
*/


// Promise Creation
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network realated
    setTimeout(function(){
        console.log('Async task is completed.');
        resolve();
    } , 1000);
});

// Promise Consumption
promiseOne.then(function(){
    console.log("Promise Consumed");
});

// New Promise Creation
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function(){ 
    console.log("Async 2 resolved");
});

// third promise creation
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "green-eye", email: "eye@example.com"});
    }, 1000);
});

promiseThree.then(function(user){
    console.log(user);
});

//Promise four
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
      let error = false;
      if ( !error ){
        resolve({username:"bhabani",password: "123"});
      } else {
        reject('ERROR: Something went wrong')
      }  
    },1000);
});

 promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
  console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected."));


// Promise five