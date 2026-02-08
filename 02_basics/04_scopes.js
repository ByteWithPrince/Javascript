let a = 399

if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log(a);
} //this is block scope


console.log(a);
// console.log(b);
console.log(c); //this will work brcause var is function scoped and not block scoped so it is acceessible outside the block, but let and const are block scoped so they will not be accessible outside the block and will throw an error if we try to access them.


function one() {
    const username = "Solo"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two()
}
one()


if (true) {
    const username = "Solo"
    if (username === "Solo") {
        const website = "youtube"
        console.log(username + website)
    }
    // console.log(website)

}
// console.log(username)

console.log(addone(6));
function addone(num1) {
    return num1 + 1
}

const addTwo=function (num2){
    return num2+2
}
console.log(addTwo(5));  //if we move it before declartion then js will give us error
