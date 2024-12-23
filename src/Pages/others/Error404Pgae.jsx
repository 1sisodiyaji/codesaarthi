import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Error404Pgae = () => {
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="Error 404, Page Not Found, Not Found, Oops, Broken Link"
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://codesaarthi.com/*" />
        <meta
          name="description"
          content="Oops! The page you are looking for is not found. Explore other sections of our website or return to the homepage. We apologize for any inconvenience."
        />
        <title>Error 404: Page Not Found | codesaarthi</title>
        <meta
          property="og:title"
          content="Error 404: Page Not Found | codesaarthi"
        />
        <meta
          property="og:description"
          content="Oops! The page you are looking for is not found. Explore other sections of our website or return to the homepage. We apologize for any inconvenience."
        />
        <meta
          property="og:image"
          content="https://codesaarthi.com/Error404.jpg"
        />
        <meta property="og:url" content="https://codesaarthi.com/*" />
        <meta property="og:type" content="Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/favicon.ico"
          sizes="32x32"
        />
      </Helmet>
      <div className="container-fluid  mt-20 g-0 ">
        <div className="flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721032113/error404_jznaqp-removebg-preview_aedmsn.png"
            className="img-fluid "
            loading="lazy"
            title="Error page"
            alt="error page"
          />
        </div>

        <div className="">
          <h2 className="text-center">Check Out For More</h2>

          <Link
            to="/theory"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i>Theory{" "}
          </Link>
          <Link
            to="/Problems"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i>Problems
          </Link>
          <Link
            to="/Projects"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i>Projects
          </Link>
          <Link
            to="/theory/Mongo%20DB"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i>Mongo DB
          </Link>
          <Link
            to="/roadMap"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i>Roadmap
          </Link>
          <Link
            to="/theory/Express.js"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i> Express Js
          </Link>

          <Link
            to="/theory/HTML"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i>HTML{" "}
          </Link>
          <Link
            to="/theory/React"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i>React JS
          </Link>
          <Link
            to="/roadMap/Mongo%20DB"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i>Roadmap Mongo
            DB
          </Link>
          <Link
            to="/roadMap/Operating%20Systems"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i>OS Roadmap
          </Link>
          <Link
            to="/roadMap/Database%20Management%20Systems%20(DBMS)"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i>DBMS Roadmap
          </Link>
          <Link
            to="/roadMap/DSA"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i> DSA Roadmap
          </Link>

          <Link
            to="/Projects/HTML"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i>HTML Projects{" "}
          </Link>
          <Link
            to="/Projects/Clone_Html"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i>Clone
            Projects
          </Link>
          <Link
            to="/Projects/HTML_CSS"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i> html , css
            Projects
          </Link>
          <Link
            to="/news/66a2befeb90136e526a15627"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i>NEWS
          </Link>
          <Link
            to="/blog/669654c178bdb5b70a5b307f"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i> BLOGS
          </Link>
          <Link
            to="/Questions"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i> Q & A
          </Link>
          <Link
            to="/AboutUs"
            className="btn text-capitalize bg-dark text-warning m-2"
          >
            {" "}
            <i className="fi fi-rr-hand-back-point-right pe-2"></i> About Us
          </Link>
          <Link
            to="/"
            className="btn text-capitalize border border-success bg-success text-light w-full"
          >
            <i className="fi fi-rr-hand-back-point-right"></i> Go to Website{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error404Pgae;
