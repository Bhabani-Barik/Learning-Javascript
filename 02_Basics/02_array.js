const marvel_heros = ["thor", "IronMan", "Spiderman"];
const dc_heros = ["superman", "flash", "batman"];

/*
marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3]);
console.log(marvel_heros[3][2]); */

/*
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); */

/* Spread Operator 
const all_new_heros = [...marvel_heros,...dc_heros];
console.log(all_new_heros); */

/* 
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); */

/* It basically use in data scraping of a webpage */

console.log(Array.isArray("Bhabani")); // check
console.log(Array.from("Bhabani")); // convert into array
console.log(Array.from({name: "Bhabani"})); // Interesting for Interview

let scoreOne = 100;
let scoreTwo = 200;
let scoreThree = 300;

console.log(Array.of(scoreOne, scoreTwo, scoreThree));


