const promise1 = new Promise(function (resolve, reject) {
    //DO an async task 
    //DB call,crytography,network

    setTimeout(function () {
        console.log('Async task is completed'); resolve()
    }, 1000)
})

promise1.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2"); resolve()
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
})



const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Solo", email: "solo@example.com" })
    }, 1000);
})

promise3.then(function (user) {
    console.log(user);
})


const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({
                username: "Prince", password: "123"
            })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);

})


promise4.then((user) => {
    console.log(user);
    return user.username
}).then((myusername) => {
    console.log(myusername);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "baccha", password: "yadav123" })
        } else {
            reject('ERROR: JS WENT WRONG')
        }
    }, 1000);
})

async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromise5()


// async function getallusers(){
//    try{
//      const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json()
//     console.log(data);
//    }
//    catch(error){
//     console.log("E: ",error);
//    }
// }

// getallusers()


fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

