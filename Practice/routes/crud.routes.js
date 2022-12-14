const express= require('express');
const crudRouter=express.Router();
const crudModel= require('../models/Crud.model');

crudRouter.get('/',async(req,res)=>{
    try{
        const crud=await crudModel.find();
        return res.status(200).send(crud);
    }catch(er){
       return res.status(500).send({message:er.message});
    }
})

crudRouter.post('/',async(req,res)=>{
    try{
          const crud=await crudModel.create(req.body);
          crud.save();
          return res.status(200).send(crud);
    }catch(er){
        return res.status(500).send({message:er.message});
    }
})

crudRouter.delete('/delete/:id',async(req,res)=>{
    try{
        const crud=await crudModel.findByIdAndDelete(req.params.id);
        return res.status(200).send(crud);
    }catch(er){
        return res.status(500).send({message:er.message});
    }
})

crudRouter.patch('/edit/:id',async(req,res)=>{
    try{
        const crud= await crudModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send(crud);
    }catch(er){
        return res.status(500).send({message:er.message});
    }
})


module.exports=crudRouter;