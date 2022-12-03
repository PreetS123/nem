const express= require('express');
const cors= require('cors');
const connection= require('./config.js');

const app= express();
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('WELCOME TO CRUD OPERATION WORLD');
})






app.listen(PORT,async()=>{
    try{
        await connection;
        console.log('db connected');
    }catch(er){
        console.log('chk config',er);
    }
})