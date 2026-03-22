const {sum,sub} = require("./second.js");


sum(5,10);
sub(10,5);
console.log("Hello World");

//CJS : common js module system
//i want second.js code in my first.js file


//(function () {
    //console.log("Hello World second IIFE");

    //function sum(a,b){
      //  console.log(a+b);
    //}
//})();
//require imports second js code in iiffe