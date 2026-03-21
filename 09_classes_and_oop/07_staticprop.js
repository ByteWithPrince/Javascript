class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return '123'
    }
}


const solo=new User("Solo")
// console.log(solo.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;

    }
}

const blanket=new Teacher("blanket","blank@gmail.com")
console.log(blanket.createId());
