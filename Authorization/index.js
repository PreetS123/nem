const express= require('express');
const cors=require('cors');
const connection= require('./config');
const authRouter= require('./routes/auth.routes');
require('dotenv').config();

const authentication=require('./middlewares/authentication');
const authorization= require('./middlewares/authorization');

const app=express();
app.use(express.json());
app.use(cors());
app.use('/auth',authRouter);


app.get('/dashboard',authentication,authorization(['admin']),(req,res)=>{
    res.send('dashboard');
  })

  
app.get('/seller',authentication,authorization(['seller','admin']),(req,res)=>{
    res.send('dashboard');
  })

const PORT= process.env.PORT|| 8080
app.listen(PORT,async()=>{
    try{
        await connection;
        console.log('connected to db')
    }catch(er){
        console.log('db connection failed')
    }
    console.log(`listening on ${PORT}`)
})