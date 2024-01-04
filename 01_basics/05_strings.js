const name = "ritik"
const repoCount = 50

//console.log(name + repoCount + " Value" );

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("ritik-sh-com")

console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh%20choudhary.com"

console.log(url.replace('%20' , '-'));

console.log(url.includes('hitesh'));
console.log(url.includes('ritik'));

console.log(gameName.split('-'));



