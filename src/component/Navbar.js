import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config/config";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const isNavLinkActive = (path) => {
    return location.pathname.includes(path);
  };
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token"); 
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
     setIsSidebarOpen(false);
  }, [location.pathname]);
 
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.post(
            `${config.BASE_URL}/api/user`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.data.status === "success") {
            setUser(response.data.user);
          } else {
            console.log("Failed to fetch user information");
          }
        } catch (error) {
          console.error("Error fetching user information:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* <!-- Navbar For small screen--> */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top d-lg-none d-md-none d-sm-block  shadow-0"
        style={{ backgroundColor: "#1E1E1E" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-center" to="/">
            <img
              src="../img/logo.png"
              height="25"
              title="codesaarthi"
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

      <div
        style={{ zIndex: "99" }}
        className={`sidebar ${
          isSidebarOpen ? "show" : ""
        } d-lg-none d-md-none d-sm-block`}
      >
        <div className="pt-5 mt-2">
          <ul className="nav flex-column text-start ms-4">
            {!user ?
              <>
                <li className="nav-item text-light">
                  <Link
                    className={`nav-link ${
                      isNavLinkActive("/signup") ? "selected" : ""
                    }`}
                    style={{ color: "whitesmoke" }}
                    to="/signup"
                  >
                    <i className="fi fi-rs-rocket-lunch pe-2"></i>
                    Create Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      isNavLinkActive("/Login") ? "selected" : ""
                    }`}
                    style={{ color: "whitesmoke" }}
                    to="/Login"
                  >
                    <i className="fi fi-br-sign-in-alt pe-2"></i>
                    Log in
                  </Link>
                </li>
              </>
            :
            <>
              <li className="nav-item">
              <Link
                className={`nav-link ${
                  isNavLinkActive("/profile") ? "selected" : ""
                }`}
                style={{ color: "whitesmoke" }}
                to="/profile"
              >
                {" "}
                <i className="fi fi-ss-user text-light pe-2"></i>
                Profile
              </Link>
            </li>
            </>
          }
          
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isNavLinkActive("/AboutUs") ? "selected" : ""
                }`}
                style={{ color: "whitesmoke" }}
                to="/AboutUs"
              >
                {" "}
                <i className="fi fi-sr-info pe-2"></i>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isNavLinkActive("/theory") ? "selected" : ""
                }`}
                style={{ color: "whitesmoke" }}
                to="/theory"
              >
                {" "}
                <i className="fi fi-rs-books pe-2"></i>
                Theory
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isNavLinkActive("/Problems") ? "selected" : ""
                }`}
                style={{ color: "whitesmoke" }}
                to="/Problems"
              >
                {" "}
                <i className="fi fi-sr-interrogation pe-2"></i>
                Problems
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isNavLinkActive("/Projects") ? "selected" : ""
                }`}
                style={{ color: "whitesmoke" }}
                to="/Projects"
              >
                {" "}
                <i className="fi fi-sr-workflow-setting-alt pe-2"></i>
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isNavLinkActive("/roadMap") ? "selected" : ""
                }`}
                style={{ color: "whitesmoke" }}
                to="/roadMap"
              >
                <i className="fi fi-ss-road pe-2"></i>
                RoadMaps
              </Link>
            </li>
            {user && (
              <li className="nav-item">
                <Link
                  onClick={logout}
                  className={`nav-link ${
                    isNavLinkActive("/") ? "selected" : ""
                  }`}
                  style={{ color: "whitesmoke" }}
                  to="/"
                >
                  <i className="fi fi-br-sign-in-alt pe-2"></i>
                  logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* <!-- Navbar For big screen--> */}
      <nav
        className="navbar navbar-expand-lg sticky sticky-top p-0 d-lg-block d-md-block d-none  shadow-6"
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
              <li className="nav-items pe-2">
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
              <li className="nav-items pe-2">
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
              <li className="nav-items pe-2">
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

              <li className="nav-items pe-2">
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

              <li className="nav-items pe-2">
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
            {user ? 
              <>
                <div className="d-flex align-items-center">
                  <div
                    className="nav-item "
                    style={{ zIndex: "9999" }}
                  >
                    <div>
                      {user ? (
                        <>
                          <Link to="/profile">
                            <img
                              src={user.image}
                              className="rounded-circle border"
                              height="28"
                              alt={user.name}
                              loading="lazy"
                            />
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link to="/profile">
                            <div className="rounded-circle pt-2">
                              <i className="fi fi-ss-user text-primary"></i>
                            </div>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </>
             : 
              <>
                <Link to="/login" className="borderColor">
                  <button className="btn btn-sm  rounded-8 text-light text-capitalize">
                    Log in
                  </button>
                </Link>
              </>
            }
          </div>
        </div>
      </nav>
    </>
  );
};
