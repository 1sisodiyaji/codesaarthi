 import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import config from "../../helper/config";
import axios from "axios";
import { Helmet } from "react-helmet";
import toast, { Toaster } from 'react-hot-toast';
import { Card } from "../../components/Card";
import BentoGridDesign from "../../components/BentoGridDesign";
import Loading from "../../components/Loading";

const SingleNews = () => {
    const { slug } = useParams();
    const [newsItem, setNewsItem] = useState([]);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchNewsItem = async () => {
          try {
            const response = await axios.get(
              `${config.BASE_URL}/article/getNewsById/${slug}`
            );
            console.log(response);
            setNewsItem(response.data[0]);
          } catch (error) {
           toast.error(error.message);
          } finally {
            setLoading(false);
          }
        };
        fetchNewsItem();
      }, [slug]);

      async function fetchNews() {
        const response = await axios.get(
          `${config.BASE_URL}/article/getLatestNews`
        );
        setNews(response.data);
      }
      useEffect(() => {
        fetchNews();
      }, [slug]);

      if (!newsItem) {
        return <div>No data found</div>;
      }

      if(loading){
        return <Loading/>
      }

  return (
    <>
    <Toaster/>
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link  rel="canonical"  href={`https://codesaarthi.com/news/${newsItem.slug}`} />
        <meta name="description" content={newsItem.description} />
        <title>{newsItem.title}</title>
        <meta property="og:title" content={newsItem.title} />
        <meta property="og:description" content={newsItem.description} />
        <meta property="og:image" content={newsItem.urlToImage} />
        <meta  property="og:url"  content={`https://codesaarthi.com/blog/${newsItem.slug}`} />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href={newsItem.urlToImage} sizes="32x32" />
      </Helmet>

      <div className="bg-slate-100 dark:bg-gray-950 min-h-screen py-12">
       
       <Card
       title= {newsItem.title}
       slug = {newsItem.slug}
       image  = {newsItem.urlToImage} 
       description = {newsItem.description}
       content={ newsItem.content}
       url = {newsItem.url}
       publishedAt = {newsItem.publishedAt}
       Author={ newsItem.author}
       SourceName = {newsItem.source ? newsItem.source.name : 'Codesaarthi'}
       />
       

    <BentoGridDesign data={news}  />

      </div> 
    </>
  )
}

export default SingleNews