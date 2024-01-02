// Primitive Datatypes (Call by Values)
//Examples 7-types : String, Number, Boolean, Null, Undefined, Symbol(Unique-Value),BigInt(Larger Values).

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 345634343434343433242342332324n




//Reference (Non- Primitive) 
//Examples- Arrays, Objects*(V.Imp), Functions. 

const heroes = ["shaktiman", "nagraj", "doga"];

let myObj = {
    name: "ritik",
    age: 22,
    
}

const myFunction= function(){

    console.log("Hello World");
}

console.log(typeof heroes );

//11.4.4 Types of Operators ~ https://ecma-international.org/wp-content/uploads/ECMA-262_5th_edition_december_2009.pdf
