// const tinderUser = new Object()
const tinderUser ={
}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname :{
            firstname:"hitesh",
            lastname: "chaudhary"
        }
    } 

}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1 , obj2}
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2)  // combining two or more objects [ Object.assign(target, source)].
// console.log(obj3);  


const obj3 = {...obj1 , ...obj2}
console.log(obj3);  //spread operator to combine two or more objects

const users = [
    {
        id: 1,
        email: "123@gmail.com"
    }
    ,{
        id: 2,
        email: "23@gmail.com"
    },
    {
        id: 3,
        email: "3@gmail.com"
    },
    {
        id: 4,
        email: "4@gmail.com"
    }
]



// console.log(users[0].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));  //the o/p of these keys as well as values will be in the form of arrays.
// VVimp. So in this way we'll be functioning iterating and programmimg over the Objects keys and values in future.

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLoggedout'));

const course = {
    name : "js in hindi",
    price: "999",
    courseInstructor: "hitesh"

}

//course.courseInstructor 
const {courseInstructor : instructor} = course //destructuring of the object

console.log(instructor);


const navbar = ({company}) => {

} // react methods of destructuring

navbar(company = "hitesh")

// API

//JSON
//    {

//       "name": "hitesh",
//       "coursename": "js in hindi",
//       "price": "free"
//    }

[

    {},
    {},
    {}
]