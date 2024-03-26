import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const Theory = () => {
  return (
    <>
    <Helmet>
  <meta name="keywords" content="Theory, DSA, Array, String, Sorting, Searching, OS, DBMS, CN" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://codesaarthi.com/theory" />
  <meta name="description" content="Explore theory and topics related to Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, and more." />
  <title>Theory: DSA , OS, DBMS, CN | Codesaarthi</title>
  <meta property="og:title" content="Theory: DSA , OS, DBMS, CN | Codesaarthi"/>
  <meta property="og:description" content="Explore theory and topics related to Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, and more." />
  <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
  <meta property="og:url" content="https://codesaarthi.com/theory" />
  <meta property="og:type" content="Education-Website" />
  <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
</Helmet>
      <div className="container-fluid my-5 py-5" style={{ minHeight: '100vh' }}>
        <div className="row"> 
          <div className="col-lg-4 col-12">
            <div className="card border p-3 tilt-effect" style={{ backgroundColor: '#6aa1b4' }}>
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <div className="row">
                  <div className="col-4"  >
                    <img src="../img/Array.jpg" className="img-fluid rounded-8  " style={{height: '18vh' }}/>
                  </div>
                  <div className="col-8 align-self-center">
                    <div><h5 className="card-title text-light">Array in Short</h5></div>

                    <div><Link to="/array">
                      <div className="btn text-warning text-capitalize bg-dark">Read it..</div>
                    </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="card border p-3 tilt-effect" style={{ backgroundColor: '#6aa1b4' }}>
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <div className="row">
                  <div className="col-4"  >
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-database-data-save-rack-dbms-management-44627.png?f=webp" className="img-fluid rounded-8  " style={{height: '18vh' }}/>
                  </div>
                  <div className="col-8 align-self-center">
                    <div><h5 className="card-title text-light text-capitalize">Dbms Notes</h5></div>

                    <div><Link to="/basic-Dbms">
                      <div className="btn text-warning text-capitalize bg-dark">Read it..</div>
                    </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-12">
            <div className="card border p-3 tilt-effect" style={{ backgroundColor: '#6aa1b4' }}>
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <div className="row">
                  <div className="col-4"  >
                    <img src="img/osLogo.png" className="img-fluid rounded-8" style={{height: '18vh' }}/>
                  </div>
                  <div className="col-8 align-self-center">
                    <div><h5 className="card-title text-light">Os  Notes </h5></div>

                    <div><Link to="/array">
                      <div className="btn text-warning text-capitalize bg-dark">Read it..</div>
                    </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default Theory