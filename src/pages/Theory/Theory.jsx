import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import config from '../../helper/config'; 
import { Toaster } from 'react-hot-toast'; 
const Theory = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the endpoint using axios
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/Admin/courses`);
        console.log(response)
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Toaster/>
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (   
             <div key={index} className="p-4 shadow-md rounded-lg">
              <div className="flex items-center space-x-4">
                <img
                  src={item.thumbnailImage}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div className="flex-1">
                  <Link to = {`/Theory/${item.slug}`}> <h2 className="text-lg font-bold">{item.title}</h2></Link>
                 
                  <p>{item.description.substring(0, 100)}...</p>
                </div>
              </div>
            </div>
        ))}
      </div>
    
    </div> 
    </>
  );
};

export default Theory;
