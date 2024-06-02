// src/components/SaveArticles.js
import React, { useState } from 'react';
import axios from 'axios';
import Config from '../config/config';
const News = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchAndSaveArticles = async () => {
    setLoading(true);
    setMessage('');
    try {
      const response = await axios.post(`${Config.BASE_URL}/saveArticles`);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error saving articles:', error);
      setMessage('Error saving articles');
    }
    setLoading(false);
  };

  return (
    <div className='vh-100 bg-dark d-flex align-items-center justify-content-center'>
      <button onClick={fetchAndSaveArticles} disabled={loading} className=' btn text-capitalize bg-black text-warning'>
        {loading ? 'Saving Articles...' : 'Save Articles'}
      </button>
      {message && <p className='text-danger ms-4'>{message}</p>}
    </div>
  );
};

export default News;
