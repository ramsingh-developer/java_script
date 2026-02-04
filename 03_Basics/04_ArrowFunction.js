const user = {
    username: "Ram Singh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);    // this is the current context (jo variable h uski bat karta hai) to reffer
        console.log(this);
        
            
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Ram Singh"
//     console.log(this.username);
    
// }
// chai()



// const chai = function (){        // normal function me this ki value undefined deti hai
//     let username = "Ram Singh"
//     console.log(this.username);
// }

const chai = () =>{                   // arrow function me this value Object deti hai
    let username = "Ram Singh"
    console.log(this);
}


// chai()




// const addTwo = ( num1, num2) => {     // Basic Arrow function
//     return num1 + num2
// }

// const addTwo = ( num1, num2) => num1 + num2             // implicit return function (implicit return ka matlab hai mai man leta hu aapko return keyword likhne ki jarurat nahi kyoki aapka ak hi line ka statement hai) (Advanced arrow function)

// const addTwo = ( num1, num2) => (num1 + num2)           // Important => agr ham {} me wrap karege to return keyword likhna padega aur agr () me wrap karege to return keyword nahi likhna padega

const addTwo = ( num1, num2) => ({username: "Ram Singh"})    // object return karne ke liye aise use karege  (Object ko defined karne ke liye () me wrap karna hi padega)

console.log(addTwo(3, 4));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()




// * browser ke andar jo global object hai vo h window object (IMP. for interview question)