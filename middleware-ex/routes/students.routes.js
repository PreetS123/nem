const {Router}= require('express');
const student= Router();


student.post('/create',(req,res)=>{
    res.send('Create')
})


student.put('/update',(req,res)=>{
   res.send('Update')
})

student.get('/get',(req,res)=>{
   res.send('Get')
})


student.delete('/delete',(req,res)=>{
   res.send('Delete')
})


 module.exports= student