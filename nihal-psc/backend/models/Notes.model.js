   
   const mongoose=require('mongoose');

   const noteSchema= new mongoose.Schema({
       title:{type:String,required:true},
       note:{type:String,required:true},
       label:{type:String,required:true},
       authId:{type:String,required:true}
   })


  const noteModel= mongoose.model('note',noteSchema);

  module.exports=noteModel;