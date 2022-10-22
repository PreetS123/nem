const mongoose= require('mongoose');

const authSchema= mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const authModel= mongoose.model('auth2',authSchema);

module.exports=authModel;