const mongoose = require("mongoose");

const userSchemas = new mongoose.Schema(
  {
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    token:{type:String,required:false}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const authModel= mongoose.model("user",userSchemas);

module.exports=authModel;


