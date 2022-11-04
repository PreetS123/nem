const express= require('express');;
const volenteerModel= require('../model/Volenteer.model');

const registerUser= express.Router();


registerUser.post('/post',async(req,res)=>{
    const { mob_no,location,language,available}=req.body;
    try{
        const user= await volenteerModel.create({mob_no,location,language,available})
        console.log(user);
        res.send(user);
    }
    catch(er){
        res.status(500).send({message:er.message});
    }
})

 registerUser.get('/get',async(req,res)=>{
    try{
        const user= await volenteerModel.find();
        res.send(user);
    }
    catch(er){
        res.send({message:er.message})
    }
 })


module.exports=registerUser;