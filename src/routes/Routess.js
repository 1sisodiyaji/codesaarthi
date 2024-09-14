import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import Navbar from '../Components/Navbar';
import Components from '../Pages/Components';
import SingleComponenets from '../Pages/SingleComponenets';
import Docs from '../Pages/Docs';
import Tools from '../Pages/Tools';
import Store from '../Pages/Store';
const Routess = () => {
  return (
   <>
    <Navbar/>
    
   <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/components" element={<Components />} /> 
        <Route path="/components/:slug" element={<SingleComponenets />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/store" element={<Store />} /> 
    </Routes>
   
   </>
  )
}

export default Routess 
