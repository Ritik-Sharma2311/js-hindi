// const coding = ["js","java","cpp","python","ruby"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })
// console.log(values);
// forEach - It doesn't return any values.


const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => num > 4 )
// const newNums = myNums.filter( (num) => { return num > 4 } )
console.log(newNums);  // So unlike for>each , filter does return values on calling outside.


// Now to return values using FOREACH
const myNums1 = [1,2,3,4,5,6,7,8,9,10,11] 
const newNums1 = []
myNums1.forEach( (num) => { if (num > 4) {
    newNums1.push(num)
} })

console.log(newNums1);
