const userEmail = []

if(userEmail){
    console.log("Got User email");
}
else{
    console.log("Don't have User email");
}

// // Falsy Values
// 1. false
// 2. 0
// 3. -0
// 4. BigInt 0n
// 5. "" ~empty string
// 6. null
// 7. undefined
// 8. NaN ~ Not a Number


// // Truthy Values
// 1. "0"
// 2. "false"
// 3. " "
// 4. {}
// 5. []
// 6. function(){} // empty function is also truthy


// Below~ how to find wether an object/array is empty or not?

// const userEmail = [] 
if(userEmail.length === 0){
    console.log("Array is empty");
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0) //in this way we'll get an array of object's keys. 
{
 console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null , undefined

let val1;
// val1 = 5 ?? 10  ~~O/P = 5
// val1 = null ?? 10  ~~O/P = 10
// val1 = undefined ?? 15  ~~O/P = 15

val1 = null ?? 10 ?? 15   // ~~O/P = 10 

console.log(val1);


// // Terniary Operator 
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice < 80 ? console.log("less than 80") : console.log("more than 80")  // condition ? true : false




