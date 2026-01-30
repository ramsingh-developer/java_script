const accountId = 43584
let accountEmail = "singhram25122005@gmail.com"
var accountPassword = "354645"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "Ram@gmail.com"
accountPassword = "4527956"
accountCity = "Bengaluru"
let accountState; 

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and funtional scope
*/