import React from "react";

const Loading = ({ message }) => {
  return (
    <div className="vh-100 text-warning d-flex justify-content-center align-items-center">
      <div className="card" aria-hidden="true" style={{ width: "350px" }}>
        <div className="text-center">
          <img
            src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721031578/loader_bhnpfb.gif"
            style={{ height: "125px", width: "115px" }}
            className="card-img-top"
            alt="Loading..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a
            href="/"
            className="btn btn-secondary disabled placeholder col-12 text-capitalize"
            aria-disabled="true"
          >
            {message}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Loading;
