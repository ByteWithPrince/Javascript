const user = {
    username: "Solo",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to website`); //this keyword current context to refer krta hai 
        console.log(this);


    }
}

user.welcomeMessage()
user.username = "tammy"
user.welcomeMessage()//
console.log(this);// this will give {} as an output 

function chai() {
    let username = "Solo"
    console.log(this.username);  // this keyword fucntion mein kaam nhi krta object mein krt ahai 

}
chai()


const chaipaani = function () {
    let username = "Solo"
    console.log(this.username);

}
chaipaani()

const tea = () => {
    let username = "Solo"
    console.log(this);
}



tea()


// arrow function () =>{}

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5, 8));

//implicit return
const addThree = (num1, num2) => num1 + num2

console.log(addThree(5, 6));
// object return
const adde = (num1, num2) => ({ username: "Solo" })

console.log(adde(5, 6));



// const myArray=[4,6,7,9,0]
// myArray.forEach()




