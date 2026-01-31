const name = "Ram"
const repoCount = 5

//console.log(name + repoCount + " value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // hamesa isi pattern ko use karna hai

const gameName = new String('ram-singh')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   ram   "
console.log(newStringOne);

console.log(newStringOne.trim()); // trim white space character par hi kam karta hai

const   url = "https://ram.com/ram%20singh"

console.log(url.replace('%20', '-'));   // %20 replace ho gya

console.log(url.includes('sundar'));

console.log(gameName.split('-'));




