// // ES6


// class user {
//     constructor(username, email, password) {
//         this.username = username;
//         this.password = password;
//         this.emial = email;

//     }
//     encryptPassword() {
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const solo = new user("Solo", "solo@example.com", "123")

// console.log(solo.encryptPassword());
// console.log(solo.changeUsername());

// behind the scene 
function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;

    
    
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`;
}

User.prototype.changedUsername=function(){
    return `${this.username.toUpperCase()};`
}
const chai = new User("chai", "solo@example.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changedUsername());