
 const {Router}= require('express');
 const dns= require('dns')
  const dnsRoute= Router();


  dnsRoute.post('/getmeip',(req,res)=>{
    const {website_name}=req.body;
    dns.lookup(website_name,(err,adress)=>{
        if(err){
            res.send('something went wrong')
        }
        res.send(adress)
    })
  })

  module.exports=dnsRoute