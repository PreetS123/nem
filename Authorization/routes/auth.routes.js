const express= require('express');
const authModel= require('../models/Auth.model');
const jwt= require('jsonwebtoken');
const authRouter=express.Router();

authRouter.post('/signup',async(req,res)=>{
    let {email,password,role}= req.body;
    bcrypt.hash(password, 8, function(err, hash) {
        // Store hash in your password DB.
        if(err){
            res.send('something went wrong');
        }
        let auth= new authModel({email,password:hash,role});
        auth.save();
        res.send({message:'signup successfull',auth:auth});
    });
})

authRouter.post('/login',async(req,res)=>{
    let {email,password}= req.body;
    let auth= await authModel.findOne({email});
    let hash= auth.password;
    await bcrypt.compare(password, hash, function(err, result) {
        // result == true
        if(err){
            res.send('something went wrong');
        }
        if(result){
            let token = jwt.sign({email:auth.email,_id:auth._id }, 'secret');
             if(auth){
                   res.send({message:'login successfull',token:token});
             }
        }
        else{
            res.send('invalid user');
        }
    });
})
  
  authRouter.get('/profile/:id',async(req,res)=>{
      let id= req.params.id;
      let token= req.headers.authorization.split(' ')[1];

     await  jwt.verify(token, 'secret', function(err, decoded) {
        if(err){
            res.send({message:'invalid user'});
        }
        console.log(decoded) // bar
      });
      try{
            let auth= await authModel.findOne({_id:id});
            res.send(auth);
      }catch(err){
        res.status(500).send({message:err.message});
      }
  })

module.exports=authRouter;