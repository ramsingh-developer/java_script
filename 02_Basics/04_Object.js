// const tinderUser = new Object()    // ye ak singleton object hai 
const tinderUser = {}                 // ye non singleton object hai. (bas itna hi dono me fark hai baki sab same hai)

tinderUser.id = "237634abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ram",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}                           // ise use nahi karna
// const obj3 = Object.assign({}, obj1, obj2, obj4)     // this is righ method

const obj3 = {...obj1, ...obj2}       // but sabse jyada ye use hota hai
// console.log(obj3);


const users = [

    {
        id: 1,
        email: "Ram@gmail.com"
    },
    {
        id: 1,
        email: "Ram@gmail.com"
    },
    {
        id: 1,
        email: "Ram@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
