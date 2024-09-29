const accountId = 133326;
let accountEmail = "ankushh@google.com";
var accountPassword = "12276545";
accountCity = "Delhi";
let accountState;

// accountId = 2;  // not allowed

accountEmail = "ha@google.com";
accountPassword = "1265789";
accountCity = "Goa";

console.log(accountId);

console.table([accountId,accountEmail,accountCity,accountPassword,accountState]);

/*
Prefer not to use var because of issue in block scope and functional scope  
*/