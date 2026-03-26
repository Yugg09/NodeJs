 const http = require('http');

 const server = http.createServer((req,res)=>{
      //res.end("hello coder army")

      if(req.url == "/"){ // routing
        res.end("hello coder army")
      }
      else if(req.url === "/contact"){
        res.end("this is our contact page")
      }
      else{
        res.end("error")
      }
 });



 server.listen(3000, ()=>{
    console.log("i am listening at port 3000")
 })