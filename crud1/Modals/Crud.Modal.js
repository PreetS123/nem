const mongoose= require('mongoose');


const crudSchema= mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    mother:{type:String,required:true},
    city:{type:String,required:true},
    age:{type:Number,required:false}
})

const CrudModel=  mongoose.model('crud',crudSchema);


module.exports=CrudModel;