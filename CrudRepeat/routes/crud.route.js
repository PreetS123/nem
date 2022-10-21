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

module.exports=CrudRouter;