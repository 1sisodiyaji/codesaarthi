import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import axios from 'axios';
import config from '../config/config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Theory = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.post(`${config.BASE_URL}/Admin/courses`);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  if (!courses) {
    return (
      <div className=" vh-100 d-flex justify-content-center align-items-center">
        <img src="https://codesaarthi.com/img/loader.svg" alt="Loading" />;
      </div>
    );
  }
  return (
    <>
    <ToastContainer />
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

      <div className="container-fluid  py-5" style={{ minHeight: '100vh', backgroundColor: '#1E1E1E' }}>
        <div className="container">
          <div className="row g-6">
            <>
              {courses.map(course => (
                <div key={course._id} className="col-lg-4 col-12 my-2">
                    <div className="card rounded-8  p-lg-4 p-4 bg-dark">
                      <div className=" text-center"> <img src={course.thumbnailImage} className="img-fluid courseImage text-light" loading='lazy' title={course.title}  alt={course.title}/></div>
                      <div className="text-end text-success text-decoration-underline"><small>Free Course </small> </div>
                      <h5 className="card-title text-light text-center my-2">{course.title}</h5>
                      <small className='text-muted text-capitalize my-1'>{course.description} </small>
                      <Link to={`/theory/${course.title}`}>
                        <div className="btn text-warning text-capitalize rounded-8 tilt-effect" style={{ backgroundColor: '#262626' }}>Start Reading</div>
                      </Link>
                  </div>
                  
                </div>
              ))}

            </>
          </div>

        </div>
      </div>
    </>
  )
}

export default Theory