const cors=require('cors');
const express= require('express');
const  connection = require('./config');

const CrudModel= require('./Modals/Crud.Modal');

const app=express();
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    console.log(req.url);
    res.send('welcome to home page');
})

 app.get('/crud',async(req,res)=>{
      try{
            const user= await CrudModel.find();
            res.status(200).send(user)
      }
      catch(er){
        res.status(500).send({message:er.message});
      }
 })

  app.post('/crud/post',async(req,res)=>{
    const {name,father,mother,city,age}= req.body;
    try{
        const user=await CrudModel.create({name,father,mother,city,age});
         await user.save();
        res.status(200).send({message:'Saved credential',user:name})

    }
    catch(er){
        res.status(500).send({message:er.message})
    }
  })
  

    app.delete('/crud/delete/:id',async(req,res)=>{
        const userId= req.params.id;
          try{
               const user= await CrudModel.findByIdAndDelete({_id:userId})
               res.send(user)
          }
          catch(er){
            res.status(500).send({message:er.message})
          }
    })

    app.put('/crud/edit/:id',async(req,res)=>{
        
        try{
               const user= await CrudModel.findByIdAndUpdate(req.params.id,req.body,{
                new:true
               })
               res.send(user)
        }
        catch(er){
            res.status(500).send({message:er.message})
        }
    })


app.listen(8080,async()=>{
    try{
        await connection;
    }
    catch(er){
        console.log('db error',er)
    }
    console.log('Listening on port 8080');
})