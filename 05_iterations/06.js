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

const books = [
    {title: 'Book One', genre:'Fiction', publish: 1981, edition: 2004 },
    {title: 'Book Two', genre:'Non-fiction', publish: 1981, edition: 2004 },
    {title: 'Book Three', genre:'history', publish: 2003, edition: 2004 },
    {title: 'Book Four', genre:'history', publish: 1981, edition: 2004 },
    {title: 'Book Five', genre:'Science', publish: 2002, edition: 2004 },
    {title: 'Book Six', genre:'history', publish: 1981, edition: 2004 },
    {title: 'Book Seven', genre:'Fiction', publish: 1981, edition: 2004 },
    {title: 'Book Eight', genre:'Non-fiction', publish: 1981, edition: 2004 },
];

let userBooks  =  books.filter((bk) => bk.genre === "history")

userBooks = books.filter((bk) => bk.publish >= 2000 && bk.genre === "history") // The filter() method returns a new array with all elements that pass THE TEST defined by the given function.

console.log(userBooks);



