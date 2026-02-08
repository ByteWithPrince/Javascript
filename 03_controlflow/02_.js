// // switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }


const month = 3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;

    default: console.log("Enter a valid number ");
        break;
}


//falsy values

// flase ,0,-0,BigInt 0n,"",null,undefined,NaN


// truthy value
// "0",'false'," ",[],{},funtion(){},


const userEmail = []
if (userEmail.length === 0) {
    console.log("Array is Empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}


// nullish coalescing operator(??):null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);
val1 = null ?? 80
console.log(val1);
val1 = undefined ?? 15
console.log(val1);
val1 = null ?? 12 ?? 23
console.log(val1);

//ternary operator
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")