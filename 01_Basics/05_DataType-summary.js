// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;   // undefined output dega

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 37434343834384345n




// Reference (Non Primitive)

// Array, Objects, Funtions

const heros = ["shaktiman", "naagraj", "doga"]
let obj = {
    name: "ram",
    age:20,
}

const myFuntion = function(){
        console.log("Hello World");
}

console.log(typeof heros);





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "ramtechdotcom"

let anothername = myYoutubename
anothername = "RamSingh"

console.log(myYoutubename);

console.log(anothername);

let userOne = {
    email:'singhram@gmail.com',
    upi:"user@ybl"

}

let userTwo = userOne

userTwo.email = "Ram@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

