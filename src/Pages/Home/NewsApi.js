import React, { useState, useEffect, useRef } from 'react'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from 'react-share';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Config from '../../config/config';
import { Helmet } from "react-helmet";
import Loading from '../../component/Loading';
import TimeConverter from '../../config/TimeConverter'; 

const NewsApi = () => {
  const [data, setData] = useState([]); // All articles
  const [currentBatch, setCurrentBatch] = useState([]); // Articles to display
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleContent, setVisibleContent] = useState({});
  const [showShareOptions, setShowShareOptions] = useState({});
  const [nextBatchIndex, setNextBatchIndex] = useState(0);
  const loadMoreRef = useRef(null);
 
  

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try { 
        const response = await axios.post(`${Config.BASE_URL}/article/getNews`);
 
        let News = response.data;
        if (Array.isArray(News)) {
          setData(News);
          loadNextBatch(News, 0);
          setLoading(false);
        } else {
          throw new Error('Fetched data is not an array');
          
        }
      } catch (error) {
        console.error('Error setting articles:', error);
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          handleLoadMore();
        }
      });
    }, {
      threshold: 1.0
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loadMoreRef.current, nextBatchIndex, data]);

  const loadNextBatch = (articles, startIndex) => {
    const batch = getRandomArticles(articles, 15, startIndex);
    setCurrentBatch(prevBatch => [...prevBatch, ...batch]);
    setNextBatchIndex(prevIndex => prevIndex + 15);
  };

  const getRandomArticles = (articles, count, startIndex) => {
    const shuffled = articles.slice(startIndex).sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const toggleContentVisibility = (index) => {
    setVisibleContent(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };


  const toggleShareOptions = (index) => {
    setShowShareOptions(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url);
    toast.success('Link Copied Successfully!', {
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

  const handleLoadMore = () => {
    loadNextBatch(data, nextBatchIndex);
  };

  if (loading) {
    return (
     <Loading message="laoding" />
    );
  }

  if (error) {
    return <div className='vh-100 text-center'> {error.message}</div>;
  }

  return (
    <>
      <ToastContainer />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href= {`https://codesaarthi.com/news`} />
        <meta name="description" content= "See whats going around you through our news feature sharing the valuable information to your friends"/>
        <title>News | Codesaarthi</title>
        <meta property="og:title" content= "News | Codesaarthi" />
        <meta property="og:description" content= "See whats going around you through our news feature sharing the valuable information to your friends" />
        <meta  property="og:image" content= "https://codesaarthi.com/img/logo.png " />
        <meta property="og:url" content= {`https://codesaarthi.com/news`} />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href= "https://codesaarthi.com/img/favicon.ico" sizes="32x32"/>
      </Helmet>
      <div>
        {Array.isArray(currentBatch) && currentBatch.length > 0 ? (
          currentBatch.map((article, index) => (
            <div key={index} className='p-2 my-2 shadow-lg rounded-4'
            
            >
              <Link to={`/news/${article.slug}`}>
                <h5 className='text-capitalize iconColor'>{article.title}</h5>
              </Link>
              <div className="row">
                <div className="col-6 text-start">
                  <small>Author :-  <span className='text-decoration-underline'>{article.author}</span></small>
                </div>
                <div className="col-6 text-end">
                  <small>Posted By : - {article.source.name}</small>
                </div>
              </div>
              <small>{article.description}</small>
              <div 
                className=' text-decoration-underline  text-start text-capitalize' 
                style={{ cursor: 'pointer' }} 
                onClick={() => toggleContentVisibility(index)}
              >
                {visibleContent[index] ? 'Read Less' : 'Read More'}
              </div>
              {visibleContent[index] && (
                <div>
                  <small>{article.content}</small>
                </div>
              )}
              <div className='g-0'>
                <img src={article.urlToImage ? article.urlToImage : 'https://codesaarthi.com/img/logo1.jpg'} className='imageHeight w-100 ' alt={article.title}  title = {article.title} loading='lazy'/>
              </div>

              
              <div className="row my-3">
                <div className="col-6  d-flex">
                  <div onClick={() => toggleShareOptions(index)} style={{ cursor: 'pointer' }}>
                    <i className="fi fi-sr-share px-3 heading1 text-success"></i>
                  </div>
                </div>
                <div className="col-6 text-end pe-2">
                  <div className='text-sm'>  <TimeConverter date = {article.publishedAt} /> </div> 
                </div>
              </div>
              {showShareOptions[index] && (
                <div className="share-options">
                  <FacebookShareButton url={article.url}>
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                  <WhatsappShareButton url={article.url}>
                    <WhatsappIcon size={32} round={true} />
                  </WhatsappShareButton>
                  <div onClick={() => handleCopyLink(article.url)} style={{ cursor: 'pointer', display: 'inline-block', marginLeft: '10px' }}>
                    <i className="fi fi-rs-link heading1 text-success"></i>
                    <small className='text-decoration-underline text-success'>Copy Link</small>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className='vh-100 text-warning d-flex justify-content-center align-items-center'>
            <h1>No more articles to display</h1>
          </div>
        )}
      </div>
      {nextBatchIndex < data.length && (
        <div ref={loadMoreRef} className='d-flex justify-content-center my-3'>
          <button onClick={handleLoadMore} className=''> Loading ...</button>
        </div>
      )}
    </>
  );
};

export default NewsApi;
