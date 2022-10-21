const express= require('express');
const cors=require('cors');
const connection= require('./config');
const CrudRouter = require('./routes/crud.route');

require('dotenv').config();

const app= express();
app.use(express.json());
app.use(cors());

app.use('/crud',CrudRouter);

 
const PORT=process.env.PORT|| 8080
app.listen(PORT,async()=>{
    try{
        await connection
        console.log('connected to db');
    }
    catch(er){
        console.log('db',er);
    }
    console.log(`Listening on ${PORT}`);
})