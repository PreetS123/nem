const cors=require('cors');
const express= require('express');

const app=express();
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    console.log(req.url);
    res.send('welcome to home page');
})





app.listen(8080,()=>{
    console.log('Listening on port 8080');
})