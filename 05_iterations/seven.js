/******* MAP ***********************/

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map( (num) => num + 10 );
// console.log(newNums);

//Note: 'map()' automatically retiurn values
// Note: 'filter()' used only true or false 


// const newNums = myNumbers.map( (num) => { return num + 10 } );
// console.log(newNums);


//Chaining Method(mean we can use two or more methods ) 
const newNums = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40 )

console.log(newNums);
