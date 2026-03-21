const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(descripter);
// console.log(Math,PI);
// Math.PI=5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai ',
    price: '450',
    isAvailable: true,
    orderchai: function () {
        console.log("chai not available ");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, "name", {
    writeabele: false,
    enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== `function`)
      {  console.log(`${key} : ${value}`)
}
}


