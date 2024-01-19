const express= require("express");
const prodRouter=require("./src/Routes/product.routes");
const connection = require("./src/configs/db");
const authRegister = require("./src/Routes/auth.routes");
const addRouter = require("./src/Routes/address.routes");
const app=express();
app.use(express.json()); // express middleware for writing json data
require("dotenv").config();

app.use("/api",prodRouter);
app.use("/api",authRegister);
app.use("/api",addRouter)


app.listen(5000,async()=>{
    try{
        await connection();
        console.log("running on port 5000");
    }catch(err){
        console.log("Connection failed",err.message);
    }
});
//http://localhost:5000/api