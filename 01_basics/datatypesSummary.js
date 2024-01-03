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

console.log(typeof myFunction);

//11.4.4 Types of Operators ~ https://ecma-international.org/wp-content/uploads/ECMA-262_5th_edition_december_2009.pdf


/*       
* Premitive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)
*/



/* ++++++++++++++++++++++++++++++++Memory in JS +++++++++++++++++++++++++++++++++++ */

// STACK HEAP(PRIMITIVE) , HEAP MEMORY (NON-PRIMITIVE)

let myYoutubename = "hiteshchoudhary.com"
let anothername = myYoutubename  
anothername = "chaiaurcode"

console.log(myYoutubename );
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "ritik@google.com"

console.log(userOne.email);
console.log(userTwo.email);

