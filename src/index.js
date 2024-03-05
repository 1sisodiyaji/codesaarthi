import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import  {hydrate , render} from "react-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId= "1095610353417-7m3ijrgcftibi74skie2i7pecugk47jd.apps.googleusercontent.com">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
);


const rootElement = document.getElementById('root');
if(rootElement.hasChildNodes()){
  hydrate(App,rootElement);
}else{
  render(App,rootElement);
}