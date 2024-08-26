import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import config from '../../helper/config'; 
import { Toaster } from 'react-hot-toast'; 
import Loading from '../../components/Loading';
import { Helmet } from 'react-helmet';

const Theory = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
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
    return <Loading/>;
  }

  return (
    <>
    <Toaster/>
    <Helmet>
        <meta
          name="keywords"
          content="Theory, DSA, Array, String, Sorting, Searching, OS, DBMS, CN Notes , Free Notes"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Theory" />
        <meta
          name="description"
          content="Explore theory and topics related to Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, and more."
        />
        <title>Theory | Codesaarthi</title>
        <meta
          property="og:title"
          content="Theory | Codesaarthi"
        />
        <meta
          property="og:description"
          content="Explore theory and topics related to Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, and more."
        />
        <meta
          property="og:image"
          content="https://codesaarthi.com/img/logo.png"
        />
        <meta property="og:url" content="https://codesaarthi.com/Theory" />
        <meta property="og:type" content="Education-Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/img/favicon.ico"
          sizes="32x32"
        />
      </Helmet>
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (   
             <div key={index} className="p-4 shadow-md rounded-lg bg-gray-300 dark:bg-gray-600">
              <div className="flex items-center space-x-4">
                <img
                  src={item.thumbnailImage}
                  alt={item.title}
                  className="w-32 h-32"
                />
                <div className="flex-1">
                 <h2 className="text-lg font-bold">{item.title}</h2>
                 
                  <p>{item.description.substring(0, 100)}...</p>

                  <div className="flex justify-between">
                  <button className=' text-black dark:text-white bg-orange-500 hover:bg-orange-600 rounded-lg md:text-sm text-xs md:px-5 md:py-2.5 p-2 text-center '>Add to Read <i className='fi fi-sr-add'></i></button>
                  <Link to = {`/Theory/${item.slug}`}>     <button className='text-black dark:text-white bg-violet-500 hover:bg-violet-600 rounded-lg md:text-sm text-xs md:px-5 md:py-2.5 p-2 text-center'>Start Reading <i className='fi fi-ss-book-open-reader'></i></button></Link>
                  </div>
                  
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
