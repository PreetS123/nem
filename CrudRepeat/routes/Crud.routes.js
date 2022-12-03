const express= require('express');
const crudModel= require('../models/Crud.model');

const crudRouter= express.Router();

crudRouter.get('/',async(req,res)=>{
    try{
          const user= await crudModel.find();
          res.status(200).send(user);
    }catch(er){
        res.status(500).send({message:er.message})
    }
})




module.exports=crudRouter;