/** for of loop */

/** 
 -> In Js array and object is most powerful.
 -> 'for of loop' is array specific loop
 -> ["", "", ""]
 -> [{}, {}, {}]
 */


 const arr = [1, 2, 3, 4, 5];

 for (const num of arr) {
    // console.log(num);
 }


 const greetings = "Hello world!";
 for (const greet of greetings) {
    // console.log(greetings);
    // console.log(greet);
    if( greet == " "){
        // console.log("Space  Detected");
        // break;
        continue;
    }
    // console.log(`Each char is ${greet}`);
 }

 /************************ Maps **************************************
  
-> The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
-> Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.
  
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 */

 const map = new Map();
 map.set('IN', "India");
 map.set('USA', "United State of America" );
 map.set('Fr', "France");
//  map.set('IN', "India");

//  console.log(map);

 for (const key of map) {
    // console.log(key); // return in array format
 }

 // Destructure of Array
 
 for (const [key, value] of map) {
    // console.log(key,':-', value);
    // console.log(`${key} :- ${value}`);
 }


 //Object 

 const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
 }

//  for (const [key, value] of myObject) {
//     console.log(`${key} :- ${value}`);// error : myObject is not iterable
//  }