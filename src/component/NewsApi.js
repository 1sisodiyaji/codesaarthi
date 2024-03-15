import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewsApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                params: {
                    country: 'in',
                    category: 'technology',
                    apiKey: '6bcf20f6a79d49b2bbeee8d4b6421245',
                },
            });
            const newsData = response.data.articles;
            console.log(newsData);
            const saveNewsResponse = await axios.post('https://codesaarthiserver.cyclic.app/api/saveNews', { newsData });
           
console.log("your resposnse is "+saveNewsResponse);
            if (saveNewsResponse.status === "success") {
                setData(saveNewsResponse.data);
            } else {
                console.error('Error saving news:', saveNewsResponse.data.error);
            }
        } catch (error) {
            throw new Error('Error fetching data:', error);
        }
    };

    const fetchAndStoreData = async () => {
        try {
            await fetchData();
            const intervalId = setInterval(fetchData, 20 * 60 * 60 * 1000);
            return () => clearInterval(intervalId);
        } catch (error) {
            console.error(error.message);
        }
    };
    fetchAndStoreData();
}, []);


  return (
    <>
      <h5 className='text-success'>Trends On Today World</h5>
      <div style={{ display: 'flex', flexWrap: 'wrap', overflowY: 'scroll', height: '100vh', borderBottom: '1px solid #FFE164' }}>
        {data ?
          <>
            {data.map(item => (
              <div key={item.id} className='card p-2 my-1' style={{ backgroundColor: '#031A33', border: '1px solid #79b4e2' }}>
                <h6 style={{ color: '#FFE164' }}>{item.title}</h6>
                <small className='text-light'>{item.description}</small>
                <div className="row">
                  <div className="col-6"><Link to={item.url} className="btn btn-sm ms-2 text-secondary border border-warning" target='blank'>Read it</Link></div>
                  <div className="col-6 text-end text-light pe-2"> <small className='text-secondary'>{item.author}</small></div>
                </div>
              </div>
            ))}
          </>
          :
          <>
            <p>No data found</p>
          </>
        }
      </div>
    </>
  );
};

export default NewsApi;
