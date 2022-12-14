const mongoose= require('mongoose');

const crudSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true}
})

const crudModel= mongoose.model('crud',crudSchema);

module.exports=crudModel;