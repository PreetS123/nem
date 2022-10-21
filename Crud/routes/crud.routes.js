const express= require('express');
const CrudModel= require('../models/crud.model');

const CrudController= express.Router();

CrudController.get('/get',async(req,res)=>{
    
    try{
         let data= await CrudModel.find();
        //  console.log(data)
         res.status(200).send(data);
    }
    catch(er){
        res.status(500).send({message:er.message});
    }
})


CrudController.post('/post',async(req,res)=>{
    let {name,age,city,state}= req.body;
     try{
        let data=await CrudModel.create({
            name,
            age,
            city,
            state
        })
        res.status(200).send(data);
     }
     catch(er){
        res.status(500).send({message:er.message});
     }
})


CrudController.patch('/edit/:id',async(req,res)=>{
    try{
        let data= await CrudModel.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        });
        res.status(200).send(data);
    }
    catch(er){
        res.status(500).send({message:er.message})
    }
})


CrudController.delete('/delete/:id',async(req,res)=>{
      let id=req.params.id;
      try{
             let data= await CrudModel.findByIdAndDelete({_id:id});
                res.status(200).send({message:"Deleted"});
      }
      catch(er){
        res.status(200).send({message:er.message});
      }
})


//   Now adding some filter in the crud application

// find by name
 CrudController.get('/name/:name',async(req,res)=>{
     try{
         const one_data= await CrudModel.findOne({name:req.params.name},{__v:0,_id:0});

         res.status(500).send(one_data);
     }
     catch(err){
        res.status(500).send({message:err.message})
     }
 })

//  find by city
 CrudController.get('/city/:city',async(req,res)=>{
    try{
         const one_data= await CrudModel.find({city:req.params.city});
         res.status(200).send(one_data);
    }
    catch(er){
        res.status(500).send({message:er.message});
    }
 })

//  ascending order by age
 CrudController.get('/asc',async(req,res)=>{
    try{
          const data= await CrudModel.find().sort({age:1})
          res.status(500).send(data);
    }
    catch(er){
          res.status(500).send({message:er.message})
    }
 })


//  descending order
 CrudController.get('/desc',async(req,res)=>{
    try{
        const data= await CrudModel.find().sort({age:-1});
        res.status(200).send(data);
    }
    catch(er){
        res.status(500).send({message:er.message});
    }
 })

module.exports=CrudController;