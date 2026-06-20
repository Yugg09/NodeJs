
 const validator = require("validator");
function validateUser(data){
    const mandatoryField = ["FirstName","emailId","age"]

        const IsAllowed = mandatoryField.every((k)=> Object.keys(data).includes(k));

        if(!IsAllowed)
            throw new Error("fields missing");

        if(!validator.isEmail(data.emailId))
             throw new Error("invalid email")

        if(!validator.isStrongPassword(data.password))
            throw new Error("week password");

        if(!data.FirstName.length>=3 && data.FirstName.length<=20)
            throw new Error("invalid name length")
        //paswword validation
        //first name min length 3 and max 20 in api lvl validaiton 
}

module.exports = validateUser;