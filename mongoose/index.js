const express = require("express");
const app = express();
const main = require("./database")
const User = require("./models/user");

app.use(express.json());

app.get("/info",async (req,res)=>{
   const ans =  await User.find({});
   res.send(ans);
})

app.post("/info",async(req,res)=>{
    //const ans = new User(req.body);
     //await ans.save();
      try{
     await User.create(req.body);
     res.send("successfully updated")
      }
      catch(err){
        res.send(err);
      }
})

app.delete("/info",async (req,res)=>{
    await User.deleteOne({name:"vihal"});
    res.send("deleted");
})

app.put("/info" ,async (req,res)=>{
     const result = await User.updateOne({name : 'yug'}, {age:40 , city:"bangla"});
    res.send("updated");
})

main()
.then(async ()=>{
    console.log("connected to DB")
    app.listen(3000, ()=>{
        console.log("listening at port 3000")
    })

 
})
.catch((err)=>console.log(err));

