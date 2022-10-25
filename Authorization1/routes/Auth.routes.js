const express= require('express');
const jwt= require('jsonwebtoken');
const bcrypt= require('bcrypt')
const authModel=require('../models/Auth.model');


const authRouter= express.Router();


authRouter.post('/signup',async(req,res)=>{
    const {email,password,role}= req.body;
    bcrypt.hash(password,8, function(err, hash) {
        // Store hash in your password DB.
           if(err){
              return res.send('something went to wrong.');
           }
          const auth= new authModel({email,password:hash,role});
          auth.save();
          res.send({message:'signup successfull',auth:auth});
    });
});

authRouter.post('/login',async(req,res)=>{
    const {email,password}= req.body;
    
    let auth= await authModel.findOne({email:email});
    let hash= auth.password;
    // console.log(auth.password)
   await bcrypt.compare(password, hash, function(err, result) {
        // result == true
        if(err){
            return res.send('Please Login again');
        }
        if(result){
            if(!auth){
                res.send('Something went wrong');
            }
            else{
                let token = jwt.sign({email:auth.email,_id:auth._id }, 'secret');
                return  res.send({message:'login successful',token:token,auth:auth});
            }
           
        }
    });
})

  authRouter.get('/profile/:id',async(req,res)=>{
    let id=req.params.id;
    let token= req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'secret', function(err, decoded) {
        if(err){
            res.send('Invalid user');
        }
         console.log(decoded.email);
      });
      auth= await authModel.findOne({_id:id});
            res.send('User Authenticated')
  })

module.exports= authRouter;