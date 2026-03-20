const user = {
    username: "Solo",
    loginCount: 6,
    signedIn: true,
    getUserdetails: function () {
        // console.log("Got user detail from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username)
console.log(user.getUserdetails())

function User(myusername, logincount, isloggedin) {
    this.myusername = myusername;
    this.logincount = logincount;
    this.isloggedin = isloggedin
    return this
}

const userOne = User("SOLO", 11, true)
const usertwo = User("BytewithSolo", 34, false)
console.log(userOne);  //Usertwo overwrite the userOne

const userOn = new User("abc", 11, true)
const usertw = new User("Bws", 34, false)
console.log(userOn);


// when we use new keyword a new object is created for us first 
// then your variable and everyhtign that we are creating is passed in it 
// then constructor function is called due to new keywords and everything like this keyword is injected into it 
// finally we get that object 




