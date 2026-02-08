
//if

// if(true){

// }
// if(false){

// }


const isuserloggedin = true
const temperature = 59
if (temperature <= 100) {
    console.log("temperature less than 100");

}
else {
    console.log("temperature is not less than 100");

}
console.log("executed");

const score = 300
if (score > 100) {
    const power = "flow"
    console.log(`User power:${power}`);
}

//shorthand notations

const balance = 1000
if (balance <= 1000) console.log("test"), console.log("test2");


//nesting 

if (balance<500) {
    console.log("less than 500");
}
else if(balance <750){
    console.log("less than 750");
    
}
else if(balance<1000)
    {
    console.log("less than 1000");

}
else {
    console.log("equal to or greater than 1000");
}


///real life

const userloggedin=true
const debitcard=true
const loggedinfromgoogle=false
const loggedinfromemail=true

if(userloggedin&&debitcard)
{
    console.log("Allow to buy course ");
}

if(loggedinfromemail||loggedinfromgoogle){
    console.log("User logged in");
}


