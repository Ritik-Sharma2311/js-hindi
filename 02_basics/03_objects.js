// singleton - Objects made through literals- Singleton creation=NO i.e, const JsUser = {}, Objects made through constructors - singleton creation=YES i.e, Object.create

const mySym = Symbol("key1")

// object literals
const JsUser = {
    name : "Ritik",
    "full name":"Ritik Sharma",
     [mySym]: 'key1',
    age : 18,
    location : "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]


}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym]);


JsUser["email"] = "hitesh.chatgpt.com" //to change a Value


// Object.freeze(JsUser) to prevent from any new changes.
JsUser["email"] = "hitesh@amazon.com"

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}  // {this.}~~ to refer same object-JsUser's (name) so we'll use string interpolation ${this.name}.

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



