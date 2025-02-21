require("dotenv").config();
const express=require("express");
const dbConnect = require("./config");

const app=express();
app.use(express.json());

const authRouter=require("./router/auth");
app.use("/",authRouter);



dbConnect()
.then(async()=>{
    console.log("database connected");
    app.listen(7777,()=>{
        console.log("server is running on 7777");
        
    })
    
})
.catch((err)=>{
    console.log(err);
    
})