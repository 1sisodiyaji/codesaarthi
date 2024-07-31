import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId= "1095610353417-7m3ijrgcftibi74skie2i7pecugk47jd.apps.googleusercontent.com">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
);
