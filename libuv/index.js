let a = 10;
let b = "Hello World";

console.log(b);

function add(x, y) {
    return x + y;
}

setTimeout(() => {   //blocking code, it will be executed after 3 seconds
    console.log("This is a timeout function"); // this code handled by libuv and will be executed after 3 seconds
}, 3000);

console.log(a);
console.log(add(5, 10));

//libuv made asynchronus programming possible in Node.js by providing an event loop and a thread pool to handle I/O operations. It allows Node.js to perform non-blocking I/O operations, which means that while one operation is being processed, other operations can still be executed without waiting for the first one to complete. This is achieved through the use of callbacks and promises, which allow developers to write asynchronous code that is easier to read and maintain.