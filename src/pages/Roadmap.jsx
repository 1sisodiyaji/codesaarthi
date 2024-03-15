import React from 'react';
import { Link } from 'react-router-dom';
import Dsa from './Roadmap/Dsa';
import Os from './Roadmap/Os';
import Dbms from './Roadmap/Dbms';
import ComputerNetworks from './Roadmap/ComputerNetworks';
import { Helmet } from 'react-helmet';
const Roadmap = () => {
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

      <div className="container-fluid py-5 design">
        <div className="row g-6">

          <div className="col-lg-3 my-2 col-12">
            <div className="card border p-1" style={{ backgroundColor: '#031A33' }}>
             
                <div className="row">
                  <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                  <div className='col-8 align-self-center'><h5 className="card-title text-light">DSA Roadmap</h5></div>
                </div>
                <div className="container-fluid g-0 p-3" style={{ overflowY: 'auto', width: '100%', height: '400px'  }}>
                 <img src="img/dsaRoadmap.jpg" className='img-fluid h-100' alt="dsa-roadmap" style={{boxShadow: '5px 5px 20px #3393df'}} />
                </div>

                <div className='text-end'>
                  <Link to="/dsa" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
                </div>
            </div>
          </div>

          <div className="col-lg-3 my-2 col-12">
            <div className="card border p-1" style={{ backgroundColor: '#031A33' }}>
                <div className="row">
                  <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                  <div className='col-8 align-self-center'><h5 className="card-title text-light">OS Roadmap</h5></div>
                </div>
                <div className="container-fluid g-0 p-3" style={{ overflowY: 'auto', width: '100%', height: '400px'  }}>
                 <img src="img/OsRoadmap.jpg" className='img-fluid h-100' alt="dsa-roadmap" style={{boxShadow: '5px 5px 20px #3393df'}} />
                </div>
                <div className='text-end'>
                  <Link to="/Os" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
                </div>
            </div>
          </div>

          <div className="col-lg-3 my-2 col-12">
            <div className="card border p-1" style={{ backgroundColor: '#031A33' }}>
                <div className="row">
                  <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                  <div className='col-8 align-self-center'><h5 className="card-title text-light">DBMS Roadmap</h5></div>
                </div>
                <div className="container-fluid g-0 p-3" style={{ overflowY: 'auto', width: '100%', height: '400px'  }}>
                 <img src="img/dbmsRoadmap.jpg" className='img-fluid h-100' alt="dsa-roadmap" style={{boxShadow: '5px 5px 20px #3393df'}} />
                </div>
                <div className='text-end'>
                  <Link to="/Dbms" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
                </div>

            </div>
          </div>

          <div className="col-lg-3 my-2 col-12">
            <div className="card border p-1" style={{ backgroundColor: '#031A33' }}>
                <div className="row">
                  <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                  <div className='col-8 align-self-center'><h5 className="card-title text-light">CN Roadmap</h5></div>
                </div>
                <div className="container-fluid g-0 p-3" style={{ overflowY: 'auto', width: '100%', height: '400px'  }}>
                 <img src="img/CNRoadmap.jpg" className='img-fluid h-100' alt="dsa-roadmap" style={{boxShadow: '5px 5px 20px #3393df'}} />
                </div>
                <div className='text-end'>
                  <Link to="/ComputerNetwork" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
                </div>

            </div>
          </div>

        </div>
      </div >
    </>
  );
};

export default Roadmap;
