const express= require('express');
const cors= require('cors');
const connection = require('./config');
const registerUser= require('./Routes/User.routes');
require('dotenv').config();
const app= express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Welcome to Tech For India')
})
app.use('/volenteer',registerUser)

const PORT= process.env.PORT|| 8080;
 app.listen(PORT,async()=>{
    try{
        await connection;
        console.log('db connected');
    }
    catch(er){
        console.log('err in connection',er);
    }
    console.log(`Listening on port ${PORT}`)
 })


