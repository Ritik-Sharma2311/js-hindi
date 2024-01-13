// for of 

// ["", ""]

// [{}, {}, {}]


//Iterations on Arrays
const arr = [1 ,2 ,3 ,4, 5]

for (const num of arr) {
    console.log(num);
}

//Iterations on Strings
const greetings = "Hello World"
for (const greet of greetings) {
    if(greet==" "){
        continue;
    }
    console.log(`Each char is ${greet}`);
}

//Iterations on Maps
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("FR", "France")

map.set("IN", "India")// Now this value will not be considered in the o/p 

// Map property- Unique values &  The Map object holds key-value pairs and remembers the original insertion order of the keys.

console.log(map);

for (const key of map) {

    console.log(key);
}



//
