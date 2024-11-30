import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import CourseData from "../../data/Course";
import Loading from "../../component/Loading";
import Card from "../../component/Card"; 
const Theory = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(CourseData);
  }, []);

  if (!courses.length) {
    return <Loading message="no Course Found" />;
  }

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="Theory, DSA, Array, String, Sorting, Searching, OS, DBMS, CN Notes , Free Notes"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/theory" />
        <meta
          name="description"
          content="Explore theory and topics related to Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, and more."
        />
        <title>Theory: DSA , OS, DBMS, CN | Codesaarthi</title>
        <meta
          property="og:title"
          content="Theory: DSA , OS, DBMS, CN | Codesaarthi"
        />
        <meta
          property="og:description"
          content="Explore theory and topics related to Data Structures and Algorithms, Operating Systems, Database Management Systems, Computer Networks, and more."
        />
        <meta
          property="og:image"
          content="https://codesaarthi.com/img/logo.png"
        />
        <meta property="og:url" content="https://codesaarthi.com/theory" />
        <meta property="og:type" content="Education-Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/img/favicon.ico"
          sizes="32x32"
        />
      </Helmet>

      <div className="container-fluid py-5 design" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row g-6">
            <>
              {Array.isArray(courses) &&
                courses.map((course) => (
                  <div key={course.id} className="col-lg-4 col-12 my-2">
                    <Card
                      title={course.title}
                      image={course.thumbnailImage}
                      details={course.description}
                      button1={`Add to Read `}
                      icon1 = "fi fi-sr-add"
                      button2={`Start Reading`}
                      icon2 = "fi fi-ss-book-open-reader"
                      link={`/theory/${course.title}`}
                    />
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
