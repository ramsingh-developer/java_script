// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)   // push method array ke end me value add karta hai
// myArr.push(7)
// myArr.pop()     // pop value ko end se remove karta karta hai

// myArr.unshift(9)   // unshift start me value add kar deta hai
// myArr.shift()      // shift start ki value delete kar deta hai

// console.log(myArr.includes(9));  // value hogi to true output dega nahi to false
// console.log(myArr.indexOf(3));   // yah indexing batata hai nahi negative dega

// const newArr = myArr.join()


// console.log(myArr);
// console.log(typeof newArr);     // value string me convert ho jayegi



// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)    // is method me jaise [0,1,2,3,4,5] hai to ye 1 se include kare 3 tak aur 1, 2 output dega 3 ko include nahi karega

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)    // isme array me se 1 se 3 tak ki value ko hi nikal deta hai output me
console.log("C ", myArr);
console.log(myn2);

