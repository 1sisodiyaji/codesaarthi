import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import config from "../config/config";
import Cookies from 'js-cookie';

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [darkmode, setDarkmode] = useState(false);
  const [admin ,setAdmin] = useState(false);
  const isNavLinkActive = (path) => {
    return location.pathname.includes(path);
  };
  const location = useLocation(); 

  const logout = async () => {
    try { 
      const response = await axios.post(`${config.BASE_URL}/api/logout`);

      if (response.status === 200) {
        sessionStorage.removeItem('token');
        Cookies.remove("token");
        window.location.href = "/";
      } else {
        console.log('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error); 
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
     setIsSidebarOpen(false);
  }, [location.pathname]);
 
  useEffect(() => {
    const token = Cookies.get('token'); 
    const fetchUserData = async () => {
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
            const isAdmin = response.data.user.isAdmin;
            if (isAdmin) {
              setAdmin(true); 
            }
          }  
        } catch (error) {
          console.error("Error fetching user information:", error);
        }
      }
    };

    fetchUserData();
  },[]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Check local storage for dark mode preference on initial load
    const storedDarkMode = localStorage.getItem('darkmode');
    if (storedDarkMode) {
        const isDarkMode = JSON.parse(storedDarkMode);
        setDarkmode(isDarkMode);
        document.body.classList.toggle('dark-theme', isDarkMode);
    }
}, []);

useEffect(() => {
  setIsSidebarOpen(false);
}, [location]);

  const toggleDarkMode = () => {
    const isDarkMode = !darkmode;
    setDarkmode(isDarkMode);

    // Toggle dark theme class on body
    const body = document.body;
    localStorage.setItem('darkmode', JSON.stringify(isDarkMode));
    body.classList.toggle('dark-theme', isDarkMode);
};
 
  return (
    <>
      {/* <!-- Navbar For small screen--> */}
      <nav
        className="navbar navbar-expand-lg  fixed-top d-lg-none d-md-none d-sm-block  shadow-0">
        <div className="container-fluid">
          <Link className="navbar-brand text-center text-decoration-none" to="/">
            <img
              src="../img/logo.png"
              style={{borderRadius: '50%'}}
              height="25"
              title="codesaarthi"
              alt="Codesaarthi  Logo"
              loading="lazy"
            />
          </Link>
<div>
          <button  className="btn btn-sm rounded-8  me-2" onClick={toggleDarkMode} >
             <i  className="fi fi-ss-moon-stars"></i>
          </button>

          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleSidebar}
          >
            <i className="fi fi-br-bars-staggered iconColor"></i>
          </button>

          </div>
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
                <li className="nav-item ">
                  <Link
                    className={`nav-link ${
                      isNavLinkActive("/signup") ? "selected" : ""
                    }`} 
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
                to="/profile"
              >
                {" "}
                <i className="fi fi-rr-circle-user pe-2"></i>
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
                to="/roadMap"
              >
                <i className="fi fi-ss-road pe-2"></i>
                RoadMaps
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isNavLinkActive("/Gigs") ? "selected" : ""
                }`} 
                to="/Gigs"
              >
               <i className="fi fi-sr-user-headset pe-2"></i>
                Gigs
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  isNavLinkActive("/Questions") ? "selected" : ""
                }`} 
                to="/Questions"
              >
               <i className="fi fi-sr-interrogation pe-2"></i>
                Ask-freely
              </Link>
            </li>

            {admin && (
               <Link
               className={`nav-link ${
                 isNavLinkActive("/Admin") ? "selected" : ""
               }`} 
               to="/Admin"
             >
               <i className="fi fi-ss-admin-alt pe-2"></i>
               Admin
             </Link>
            )}

            {user && (
              <li className="nav-item">
                <div
                  onClick={logout} 
                >
                  <i className="fi fi-br-sign-in-alt pe-2 ms-3"></i>
                  logout
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* <!-- Navbar For big screen--> */}
      <nav
         className= "navbar navbar-expand-lg sticky sticky-top p-0 d-lg-block d-md-block d-none  shadow-6"
      >
        <div  className="container-fluid " >
          <Link
        className="navbar-brand text-center ms-4"
        to="/" 
      >
        <img src= "img/logo.png" style={{width: '35px' , borderRadius: '50%'}} alt="logo" loading="lazy"/>
        <h1 style={{ fontSize: "24px" }} className="mb-0 ms-2">
          Codesaarthi
        </h1>
      </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            
            {/* Left links */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center p-1">
              <li className="nav-items pe-2">
                <Link
                  className={`nav-link ${
                    isNavLinkActive("/AboutUs") ? "active" : ""
                  }`} 
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
                  to="/roadMap"
                >
                  RoadMaps
                </Link>
              </li>
              {admin && (
               <Link
               className={`nav-link ${
                 isNavLinkActive("/Admin") ? "active" : ""
               }`} 
               to="/Admin"
             >
              <i className="fi fi-ss-admin-alt"></i>
               Admin
             </Link>
            )}
            </ul>
            {/* Left links */}
          </div>
          <div className="d-flex">
          <button  className="btn btn-sm rounded-8  me-2" onClick={toggleDarkMode} >
             <i  className="fi fi-ss-moon-stars"></i>
          </button>
         
          <div className="d-lg-block d-md-block d-none d-flex justify-content-center align-items-center">
          

            {user ? 
              <>
                <div className="d-flex align-items-center">
                  <div
                    className="nav-item " 
                  >
                    <button className="btn btn-floating">
                      {user && user.image ? (
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
                    </button>
                  </div>
                </div>
              </>
             : 
              <>
                <Link to="/login">
                  <button className="btn btn-sm     text-capitalize">
                    Log in
                  </button>
                </Link>
              </>
            }
          </div>
          </div>
        </div>
      </nav>
    </>
  );
};
