// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);                    // *Date ak Object hai

// let myCreatedDate = new Date(2026, 0, 23)      // javascript ke andar month 0 se start hote hai
// let myCreatedDate = new Date(2026, 0, 23, 5, 3)
// let myCreatedDate = new Date("2026-01-14")         // dd/mm/yy me likhne par month 01 se start hota hai
let myCreatedDate = new Date("02-02-2026") 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleDateString('default',{
    weekday: "long",
})


