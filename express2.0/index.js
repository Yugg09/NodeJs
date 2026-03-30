const express  = require("express")
const app = express();

//app.use("/user", (req,res) => { //use automatically use get method
   // res.send({name:yug})
//})

//data parsing
app.use(express.json()); //middleware : data json format m aya js object me convert krna hota 

app.get("/user", (req,res) => { //get method se data fetch kara sakte 
    res.send({name:"yug"})
})
//these are api endpoints

app.post("/user", (req,res) => {
    //console.log("data saved succesfull");

     console.log(req.body);
    res.send("data saved");
})

//get,post,patch,put,delete

app.listen(4000, () => {
    console.log("listening at port 4000")
})

 //data aa to gaya apne pe par undefined ara
 //parsing karni hoti h