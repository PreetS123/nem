import React from 'react';
import {Routes,Route} from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { Login } from './Pages/Login';
import { Notes } from './Pages/Notes';
import { Signup } from './Pages/Signup';

export const AllRoutes = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/homepage' element={<HomePage/>} />
            <Route path='/notes' element={<Notes/>} />
        </Routes>
    </div>
  )
}
