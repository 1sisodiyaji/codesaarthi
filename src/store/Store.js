import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { persistStore, persistReducer } from 'redux-persist'; 
import Cookies from 'js-cookie'; 

const cookieStorage = {
  getItem: (key) => {
    return new Promise((resolve) => {
      resolve(Cookies.get(key) || null);
    });
  },
  setItem: (key, value) => {
    return new Promise((resolve) => {
      Cookies.set(key, value, { expires: 7 }); // Set expiration to 7 days
      resolve();
    });
  },
  removeItem: (key) => {
    return new Promise((resolve) => {
      Cookies.remove(key);
      resolve();
    });
  },
};


const persistConfig = {
  key: 'root',
  storage: cookieStorage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  devTools: process.env.REACT_APP_NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
