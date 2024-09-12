import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import Navbar from '../Components/Navbar';
const Routess = () => {
  return (
   <>
    <Navbar/>
    
   <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>
   
   </>
  )
}

export default Routess 
