import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import Navbar from '../Components/Navbar';
import Components from '../Pages/Components';
import SingleComponenets from '../Pages/SingleComponenets';
const Routess = () => {
  return (
   <>
    <Navbar/>
    
   <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<Components />} />
        <Route path="/components/:slug" element={<SingleComponenets />} />
    </Routes>
   
   </>
  )
}

export default Routess 
