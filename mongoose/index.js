const express = require("express");
const app = express();
const main = require("./database")
const User = require("./models/user");

app.use(express.json());

app.post("/register",async(req,res)=>{

    try{
         
       await User.create(req.body)
         res.send("user reg successfully")
    }
    catch(err){
        res.send("Error" + err.message);
    }
})

app.get("/info",async(req,res)=>{
    try{
          const result = await User.find();
          res.send(result);
    }
    catch(err){
       res.send("error" + err.message);
    }
})

app.get("/user/:id",async(req,res)=>{
    try{
        const result =  await  User.findById(req.params.id);
        res.send(result);
    }
    catch(err){
       res.send("error" + err.message);
    }
})

app.delete("/user/:id",async(req,res)=>{
    try{
        const result =  await  User.findByIdAndDelete(req.params.id);
       
        res.send("deleted")
    }
    catch(err){
       res.send("error" + err.message);
    }
})

app.patch("/user/:id",async(req,res)=>{
    try{

        const {_id, ...update} = req.body //desctructuring
      await  User.findByIdAndUpdate(_id,update,{runValidators : true});
       
        res.send("updated");
    }
    catch(err){
       res.send("error" + err.message);
    }
})



main()
.then(async ()=>{
    console.log("connected to DB")
    app.listen(3000, ()=>{
        console.log("listening at port 3000")
    })

 
})
.catch((err)=>console.log(err));

