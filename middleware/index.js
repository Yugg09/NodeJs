const express  = require("express")
const app = express();

//app.use(route,raoute handler)
//middleware : wale respond nhi karte hai mw -> mw -> req handler
app.use("/user" , (req,res,next) => { //route handler 
    //res.send("hello ji")
    next();
})

app.use("/user",(req,res,next)=>{ //ye ek middleware h
    //res.send("kya haal h")
    next();
})
 
app.use("/user", (req,res)=>{ //ye request handler hai 
     res.send("badhia hu")
})





app.listen(3000, ()=>{
    console.log("listening at port 3000")
})