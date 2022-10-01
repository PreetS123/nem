const express= require('express');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const noteModel=require('../models/Notes.model');

const NotesController= express.Router();


NotesController.post('/create',async(req,res)=>{
   const {title,note,label,authId}= req.body;
   console.log(req.body);
   const new_note= new noteModel({
    title,
    note,
    label,
    authId
   })
          await new_note.save();
     res.send({"message":"created",new_note})
    
   
})


NotesController.get('/',async(req,res)=>{
    const {authId}= req.body;
     const notes= await noteModel.find({authId});
     res.send(notes);
 })

   
   
NotesController.patch('/:noteId/edit',async(req,res)=>{
    const {noteId}= req.params;
    const {authId}= req.body;
     const note= await noteModel.findOne({_id:noteId});
     console.log(note);
     console.log(authId);
     if(note.authId===authId){
       const new_note=await noteModel.findOneAndUpdate({_id:noteId},req.body,{new:true});
       return res.send({"message":'successful',new_note})
     }
     else{
        res.send({"message":"not authorized"});
     }
    
 })
  

   
NotesController.delete('/:noteId/delete',async(req,res)=>{
    const {noteId}= req.params;
    const {authId}= req.body;
     const note= await noteModel.findOne({_id:noteId});
     console.log(note);
     console.log(authId);
     if(note.authId===authId){
         await noteModel.findOneAndDelete({_id:noteId});
       return res.send({"message":'successful delete'})
     }
     else{
        res.send({"message":"not authorized"});
     }
    
 })




module.exports= NotesController