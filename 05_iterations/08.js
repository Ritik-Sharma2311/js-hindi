// Reduce method

const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc, currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
 return acc + currVal
},
0);

console.log(myTotal);


// Reduce using arrow f()
const nums1 = [1,2,3]

const myTotal1 = nums1.reduce( (acc, currVal) => (acc+ currVal) , 0 )

console.log(myTotal1);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceTotal = shoppingCart.reduce( (acc, pr) => (acc + pr.price ),0 )

console.log(priceTotal);

