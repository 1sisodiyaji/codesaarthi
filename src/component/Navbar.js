import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isNavLinkActive = (path) => {
    return location.pathname === path;
  };
  const location = useLocation();
  const pic = localStorage.getItem("user_ProfilePic");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_ProfilePic");
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  let userName = localStorage.getItem("user_name");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* <!-- Navbar For small screen--> */}
      <nav  className="navbar navbar-expand-lg navbar-dark fixed-top d-lg-none d-md-none d-sm-block  shadow-0"
        style={{ backgroundColor: "transparent" }}
      >
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Navbar brand --> */}
          <Link className="navbar-brand text-center" to="/">
            <img
              src="../img/logo.png"
              height="25"
              alt="Codesaarthi  Logo"
              loading="lazy"
            />
          </Link>

          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
          >
            <i className="fi fi-br-bars-staggered text-primary"></i>
          </button>
        </div>
      </nav>

      <div style={{zIndex: '99'}} 
        className={`sidebar ${
          isSidebarOpen ? "show" : ""
        } d-lg-none d-md-none d-sm-block`}
      >
        <div className="pt-5 mt-2">
          <ul className="nav flex-column text-start ms-4">
            {!userName && (
              <>
                <li className="nav-item">
                <Link
                className={`nav-link ${
                  isNavLinkActive("/signup") ? "active" : ""
                }`}
                style={{ color: "black" }}
                to="/signup"
              >
                <i className="fi fi-rs-rocket-lunch pe-2"></i>
               Create Account
              </Link>
                </li>
                <li className="nav-item">
                <Link
                className={`nav-link ${
                  isNavLinkActive("/Login") ? "active" : ""
                }`}
                style={{ color: "black" }}
                to="/Login"
              ><i className="fi fi-br-sign-in-alt pe-2"></i>
                Log in
              </Link>
                </li>
                
              </>
            )}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isNavLinkActive("/AboutUs") ? "active" : ""
                }`}
                style={{ color: "black" }}
                to="/AboutUs"
              > <i className="fi fi-sr-info pe-2"></i>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isNavLinkActive("/theory") ? "active" : ""
                }`}
                style={{ color: "black" }}
                to="/theory"
              > <i className="fi fi-rs-books pe-2"></i>
                Theory
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isNavLinkActive("/Problems") ? "active" : ""
                }`}
                style={{ color: "black" }}
                to="/Problems"
              >   <i className="fi fi-sr-interrogation pe-2"></i>
                Problems
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isNavLinkActive("/Projects") ? "active" : ""
                }`}
                style={{ color: "black" }}
                to="/Projects"
              > <i className="fi fi-sr-workflow-setting-alt pe-2"></i>
                Projects
              </Link>
            </li>
           
            
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isNavLinkActive("/roadMap") ? "active" : ""
                }`}
                style={{ color: "black" }}
                to="/roadMap"
              ><i className="fi fi-ss-road pe-2"></i>
                RoadMaps
              </Link>
            </li>
            {userName &&
            <li className="nav-item">
              <Link onClick={logout}
                className={`nav-link ${
                  isNavLinkActive("/") ? "active" : ""
                }`}
                style={{ color: "black" }}
                to="/"
              ><i className="fi fi-br-sign-in-alt pe-2"></i>
                logout
              </Link>
            </li>
}
          </ul>
        </div>
      </div>

      {/* <!-- Navbar For big screen--> */}
      <nav className="navbar navbar-expand-lg sticky sticky-top p-0 d-lg-block d-md-block d-none  shadow-6"
        style={{ zIndex: "100000!important" }}
      >
        <div
          className="container-fluid "
          style={{
            zIndex: "1000!important",
            backgroundColor: "#1E1E1E",
          }}
        >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <Link
              className="navbar-brand text-center ms-4"
              to="/"
              style={{ color: "#703BF7" }}
            >
              <h1 style={{ fontSize: "24px" }} className="mb-0 ms-2">
              Codesaarthi
              </h1>
            </Link>
            {/* Left links */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center p-1">
              <li className="nav-items">
                <Link
                  className={`nav-link ${
                    isNavLinkActive("/AboutUs") ? "active" : ""
                  }`}
                  style={{ color: "#FFFFFF" }}
                  to="/AboutUs"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  className={`nav-link ${
                    isNavLinkActive("/theory") ? "active" : ""
                  }`}
                  style={{ color: "#FFFFFF" }}
                  to="/theory"
                >
                  Theory
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  className={`nav-link ${
                    isNavLinkActive("/Problems") ? "active" : ""
                  }`}
                  style={{ color: "#FFFFFF" }}
                  to="/Problems"
                >
                  Problems
                </Link>
              </li>
             
              <li className="nav-items">
                <Link
                  className={`nav-link ${
                    isNavLinkActive("/Projects") ? "active" : ""
                  }`}
                  style={{ color: "#FFFFFF" }}
                  to="/Projects"
                >
                  Projects
                </Link>
              </li>
              
             
              <li className="nav-items">
                <Link
                  className={`nav-link ${
                    isNavLinkActive("/roadMap") ? "active" : ""
                  }`}
                  style={{ color: "#FFFFFF" }}
                  to="/roadMap"
                >
                  RoadMaps
                </Link>
              </li>
            </ul>
            {/* Left links */}
          </div>

          <div className="d-lg-block d-md-block d-none">
            {userName ? (
              <>
                <div className="d-flex align-items-center">
                  <div className="nav-item dropdown px-2">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {pic ? (
                        <>
                          <img
                            src={pic}
                            className="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                          />
                        </>
                      ) : (
                        <>
                        <div className="border border-success"> 
                          <i className="fi fi-ss-user"></i>
                          </div>
                        </>
                      )}
                    </a>

                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <Link to="/" className="dropdown-item text-danger" onClick={logout}>
                        <i className="fi fi-ss-sign-out-alt text-danger"></i>  Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/signup" className="borderColor">
                  <button className="btn btn-sm  rounded-8 text-light text-capitalize"
                  >
                    Log in
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
