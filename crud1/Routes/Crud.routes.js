const express= require('express');
const crudModel= require('../models/Crud.model');
const CrudRouter= express.Router();


CrudRouter.get('/',async(req,res)=>{

    try{
         const user= await crudModel.find();   
         res.send(user);
    }catch(er){
        res.status(500).send(er.message);
    }
})

CrudRouter.post('/post',async(req,res)=>{
    
    try{     
            const user=await crudModel.create(req.body);
             res.send({message:'user detail saved'})
             
    }catch(er){
        res.status(500).send({message:er.message})
    }
})


CrudRouter.delete('/delete/:id',async(req,res)=>{
    const userId=req.params.id
    try{
        const user= await crudModel.findByIdAndDelete({_id:userId});
        res.send({message:user});

    }catch(er){
        res.status(500).send({message:er.message});
    }
})

CrudRouter.patch('/edit/:id',async(req,res)=>{
    
    try{
       const user= await crudModel.findByIdAndUpdate(req.params.id,req.body);
         
         res.send(user);
    }catch(er){
        res.status(500).send({message:er.message})
    }
})

module.exports=CrudRouter;