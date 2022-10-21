const express= require('express');
const crudModel = require('../models/Crud.model');

const CrudRouter=express.Router();

CrudRouter.post('/post',async(req,res)=>{
    try{
        let data= await crudModel.create(req.body);
          res.status(200).send(data);

    }
    catch(er){
        res.status(500).send({message:er.message})
    }
})

CrudRouter.get('/get',async(req,res)=>{
    try{
         let data= await crudModel.find();
         res.status(200).send(data);
    }
    catch(er){
        res.status(500).send({message:er.message})
    }
})

CrudRouter.patch('/edit/:id',async(req,res)=>{
    try{
         let data= await crudModel.findByIdAndUpdate(req.params.id);
         res.status(200).send(req.body);
    }
    catch(er){
        res.status(500).send({message:er.message});
    }
})

CrudRouter.delete('/delete/:id',async(res,req)=>{
    try{
        let data= await crudModel.findByIdAndDelete(req.params.id);
        res.status(200).send({message:'Deleted'})
    }
    catch(er){
        res.status(500).send({message:er.message})
    }
})

module.exports=CrudRouter;