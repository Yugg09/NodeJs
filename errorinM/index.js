const express = require("express");
const app = express();
 const {Auth} = require("./middleware/auth")

//CRUD:

//Database:array

app.use(express.json())

const FoodMenu = [
    {id:1, food:"chowmein", category:"veg", price:400},
    {id:2, food:"burger", category:"veg", price:240},
    {id:3, food:"rajma", category:"veg", price:350},
    {id:4, food:"butter chicken", category:"non veg", price:500},
    {id:5, food:"chai", category:"veg", price:300},
    {id:6, food:"sandwich", category:"veg", price:100},
    {id:7, food:"kebab", category:"veg", price:200},
    {id:8, food:"roll", category:"veg", price:500},
    {id:9, food:"roti", category:"veg", price:30},
    {id:10, food:"paneer", category:"veg", price:400},
]
//user jo bhi add krega vo yahan ayega 
const AddtoCart = [];

app.get("/food", (req,res)=>{ // jo ye /Food kholega usse ye sab dikhenge
    res.status(200).send(FoodMenu);
})

//common authentication code
//app.use("/admin", Auth) kch log iske bajaye ye ,Auth har jagah krte h

app.post("/admin",Auth, (req,res)=>{ //how to check wether he is admin or not
    //authentication karna pdega , admin ? hai 
  

   
        FoodMenu.push(req.body);
        res.status(201).send("item added")
    
   
    //add items into food menu
})

//admin can delete
app.delete("/admin/:id",Auth, (req,res)=>{ //auth here is a route handler
 

    
        const id = parseInt(req.params.id);

       const index =  FoodMenu.findIndex(item => item.id === id);

       if(index === -1){
            res.send("item doesnt exist")
       }
       else{
        FoodMenu.splice(index,1); //remove the item 
        res.send("deleted")
       }
    
})

//patch
app.patch("/admin",Auth, (req,res)=>{
    

    
        const id = req.body.id;
        const fooddata = FoodMenu.find(item => item.id === id);

        if(fooddata){
             
           if(req.body.food)
            fooddata.food = req.body.food;
           if(req.body.category)
           fooddata.category = req.body.category
            res.send("successfully updated")
        }
        else{
            res.send("item not exist");
        }
    
})


app.listen(3000, ()=>{
    console.log("listening at port 3000")
})