const express =  require("express")

const app = express();


// i want info of yug id 9
//dynamic parameter
//these all are routing
app.use("/about/:id/:user",(req,res)=>{ //use of params
    console.log(req.params);
    res.send("hello coder army my name is yug")
})

app.use("/contact",(re,res)=>{
    res.send("im your contact page")
})

app.use("/",(re,res)=>{
    res.send("im your page")
})

app.listen(4000, () => {
    console.log("listening at port 4000")
})