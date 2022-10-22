const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authRouter = express.Router();
const authModel = require("../models/Auth.model");

authRouter.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
//   console.log(name,email,password)
  bcrypt.hash(password, 8, function (err, hash) {
    // Store hash in your password DB.
    if (err) {
      return res.send("something went wrong");
    }
    let auth = new authModel({
      name,
      email,
      password: hash,
    });

    auth.save();
    res.send({ message: "signup successful", auth: auth });
  });
});


authRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let auth_user = await authModel.findOne({ email:email });

  let hash = auth_user.password;

  await bcrypt.compare(password, hash, function (err, result) {
    // result == true
    if (err) {
      return res.send("Please login again");
    }
    if (result) {
      const token = jwt.sign({ email: auth_user.email, _id: auth_user._id }, "secret");
      if (!auth_user) {
        return res.send("invalid credentials");
      }
      return res.send({ message: "login successful", token: token });
    } else {
      return res.send("invalid credentials");
    }
  });
});

authRouter.get('/profile/:id',async(req,res)=>{
   let id=req.params.id;
   let token= req.headers.authorization.split(' ')[1];
   jwt.verify(token, 'secret', function(err, decoded) {
    if(err){
         return res.send('invalid credentials')
    }
    console.log(decoded) // bar
  });
  try{
     const auth_user=await authModel.find({_id:id});
     return res.send(auth_user);
  }
  catch(err){
    res.send('user not found')
  }
})


module.exports = authRouter;
