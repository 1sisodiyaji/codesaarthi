import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import 'react-toastify/dist/ReactToastify.css';
import CourseData from '../../data/Course';

const Theory = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(CourseData);
  }, []);

  if (!courses.length) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721031578/loader_bhnpfb.gif" alt="Loading" loading='lazy' />;
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta name="keywords" content="Theory, DSA, Array, String, Sorting, Searching, OS, DBMS, CN Notes , Free Notes" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/theory" />
        <meta name="description" content="Explore theory and topics related to Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, and more." />
        <title>Theory: DSA , OS, DBMS, CN | Codesaarthi</title>
        <meta property="og:title" content="Theory: DSA , OS, DBMS, CN | Codesaarthi" />
        <meta property="og:description" content="Explore theory and topics related to Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, and more." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/theory" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div className="container-fluid py-5" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div className="row g-6">
            <>
            {Array.isArray(courses) && courses.map(course => (
        <div key={course.id} className="col-lg-4 col-12 my-2">
          <div className="card rounded-8 p-lg-4 p-4">
            <div className="text-center">
              <img 
                src={course.thumbnailImage} 
                className="img-fluid courseImage text-light" 
                loading="lazy" 
                title={course.title} 
                alt={course.title} 
              />
            </div>
            <div className="text-end text-success text-decoration-underline">
              <small>Free Course</small>
            </div>
            <h5 className="card-title text-light text-center my-2">{course.title}</h5>
            <small className="text-capitalize my-1">{course.description}</small>
            <div className="row my-2">
              <div className="col-6">
                <div className="btn btn-sm rounded-8 text-capitalize">
                  Add to Read <i className="fi fi-sr-add ps-1"></i>
                </div>
              </div>
              <div className="col-6 text-end">
                <Link to={`/theory/${course.title}`}>
                  <div className="btn btn-sm rounded-8 text-capitalize tilt-effect">
                    Start Reading <i className="fi fi-ss-book-open-reader ps-1"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Theory;
