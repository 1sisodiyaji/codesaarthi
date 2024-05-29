import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleNews = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-05-26&to=2024-05-26&sortBy=popularity&apiKey=6bcf20f6a79d49b2bbeee8d4b6421245');
        setNewsItem(response.data.articles[id]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNewsItem();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (!newsItem) {
    return <div>No data found</div>;
  }

  return (
    <div className='container'>
      <h2>{newsItem.title}</h2>
      <img src={newsItem.urlToImage ? newsItem.urlToImage : "img/logo.png"} className='img-fluid' alt="news" />
      <p>{newsItem.description}</p>
      <p>{newsItem.content}</p>
      <div>
        <a href={newsItem.url} className="btn btn-primary" target='_blank' rel="noopener noreferrer">Read Full Article</a>
      </div>
    </div>
  );
};

export default SingleNews;
