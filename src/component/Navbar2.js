import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar2 = () => {
  const location = useLocation(); 

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      {/* <!-- Navbar For small screen--> */}
      <nav
        className="navbar navbar-expand-lg   fixed-bottom d-lg-none d-md-none d-sm-block  shadow-0"
      >
        <div className="container-fluid d-flex justify-content-around  align-items-center p-1">
          <Link className="text-center" style={{ fontSize: "1.4rem" }} to="/">
            {" "}
            <i className="fi fi-rr-house-window iconColor"></i>{" "}
          </Link>
          <Link
            className="text-center"
            style={{ fontSize: "1.4rem" }}
            to="/theory"
          >
            {" "}
            <i className="fi fi-rr-catalog-magazine iconColor"></i>{" "}
          </Link>
          <Link
            className="text-center"
            style={{ fontSize: "1.4rem" }}
            to="/blogs"
          >
            {" "}
            <i className="fi fi-rr-square-plus iconColor"></i>{" "}
          </Link>
          <Link
            className="text-center"
            style={{ fontSize: "1.4rem" }}
            to="/Problems"
          >
            <i className="fi fi-rr-code-simple iconColor"></i>{" "}
          </Link>
          <Link
            className="text-center"
            style={{ fontSize: "1.4rem" }}
            to="/jobs"
          >
            <i className="fi fi-br-briefcase iconColor"></i>{" "}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
