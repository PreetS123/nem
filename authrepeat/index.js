  const express= require('express');
  require('dotenv').config();
  const {connection}= require('./config/db');
   const UserModel= require('./models/User.model')
  const app= express();
  const jwt= require('jsonwebtoken');
  

  app.use(express.json());


     app.get('/',(req,res)=>{
        return res.send(`<a href='#'>Login via Github</a>`)
     })
     app.get('/about',(req,res)=>{
         return res.send('ABOUT PAGE');
     })
    
  app.post ('/signup',(req,res)=>{
    const {email,password,age}= req.body;
    const user= new UserModel({
        email,
        password,
        age
    })
    user.save();
    res.send('SignUp Successfull');
  })

  app.post('/login', async(req,res)=>{
    const {email,password}= req.body;
      
    const user= await UserModel.find({email,password});

    const token=jwt.sign({email:user.email,age:user.age,_id:user._id},'secret')

      if(user.length===0){
        return res.send('Invalid Credentials');
      }
      return res.send({message:'Login Successful',token:token});
  })

    app.get('/profile/:id',async(req,res)=>{
        const id= req.params.id;
        // const user_token= req.query.token;
        const user_token= req.headers.authorization.split(" ")[1]
         
    //    if(token!=12345){
    //     return res.send('Invalid User')
    //    }

        // verification of token
        jwt.verify(user_token,'secret',function(err,decoded){
            if(err){
                return res.send('Please Login Again!')
            }
            console.log(decoded);
        });
        try
        {
        const user= await UserModel.find({_id:id},{password:0,__v:0})
        return res.send(user);
        }
        catch
        {
            return res.send('No Such Data Found');
        }
    })

  app.listen(process.env.PORT,async()=>{
    try{
        await connection;
        console.log('connection established')
    }
    catch{
        console.log('error in atlas')
    }
    console.log(`Listening on ${process.env.PORT}`);
  })