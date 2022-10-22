const express= require('express');
const cors= require('cors');
const connection= require('./config');
const authRouter= require('./routes/auth.routes');

const app= express();
app.use(express.json());
app.use(cors());
app.use('/auth',authRouter);

const PORT=process.env.PORT||8080;

app.listen(PORT,async()=>{
    try{
        await connection;
        console.log('connected with db');
    }catch(er){
        console.log('db connection problem');
    }
    console.log(`listening on ${PORT}`)
})