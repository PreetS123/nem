
const express= require('express');

const teachersRoutes= require('./routes/teachers.route');
const studentRoutes= require('./routes/students.routes');
const app= express();

// express middlewares
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))

  

app.use((req,res,next)=>{
   if(!req.query.apiKey){
      return res.status(401).send('No Api Key')
   }
   next()
   // res.send('Hello Welcome to our page')
})
app.use('/teachers',teachersRoutes);
app.use('/students',studentRoutes)




 app.listen(8000,()=>{
    console.log('ServerStarted at port 8000')
 })