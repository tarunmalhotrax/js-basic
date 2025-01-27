const  accountId = 1232121
let acc_email = "abc@gmail.com"
var acc_pass = "123345"
acc_City = "Delhi"

acc_email = "change@gmail.com"
acc_pass = "change123"
acc_City = "Jaipur"

let acc_state; // saved as undefined

// accountId = 2 // not allowed // const cannot be redecalred
// var variable has limited scope 

/*
Prefer not to use var
because of issue in block scope and funtional scope
*/

console.log(accountId);
console.table([acc_email,acc_pass,accountId,acc_City,acc_state])
