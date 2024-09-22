 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../helper/config'; 
import { Toaster } from 'react-hot-toast'; 
import { Card } from '../../components/Card';
import Loading from '../../components/Loading';
import { Helmet } from 'react-helmet';


const Roadmap = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the endpoint using axios
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/Admin/getRoadmap`);
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
        <meta name="keywords" content="Roadmap, Study Roadmap, DSA Roadmap, OS Roadmap, DBMS Roadmap, CN Roadmap" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Roadmap" />
        <meta name="description" content="Explore comprehensive study roadmaps for Data Structures and Algorithms (DSA), Operating Systems (OS), Database Management Systems (DBMS), and Computer Networks (CN). Plan your learning journey with detailed roadmaps for each subject." />
        <title>Roadmaps: DSA, OS, DBMS, CN, Java, Javascript, Python | codesaarthi</title>
        <meta property="og:title" content="Subject Roadmaps: DSA, OS, DBMS, CN, Java, Javascript, Python | codesaarthi" />
        <meta property="og:description" content="Explore comprehensive study roadmaps for Data Structures and Algorithms (DSA), Operating Systems (OS), Database Management Systems (DBMS), and Computer Networks (CN). Plan your learning journey with detailed roadmaps for each subject." />
        <meta property="og:image" content="https://res.cloudinary.com/ducw7orvn/image/upload/v1720990203/logo_zdeshk.png" />
        <meta property="og:url" content="https://codesaarthi.com/Roadmap" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/favicon.ico" sizes="32x32" />
      </Helmet>
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 md:py-20">
      
      <div className="grid grid-cols-1  lg:grid-cols-3 ">
        {data.map((item, index) => (    
             <Card key={index}  title = {item.title} 
             url={item.slug} type={'Roadmap'}
             image= {item.thumbnail}  description = {item.description} 
             slug ={item.slug} publishedAt={item.createdAt}
             SourceName={'Codesaarthi'} Author={'Golu Singh'}
             />
        ))}
      </div>
    
    </div> 
    </>
  );
};

export default Roadmap;
