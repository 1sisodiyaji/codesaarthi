import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {

  const isNavLinkActive = (path) => {
    return location.pathname === path;
  };
  const location = useLocation();
  const pic = localStorage.getItem('user_ProfilePic');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user_email');
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_ProfilePic");

    navigate("/");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  let userName = localStorage.getItem("user_name");
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky sticky-top p-0"
        style={{ zIndex: "100000!important" }}
      >
        <div
          className="container-fluid "
          style={{
            zIndex: "1000!important",
            backgroundColor: "#f3f3f3",
          }}
        >
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <Link
              className="navbar-brand text-center ms-4"
              to="/"
              style={{ color: "#79b4e2" }}
            >
              <img
                src="../img/logo.png"
                height={35}
                alt=" codesaarthi Logo"
                loading="lazy"
              />
              <h1 style={{ fontSize: "24px" }} className="mb-0 ms-2">
                codesaarthi
              </h1>
            </Link>
            {/* Left links */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
              <li className="nav-items">
                <Link
                  className={`nav-link ${isNavLinkActive("/AboutUs") ? "active" : ""
                    }`}
                  style={{ color: "black" }}
                  to="/AboutUs"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  className={`nav-link ${isNavLinkActive("/theory") ? "active" : ""
                    }`}
                  style={{ color: "black" }}
                  to="/theory"
                >
                  Theory
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  className={`nav-link ${isNavLinkActive("/Problems") ? "active" : ""
                    }`}
                  style={{ color: "black" }}
                  to="/Problems"
                >
                  Problems
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  className={`nav-link ${isNavLinkActive("/contest") ? "active" : ""
                    }`}
                  style={{ color: "black" }}
                  to="/contest"
                >
                  Contests
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  className={`nav-link ${isNavLinkActive("/store") ? "active" : ""
                    }`}
                  style={{ color: "black" }}
                  to="/store"
                >
                  Store
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  className={`nav-link ${isNavLinkActive("/preparation") ? "active" : ""
                    }`}
                  style={{ color: "black" }}
                  to="/preparation"
                >
                  Preparation
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  className={`nav-link ${isNavLinkActive("/whiteboard") ? "active" : ""
                    }`}
                  style={{ color: "black" }}
                  to="/whiteboard"
                >
                  Whiteboard
                </Link>
              </li>
            </ul>
            {/* Left links */}
          </div>

          <div className="d-flex p-2">
            {userName ?
              <>
                <div className="d-flex align-items-center">
                  {/* <!-- Icon --> */}
                  <a className="text-reset me-3" href="#">
                    <i className="fi fi-ss-flame"></i>
                  </a>

                  {/* <!-- Notifications --> */}

                      <i className="fi fi-br-envelope-dot px-2"></i>
                    
                  {/* <!-- Avatar --> */}
                  <div className="nav-item dropdown px-2">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {pic ? <>
                        <img
                        src={pic}
                        className="rounded-circle"
                        height="25"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />
                      </> :
                      <>
                      
                      <i class="fi fi-ss-user"></i>
                      
                      </>}
                    </a>
                      
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                    >
                      <li>
                        <a className="dropdown-item" href="#">My profile</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">Settings</a>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item"onClick={logout}>Logout</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </> :
              <>
                <Link to="/signup" className="px-2">
                  <button className="btn rounded-9 d-lg-block d-sm-none d-none" style={{ backgroundColor: "#79b4e2" }} >
                    Get Started
                  </button>
                </Link>

                <Link to="/Login">
                  <button className="btn rounded-9" style={{ backgroundColor: "#79b4e2" }}>
                    Log in
                  </button>
                </Link>
              </>}

          </div>
        </div>
      </nav>

    </>
  );
};
