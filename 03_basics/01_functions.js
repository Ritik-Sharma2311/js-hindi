
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("K");
    console.log("L");
    console.log("M");
    console.log("N");
    
}

sayMyName()

// function addTwoNumbers(number1,number2)      // Values inside the () here are called parameters.
//       {
        
//         console.log(number1 + number2);   

// }


function addTwoNumbers(number1,number2)      // Values inside the () here are called parameters.
      {
        let x = number1 + number2
        return x

        // 0r 
        // return number1  = number2
}


   
   let result;

console.log("Result: " ,addTwoNumbers(3,5)) ;  // Values inside the () here are called arguments.


// or   
// const result = addTwoNumber(3,5)
// console.log("Result: " , result)


function loginUserMessage(username){
    if(username  === undefined){
          console.log("Please enter a username!");

    }
    //   if(!username){
    //     console.log("Please enter a 
    //          username!");
          
    // }     Both Upper and lower      if statements means the same.

    return `${username} just logged in` 
}

console.log(loginUserMessage("ritik"));
console.log(loginUserMessage());


function calculateCartPrice(...num1) //this (...) symbol is called both REST operator as well as the SPREAD operator (we studied earlier) , just it's role depends upon the situation
{    
     return num1

}

console.log(calculateCartPrice(200,400,600));


function calculateCartPrice2(val1,val2, ...num2){
    return num2
}
console.log(calculateCartPrice2(200,400,500,2000));



//Passing Objects in functions
const user= {
    username: "ritik",
    price : 199
}

function handleObject(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

 handleObject(user)

handleObject(
    {
        username: "sam",
        price: 399
    }
)


//Passing Arrays in functions

// const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){

return getArray[1];    

}

console.log(returnSecondValue(myNewArray= [200,400,100,600])
);