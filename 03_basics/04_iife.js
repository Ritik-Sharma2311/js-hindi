// Immediately Invoked Function Expressiona (IIFE)

// WHY IIFE??  1. Many times the Pollution is caused in the Local scope By the Global scope's variable declaration.
//  2. So to avoid it we immediately invoke/declare (by IIFE) the local scope which could've poluted otherwise! 

//Example of named IIFE
(function chai(){
        console.log(`DB CONNECTED`);
    })(); // Imp- IN APPLYING MORE THAN ONE IIFE FUNCTIONS ,WE NEED TO END THE PREVIOUSLY INVOKED FUNCTION BY (;) 

//()()

// Examples of simple/mormally used IIFE's

( () => {
    console.log(`DB CONNECTED TWO`);
}) ();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("ritik")

