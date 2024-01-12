// if statement
const isUserloggedIn= true
const temperature = 41

// if( temperature === 47){
//  console.log("less than 50");

// }
// else{
//     console.log("temperature is more than 50");
// }


// 3!=2 , because it's true the  inside IF will execute

// < , > , <= , >= , == , != , ===(Checks both the value + type of the operator).


// score = 200

// if(score > 100){
//  var power = "fly"
//  console.log(`User power: ${power}`);

// }
// console.log(`User power: ${power}`);

score = 200

if(score > 100){
 const power = "fly"
 console.log(`User power: ${power}`);
}


// const balance =1000
// // if (balance > 500) console.log("test");

// if (balance < 500 ){
//     console.log("less than 500");
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }


const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
const guestUser = true

if (userloggedIn && debitCard && 2==2){ 
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle|| guestUser ){
    console.log("user logged in");
}





