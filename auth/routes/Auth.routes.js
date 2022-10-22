const express= require('express');
const jwt= require('jsonwebtoken');
const authModel = require('../model/Auth.model');
require('dotenv').config();

const authRouter= express.Router();


authRouter.post('/signup',async(req,res)=>{
     let {name,email,password,age}=req.body;
     try{
        let auth= new authModel({
            name,
            email,
            password,
            age
        })
        await auth.save();
        res.status(200).send('SignUp Successfull')
     }
     catch(er){
        res.status(500).send({message:er.message});
     }
})


authRouter.post('/login',async(req,res)=>{
    try{
       let auth= await authModel.find({email:req.body.email,password:req.body.password});
       
       const token = jwt.sign({ email:auth.email,_id:auth._id }, 'secret');

       if(auth.length===0) return res.send('invalid credentials')
       res.status(200).send({message:'login successfull',token:token});
    }
    catch(er){
        res.status(500).send({message:er.message})
    }
})

 authRouter.get('/profile/:id',async(req,res)=>{
    const user_token=req.headers.authorization.split(' ')[1];
    jwt.verify(user_token, 'secret', function(err, decoded) {
        if(err){
            return res.send('Please login again')
        }
        console.log(decoded);
      });
    try{
        
         let user= await authModel.find({_id:req.params.id});
         return res.send(user);
    }
    catch(er){
        res.send('not found',er)
    }
 })

module.exports=authRouter;