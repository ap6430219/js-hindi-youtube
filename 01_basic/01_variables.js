const accountId = 1234567890;
let accountEmail = "aditya@google.com";
var accountPassword  = 12345;
accountCity = "Delhi";
//accountId = 6430219 // not allowed
accountPassword = 2121; // allowed
accountCity = "Noida"; // allowed
// accountId = "1234567890"; // not allowed
let accountState; // declared but not undefined in js
// prefer not use var bracoue of issue in block scope & function scope
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

