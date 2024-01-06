const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);


// const all_heroes = marvel_heroes.concat(dc_heroes)   //concat operator
// console.log(all_heroes);

const all_heroes = [...marvel_heroes, ...dc_heroes]   //spread operator ~ for combining two or more arrays

console.log(all_heroes);  


const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr = another_arr.flat(Infinity)

console.log(real_another_arr);


console.log(Array.isArray("Ritik")); //asking if the Value is Array or not
console.log(Array.from("Ritik"));  // converting the value into an array i.e, ['R','i','t','i','k']

console.log(Array.from({name: "ritik"}));  //interesting case


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));








