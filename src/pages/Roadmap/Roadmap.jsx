 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../helper/config'; 
import { Toaster } from 'react-hot-toast'; 
import { Card } from '../../components/Card';
const Roadmap = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the endpoint using axios
    const fetchData = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/Admin/getRoadmap`);
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
    <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 md:py-20">
      
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
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
