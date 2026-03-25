const fs = require('fs'); //fs ek file system module hai jo Node.js ke andar built-in hota hai, is module ka use hum file system se related operations karne ke liye karte hain, jaise ki file read karna, file write karna, file delete karna, etc.

let a = 10;
let b = "Hello World";

console.log(b);

function add(x, y) {
    return x + y;
}

fs.readFile("./data.json", "utf-8",(err,res) => {   // ye bhi ek asynchronous function hai, isme pehle file read karne ka request jayega aur jab file read ho jayegi tabhi callback function execute hoga. Iska matlab ye hai ki jab tak file read nahi ho jati, tab tak ye code execute nahi hoga. 
    console.log(res)
});

setTimeout(() => {   //blocking code, it will be executed after 3 seconds
    console.log("This is a timeout function"); // this code handled by libuv and will be executed after 3 seconds
}, 3000);

console.log(a);
console.log(add(5, 10));

//libuv made asynchronus programming possible in Node.js by providing an event loop and a thread pool to handle I/O operations. It allows Node.js to perform non-blocking I/O operations, which means that while one operation is being processed, other operations can still be executed without waiting for the first one to complete. This is achieved through the use of callbacks and promises, which allow developers to write asynchronous code that is easier to read and maintain.