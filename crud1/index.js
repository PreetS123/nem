const express=require('express');
require('dotenv').config();
const cors=require('cors');
const connection= require('./config');
const CrudRouter = require('./Routes/Crud.routes');

const app= express();
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('WELCOME TO THE WORLD OF CRUD LAND')
})
app.use('/crud',CrudRouter)


const PORT= process.env.PORT || 8080;

app.listen(PORT,async()=>{
    try{
        await connection;

    }catch(er){
        console.log('chk config',er);
    }
    console.log(`Listening on port ${PORT}`)
})

