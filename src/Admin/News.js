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

  const deleteAllArticles = async () => {
    setLoading(true);
    setMessage('');
    try {
      const response = await axios.delete(`${Config.BASE_URL}/deleteAllArticles`);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error deleting articles:', error);
      setMessage('Error deleting articles');
    }
    setLoading(false);
  };

  return (
    <div className='vh-100 bg-dark d-flex align-items-center justify-content-center'>
        <div className="card bg-black p-5">
            <div className="row g-6">
                <div className="col-6 ">
                <button onClick={fetchAndSaveArticles} disabled={loading} className=' btn text-capitalize bg-black text-success rounded-8 border'>
        {loading ? 'Saving Articles...' : 'Save Articles'}
      </button>
                </div>
                <div className="col-6 ">
                <button onClick={deleteAllArticles} disabled={loading} className='btn text-capitalize bg-black text-danger border rounded-8'>
          {loading ? 'Deleting Articles...' : 'Drop Articles'}
        </button>
                </div>
    
            </div>
       

    
        <hr />
        {message && <p className='text-danger ms-4'>{message}</p>}
        </div>
      
       
    </div>
  );
};

export default News;
