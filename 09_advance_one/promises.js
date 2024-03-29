/** 
-> http://bluebirdjs.com/docs/api-reference.html

->https://github.com/petkaantonov/bluebird

#### Javascript runtime engine:
-> https://github.com/v8
*/

// Promise Creation
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network realated
  setTimeout(function () {
    console.log("Async task is completed.");
    resolve();
  }, 1000);
});

// Promise Consumption
promiseOne.then(function () {
  console.log("Promise Consumed");
});

// New Promise Creation
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// third promise creation
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "green-eye", email: "eye@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//Promise four
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "bhabani", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected."));

// Promise five
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 2000);
});

// async function consumePromiseFive(){
//     const response = await promiseFive;
//     console.log(response);
// }

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();


//Promise 6

// async function getAllUsers() {
//   // const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   // const data = response.json();
//   // console.log(data);

//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(response);
//     // const data = response.json();
//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log("ERROR", error);
//   }

// }

// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error)); 