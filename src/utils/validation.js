const validator=require("validator");

const validateSignupData=(req)=>{
    const {emailId,name,password}=req.body;
    if(!name){
        throw new Error("Invalid name");
    }
    else if(!validator.isEmail(emailId)){
        throw new Error("Invalid Email");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Invalid Password");
    }
}

module.exports={validateSignupData};