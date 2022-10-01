const express= require('express');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const AuthModel=require('../models/Auth.model');

const authController= express.Router();


authController.post('/register',(req,res)=>{
   const {email,password}= req.body;
   bcrypt.hash(password, 6, async function(err, hash) {
    // Store hash in your password DB.
    if(err){
        res.send('PLEASE TRY AGAIN')
    }
    const Auth= new AuthModel({
        email,
        password:hash
    })
    await Auth.save();
    res.send('REGISTER DONE')
});
   
})


authController.post('/login',async(req,res)=>{
    const {email,password}= req.body;
    const auth= await AuthModel.findOne({email})
    if(!auth){
        return res.send('Invalid Credentials');
    }
    const hash= auth.password;
    const authId=auth._id;
    bcrypt.compare(password, hash, function(err, result) {
        // result == true
        if(result){
            var token = jwt.sign({ email,authId }, 'secret');
            return res.send({"message":"LOGIN SUCCESSFULL","token":token})
        }
        else{
            return res.send('Invalid credentials')
        }
    });
    
})



module.exports= authController