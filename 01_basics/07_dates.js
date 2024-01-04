// Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 0, 23,5,3)

// console.log(myCreatedDate.toLocaleString());

// let myCreateDate2 = new Date('2023-01-14')
// console.log(myCreateDate2.toLocaleString());

let myCreateDate3 = new Date('01-14-2023')
// console.log(myCreateDate3.toLocaleString());

let myTimeStamp =   Date.now()
console.log(myTimeStamp); //time in miliseconds since 1 jan 1970

console.log(myCreateDate3.getTime()); //miliseconds since 01-14-2023

console.log(Math.floor(Date.now()/1000)); //time in seconds (just calculated by dividing the miliseconds/1000 )

let newDate2 = new Date();
console.log(newDate2);
console.log(newDate2.getDay());
console.log(newDate2.getMonth());

newDate2.toLocaleString('default', {
    weekday:"long",
    
})









