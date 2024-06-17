import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar2 = () => {
  const location = useLocation();
  const pic = localStorage.getItem("user_ProfilePic");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      {/* <!-- Navbar For small screen--> */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-bottom d-lg-none d-md-none d-sm-block  shadow-0"
        style={{ backgroundColor: "#1E1E1E" }}
      >
        <div className="container-fluid d-flex justify-content-around  align-items-center p-1">
          <Link className="text-center" style={{ fontSize: "1.4rem" }} to="/">
            {" "}
            <i className="fi fi-rr-house-window"></i>{" "}
          </Link>
          <Link
            className="text-center"
            style={{ fontSize: "1.4rem" }}
            to="/theory"
          >
            {" "}
            <i className="fi fi-rr-catalog-magazine"></i>{" "}
          </Link>
          <Link
            className="text-center"
            style={{ fontSize: "1.4rem" }}
            to="/blogs"
          >
            {" "}
            <i className="fi fi-rr-square-plus"></i>{" "}
          </Link>
          <Link
            className="text-center"
            style={{ fontSize: "1.4rem" }}
            to="/Problems"
          >
            <i className="fi fi-rr-code-simple"></i>{" "}
          </Link>
          <Link
            className="text-center"
            style={{ fontSize: "1.4rem" }}
            to="/jobs"
          >
            <i className="fi fi-br-briefcase"></i>{" "}
          </Link>
        </div>
      </nav>
    </>
  );
};
