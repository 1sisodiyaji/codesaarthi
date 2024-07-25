import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Protected(props) {
    const {Component}=props;
    const navigate=useNavigate();
    useEffect(()=>{
    let token= Cookies.get('token'); 
    if(!token){
        navigate('/login');

    }
    });
  return (
    <div>
        <Component/>
    </div>
  )
}

export default Protected;