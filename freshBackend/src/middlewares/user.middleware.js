const jwt= require("jsonwebtoken");
require("dotenv").config();

const tokenCreated= function(id,username,email){ 
    jwt.sign(
    {
      _id: id,
      username: username,
      email: email,
    },
    process.env.SECRET_TOKEN,
    {
      expiresIn: "2h",
    }
  );
}

module.exports=tokenCreated;