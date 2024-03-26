import React from "react";
import "../App.css";
import { Helmet } from "react-helmet";
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

      <div className="row py-5 my-5 DashImageView" style={{ minHeight: '100vh' }}>
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
          <img src="img/home1.png" className="img-fluid" alt="" />
        </div>
      </div>

<div className="d-lg-block d-md-none d-none">
      <div className="row py-5">
        <div className="col-lg-9 col-12">
          <div className="row ">
            <h1 className="text-center  text-dark fw-bold"> Dsa Related Question , Lets Start Practising <i class="fi fi-sr-comment-code text-warning"></i></h1>
            <div className="container-lg container-fluid my-3 py-5 ">

              <div className="row g-6 p-2">

               <Problems/>

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
      </div>
    </>
  );
};

export default Home;
