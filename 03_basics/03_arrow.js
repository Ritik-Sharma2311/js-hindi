const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);  // this - to refer to the current context.

         console.log(this);  
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


//  function chai(){
//     let username = "hitesh"
//      console.log(this.username);    //(this)-  is considered only in objects , and that;s why it didn't print the username in the o/p
//  }

// chai()



// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username);
// } 


//ARROW function
const chai = () => {
    let username = "hitesh"
    console.log(this);
} 
chai()


//Basic way of Arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//Implicit return Arrow funct.  (Here we didn't need to write return~~VERY MUCH USED IN REACT)
// const addTwo = (num1, num2) =>  num1+ num2

const addTwo = (num1, num2) => (num1+ num2)
console.log(addTwo(3,4));


const addTwo1 = (num1, num2) => ({username : "hitesh"})    // this is  just to understand how to print the objects using arrow function.  // this function doesn't have anything to do with adding two numbers funct. 

console.log(addTwo1(3,4));


// another application of Arrow function (in loops)
// const myArray = [2,5,3,7,8]
// myArray.forEach( () =>{})



