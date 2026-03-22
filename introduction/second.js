console.log("Hello World second");


    function sum(a,b){
        console.log(a+b);
    }
    function sub(a,b){
        console.log(a-b);
    }

     module.exports = {sum,sub};
     //can be exported as an object with multiple functions or variables
     //module.exports.sum = sum;
     //module.exports.sub = sub;

     // module export is used to export functions, objects, or values from a module so that they can be imported and used in other files. It allows you to share code between different parts of your application.
//module export is empty object