import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SideTheory = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isNavLinkActive = (path) => {
    return location.pathname === path;
  };
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
      <button
        onClick={toggleSidebar}
        className=" navbar-toggler  shadow-0 d-lg-none  d-block"
        style={{ color: "#FFE164", fontSize: "1.8rem" }}
      >
        <i className="fi fi-br-align-justify ps-2"></i>
      </button>

      <div className="container-fluid  g-0 d-lg-none d-block">
        <div
          style={{ zIndex: "99" }}
          className={`sidebar2 ${
            isSidebarOpen ? "show" : ""
          } d-lg-none d-md-none d-sm-block`}
        >
          <Link
            to="/array"
            className={`nav-link ${isNavLinkActive("/array ") ? "active" : ""}`}
          >
            {" "}
            <p> 1. Introduction to Arrays: </p>{" "}
          </Link>

          <Link
            to="/transversing-of-array"
            className={`nav-link ${
              isNavLinkActive("/transversing-of-array ") ? "active" : ""
            }`}
          >
            {" "}
            <p> 2. Array Traversal: </p>
          </Link>
          <Link
            to="/reverse-of-array"
            className={`nav-link ${
              isNavLinkActive("/reverse-of-array ") ? "active" : ""
            }`}
          >
            <p> 3. Reversing an Array: </p>
          </Link>

          <Link
            to="/Pallindrome-in-Array"
            className={`nav-link ${isNavLinkActive("/Pallindrome-in-Array") ? "active" : ""}`}
          >
            <p> 4. Palindrome Check with Arrays: </p>
          </Link>
          <Link
            to="/Sorting-Array"
            className={`nav-link ${isNavLinkActive("/Sorting-Array") ? "active" : ""}`}
          >
            <p> 5. Sorting Arrays: </p>
          </Link>
          <Link
            to="/Searching-Array"
            className={`nav-link ${isNavLinkActive("/Searching-Array ") ? "active" : ""}`}
          >
            <p> 6. Searching in Arrays: </p>
          </Link>
          <Link
            to="/MultiDimensions-in-Array"
            className={`nav-link ${isNavLinkActive("/MultiDimensions-in-Array ") ? "active" : ""}`}
          >
            <p> 7. Multi-dimensional Arrays: </p>
          </Link>
          <Link
            to="/Dynamic-Arrays"
            className={`nav-link ${isNavLinkActive("/Dynamic-Arrays ") ? "active" : ""}`}
          >
            <p> 8. Dynamic Arrays and Lists: </p>
          </Link>
          <Link
            to="/Common-Mistakes-in-Array"
            className={`nav-link ${isNavLinkActive("/Common-Mistakes-in-Array ") ? "active" : ""}`}
          >
            <p> 9. Common Mistakes and Best Practices: </p>
          </Link>
          <Link
            to="/Challenges-And-Exercise"
            className={`nav-link ${isNavLinkActive("/array ") ? "Challenges-And-Exercise" : ""}`}
          >
            <p> 10. Challenges and Exercises: </p>
          </Link>
        </div>
      </div>

      <div className="container-fluid py-5  d-lg-block d-none">
      <Link
            to="/array"
            className={`nav-link ${isNavLinkActive("/array ") ? "active" : "text-light"}`}
          >
          {" "}
          <p> 1. Introduction to Arrays: </p>{" "}
        </Link>
        <Link
            to="/transversing-of-array"
            className={`nav-link ${
              isNavLinkActive("/transversing-of-array ") ? "active" : "text-light"
            }`}
          >
          <p> 2. Array Traversal: </p>
        </Link>
        <Link
            to="/reverse-of-array"
            className={`nav-link ${
              isNavLinkActive("/reverse-of-array ") ? "text-primary" : "text-light"
            }`}
          >
          <p> 3. Reversing an Array: </p>
        </Link>
        <Link to="/Pallindrome-in-Array" style={{ color: "white" }}>
          <p> 4. Palindrome Check with Arrays: </p>
        </Link>
        <Link to="/Sorting-Array" style={{ color: "white" }}>
          <p> 5. Sorting Arrays: </p>
        </Link>
        <Link to="/Searching-Array" style={{ color: "white" }}>
          <p> 6. Searching in Arrays: </p>
        </Link>
        <Link to="/MultiDimensions-in-Array" style={{ color: "white" }}>
          <p> 7. Multi-dimensional Arrays: </p>
        </Link>
        <Link to="/Dynamic-Arrays" style={{ color: "white" }}>
          <p> 8. Dynamic Arrays and Lists: </p>
        </Link>
        <Link to="/Common-Mistakes-in-Array" style={{ color: "white" }}>
          <p> 9. Common Mistakes and Best Practices: </p>
        </Link>
        <Link to="/Challenges-And-Exercise" style={{ color: "white" }}>
          <p> 10. Challenges and Exercises: </p>
        </Link>
      </div>
    </>
  );
};

export default SideTheory;
