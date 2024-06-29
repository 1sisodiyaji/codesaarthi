import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import config from '../config/config';

const Roadmap = () => {
  const [startCard, setStartCard] = useState(0);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const response = await axios.post(`${config.BASE_URL}/Admin/getRoadmap`);
        setCardsData(response.data);
      } catch (error) {
        console.error("Error fetching roadmap:", error);
      }
    };
    fetchRoadmap();
  }, []);

  const nextCards = () => {
    if (cardsData.length > 0) {
      setStartCard((startCard + 1) % cardsData.length);
    }
  };

  const prevCards = () => {
    if (cardsData.length > 0) {
      setStartCard((startCard + cardsData.length - 1) % cardsData.length);
    }
  };

  const renderCards = () => {
    return cardsData.map((card, index) => (
      <div key={index} className="col-lg-4 col-12">
        <div className="card border border-dark p-1" style={{ backgroundColor: '#141414' }}>
          <div className="row">
            <div className='col-4'>
              <img src="img/logo.png" className='img-fluid' alt="" />
            </div>
            <div className='col-8 align-self-center'>
              <h5 className="card-title text-light">{card.title}</h5>
            </div>
          </div>
          <div className="container-fluid g-0 p-3 text-center" style={{ overflowY: 'auto', width: '100%', height: '400px' }}>
            <img src={card.thumbnail} className='img-fluid h-75' alt={card.title}  title={card.title} loading='lazy' style={{ boxShadow: '5px 5px 20px #703BF7' }} />
          </div>
          <div className='text-end'>
            <Link to={`/roadMap/${card.title}`} className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Helmet>
        <meta name="keywords" content="Roadmap, Study Roadmap, DSA Roadmap, OS Roadmap, DBMS Roadmap, CN Roadmap" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/roadMap" />
        <meta name="description" content="Explore comprehensive study roadmaps for Data Structures and Algorithms (DSA), Operating Systems (OS), Database Management Systems (DBMS), and Computer Networks (CN). Plan your learning journey with detailed roadmaps for each subject." />
        <title>Roadmaps: DSA, OS, DBMS, CN, Java, Javascript, Python | codesaarthi</title>
        <meta property="og:title" content="Subject Roadmaps: DSA, OS, DBMS, CN, Java, Javascript, Python | codesaarthi" />
        <meta property="og:description" content="Explore comprehensive study roadmaps for Data Structures and Algorithms (DSA), Operating Systems (OS), Database Management Systems (DBMS), and Computer Networks (CN). Plan your learning journey with detailed roadmaps for each subject." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/roadMap" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div className="container-fluid py-5 design d-lg-none d-md-none d-block">
        <div className="row g-6">
          {renderCards()}
          <div className="row my-2">
            <div className="col-6 text-start">
              <div className="ms-2" onClick={prevCards}>
                <i className="fi fi-sr-angle-circle-left  " style={{ fontSize: '2rem', cursor: 'pointer' }}></i>
              </div>
            </div>
            <div className="col-6 text-end">
              <div className="mx-1" onClick={nextCards}>
                <i className="fi fi-sr-angle-circle-right  " style={{ fontSize: '2rem', cursor: 'pointer' }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for larger screen */}
      <div className="container-fluid py-5 design d-lg-block d-md-block d-none">
        <div className="container py-5">
          <div className="row">
            <div className="col-1 d-flex justify-content-center align-items-center">
              <div className="mx-1" onClick={prevCards}>
                <i className="fi fi-sr-angle-circle-left " style={{ fontSize: '2rem', cursor: 'pointer' }}></i>
              </div>
            </div>
            <div className="col-10">
              <div className="row">
                {renderCards()}
              </div>
            </div>
            <div className="col-1 d-flex justify-content-center align-items-center">
              <div className="mx-1" onClick={nextCards}>
                <i className="fi fi-sr-angle-circle-right  " style={{ fontSize: '2rem', cursor: 'pointer' }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
