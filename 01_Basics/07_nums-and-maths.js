const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));   // e-commerce website me jyadatar 2 fix hi value rakhte hai

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));  //imp

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  // ye indians standard me convert hoga 'en-IN' lagane se


// +++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4));          // abs ka matalab obsolute value ye hamari value ko - se + me change kar deta hai
// console.log(Math.round(4.3));       // isme point(.) hat jata hai
// console.log(Math.ceil(4.2));        // iska matlab 4 se thoda sa bhi jyada hoga to 5 print hoga
// console.log(Math.floor(4.9));       // floor matlab low value hi lega isme 4.9 me 4 print karega
// console.log(Math.min(4, 3, 6, 8));  // isme sabse kam vali value milegi jaise 3
// console.log(Math.max(4, 3, 6, 8));  // isme sabse jyada vali value milegi jaise 8

console.log(Math.random());     // Math.random hamesa 0 aur 1 ke beech value deti hai
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);   // ye 1 se 9 tak ki value dega

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // this is imporant line
