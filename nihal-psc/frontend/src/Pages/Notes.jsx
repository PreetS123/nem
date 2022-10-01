import React,{useState,useEffect} from 'react'

export const Notes = () => {
    const token= localStorage.getItem('token');

    const getNotes=()=>{
         fetch('http://localhost:8000/notes/',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            },
        })
      .then(r=>r.json())
      .then(r=>{
       console.log(r);
      })
      .catch(e=>console.log(e))
     
    }

    useEffect(()=>{
       getNotes()
    },[])

    if(!token){
        return <h1>Please Login Again</h1>
    }
  return (
    <div>{token}</div>
  )
}
