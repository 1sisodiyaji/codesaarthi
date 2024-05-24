import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Projects = () => {
  return (
    <>
    <Helmet>
  <meta name="keywords" content="Projects, Web Development Projects, React Projects,Top 10 projects in react, Clone Projects, Coding Projects" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://codesaarthi.com/Projects" />
  <meta name="description" content="Explore a collection of diverse projects, including web development projects, React projects, clone projects, and more. Find inspiration and examples for your coding projects and learn through practical implementation." />
  <title>Projects: Web Development, React, Clones | codesaarthi</title>
  <meta property="og:title" content="Projects: Web Development, React, Clones | codesaarthi" />
  <meta property="og:description" content="Explore a collection of diverse projects, including web development projects, React projects, clone projects, and more. Find inspiration and examples for your coding projects and learn through practical implementation." />
  <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
  <meta property="og:url" content="https://codesaarthi.com/Projects" />
  <meta property="og:type" content="Portfolio-Website" />
  <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
</Helmet>

      <div className="container-fluid design" style={{ minHeight: "100vh",backgroundColor: '#1E1E1E' }}>
        <div className="container">
        <div className="row py-5 g-6">

          <div className="col-lg-4 my-2 col-12">
            <div className="card  p-3" style={{ backgroundColor: "#262626" }}>
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div className="row">
                  <div className="col-4 d-flex">
                    <img src="img/clone1.png" className="img-fluid"/>
                  </div>
                  <div className="col-8 align-self-center">
                    <div>
                      <h5 className="card-title text-light text-capitalize">
                       clone Projects
                      </h5>
                    </div>

                    <div>
                      <Link to="/Projects/web-development">
                        <div className="btn text-warning text-capitalize bg-dark">
                          Check it Out
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-2 col-12">
            <div className="card  p-3" style={{ backgroundColor: "#262626" }}>
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div className="row">
                  <div className="col-4">
                    <img src="img/React1.png" className="img-fluid"/>
                  </div>
                  <div className="col-8 align-self-center">
                    <div>
                      <h5 className="card-title text-light">React Projects</h5>
                    </div>

                    <div>
                      <Link to="/Projects/React-based-project">
                        <div className="btn text-warning text-capitalize bg-dark">
                          Check it Out
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-2 col-12">
            <div className="card  p-3" style={{ backgroundColor: "#262626" }}>
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div className="row">
                  <div className="col-4">
                    <img src="img/php1.png" className="img-fluid" />
                  
                  </div>
                  <div className="col-8 align-self-center">
                    <div>
                      <h5 className="card-title text-light">Php Projects</h5>
                    </div>

                    <div>
                      <Link to="/Projects/phpProjects">
                        <div className="btn text-warning text-capitalize bg-dark">
                          Check it Out
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-2 col-12">
            <div className="card  p-3" style={{ backgroundColor: "#262626" }}>
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div className="row">
                  <div className="col-4">
                    <img src="img/java1.png" className="img-fluid p-1" style={{borderRadius:'40%'}}/>
                  </div>
                  <div className="col-8 align-self-center">
                    <div>
                      <h5 className="card-title text-light">Java Projects</h5>
                    </div>

                    <div>
                      <Link to="/Projects/java-Projects">
                        <div className="btn text-warning text-capitalize bg-dark">
                          Check it Out
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-2 col-12">
            <div className="card  p-3" style={{ backgroundColor: "#262626" }}>
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div className="row">
                  <div className="col-4">
                    <img src="img/html1.png" className="img-fluid" />
                  </div>
                  <div className="col-8 align-self-center">
                    <div>
                      <h5 className="card-title text-light">Html Projects</h5>
                    </div>

                    <div>
                      <Link to="/Projects/HtmlProject">
                        <div className="btn text-warning text-capitalize bg-dark">
                          Check it Out
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-2 col-12">
            <div className="card p-3" style={{ backgroundColor: "#262626" }}>
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div className="row">
                  <div className="col-4">
                    <img src="img/htmlcss1.png" className="img-fluid m-2"/>
                  </div>
                  <div className="col-8 align-self-center">
                    <div>
                      <h5 className="card-title text-light">Html , Css</h5>
                    </div>

                    <div>
                      <Link to="/Projects/Html-Css-Projects">
                        <div className="btn text-warning text-capitalize bg-dark">
                          Check it Out
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-2 col-12">
            <div className="card  p-3" style={{ backgroundColor: "#262626" }}>
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div className="row">
                  <div className="col-4">
                    <img src="img/htmlcssjs1.png" className="img-fluid" />
                  </div>
                  <div className="col-8 align-self-center">
                    <div>
                      <h5 className="card-title text-light">
                        Html Css Js
                      </h5>
                    </div>

                    <div>
                      <Link to="/Projects/dsa">
                        <div className="btn text-warning text-capitalize bg-dark">
                          Check it Out
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
