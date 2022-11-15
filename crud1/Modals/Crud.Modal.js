const mongoose= require('mongoose');


const crudSchema= mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const CrudModel=  mongoose.model('crud',crudSchema);


module.exports=CrudModel;