const express= require('express');
const cors=require('cors');
require('dotenv').config();
const connection= require('./config/db');
 const authController= require('./routes/auth.route');
  const notesController= require('./routes/notes.route');
  const authentication= require('./middleware/authentication');
const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

 app.get('/',(req,res)=>{
    res.send('Welcome to Authentication section')
 })
  
 app.use('/auth',authController)
 app.use(authentication)
 app.use('/notes',notesController)


 app.listen(process.env.PORT,async()=>{
    try{
          await connection;
          console.log('DB CONNECTED')
    }
    catch(e){
        console.log('Error in connection',e)
    }
    console.log(`Listening on ${process.env.PORT}`)
 })