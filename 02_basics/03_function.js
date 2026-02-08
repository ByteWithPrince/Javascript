
function sayMyname(){
console.log("H");
console.log("I");
console.log("T");
console.log("L");
console.log("E");
console.log("R");
}

sayMyname();

function addtwoNumbers(num1,num2){  //parameters are given here 
   console.log(num1+num2);
}

const result =addtwoNumbers(6,1) //areguements are given here
addtwoNumbers(6,"1")
addtwoNumbers(6,"f")
addtwoNumbers(6,null)
addtwoNumbers(6,true)

console.log("Result: ",result); //this will give us undefined because the addtwoNumbers function does not return anything, it only logs the result to the console.Therefore when we try to log the result variable it will eb undefined because the function does not return annything



function addingtwoNumbers(num1,num2){  //parameters are given here 
//   let result1 =num1 +num2
//   return result1
return num1+num2;
  console.log("This will not be executed"); //This line will not be executed because the function will return before it reaches this line.
}
const result2=addingtwoNumbers(5,7);
console.log("Result2: ",result2);

function loginUserMessage(username = "Player"){  //this is a default parameter, if the user does not provide a username, it will default to "Player"
    if(!username){  //this will check if username is falsy (undefined, null, empty string, 0, false) and if it is, it will log a message to the console and return undefined.
        console.log("Please enter a username");
        return //This will stop the function from executing further and return undefined.
    }
    return`${username} just logged in `
}


console.log(loginUserMessage("Solo"));
console.log(loginUserMessage());

function calculatedCartPrice(val1,val2,...num1){
    return num1
}


console.log(calculatedCartPrice(412,400,500,700,100));// this will return a array of the numbers passed as arguement because the rest parameter ... is used to collect all the remaining arguement into an array 

const user={
    username: "Solo",
    prices:299
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);

}
handleObject(user)
handleObject({username:"Rambo",
    prices:399
}) //this will work coz we are passing an object with the same properties as the user object, so the function will be able to access the properties and log the message to the console. 

const myNewArray=[200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,600,100,200]));


