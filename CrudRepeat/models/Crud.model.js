const mongoose= require('mongoose');
require('dotenv').config();

const crudSchema= mongoose.Schema({
  name:{type:String,required:true},
  age:{type:Number,required:true},
  course:{type:String,required:true},
  collage:{type:String,required:true},
})

const crudModel= mongoose.model('crud1',crudSchema);

module.exports= crudModel;