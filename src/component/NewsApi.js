import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from 'react-share';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from "../config/config";

const NewsApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleContent, setVisibleContent] = useState({});
  const [likes, setLikes] = useState({});
  const [showShareOptions, setShowShareOptions] = useState({});

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/api/articlesdata`);
        console.log('Raw response data:', response.data);
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
          setError(new Error('Unexpected response format'));
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchArticles();
  }, []);
  

  const toggleContentVisibility = (index) => {
    setVisibleContent(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const handleLike = (index) => {
    setLikes(prevState => ({
      ...prevState,
      [index]: (prevState[index] || 0) + 1
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString();
  };

  const toggleShareOptions = (index) => {
    setShowShareOptions(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url);
    toast.success('Link Copy Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  if (loading) {
    return <div className='vh-100 text-warning d-flex justify-content-center align-items-center'>
      <h1> <i className="fi fi-sr-loading"></i> </h1>
    </div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <ToastContainer />
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className='card p-2 my-2' style={{ backgroundColor: '#262626', border: '1px solid #1E1E1E' }}>
            <Link to={item.url} target='_blank'> <h6 className='text-capitalize text-warning'>{item.title}</h6> </Link>
            <div className="row">
              <div className="col-6 text-start"><small className='text-muted'>  By <span className=' text-decoration-underline'>{item.author} </span> </small></div>
              <div className="col-6 text-end">
                <div> <small className='text-light text-decoration-underline'> 1 </small><i className="fi fi-rr-eyes px-1 text-warning heading1"></i>
                </div>
              </div>
            </div>
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
                  <small className='text-decoration-underline text-success'>{likes[index] || 0}</small> <i className="fi fi-rs-heart "></i>
                </div>
                <div onClick={() => toggleShareOptions(index)} style={{ cursor: 'pointer' }}>
                  <i className="fi fi-sr-share px-3 heading1 text-success"></i>
                </div>
              </div>
              <div className="col-6 text-end text-light pe-2">
                <small className='text-secondary'>{formatTime(item.publishedAt)} . {formatDate(item.publishedAt)}</small>
              </div>
            </div>
            {showShareOptions[index] && (
              <div className="share-options">
                <FacebookShareButton url={item.url}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <WhatsappShareButton url={item.url}>
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <div onClick={() => handleCopyLink(item.url)} style={{ cursor: 'pointer', display: 'inline-block', marginLeft: '10px' }}>
                  <i className="fi fi-rs-link heading1 text-success"></i>
                  <small className='text-decoration-underline text-success'>Copy Link</small>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default NewsApi;
