const express= require('express');
const cors= require('cors');
const connection= require('./config.js');
const crudRouter = require('./routes/Crud.routes.js');
require('dotenv').config();

const app= express();
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('WELCOME TO CRUD OPERATION WORLD');
})

app.use('/crud',crudRouter);




const PORT= process.env.PORT|| 8080;
app.listen(PORT,async()=>{
    try{
        await connection;
        console.log('db connected');
    }catch(er){
        console.log('chk config',er);
    }
    console.log(`listening on port ${PORT}`)
})