 // primitive data types => string, number, boolean, null, undefined, symbol, BigInt
const Score = 50
const score = 50.5
const isLoggedIn = true
 const outsideTemp = null
 let userEmail; // undefined
 const id = Symbol('1123')
 const anotherId = Symbol('1123')
console.log(id === anotherId) // false
 const bigNumber = BigInt(1234567890123456789012345678901234567890n)
 console.log(bigNumber + 1n) // 1234567890123456789012345678901234567891n;



//Reference data types (non-primitive)=> object, array, function

const heros = ['Thor', 'Ironman', 'Hulk']
const person = {
  name: "aditya",
  age: 22,
};
const myFunction = function () {
  console.log("hello world");
}
console.log(typeof myFunction ) // object 





// node 01_basic/datatypes-summery.js
