const mongoose = require('mongoose');
const { schema } = mongoose;

const userSchema = new mongoose.Schema({ //yhi field honge bas
    FirstName:{
        type:String,
        required: true,
        minLength: 3,
        maxLength: 20
    },
    LastName:{
        type:String
    },
    age:{
        type:Number,
        min: 14,
        max: 70
    },
    gender:{
        type:String,
        //enum: ["male","female","others"]
        validate(value){
            if(!["male","female","others"].includes(value)) //if not then throw error
                throw new Error("Invalid Gender");
        }
    },
    emailId:{
        type:String,
        unique: true,
        required : true,
        trim: true,
        lowercase:true,
        immutable:true
      
    },
    password:{
        type:String,
        required: true
    },
    photo:{
        type:String,
        default: "this is the default photo"
    }

   },{timestamps : true})

   const User =  mongoose.model("user",userSchema);
       
   module.exports = User;