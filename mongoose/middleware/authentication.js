const jwt = require('jsonwebtoken')
const User = require('../models/user');

const userAuth = async(req,res,next)=>{
    try{
        const {token} = req.cookies;
        if(!token){
          throw new Error("invalid token")
        }
  
        const payload =   jwt.verify(req.cookies.token,"Rohit@13412$");//token and key and returns payload if authentified 
        //console.log(payload);
            
        const {_id} = payload;
  
        if(!_id){
          throw new Error("id is missing")
        }
  
          const result=  await  User.findById(_id);

        

        if(!result){
            throw new Error("user not exist")
        }
        req.result = result;
        next(); 
    }
    catch(err){
          res.send("error");
    }
}

module.exports = userAuth;