const accountId = 123456;
let accountEmail ="solo@outlook.com"
var accountPassword ="12345"
accountcity="jaipur"
let accountState;
// accountId=111234   //not allowed 

accountEmail="xyz@gmail.com"
accountPassword="1245asd"
accountcity="indore"

console.log(accountId);


/*
Prefer not to use var 
because of issue in block and function scope

*/

console.table({accountId,accountEmail,accountPassword,accountcity,accountState})
