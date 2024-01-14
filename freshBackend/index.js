const express= require("express");


const app= express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Backend running");
})

app.listen(5000,()=>console.log("http://localhost:5000"))