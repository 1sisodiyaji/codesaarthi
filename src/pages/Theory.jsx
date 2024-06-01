import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import HireMe from './Projects/HtmlCss/HireMe';

const Theory = () => {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="Theory, DSA, Array, String, Sorting, Searching, OS, DBMS, CN Notes , Free Notes" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/theory" />
        <meta name="description" content="Explore theory and topics related to Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, and more." />
        <title>Theory: DSA , OS, DBMS, CN | Codesaarthi</title>
        <meta property="og:title" content="Theory: DSA , OS, DBMS, CN | Codesaarthi" />
        <meta property="og:description" content="Explore theory and topics related to Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, and more." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/theory" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div className="container-fluid  py-5" style={{ minHeight: '100vh', backgroundColor: '#1E1E1E' }}>
        <div className="container">
          <div className="row g-6">

            <div className="col-lg-4 col-12 my-2 ">
              <div className="card rounded-8 cardWidth  p-4 tilt-effect bg-dark">
                <img src="../img/dsa.jpg" className="img-fluid cardImageHeight w-100 " />
                <div className="text-end text-success text-decoration-underline"> Free Course</div>
                <h4 className="card-title text-light text-center my-2">DSA Notes</h4>
                <p className='text-muted text-capitalize'>this is an brief description about array Where we where going to make you Understand Array with problems . </p>
                <Link to="/theory/array">
                  <div className="btn text-warning text-capitalize rounded-8" style={{ backgroundColor: '#262626' }}>Start Reading</div>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-2 ">
              <div className="card rounded-8 cardWidth p-4 tilt-effect bg-dark">
                <div className=" text-center"> <img src="img/dbms1.png" className="img-fluid cardImageHeight" /></div>
                <div className="text-end text-success text-decoration-underline"> Free Course</div>
                <h4 className="card-title text-light text-center my-2">DBMS Notes</h4>
                <p className='text-muted text-capitalize'>UnderStand the structure of database , sql , No sql database , data synchronize , consistency , Acid property. </p>
                <Link to="/theory/basic-Dbms">
                  <div className="btn text-warning text-capitalize rounded-8" style={{ backgroundColor: '#262626' }}>Start Reading</div>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-2">
              <div className="card rounded-8 cardWidth  p-4 tilt-effect bg-dark">
                <div className=" text-center"> <img src="img/Text.png" className="img-fluid cardImageHeight" /></div>
                <div className="text-end text-success text-decoration-underline"> Free Course</div>
                <h4 className="card-title text-light text-center my-2">OS Notes</h4>
                <p className='text-muted text-capitalize'>Learn Operating system basics , resources management , memory managemnets , Deadlocks , process threading in os . </p>
                <Link to="/theory/Os-Content">
                  <div className="btn text-warning text-capitalize rounded-8" style={{ backgroundColor: '#262626' }}>Start Reading</div>
                </Link>
              </div>
            </div>

           <div className="col-lg-4 col-12 my-2">
              <div className="card rounded-8 cardWidth  p-4 tilt-effect bg-dark">
                <img src="../img/React1.png" className="img-fluid cardImageHeight " />
                <div className="text-end text-success text-decoration-underline"> Free Course</div>
                <h4 className="card-title text-light text-center my-2">React Notes</h4>
                <p className='text-muted text-capitalize'>Learn React basics , Do projects , Understand core concepts of state and props , JSX elements , React-Seo , React Projects to practise .  </p>
                <Link to="/theory/React-Content">
                  <div className="btn text-warning text-capitalize rounded-8" style={{ backgroundColor: '#262626' }}>Start Reading</div>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-2">
              <div className="card rounded-8 cardWidth p-4 tilt-effect bg-dark">
                <div className=" text-center"> <img src="img/cnLogo.jpg" className="img-fluid cardImageHeight w-100" /></div>
                <div className="text-end text-success text-decoration-underline"> Free Course</div>
                <h4 className="card-title text-light text-center my-2">C N Notes</h4>
                <p className='text-muted text-capitalize'>KNow more about computer networks basics , connection of https request , loader and header . OSI model of commuinication and many more ... </p>
                <Link to="/theory/Cn-Content">
                  <div className="btn text-warning text-capitalize rounded-8" style={{ backgroundColor: '#262626' }}>Start Reading</div>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-12 my-2">
              <div className="card rounded-8 cardWidth p-4 tilt-effect bg-dark">
                <div className=" text-center"> <img src="img/java1.png" className="img-fluid cardImageHeight" /></div>
                <div className="text-end text-success text-decoration-underline"> Free Course</div>
                <h4 className="card-title text-light text-center my-2">Java Notes</h4>
                <p className='text-muted text-capitalize'>Lets learn Core java from scratch , its History , know more about java awt and swing package , JDBC , java webservices and many more ... </p>
                <Link to="/theory/java-learning">
                  <div className="btn text-warning text-capitalize rounded-8" style={{ backgroundColor: '#262626' }}>Start Reading</div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Theory