const express= require('express');
const authModel= require('../models/Auth.model');
const jwt= require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authRouter= express.Router();

authRouter.post('/signup',async(req,res)=>{
    let {name,email,password,age}= req.body;
    
       await bcrypt.hash(password, 8, function(err, hash) {
            // Store hash in your password DB.
            if(err){
                return res.send('SignUp failed, please try again');
            }
            const auth= new authModel({
                name,
                email,
                password:hash,
                age
            })
             auth.save();
            return res.send('signup successfull');
        });
})


authRouter.post('/login',async(req,res)=>{
    let {email,password}= req.body;
    
    const auth= await authModel.findOne({email});
    // console.log(auth);
    const hash= auth.password;

    await bcrypt.compare(password,hash, function(err, result) {
        // result == true
         if(err){
            return res.send('please login again')
         }
         if(result){
            const token= jwt.sign({email:auth.email,_id:auth._id},'secret');

            if(!auth){
                return res.send('invalid credentials')
            }
            return res.send({message:'login successfull',token:token});
         }
         else{
            return res.send('invalid credentials')
         }
    });
    
})


authRouter.get('/profile',async(req,res)=>{
    const id= req.params.id;
    const token= req.headers.authorization.split(" ")[1];

    jwt.verify(token, 'secret', function(err, decoded) {
        // console.log(decoded.foo) // bar
        if(err){
            return res.send('invalid credentials');
        }
        console.log(decoded);

      });

      try{
        const auth_user= await authModel.find({_id:id});
        return res.send(auth_user)
      }
      catch(er){
        res.send('user not found')
      }
})



module.exports=authRouter;