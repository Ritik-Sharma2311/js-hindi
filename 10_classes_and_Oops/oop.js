const user = {
    username: "Ritik",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
     //console.log("Got user Details from Database");
     //console.log(`Username: ${this.username}`);
     console.log(this);
    }
}
console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);


// Constructor Function

// const promiseOne = new Promise()
// const date = new Date()
// here new is the Constructor Function


function User(username, loginCount, isLoggedIn){
 this.username = username;
 this.loginCount = loginCount;
 this.isLoggedIn = isLoggedIn;

 this.greetings = function(){
    console.log(`Welcome ${this.username}`);
 }

 return this
}

const userOne = new User("Ritik", 12, true)
const userTwo = new  User("chaiaurCode" , 11, false)
console.log(userOne.constructor);
console.log(userTwo);


// new -- empty instance is created => 1.NEW OBJECT Created, 2.Constructor Function is called , 3. this() is injected/passed on in new