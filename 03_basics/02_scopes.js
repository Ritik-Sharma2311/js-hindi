// GLOBAL SCOPE & BLOCK SCOPE (these {} - curly braces are nothing but the scope)

// var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner: ", a);


}


console.log(a);
// console.log(b);
// console.log(c);

function one(){

    const username = "hitesh"

    function two(){
 
        const website = "youtube"
        console.log(username);
    }    

//   console.log(website);

  two()
}

one()

if(true){

    const username = "hitesh"

    if(username === "hitesh"){
        const website = " youtube"
        
        console.log(username + website);
    }

    // console.log(website);

}

// console.log(username); 

//+++++++++++++++++++++++++++++++++++++++INTERESTING++++++++++++++++++

console.log(addone(5));

function addone(num){  // Basic wasy of calling function
     return num+1

} 


 console.log(addTwo(5)); //we'll learn why it's showing the below error BY the HOISTING concept later 
//  ReferenceError: Cannot access 'addTwo' before initialization at Object 

const addTwo = function (num){  //EXPRESSION- Another Way of calling function
    return num+2
}

 