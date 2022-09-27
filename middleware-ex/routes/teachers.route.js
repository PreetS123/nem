
  const {Router}= require('express')

  const teachers= Router()


  
teachers.post('/create',(req,res)=>{
    res.send('Create')
})


teachers.put('/update',(req,res)=>{
   res.send('Update')
})

teachers.get('/get',(req,res)=>{
   res.send('Get')
})

teachers.delete('/delete',(req,res)=>{
   res.send('Delete')
})


  module.exports=teachers