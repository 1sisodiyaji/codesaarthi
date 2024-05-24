import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Roadmap = () => {
  const [startCard, setStartCard] = useState(0);

  const cardsData = [
    {
      title: 'DSA Roadmap',
      imageUrl: 'img/dsaRoadmap.jpg',
      link: '/roadMap/dsa',
      description: 'This is the roadmap for Data Structures and Algorithms.'
    },
    {
      title: 'OS Roadmap',
      imageUrl: 'img/OsRoadmap.jpg',
      link: '/roadMap/Os',
      description: 'This is the roadmap for Operating Systems.'
    },
    {
      title: 'DBMS Roadmap',
      imageUrl: 'img/dbmsRoadmap.jpg',
      link: '/roadMap/Dbms',
      description: 'This is the roadmap for Database Management Systems.'
    },
    {
      title: 'CN Roadmap',
      imageUrl: 'img/CNRoadmap.jpg',
      link: '/roadMap/ComputerNetwork',
      description: 'This is the roadmap for Computer Networks.'
    },
    {
      title: 'Web Development Roadmap',
      imageUrl: 'img/webDevRoadmap.jpg',
      link: '/roadMap/WebDev',
      description: 'This is the roadmap for Web Development.'
    },
    {
      title: 'Machine Learning Roadmap',
      imageUrl: 'img/mlRoadmap.jpg',
      link: '/roadMap/MachineLearning',
      description: 'This is the roadmap for Machine Learning.'
    },
    {
      title: 'AI Roadmap',
      imageUrl: 'img/aiRoadmap.jpg',
      link: '/roadMap/AI',
      description: 'This is the roadmap for Artificial Intelligence.'
    }
  ];


  const nextCards = () => {
    setStartCard((startCard + 1) % 5);
  };

  const prevCards = () => {
    setStartCard((startCard + 4) % 5);
  };

  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      let index = (startCard + i) % 7;
      cards.push(
        <div key={index} className="col">

          <div className="card border border-dark p-1" style={{ backgroundColor: '#141414' }}>

            <div className="row">
              <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
              <div className='col-8 align-self-center'><h5 className="card-title text-light">{cardsData[index].title}</h5></div>
            </div>
            <div className="container-fluid g-0 p-3" style={{ overflowY: 'auto', width: '100%', height: '400px' }}>
              <img src={cardsData[index].imageUrl} className='img-fluid h-100' alt="dsa-roadmap" style={{ boxShadow: '5px 5px 20px #703BF7' }} />
            </div>

            <div className='text-end'>
              <Link to={cardsData[index].link} className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
            </div>
          </div>

        </div>
      );
    }
    return cards;
  };

  return (
    <>
      <Helmet>
        <meta name="keywords" content="Roadmap, Study Roadmap, DSA Roadmap, OS Roadmap, DBMS Roadmap, CN Roadmap" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/roadMap" />
        <meta name="description" content="Explore comprehensive study roadmaps for Data Structures and Algorithms (DSA), Operating Systems (OS), Database Management Systems (DBMS), and Computer Networks (CN). Plan your learning journey with detailed roadmaps for each subject." />
        <title>Roadmaps: DSA, OS, DBMS, CN | codesaarthi</title>
        <meta property="og:title" content="Subject Roadmaps: DSA, OS, DBMS, CN | codesaarthi" />
        <meta property="og:description" content="Explore comprehensive study roadmaps for Data Structures and Algorithms (DSA), Operating Systems (OS), Database Management Systems (DBMS), and Computer Networks (CN). Plan your learning journey with detailed roadmaps for each subject." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/roadMap" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div className="container-fluid py-5 design d-lg-none d-md-none d-block" style={{ backgroundColor: '#1E1E1E' }}>
        <div className="row g-6">

          <div className="col-lg-3 my-2 col-12">
            <div className="card border border-dark p-1" style={{ backgroundColor: '#141414' }}>

              <div className="row">
                <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                <div className='col-8 align-self-center'><h5 className="card-title text-light">DSA Roadmap</h5></div>
              </div>
              <div className="container-fluid g-0 p-3" style={{ overflowY: 'auto', width: '100%', height: '400px' }}>
                <img src="img/dsaRoadmap.jpg" className='img-fluid h-100' alt="dsa-roadmap" style={{ boxShadow: '5px 5px 20px #703BF7' }} />
              </div>

              <div className='text-end'>
                <Link to="/dsa" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 my-2 col-12">
            <div className="card border border-dark p-1" style={{ backgroundColor: '#141414' }}>
              <div className="row">
                <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                <div className='col-8 align-self-center'><h5 className="card-title text-light">OS Roadmap</h5></div>
              </div>
              <div className="container-fluid g-0 p-3" style={{ overflowY: 'auto', width: '100%', height: '400px' }}>
                <img src="img/OsRoadmap.jpg" className='img-fluid h-100' alt="dsa-roadmap" style={{ boxShadow: '5px 5px 20px #703BF7' }} />
              </div>
              <div className='text-end'>
                <Link to="/Os" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-3 my-2 col-12">
            <div className="card border border-dark p-1" style={{ backgroundColor: '#141414' }}>
              <div className="row">
                <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                <div className='col-8 align-self-center'><h5 className="card-title text-light">DBMS Roadmap</h5></div>
              </div>
              <div className="container-fluid g-0 p-3" style={{ overflowY: 'auto', width: '100%', height: '400px' }}>
                <img src="img/dbmsRoadmap.jpg" className='img-fluid h-100' alt="dsa-roadmap" style={{ boxShadow: '5px 5px 20px #703BF7' }} />
              </div>
              <div className='text-end'>
                <Link to="/Dbms" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
              </div>

            </div>
          </div>

          <div className="col-lg-3 my-2 col-12">
            <div className="card border border-dark p-1" style={{ backgroundColor: '#141414' }}>
              <div className="row">
                <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                <div className='col-8 align-self-center'><h5 className="card-title text-light">CN Roadmap</h5></div>
              </div>
              <div className="container-fluid g-0 p-3" style={{ overflowY: 'auto', width: '100%', height: '400px' }}>
                <img src="img/CNRoadmap.jpg" className='img-fluid h-100' alt="dsa-roadmap" style={{ boxShadow: '5px 5px 20px #703BF7' }} />
              </div>
              <div className='text-end'>
                <Link to="/ComputerNetwork" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
              </div>

            </div>
          </div>

        </div>
      </div >

      {/* for larger screen  */}

      <div className="container-fluid py-5 design d-lg-block d-md-block d-none" style={{ backgroundColor: '#1E1E1E' }}>
        <div className="container py-5">
          <div className="row">
            {renderCards()}
          </div>
          <div className="row mt-3">
            <div className="col text-center">
              <button className="btn btn-primary mx-1" onClick={prevCards}>Previous</button>
              <button className="btn btn-primary mx-1" onClick={nextCards}>Next</button>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};

export default Roadmap; 