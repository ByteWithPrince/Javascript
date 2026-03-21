class user{
    constructor(username){
        this.username=username;
        
    }
    
    logMe(){
        console.log(`Username is ${this.username} and the email is ${this.email}`);
    }
}


class Teacher extends user{
    constructor(username,email,password){

        super(username)
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }

}

const chai=new Teacher("chai","chai@gamil.com","123")
chai.addCourse();
chai.logMe();

const tea=new user("masalachai")
tea.logMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof user);