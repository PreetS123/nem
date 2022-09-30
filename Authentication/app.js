const express= require('express');
const jwt= require('jsonwebtoken');
const {connection}= require('./config');
const UserModel= require('./models/User.model')

const app= express();

app.use(express.json());


app.get('/',(req,res)=>{
    return res.send('Welcome to learn Authentication')
})


app.post('/signup',async(req,res)=>{
    const {email,password,age}= req.body;
    const user= new UserModel({
        email,
        password,
        age
    })
      await user.save();
      return res.send('Sign Up successfull');
})


app.post('/login',async(req,res)=>{
    const {email,password}= req.body;
     const user=await UserModel.find({email,password})
     const token=jwt.sign({ email:user.email,age:user.age,_id:user._id }, 'secret');

     if(user.length===0){
        return res.send('Invalid Credentials')
     }
     else{
      return res.send({message:'login successfull',token:token});
     }
})

app.get('/profile/:id',async(req,res)=>{
    const id= req.params.id;
    // const user_token= req.query.token;// when we are getting token in api itself
    const user_token= req.headers.authorization.split(' ')[1];
    // if(Number(token)!==12345){
    //     return  res.send('Please login again')
    // }
    // id=6333926e5229780f29379819
   jwt.verify(user_token, 'secret', function(err, decoded) {
        if(err){
            return res.send('Please login again')
        }
      });
    console.log(id)
    try{
        const user= await UserModel.find({_id:id})
        return res.send(user);
    }
    catch{
            return res.send('user not found');      
    }
})



app.listen(8000,async()=>{
    try{
        await connection;
        console.log('connected to db')
    }
    catch(e){
        console.log('problem in connecting with db',e)
    }
    console.log('Listening on port 8000')
})