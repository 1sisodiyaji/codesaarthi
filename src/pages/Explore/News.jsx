import React, { useEffect, useState, useCallback } from 'react';
import { SparkleViewDesign } from '../../components/SparklesCoreDesign';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from "react-helmet";
import axios from 'axios';
import config from '../../helper/config';
import Loading from '../../components/Loading';
import BentoGridDesign from '../../components/BentoGridDesign';

const News = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Track if there's more data to load
  const [isComponentMounted, setIsComponentMounted] = useState(false);

  const fetchArticles = useCallback(async () => { // Use useCallback to memoize the function
    if (loading || !hasMore) return; // Prevent fetching if already loading or no more data

    setLoading(true);
    try { 
      const response = await axios.post(`${config.BASE_URL}/article/getNews`);
      const news = response.data;

      if (Array.isArray(news) && news.length > 0) {
        setData(prevData => [...prevData, ...news]);
        toast.success('News Powered By Codesaarthi ...!');
      } else {
        setHasMore(false); // No more data to fetch
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
      toast.error('Failed to fetch news. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore]);  

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && hasMore) {
      fetchArticles();
    }
  }, [hasMore, fetchArticles]); // Add hasMore and fetchArticles as dependencies

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); // Use handleScroll as the dependency

  useEffect(() => {
    setIsComponentMounted(true);
  }, []);


  if (loading && data.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <Toaster />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/news" />
        <meta name="description" content="See what's going around you through our news feature, sharing valuable information with your friends." />
        <title>News | Codesaarthi</title>
        <meta property="og:title" content="News | Codesaarthi" />
        <meta property="og:description" content="See what's going around you through our news feature, sharing valuable information with your friends." />
        <meta property="og:image" content="https://codesaarthi.com/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/news" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/favicon.ico" sizes="32x32" />
      </Helmet>
      <div className="bg-slate-100 dark:bg-gray-950 min-h-screen">
       {isComponentMounted && <SparkleViewDesign title="Daily Updates" />}
        <BentoGridDesign data={data} />
        {loading && <Loading />}
        {!hasMore && <p className="text-center my-4">No more news available</p>} {/* Message when no more data */}
      </div>
    </>
  );
};

export default News;
