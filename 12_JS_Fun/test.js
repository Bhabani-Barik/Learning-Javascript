// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// https://github.com/GoogleChromeLabs/jsvu

// ************************* ARRAY *********************

// const myArr = [];
// %DebugPrint(myArr);

/* Notes: 

- There are two types of array in Js, i.e- 
    1. Continious array or packed array type
    2. Holey array type

- Three types of Optimization in Javascript, i.e- 
    1. SMI ( small integer)
    2. Packed element
    3. Double (float, sting, function)

- 

*/

const arrTwo = [1, 2, 3, 4, 5];
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0);
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7');
// PACKED_ELEMENTS


arrTwo[10] = 11;
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);


/** How array find index value?
 
Holey array check :
 - bound check
 - PropertyCheck
 - prototype check
 - Object check
 */

 // bound check
 //hasOwnProperty(arrTwo, 9) true or false
 //hasOwnProperty(arrTwo.prototype, 10) 
 // hasOwnProperty(Object.prototype, 10)


 // holes are very expensive in js.


 const arrThree = [1,2,3,4,5];
 console.log(arrThree[8]); // outofBound mean undefined output
 console.log(arrThree[2]); 


 /**
  Highest Optimization: 

  -> For Continous Array:

    SMI > DOUBLE > PACKED

  -> For Holey Array:
    
    H_SMI > H_DOUBLE > H_PACKED
  */


const  arrFour = new Array(3);
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1'; // HOLEY_ELEMENTS
arrFour[1] = '2'; // HOLEY_ELEMENTS
arrFour[2] = '3'; // HOLEY_ELEMENTS

// for better optimisation
const arrFive = [];
arrFive.push('1'); // PACKED_ELEMENTS
arrFive.push('2'); // PACKED_ELEMENTS
arrFive.push('3'); // PACKED_ELEMENTS


const arrSix = [1,2,3,4,5];

arrSix.push(NaN); // PACKED_DOUBLE
arrSix.push(Infinity); //PACKED_DOUBLE


// MODERN OPTIMIZATION: use bydefault javascript inbuilt method,like for, for-of, forEach etc.
