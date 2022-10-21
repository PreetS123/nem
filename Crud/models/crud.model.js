const mongoose= require('mongoose');

const CrudSchema= new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true}
})

const CrudModel=mongoose.model('crud',CrudSchema);

module.exports=CrudModel;