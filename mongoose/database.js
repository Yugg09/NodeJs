// getting-started.js
const mongoose = require('mongoose');

async function main() {
   await  mongoose.connect("mongodb+srv://admin123:admin123@coding.ecenr8i.mongodb.net/BookStore")

//    const userSchema = new mongoose.Schema({ //yhi field honge bas
//     name:String,
//     age:Number,
//     city:String,
//     gender:String
//    })

   //model create : collection create karna(apni table create karna)
   //class create kari h
//    const User =  mongoose.model("user",userSchema);
    
//    //document create ya obj create kra h
//    const user1 = new User({name:"yug",age:20,city:"dwarka",gender:"male"})
//     await user1.save();

//     //another idea to create
//     await User.create({name:"mohan",city:"pak",age:40});

//     await User.insertMany([{name:"akshita",age:18},{age:25, gender:"male"}] )

//    const ans =  await User.find({});
//    console.log(ans);

   //find by particular

//   const result =  await User.find({name:"yug"});
//   console.log(result);
}

module.exports = main;