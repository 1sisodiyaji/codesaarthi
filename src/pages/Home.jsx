import React ,{useState}from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import "../App.css";
import { Helmet } from "react-helmet";
import NewsApi from "../component/NewsApi";
import Profile from "./Profile";
import Jobs from "../component/Jobs";
import Blogs from "../component/Blogs";

const Home = () => {
  const Username = localStorage.getItem("user_email");
  const [content, setContent] = useState('news');

  const renderContent = () => {
    switch (content) {
      case 'jobs':
        return <Jobs />;
        case 'profile':
          return <Profile />;
      case 'blogs':
        return <Blogs />;
      case 'news':
      default:
        return <NewsApi />;
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
        style={{ backgroundColor: "#1E1E1E" }}
      >
        {!Username ? (
          <>
            <div className="row w-100 py-lg-4 py-2">
              <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
                <div className=" text-light">
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
                      style={{ backgroundColor: "purple" }}
                    >
                      Start Your Journey
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <img
                  src="img/HeroImage.png"
                  className="img-fluid"
                  alt="laptop view image"
                />
              </div>
            </div>

            <div className="row py-lg-5">
              <div className="col-lg-4 col-0 d-lg-block d-none">
                <img
                  src="img/Rectangle1.png"
                  className="img-fluid"
                  style={{ marginTop: "-32vh", marginLeft: "22vw" }}
                  alt=""
                />
                <img
                  src="img/Rectangle2.png"
                  className="img-fluid"
                  style={{ marginTop: "12vh", marginLeft: "4vw" }}
                  alt=""
                />
              </div>
              <div className="col-lg-5 col-12  align-self-end">
                <h1 className="text-light heading">
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
                <img src="img/Rectangle3.png" className="img-fluid" alt="" />
              </div>
            </div>

            {/* cards Desing  */}
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-12 my-2">
                  <div className="card p-3" style={{ backgroundColor: "#262626" }}>
                    <Link to="/Projects/web-development">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right"
                          style={{ color: "#703BF7" }}
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="img/clone1.png" className="img-fluid" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title text-center text-light">
                        Clone projects
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 my-2">
                  <div className="card p-3" style={{ backgroundColor: "#262626" }}>
                    <Link to="/Projects/React-based-project">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right"
                          style={{ color: "#703BF7" }}
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="img/React1.png" className="img-fluid" />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center text-light">
                        React Js projects
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 my-2">
                  <div className="card p-3" style={{ backgroundColor: "#262626" }}>
                    <Link to="/Projects/phpProjects">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right"
                          style={{ color: "#703BF7" }}
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="img/php1.png" className="img-fluid" />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center text-light">
                        Php projects
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 my-2">
                  <div className="card p-3" style={{ backgroundColor: "#262626" }}>
                    <Link to="/Projects/java-Projects">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right"
                          style={{ color: "#703BF7" }}
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="img/java1.png" className="img-fluid" />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center text-light">
                        Java projects
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 my-2">
                  <div className="card p-3" style={{ backgroundColor: "#262626" }}>
                    <Link to="/Projects/HtmlProject">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right"
                          style={{ color: "#703BF7" }}
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="img/html1.png" className="img-fluid" />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center text-light">
                        Html projects
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-12 my-2">
                  <div className="card p-3" style={{ backgroundColor: "#262626" }}>
                    <Link to="/Projects">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right"
                          style={{ color: "#703BF7" }}
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="img/htmlcssjs1.png" className="img-fluid" />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center text-light">
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
                  src="img/Rectangle1.png"
                  className="img-fluid"
                  style={{ marginTop: "7vh", marginLeft: "20vw" }}
                  alt=""
                />
                <img
                  src="img/Rectangle2.png"
                  className="img-fluid"
                  style={{ marginTop: "7vh", marginLeft: "2vw" }}
                  alt=""
                />
              </div>
              <div className="col-lg-4 col-12 align-self-end">
                <h2 className="text-light text-center">
                  Premium Notes Tailored for You
                </h2>
                <p className="text-center" style={{ color: "#999999" }}>
                  Discover Top-Notch Study Materials Crafted with Excellence
                </p>
              </div>
              <div className="col-lg-4 d-lg-block d-none">
                <img
                  src="img/Rectangle1.png"
                  className="img-fluid"
                  style={{ marginTop: "-47vh", marginLeft: "-2vw" }}
                  alt="Rectangle1.png "
                />
                <img
                  src="img/Rectangle1.png"
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
                  <div className="card p-3" style={{ backgroundColor: "#262626" }}>
                    <Link to="/theory/Os-Content">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right"
                          style={{ color: "#703BF7" }}
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="img/Text.png" className="img-fluid" />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center text-light">
                        Operating System Notes
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-12 my-2">
                  <div className="card p-3" style={{ backgroundColor: "#262626" }}>
                    <Link to="/theory/React-Content">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right"
                          style={{ color: "#703BF7" }}
                        ></i>
                      </div>
                    </Link>
                    <div className="bg-image hover-overlay ripple text-center">
                      <img src="img/React1.png" className="img-fluid" />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center text-light">
                        React Notes
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-lg-5 col-12 my-2">
                  <div className="card p-3" style={{ backgroundColor: "#262626" }}>
                    <Link to="/theory/array">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right"
                          style={{ color: "#703BF7" }}
                        ></i>
                      </div>
                    </Link>
                    <div className=" hover-overlay ripple text-center">
                      <img
                        src="img/javaNotes.png"
                        className="img-fluid"
                        style={{ height: "12vh" }}
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center text-light">
                        Arrays in short
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-12 my-2">
                  <div className="card p-3" style={{ backgroundColor: "#262626" }}>
                    <Link to="/theory/basic-Dbms">
                      <div className="text-end">
                        <i
                          className="fi fi-rs-arrow-up-right"
                          style={{ color: "#703BF7" }}
                        ></i>
                      </div>
                    </Link>
                    <div className=" hover-overlay ripple text-center">
                      <img
                        src="img/dbms1.png"
                        className="img-fluid"
                        style={{ height: "12vh" }}
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center text-light">
                        DBMS Notes
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-1"></div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container-fluid" style={{ backgroundColor: '#1E1E1E' }}>
              <div className="row g-6">
                <div className="col-lg-3 col-0 d-lg-block d-none pt-2">
                  <div className="card bg-dark text-light text-end sticky-top" style={{ top: '70px' }}>
                    <div className="p-2">
                    <p onClick={() => setContent('jobs')} className="text-light" style={{ cursor: 'pointer' }}>Jobs</p>
                    <p onClick={() => setContent('blogs')} className="text-light" style={{ cursor: 'pointer' }}>Blogs</p>
           
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12 g-0">
                {renderContent()}
                </div>

                <div className="col-lg-3 col-0 d-lg-block d-none pt-2">
                  <div className="card bg-dark text-light text-start sticky-top" style={{ top: '70px' }}>
                    <div className="p-2"> 
                    <p onClick={() => setContent('news')} className="text-light" style={{ cursor: 'pointer' }}>News</p>
                    <p onClick={() => setContent('profile')} className="text-light" style={{ cursor: 'pointer' }}>My Account</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </>
        )}
      </div>
    </>
  );
};

export default Home;
