/** for in loop 
  syntax : 
 for (const key in object) {
    
    }
 */

// Object

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);// key
    // console.log(myObject[key]); // values
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}   


// Array

const programming = ["js", "rb", "java", "cpp", "python"];

for (const key in programming) {
    // console.log(key);//keys 
    // console.log(programming[key]);//values
    // console.log(`${key} key/index for ${programming[key]}`);
}

/**
 Note:
 -> In javascript array key start from 'zero' / 0 and bydefault it's a number.
 -> In Object we can set key as of user choice .
 */


 // Map 

//  const map = new Map();
//  map.set('IN', "India");
//  map.set('USA', "United State of America" );
//  map.set('Fr', "France");


//  for (const key in map) {
//     // console.log(key); 
//  }

 /**
  'map' is not iterable in for-in loop.
  */


  