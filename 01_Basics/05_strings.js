const name ="bhabani";
const repoCount = 9;

// console.log(name + repoCount + " Value");

/* 
Another way used strings in modern Javascript i.e- string interpolation(`${placeHolderName}`).

*/

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// Another way of  declaring a strings in Javascript 

const gameName = new String('bhabani-bsb-com');

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName);

// console.log(gameName.charAt(4));

// console.log(gameName.indexOf('i'));

// const newString = gameName.substring(0, 4);// we can't use -ve value in substring()
// console.log(newString);//bhab

const anotherString = gameName.slice(0, 4);
console.log(anotherString);//bhab

const anotherStringOne = gameName.slice(-8, 4);
console.log(anotherStringOne);


const newStringOne= "   bhabani  ";
console.log(newStringOne);
console.log(newStringOne.trim()); // TO know more use MDN docs for reference

const url = "https://bhabani.com/bhabani%20shankar"; 
console.log(url.replace('%20', '-'));

console.log(url.includes('bhabani')); 
// '.includes()' used to find something if present it return true, if not it return false.
console.log(url.includes('sundar'));

// convert strings to array based on space, dashed or anything

console.log(gameName.split('-')); // convert array based on dashed

/* 
  Read more about :
        blink, bold, charAt, concat, constructor, endswith, 
*/






