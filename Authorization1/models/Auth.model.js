const mongoose= require('mongoose');

const authSchema= mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,default:'costomer'},
})

const authModel= mongoose.model('auth1',authSchema);


module.exports=authModel;