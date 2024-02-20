/** forEach loop */

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (item) {
//     console.log(item);
// } )


// callback function have no name 

// coding.forEach( (item) => {
//     console.log(item);
// } )

/**  Function pass on 
 
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);

// 'printMe' is reference to the function
// 'printMe()' is execution of the function */

/**  Access of forEach loop

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})  */


// Objects in array 
// It's mostly comes from database fetch data .

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    // console.log(item);
    console.log(item.languageFileName);
} )


/**
 High Order array loops : 
    - for of loop
    - for in loop
    - forEach loop
 */