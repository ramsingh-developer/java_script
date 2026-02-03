function calculateCartPrice(val1, val2, ...num1){         // ...num1 rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));    // is optput me val1 le gya 200 and val2 le gya 400 baki rest operator me jayega jo ak array me store hoga

const user = {
    username: "Ram",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: 'sam',
    price:399
})

const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

