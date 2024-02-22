/***************** forEach Loop *******************************/

// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return values;
// } );

// console.log(values);

// 'forEach() loop' does not return value.


/********************** Filter **********************************/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums); // [5, 6, 7, 8, 9, 10]


// const newNums = myNums.filter( (num) => {
//     num > 4;
// } );

// console.log(newNums);// []


// const newNums = myNums.filter( (num) => {
//     return num > 4;
// } );

// console.log(newNums);// [5, 6, 7, 8, 9, 10]


/**  forEach loop

const newNums = [];

myNums.forEach( (num) => {
    if ( num > 4) {
        newNums.push(num);
    }
} )
console.log(newNums); */

/** Example of how data filter from raw data  */

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Bool Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Geography', publish: 1988, edition: 1991 },
    { title: 'Book Nine', genre: 'Business', publish: 1990, edition: 2010 },
    { title: 'Book Ten', genre: 'Astronomy', publish: 1970, edition: 2019 },
];

let userBooks = books.filter( (book) => book.genre === 'History' );

//  userBooks = books.filter( (book) => {book.publish >= 2000} ); // []

// userBooks = books.filter( (book) => {return book.publish >= 2000} );

// userBooks = books.filter( (book) => {return book.publish >= 1995} );

userBooks = books.filter( (book) => {
    return book.publish >= 1985 &&  book.genre === "History";
} );
console.log(userBooks);