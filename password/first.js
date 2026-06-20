const bcrypt = require("bcrypt")

const password = "Rohit@123";

 async function Hashing(){
//hashcode + salt

 const hashpass = await bcrypt.hash(password,10); //automatically add hashcode
 
 const ans =await  bcrypt.compare(password,hashpass)
 console.log(ans);
 }

 Hashing();