import React, { useEffect } from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';  
import { Provider, useDispatch } from 'react-redux';
import store from './store/store';
import getIdFromToken from "./config/getIdfromToken";
import { loginSuccess } from './store/actions/userAction'; // Correct import

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await getIdFromToken();
      if (user) {
        dispatch(loginSuccess(user)); // Correct action dispatch
      }
    };

    fetchUserData();
  }, [dispatch]);

  return <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="1095610353417-7m3ijrgcftibi74skie2i7pecugk47jd.apps.googleusercontent.com">
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>
);
