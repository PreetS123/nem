const mongoose= require('mongoose');


const authSchema= mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,default:'customer'}
})

const authModel= mongoose.model('auth',authSchema);

module.exports=authModel;