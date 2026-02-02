// singleton
// object.create


// object literals

const mySym = Symbol("key1")

const JsUser = {
        name:"Ram",
        "full name": "Ram Singh",      // isko ham . se declear nahi kar sakte hai
        [mySym ]: "myKey1",           // symbol me use karne ke liye squre bracket me use karte hai
        age: 20,
        location : "Noida",
        email: "singhram25@gmail.com",
        isLoggedIn: false,
        lastLoginDays: ["monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);      // example of full name
// console.log(JsUser[mySym]); 

JsUser.email = "ram@chatgpt.com"
// Object.freeze(JsUser)                // imp. => object me freeze karne ke bad usme koi change nahi kar sakte hai
JsUser.email = "ram@Microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// NOTE => jyadatar dot laga ke use karege