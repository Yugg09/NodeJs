const express = require("express");
const app = express();
const main = require("./database")
const User = require("./models/user");
const validateUser = require("./utils/validate")
const bcrypt = require("bcrypt");

app.use(express.json());

app.post("/register",async(req,res)=>{

    try{
        //api level validation
        //req.body ke andar data aya usmein first name present hona chaiye

        validateUser(req.body);

        //pasword hashing
        req.body.password = await bcrypt.hash(req.body.password,10);

     
       await User.create(req.body)
         res.send("user reg successfully")
    }
    catch(err){
        res.send("Error" + err.message);
    }
})

app.post("/login",async(req,res)=>{
    try{
          //validate
          //1:user ko nikalna get by id
          const people = await User.findById(req.body._id);

          //2:check email
          if(!(req.body.emailId === people.emailId))
            throw new Error("invalid email");
          

          //3:password match
            const isallowed = await bcrypt.compare(req.body.password, people.password)

            if(!isallowed)
                throw new Error("invalid pass");

            res.send("login success");
    }
    catch(err){
        res.send("error" + err.message);
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

