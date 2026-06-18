const mongoose = require('mongoose');
const { schema } = mongoose;

const userSchema = new mongoose.Schema({ //yhi field honge bas
    name:String,
    age:Number,
    city:String,
    gender:String
   })

   const User =  mongoose.model("user",userSchema);
       
   module.exports = User;