/**************** Reduce in JS ********************* */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// It's mostly used in shopping cart 

/*
const myNums = [1, 2, 3];

const myTotal = myNums.reduce( function (accumulator, currentValue) {
    console.log(`Accumulator Value: ${accumulator} and current value: ${currentValue}`);
    return accumulator + currentValue;
}, 0 );

console.log(myTotal); */

/* reduce useing arrow function 

const myNums = [1, 2, 3];

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0);

console.log(myTotal); */


const shoppingCart = [
    {
        itemName: "us-pollo shoe",
        price: 2999,
    },
    {
        itemName: "campus shoe",
        price: 1999,
    },
    {
        itemName: " bata shoe",
        price: 1499,
    },
    {
        itemName: "spark shoe",
        price: 1199,
    },
    {
        itemName: "jordan shoe",
        price: 3999,
    },
    {
        itemName: "addidas shoe",
        price: 1299,
    },
];

const priceToPay = shoppingCart.reduce( (accumulator, item) => accumulator + item.price, 0);

console.log(priceToPay);



