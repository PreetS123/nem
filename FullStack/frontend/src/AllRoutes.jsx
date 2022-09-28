import React from 'react';
import {Routes,Route} from 'react-router-dom';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
    </div>
  )
}
