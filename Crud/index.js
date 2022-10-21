const express= require('express');
const connection = require('./config');
const cors= require('cors');
const CrudController= require('./routes/crud.routes');
require('dotenv').config();

const app= express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Welcome! home!')
})
app.use('/crud',CrudController)

let PORT= process.env.PORT|| 8080;

app.listen(PORT,async()=>{
    try{
       await connection;
       console.log('connected on db');
    }
    catch(er){
     console.log(er);
    }
    console.log('Listening on port 8080');
})

