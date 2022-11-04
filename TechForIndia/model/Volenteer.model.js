const mongoose= require('mongoose');

const volenteerSchema=mongoose.Schema({
  mob_no:{type:Number,required:true},
  location:{type:String,required:true},
  language:{type:String,required:true},
  available:{type:String,required:true}
})

const volenteerModel= mongoose.model('volenteer',volenteerSchema);


module.exports=volenteerModel;