import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../../App.css";
import { Helmet } from "react-helmet";
import NewsApi from "./NewsApi";
import Profile from "../Profile/Profile";
import Jobs from "./Jobs";
import Blogs from "./Blogs";
import Question from "./Question";
import Gigs from "./Gigs";
import { useSelector } from 'react-redux';
import SideCard from "../../component/SideCard";

const Home = () => {
  const [content, setContent] = useState('news');
  const user = useSelector((state) => state.user.user);
  const id = user && user._id;


  const renderContent = () => {
    switch (content) {
      case 'jobs':
        return <Jobs />;
      case 'profile':
        return <Profile />;
      case 'blogs':
        return <Blogs />;
      case 'news':
        return <NewsApi />;
      case 'Questions':
        return <Question />;
      case 'Gigs':
        return <Gigs />;
      default:
        return <Blogs />;
    }
  };

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="codesaarthi,code saarthi, saarthi ,dsa Question , CodeSaarthi, Code saarthi , Web Development, Coding, Programming, Interview Preparation"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/" />
        <meta
          name="description"
          content="Explore the world of coding and programming. Learn web development, prepare for interviews, and discover a variety of projects and tutorials. Start your coding journey with us!"
        />
        <title>codesaarthi | Coding and Programming Hub</title>
        <meta
          property="og:title"
          content="codesaarthi | Coding and Programming Hub"
        />
        <meta
          property="og:description"
          content="Explore the world of coding and programming. Learn web development, prepare for interviews, and discover a variety of projects and tutorials. Start your coding journey with us!"
        />
        <meta
          property="og:image"
          content="https://codesaarthi.com/img/logo.png"
        />
        <meta property="og:url" content="https://codesaarthi.com" />
        <meta property="og:type" content="Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/img/favicon.ico"
          sizes="32x32"
        />
      </Helmet>

      <div
        className="container-fluid design w-100"
        style={{ minHeight: '100vh' }}
      >
        {id ? (
          <>
            <div className="container-fluid g-0">
              <div className="row g-6">
                <div className="col-lg-3 col-0 d-lg-block d-none pt-2">
                  <div className="   sticky-top" style={{ top: '70px' }}>
                    <div className="card text-end">
                      <div className="p-2">
                        <p onClick={() => setContent('jobs')} style={{ cursor: 'pointer' }}> Jobs <i className="fi fi-sr-briefcase"></i></p>
                        <p onClick={() => setContent('blogs')} style={{ cursor: 'pointer' }}> Blogs <i className="fi fi-sr-blog-text"></i> </p>
                        <p onClick={() => setContent('Gigs')} style={{ cursor: 'pointer' }}> Gigs <i className="fi fi-sr-user-headset"></i> </p>
                      </div>
                    </div>
                    <div className="my-2">
                      <SideCard image = "https://www.hostinger.in/logo-400x400.png"  link = "https://cart.hostinger.com/pay/baa7829f-c960-400d-9b5a-66ea4084b15d?_ga=GA1.3.942352702.1711283207"  title = "Premium Web Hosting" />
                      <SideCard image = "https://www.hostinger.in/logo-400x400.png"  link = "https://cart.hostinger.com/pay/ea5eb104-4dca-4917-b6f1-96d068dacd03?_ga=GA1.3.942352702.1711283207"  title = "Business Web Hosting" />
                      <SideCard image = "https://www.hostinger.in/logo-400x400.png"  link = "https://cart.hostinger.com/pay/3bed4e71-faa7-42d7-9ea5-891019b1fd82?_ga=GA1.3.942352702.1711283207"  title = "Cloud Startup" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12 g-0">
                  {renderContent()}
                </div>

                <div className="col-lg-3 col-0 d-lg-block d-none pt-2">
                  <div className="card   text-start sticky-top" style={{ top: '70px' }}>
                    <div className="p-2">
                      <p onClick={() => setContent('news')} style={{ cursor: 'pointer' }}><i className="fi fi-rr-newspaper-open"></i> News </p>
                      <p onClick={() => setContent('Questions')} style={{ cursor: 'pointer' }}> <i className="fi fi-sr-interrogation"></i> Ask-Questions</p>
                      <p onClick={() => setContent('profile')} style={{ cursor: 'pointer' }}> <i className="fi fi-br-portrait"></i> My Account</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </>

        ) : (
          <>


            <div className="row w-100 py-lg-4 py-2">
              <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
                <div className="">
                  <h1 className="text-start">
                    Start Learning with <br />
                    <span style={{ color: "#703BF7" }}>Codesaarthi</span> <br />
                    Break Language Barriers for <br />
                    Coding
                  </h1>
                  <p style={{ color: "#999999" }}>
                    Empowering Easy Learning and Code Mastery Across <br />{" "}
                    Languages
                  </p>
                  <Link to="/signup">
                    <div
                      className="btn text-capitalize rounded-3 text-light"
                      style={{ backgroundColor: "purple", fontSize: '1rem' }}
                    >
                      Start Your Journey
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <img
                  src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994849/HeroImage_w0lwv2.png"
                  className="img-fluid"
                  loading="lazy"
                  alt="laptop view "
                />
              </div>
            </div>

            <div className="row py-lg-5">
              <div className="col-lg-4 col-0 d-lg-block d-none">
                <img
                  src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994914/Rectangle1_qbln76.png"
                  className="img-fluid"
                  style={{ marginTop: "-32vh", marginLeft: "22vw" }}
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994938/Rectangle2_ckx3bx.png"
                  className="img-fluid"
                  style={{ marginTop: "12vh", marginLeft: "4vw" }}
                  alt=""
                />
              </div>
              <div className="col-lg-5 col-12  align-self-end">
                <h1 className="heading">
                  Discover Our Tailored Projects
                </h1>
                <p
                  style={{ color: "#999999" }}
                  className="text-center heading2"
                >
                  Explore Custom-Made Solutions Designed Just for You!
                </p>
              </div>
              <div className="col-lg-3 col-0 text-end d-lg-block d-none">
                <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994988/Rectangle3_pgla2x.png" className="img-fluid" alt="" />
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-12 my-2">
                  <div className="card p-3">
                    <Link to="/Projects/web-development">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right text-light"
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995043/clone1_piecml.png" className="img-fluid" alt="clone" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title text-center ">
                        Clone projects
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 my-2">
                  <div className="card p-3">
                    <Link to="/Projects/React-based-project">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right text-light"
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995214/React1_ievzdg.png" className="img-fluid" alt="react" />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center">
                        React Js projects
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 my-2">
                  <div className="card p-3">
                    <Link to="/Projects/phpProjects">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right text-light"
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995293/php1_vgzkyn.png" className="img-fluid" alt="php" />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center">
                        Php projects
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 my-2">
                  <div className="card p-3">
                    <Link to="/Projects/java-Projects">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right text-light"
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995337/java1_qikuqa.png" className="img-fluid" alt="java" />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center">
                        Java projects
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 my-2">
                  <div className="card p-3">
                    <Link to="/Projects/HtmlProject">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right text-light"
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995414/html1_w62ewn.png" className="img-fluid" alt="html" />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center">
                        Html projects
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 my-2">
                  <div className="card p-3">
                    <Link to="/Projects">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right text-light"
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995414/htmlcssjs1_l4v56a.png" className="img-fluid" alt="html css" />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center">
                        Html , Css , Js projects
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-0 py-lg-5">
              <div className="col-lg-4 col-0 d-lg-block d-none">
                <img
                  src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994914/Rectangle1_qbln76.png"
                  className="img-fluid"
                  style={{ marginTop: "7vh", marginLeft: "20vw" }}
                  alt="designs"
                />
                <img
                  src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994938/Rectangle2_ckx3bx.png"
                  className="img-fluid"
                  style={{ marginTop: "7vh", marginLeft: "2vw" }}
                  alt="designs"
                />
              </div>
              <div className="col-lg-4 col-12 align-self-end">
                <h2 className="text-center">
                  Premium Notes Tailored for You
                </h2>
                <p className="text-center" style={{ color: "#999999" }}>
                  Discover Top-Notch Study Materials Crafted with Excellence
                </p>
              </div>
              <div className="col-lg-4 d-lg-block d-none">
                <img
                  src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994914/Rectangle1_qbln76.png"
                  className="img-fluid"
                  style={{ marginTop: "-47vh", marginLeft: "-2vw" }}
                  alt="Rectangle1.png "
                />
                <img
                  src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994914/Rectangle1_qbln76.png"
                  className="img-fluid"
                  style={{
                    marginTop: "20vh",
                    marginLeft: "15vw",
                    position: " relative",
                  }}
                  alt="Rectangle1.png "
                />
              </div>
            </div>

            <div className="container">
              <div className="row py-lg-5">
                <div className="col-1"></div>
                <div className="col-lg-5 col-12 my-2">
                  <div className="card p-3">
                    <Link to="/theory/Os-Content">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right text-light"
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995677/Text_mwaw1m.png" className="img-fluid" alt="os" />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center">
                        Operating System Notes
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-12 my-2">
                  <div className="card p-3">
                    <Link to="/theory/React-Content">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right text-light"
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995214/React1_ievzdg.png" className="img-fluid" alt="react" />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center">
                        React Notes
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-lg-5 col-12 my-2">
                  <div className="card p-3">
                    <Link to="/theory/array">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right text-light"
                        ></i>
                      </div>
                    </Link>
                    <div className=" hover-overlay ripple text-center">
                      <img
                        src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995674/javaNotes_lqenmq.png"
                        className="img-fluid"
                        alt="java"
                        style={{ height: "12vh" }}
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center">
                        Arrays in short
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-12 my-2">
                  <div className="card p-3">
                    <Link to="/theory/basic-Dbms">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right text-light"
                        ></i>
                      </div>
                    </Link>
                    <div className=" hover-overlay ripple text-center">
                      <img
                        src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995673/dbms1_exxs9f.png"
                        className="img-fluid"
                        alt="dbms"
                        style={{ height: "12vh" }}
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center">
                        DBMS Notes
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home
