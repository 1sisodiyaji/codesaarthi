import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewsApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleContent, setVisibleContent] = useState({});
  const [likes, setLikes] = useState({});

  
  const toggleContentVisibility = (index) => {
    setVisibleContent(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
  
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleTimeString(undefined, options);
  };

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://server-fl9q.onrender.com/api/articles');
      console.log('Raw response data:', response.data);  // Log the raw response data
      const articles = response.data;
      // Check if the data is an array
      if (Array.isArray(articles)) {
        // Assuming the data is already in the correct format
        setData(articles);
      } else {
        // If the data is not an array, it might be in a different format
        // Log the data to see its structure
        console.log('Invalid data format:', articles);
        // You might need to adjust this logic based on the actual structure of the data
        setError(new Error('Invalid data format'));
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  

  const handleLike = (index) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [index]: prevLikes[index] ? prevLikes[index] + 1 : 1
    }));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', overflowY: 'scroll', height: '100vh', borderBottom: '1px solid #262626' }}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className='card p-2 my-1' style={{ backgroundColor: '#262626', border: '1px solid #1E1E1E' }}>
              <Link to={item.url} target='_blank'> <h6 className='text-capitalize text-warning'>{item.title}</h6> </Link>
              <small className='text-light'>{item.description}</small>

              <button className='text-success text-decoration-underline btn text-start text-capitalize' style={{ cursor: 'pointer' }} onClick={() => toggleContentVisibility(index)}>
                {visibleContent[index] ? 'Read Less' : 'Read More'}
              </button>
              {visibleContent[index] && (
                <div className='text-light'>
                  <small>{item.content}</small>
                </div>
              )}  

              <div className='text-center'>
                {item.urlToImage ? 
                <img src={item.urlToImage} className='img-fluid' alt="" /> : 
                <img src="https://codesaarthi.com/img/logo1.jpg" className='img-fluid' alt="" />
                }
              </div>
              <div className="row my-3">
                <div className="col-6 text-light d-flex">
                  <div onClick={() => handleLike(index)} style={{ cursor: 'pointer' }}>
                    {likes[index] || 0} <i className="fi fi-rs-heart px-3"></i>
                  </div>
                  <div><i className="fi fi-rr-eyes px-3 text-warning heading3"></i></div>
                  <div><i className="fi fi-sr-share px-3 heading3 text-success"></i></div>
                </div>
                <div className="col-6 text-end text-light pe-2">
                  <small className='text-secondary'>{formatTime(item.publishedAt)} . {item.author} <br /> {formatDate(item.publishedAt)}</small>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
    </>
  );
};

export default NewsApi;
