const mongoose= require('mongoose');

const authSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number,required:false}
})

const authModel= mongoose.model('auth1',authSchema);

module.exports=authModel;