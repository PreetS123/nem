   
   const express=require('express');
   const fs= require('fs');
   

    const app= express();
    app.use(express.json());
     
    app.get('/',(req,res)=>{
      let topic= fs.readFileSync('data.txt','utf-8')
      // res.write('Welcome to home page')
      res.send(topic);
    })

     app.get('/posts',(req,res)=>{
      const rec_data= fs.readFileSync('./db.json','utf-8')

      const parsed_result= JSON.parse(rec_data)
          res.send(parsed_result.attendance)
     })

     app.post('/posts',(req,res)=>{
         const log= req.body;

         const prev_data= fs.readFileSync('./db.json','utf-8')
         const parsed_data= JSON.parse(prev_data)
         const attendance= parsed_data.attendance
         attendance.push(log)

          const latest_data= JSON.stringify(parsed_data)
          fs.writeFileSync('./db.json',latest_data,'utf-8')

          res.send(log)
     })

     app.patch('/modify',(req,res)=>{
      const {id,course}= req.body;
      fs.readFile('./db.json','utf-8',(err,data)=>{
         if(err){
            return res.send('something went wrong')
         }
         const prev_data= JSON.parse(data);
         // console.log(prev_data);
         const new_c=prev_data.attendance.map(el=>{
            if(el.id===id){
               return {...el,modify_course:course}
            }
            else{
               return el;
            }
         })
         
         prev_data.attendance=new_c
         fs.writeFileSync('./db.json',JSON.stringify(prev_data),'utf-8')
         res.send('done');
      })
         
     })

     

    app.listen(8080,()=>{
      console.log('Listening on port 8080')
    })