import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SaveNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-05-26&to=2024-05-26&sortBy=popularity&apiKey=6bcf20f6a79d49b2bbeee8d4b6421245');
      setArticles(response.data.articles);
    } catch (error) {
      setError(error);
    }
  };

  const saveArticles = async () => {
    setLoading(true);
    try {
      const articlesToSave = articles.map(article => ({
        source: article.source,
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        content: article.content,
      }));

      await axios.post('http://localhost:8081/api/articles', { articles: articlesToSave });
      console.log('Articles saved successfully');
    } catch (error) {
      console.error('Error saving articles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <div className="container-fluid bg-black">
        <div className="container vh-100 d-flex justify-content-center align-items-center">
          {loading && <p className='text-warning'>Saving articles...</p>}
          {error && <p className="text-danger">Error: {error.message}</p>}
          {!loading && (
            <div className="btn  text-capitalize bg-dark text-warning" onClick={saveArticles}>
              Save Articles
            </div> 
          )}
        </div>
      </div>
    </>
  );
};

export default SaveNews;
