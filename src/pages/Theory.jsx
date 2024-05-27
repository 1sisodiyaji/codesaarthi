import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const Theory = () => {
  return (
    <>
    <Helmet>
  <meta name="keywords" content="Theory, DSA, Array, String, Sorting, Searching, OS, DBMS, CN Notes , Free Notes" />
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

      <div className="container-fluid  py-5" style={{ minHeight: '100vh' ,backgroundColor:'#1E1E1E' }}>
        <div className="container">
        <div className="row"> 
        
          <div className="col-lg-4 col-12 my-2">
            <div className="card  p-3 tilt-effect" style={{ backgroundColor: '#262626'}}>
                <div className="row">
                  <div className="col-4"  >
                    <img src="../img/Array.jpg" className="img-fluid rounded-8  " style={{height: '12vh' }}/>
                  </div>
                  <div className="col-8 align-self-center">
                    <div><h5 className="card-title text-light">Array in Short</h5></div>

                    <div><Link to="/theory/array">
                      <div className="btn text-warning text-capitalize bg-dark">Read it..</div>
                    </Link>
                    </div>

                  </div>
                </div>
              </div>
          </div>

          <div className="col-lg-4 col-12 my-2">
            <div className="card  p-3 tilt-effect" style={{ backgroundColor: '#262626'}}>
                <div className="row">
                  <div className="col-4"  >
                    <img src="img/dbms1.png" className="img-fluid rounded-8  bg-image"/>
                  </div>
                  <div className="col-8 align-self-center">
                    <div><h5 className="card-title text-light text-capitalize">Dbms Notes</h5></div>

                    <div><Link to="/theory/basic-Dbms">
                      <div className="btn text-warning text-capitalize bg-dark">Read it..</div>
                    </Link>
                    </div>

                  </div>
                </div>
              </div>
          </div>

          <div className="col-lg-4 col-12 my-2">
            <div className="card  p-3 tilt-effect" style={{ backgroundColor: '#262626'}}>
                <div className="row">
                  <div className="col-4"  >
                    <img src="img/Text.png" className="img-fluid rounded-8 bg-image"/>
                  </div>
                  <div className="col-8 align-self-center">
                    <div><h5 className="card-title text-light">Os  Notes </h5></div>

                    <div><Link to="/theory/Os-Content">
                      <div className="btn text-warning text-capitalize bg-dark">Read it..</div>
                    </Link>
                    </div>

                  </div>
                </div>
            </div>
          </div> 

          <div className="col-lg-4 col-12 my-2">
            <div className="card  p-3 tilt-effect" style={{ backgroundColor: '#262626'}}>
                <div className="row">
                  <div className="col-4"  >
                    <img src="img/React1.png" className="img-fluid bg-image rounded-8"/>
                  </div>
                  <div className="col-8 align-self-center">
                    <div><h5 className="card-title text-light">React  Notes </h5></div>

                    <div><Link to="/theory/React-Content">
                      <div className="btn text-warning text-capitalize bg-dark">Read it..</div>
                    </Link>
                    </div>

                  </div>
                </div>
            </div>
          </div> 

          <div className="col-lg-4 col-12 my-2">
            <div className="card  p-3 tilt-effect" style={{ backgroundColor: '#262626'}}>
                <div className="row">
                  <div className="col-4"  >
                    <img src="img/cnLogo.png" className="img-fluid rounded-8 bg-image"/>
                  </div>
                  <div className="col-8 align-self-center">
                    <div><h5 className="card-title text-light">CN  Notes </h5></div>

                    <div><Link to="/theory/Cn-Content">
                      <div className="btn text-warning text-capitalize bg-dark">Read it..</div>
                    </Link>
                    </div>

                  </div>
                </div>
            </div>
          </div> 
          
          <div className="col-lg-4 col-12 my-2">
            <div className="card  p-3 tilt-effect" style={{ backgroundColor: '#262626' }}>
                <div className="row">
                  <div className="col-4"  >
                    <img src="img/java1.png" className="img-fluid rounded-8 bg-image"/>
                  </div>
                  <div className="col-8 align-self-center">
                    <div><h5 className="card-title text-light">Java  Notes </h5></div>

                    <div><Link to="/theory/java-learning">
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