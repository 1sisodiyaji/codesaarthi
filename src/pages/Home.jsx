import React from "react";
import "../App.css";
import { Helmet } from "react-helmet";
import AboutUs from "./AboutUs";
import Theory from "./Theory";
import Projects from "./Projects";
import Problems from "./Problems";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="codesaarthi,code saarthi, saarthi ,dsa Question , CodeSaarthi, Code saarthi , Web Development, Coding, Programming, Interview Preparation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/" />
        <meta name="description" content="Explore the world of coding and programming. Learn web development, prepare for interviews, and discover a variety of projects and tutorials. Start your coding journey with us!" />
        <title>codesaarthi | Coding and Programming Hub</title>
        <meta property="og:title" content="codesaarthi | Coding and Programming Hub" />
        <meta property="og:description" content="Explore the world of coding and programming. Learn web development, prepare for interviews, and discover a variety of projects and tutorials. Start your coding journey with us!" />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/" />
        <meta property="og:type" content="Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div className="row py-5 my-3 DashImageView" style={{ minHeight: '100vh' }}>
        <div className="col-lg-6 col-12 d-flex  align-items-center ">
          <div>
            <h1 className="text-dark fw-bold">
              Get Started Your Learning Journey & <br /> With Us in simple words
            </h1>
            <h6 className="text-dark p-2">Codesaarthi is trying to help students as they can learn and code easily , Never langauage will be a barrier for learner.</h6>
            <div className="row">
              <div className="col-12 text-center">
                <Link to ="/Login" className="btn text-center border bg-dark  text-warning  p-3 text-capitalize text-center rounded-8">Start Your Journey <i class="fi fi-sr-arrow-alt-circle-right ps-2 mt-2" style={{ fontSize: '1rem' }}></i></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
          <img src="img/Home1.png" className="img-fluid" alt="" />
        </div>
      </div>

      <div className="row py-5">
        <div className="col-lg-9 col-12">
          <div className="row ">
            <h1 className="text-center  text-dark fw-bold"> Dsa Related Question , Lets Start Practising <i class="fi fi-sr-comment-code text-warning"></i></h1>
            <div className="container-lg container-fluid my-3 py-5 ">

              <div className="row g-6 p-2">

                <div className="col-lg-4 col-12 my-2 ">
                  <div class=" card  tilt-effect2 " style={{ backgroundColor: '#6aa1b4' }}>
                    <div class="card-body">
                      <h5 class="card-title">Solutions Of Top 50 Questions </h5>
                      <p class="card-text">
                        DSA on Array and Strings ...
                      </p>

                      <button type="button" class="btn btn-warning">Start Solving</button>
                    </div>
                  </div>
                </div>



                <div className="col-lg-4 col-12 my-2">
                  <div class=" card  tilt-effect2 " style={{ backgroundColor: '#6aa1b4' }}>
                    <div class="card-body">
                      <h5 class="card-title">Top Notch Notes </h5>
                      <p class="card-text">
                        Easiest Way to understand Dsa Topics
                      </p>
                      <button type="button" class="btn btn-primary">View</button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 my-2">
                  <div class="card  tilt-effect2" style={{ backgroundColor: '#6aa1b4' }}>
                    <div class="card-body">
                      <h5 class="card-title">DBMS Notes</h5>
                      <p class="card-text">
                        Learn DBMS Concepts in simple Words..
                      </p>

                      <button type="button" class="btn btn-success">Get It</button>
                    </div>
                  </div>
                </div>

              </div>

              <h3 className='text-capitalize text-dark'>Study plans </h3>
              <div className="row g-6 p-2">

                <div className="col-lg-4 col-12 my-2">
                  <div class=" card  tilt-effect2 " style={{ backgroundColor: '#6aa1b4' }}>
                    <div class="card-body">
                      <div className="row">
                        <div className="col-4">
                          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="../../img/logo.png" style={{ height: '70px' }} class="img-fluid" />
                            <a href="#!">
                              <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15' }}></div>
                            </a>
                          </div>
                        </div>
                        <div className="col-8 text-center align-self-center">
                          <h6 class="card-title">W3 SChools Solutions</h6>
                          <div className="btn bg-warning text-dark">Get It</div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 my-2 ">
                  <div class="card  tilt-effect2" style={{ backgroundColor: '#6aa1b4' }}>
                    <div class="card-body">
                      <div className="row">
                        <div className="col-4">
                          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="../../img/logo.png" style={{ height: '70px' }} class="img-fluid" />
                            <a href="#!">
                              <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15' }}></div>
                            </a>
                          </div>
                        </div>
                        <div className="col-8 text-center align-self-center">
                          <h6 class="card-title">Bit Manipulations Targetted Question</h6>
                          <div className="btn bg-warning text-dark">Get It</div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 my-2">
                  <div class=" card  tilt-effect2 " style={{ backgroundColor: '#6aa1b4' }}>
                    <div class="card-body">
                      <div className="row">
                        <div className="col-4">
                          <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="../../img/logo.png" style={{ height: '70px' }} class="img-fluid" />
                            <a href="#!">
                              <div class="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15' }}></div>
                            </a>
                          </div>
                        </div>
                        <div className="col-8 text-center align-self-center">
                          <h6 class="card-title"> 10 Pattern Questions</h6>
                          <div className="btn bg-warning text-dark">Get It</div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className="col-lg-3 d-lg-block d-none d-flex justify-content-center align-items-center">
          <img src="img/image2.png" className="img-fluid" alt="" />
        </div>
      </div>


      <div className="row py-5 ">
        <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center">
          <img src="img/girl1.png" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-9 col-12">
          <div className="row p-2">
            <h1 className="text-start  text-dark fw-bold"> Some Projects  We Made for You <i class="fi fi-sr-lightbulb-setting text-success"></i></h1>
            <Projects />
          </div>
        </div>
      </div>


      <div className="row p-2">
        <div className="col-lg-9 col-12">
          <div className="row">
            <h1 className="text-center  text-dark fw-bold"> Top Notch Notes  We Made for You <i class="fi fi-ss-journal text-warning"></i></h1>
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
          </div>
        </div>
        <div className="col-lg-3 col-12 d-flex justify-content-center align-items-center">
          <img src="img/mision1.png" className="img-fluid" alt="" />
        </div>
      </div>







      <AboutUs />

    </>
  );
};

export default Home;
