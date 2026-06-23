const express = require("express");
const app = express();
const main = require("./database")
const User = require("./models/user");
const validateUser = require("./utils/validate")
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const userAuth = require("./middleware/authentication")

app.use(express.json());
app.use(cookieParser())

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
          const people = await User.findOne({emailId:req.body.emailId});

          //2:check email
         // if(!(req.body.emailId === people.emailId))
           // throw new Error("invalid email");

          
          

          //3:password match
            const isallowed = await bcrypt.compare(req.body.password, people.password)

            if(!isallowed)
                throw new Error("invalid pass");


            //jwt token bhejo saath me 

           const token =  jwt.sign({_id:people._id, emailId:people.emailId},"Rohit@13412$",{expiresIn:10})

            res.cookie("token",token)
            res.send("login success");
    }
    catch(err){
        res.send("error" + err.message);
    }
    
    
})


app.get("/user",userAuth,async(req,res)=>{
    try{
     

      //user authentication verify id

     res.send(req.result);
    }
    catch(err){
       res.send("error" + err.message);
    }
})

app.delete("/user/:id",userAuth,async(req,res)=>{
    try{

        //authenticate
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

