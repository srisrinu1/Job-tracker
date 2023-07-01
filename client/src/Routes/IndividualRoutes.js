import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home,Register } from '../Pages';

const IndividualRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default IndividualRoutes