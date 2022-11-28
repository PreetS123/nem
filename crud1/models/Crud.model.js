const mongoose= require('mongoose');


const crudSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:String,required:true}
})


const crudModel= mongoose.model('crud1',crudSchema);


module.exports= crudModel;