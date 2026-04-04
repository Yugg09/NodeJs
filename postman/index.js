const express  = require("express")
const app = express();

const bookstore = [
    {id:1,name:"harry potter",author:"devflux"},
    {id:2,name:"frineds",author:"vikas"},
    {id:3,name:"nexxus",author:"rohit"},
    {id:4,name:"dsa",author:"yug"},
    {id:5,name:"holling",author:"tkay"}
]

app.use(express.json());

app.get("/book", (req,res) => {
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

app.listen(3000, ()=>{
    console.log("listening at port 3000")
})

