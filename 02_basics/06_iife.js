// Immediately invoked function expression (IIFE)

(function chai(){
    //named IIFE
console.log(`DB connected `);

})();

// global scope ke pollution se jo problem hoti hai usko htane ke liye iife use krte hai 

((NAME)=>{
    //Unnamed IIFE
    
    console.log(`DB CONNECTED TWO ${NAME}`)
})('SOLO');