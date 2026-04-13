const express  = require("express")
const app = express();

const bookstore = [
    {id:1,name:"harry potter",author:"devflux"},
    {id:2,name:"frids",author:"vikas"},
    {id:3,name:"nexus",author:"rohit"},
    {id:4,name:"dsa",author:"yug"},
    {id:5,name:"holling",author:"tkay"}
]

app.use(express.json());

app.get("/book", (req,res) => { //imp
    res.send(bookstore);
})

app.get("/book/:id", (req,res) => {
    const id = parseInt(req.params.id); //id ki value nikalne ke liye
    const book = bookstore.find(info => info.id===id);
    res.send(book);
})

app.post("/book", (req,res) =>{ //data req ke andar ayega //ye data hum save karre h
    bookstore.push(req.body);
    res.send("data saved");

})

app.patch("/book", (req,res)=>{ ///update karne ke liye
    console.log(req.body)

   const book =  bookstore.find(info => info.id === req.body.id);


   if(req.body.author)
   book.author = req.body.author

    res.send("patch updated")
})

app.delete("/book/:id", (req,res)=>{
   const id =  parseInt(req.params.id);
  const index = bookstore.findIndex(info => info.id ===  id);
   bookstore.splice(index,1);
   res.send("successfully deleted");
})

app.listen(3000, ()=>{
    console.log("listening at port 3000")
})

