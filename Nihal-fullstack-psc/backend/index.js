
 const express= require('express');
 require('dotenv').config();
 const cors= require('cors');
  
   
  const app= express();
   
   app.use(express.json());
   app.use(express.urlencoded({extended:true}));
   app.use(cors({
    origin:['http://localhost:3000']
   }));

  app.get('/',(req,res)=>{
    res.send('home page');
  })


  app.listen(process.env.PORT,async()=>{
    console.log(`Listening on ${process.env.PORT}`)
  })
