import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="container-fluid design" style={{ minHeight: "100vh" }}>
        <div className="row py-5 g-6">

          <div className="col-lg-3 my-2 col-12">
            <div class="card border p-3" style={{ backgroundColor: "#6aa1b4" }}>
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div className="row">
                  <div className="col-4 d-flex ">
                    <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" className="img-fluid " style={{borderRadius:'50%'}} />
                  </div>
                  <div className="col-8 align-self-center">
                    <div>
                      <h5 class="card-title text-light">
                        Web Development / clone Projects
                      </h5>
                    </div>

                    <div>
                      <Link to="/web-development">
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

          <div className="col-lg-3 my-2 col-12">
            <div class="card border p-3" style={{ backgroundColor: "#6aa1b4" }}>
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div className="row">
                  <div className="col-4">
                    <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" class="img-fluid" style={{borderRadius: '50%'}} />
                  </div>
                  <div className="col-8 align-self-center">
                    <div>
                      <h5 class="card-title text-light">React Projects</h5>
                    </div>

                    <div>
                      <Link to="/React-based-project">
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

          <div className="col-lg-3 my-2 col-12">
            <div class="card border p-3" style={{ backgroundColor: "#6aa1b4" }}>
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div className="row">
                  <div className="col-4">
                    <img src="../img/logo.png" class="img-fluid" />
                  </div>
                  <div className="col-8 align-self-center">
                    <div>
                      <h5 class="card-title text-light">Php Projects</h5>
                    </div>

                    <div>
                      <Link to="/dsa">
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

          <div className="col-lg-3 my-2 col-12">
            <div class="card border p-3" style={{ backgroundColor: "#6aa1b4" }}>
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div className="row">
                  <div className="col-4">
                    <img src="../img/logo.png" class="img-fluid" />
                  </div>
                  <div className="col-8 align-self-center">
                    <div>
                      <h5 class="card-title text-light">Java Projects</h5>
                    </div>

                    <div>
                      <Link to="/dsa">
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

          <div className="col-lg-3 my-2 col-12">
            <div class="card border p-3" style={{ backgroundColor: "#6aa1b4" }}>
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div className="row">
                  <div className="col-4">
                    <img src="../img/logo.png" class="img-fluid" />
                  </div>
                  <div className="col-8 align-self-center">
                    <div>
                      <h5 class="card-title text-light">Html Projects</h5>
                    </div>

                    <div>
                      <Link to="/dsa">
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

          <div className="col-lg-3 my-2 col-12">
            <div class="card border p-3" style={{ backgroundColor: "#6aa1b4" }}>
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div className="row">
                  <div className="col-4">
                    <img src="../img/logo.png" class="img-fluid" />
                  </div>
                  <div className="col-8 align-self-center">
                    <div>
                      <h5 class="card-title text-light">Html , Css Projects</h5>
                    </div>

                    <div>
                      <Link to="/dsa">
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

          <div className="col-lg-3 my-2 col-12">
            <div class="card border p-3" style={{ backgroundColor: "#6aa1b4" }}>
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <div className="row">
                  <div className="col-4">
                    <img src="../img/logo.png" class="img-fluid" />
                  </div>
                  <div className="col-8 align-self-center">
                    <div>
                      <h5 class="card-title text-light">
                        Html Css Js Projects
                      </h5>
                    </div>

                    <div>
                      <Link to="/dsa">
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
    </>
  );
};

export default Projects;
