import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import config from "../config/config";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Content = () => {
  const { title } = useParams();
  const [course, setCourse] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.post(`${config.BASE_URL}/Admin/coursesByTitle/${title}`);
        setCourse(response.data[0]);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    fetchCourse();
  }, [title]);

  const handleTopicClick = (index) => {
    setSelectedTopic(index);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goToPreviousTopic = () => {
    if (selectedTopic > 0) {
      setSelectedTopic(selectedTopic - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToNextTopic = () => {
    if (course && course.topics && selectedTopic < course.topics.length - 1) {
      setSelectedTopic(selectedTopic + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (course && course.topics && course.topics[selectedTopic]) {
      const topicName = course.topics[selectedTopic].title;
      if (topicName) {
        document.title = `${topicName} | Codesaarthi`;
        document.querySelector('meta[property="og:title"]').setAttribute("content", `${topicName} | Codesaarthi`);
      } else {
        document.querySelector('meta[property="og:title"]').setAttribute("content", "Codesaarthi");
        document.title = "Codesaarthi";
      }
    } else {
      document.querySelector('meta[property="og:title"]').setAttribute("content", "Codesaarthi");
      document.title = "Codesaarthi";
    }
  }, [selectedTopic, course]);

  if (!course) {
    return toast.loading("loading ...", { theme: "dark" });
  }else{
    toast.dismiss();
  }

  return (
    <>
       <ToastContainer />
      <Helmet>
        <meta name="keywords" content="React js , learn react js from scratch , version 19 react details , new updates on react , react structure." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://codesaarthi.com/theory/${title}`} />
        <meta name="description" content="Learn React from scratch to building applications, react gets easy with codess" />
        <title>{course.topics && course.topics[selectedTopic] ? `${course.topics[selectedTopic].title} | Codesaarthi` : 'Codesaarthi'}</title>
        <meta property="og:title" content={course.topics && course.topics[selectedTopic] ? course.topics[selectedTopic].title : 'Codesaarthi'} />
        <meta property="og:description" content={course.description} />
        <meta property="og:image" content={course.thumbnailImage} />
        <meta property="og:url" content={`https://codesaarthi.com/theory/${title}`} />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div className="container-fluid design g-0" style={{ backgroundColor: '#1E1E1E' }}>
        <div className="container g-0">
          <div className="d-lg-none d-block d-flex justify-content-end pt-2">
            <button onClick={toggleSidebar} className="navbar-toggler shadow-0 d-lg-none d-block" style={{ color: "#FFE164", fontSize: "1.8rem" }}>
              <i className="fi fi-br-align-justify pt-2"></i>
            </button>
          </div>
          <div className="row g-0 border border-dark">
            <div className="col-lg-3 col-0 p-lg-2 d-lg-block d-none border border-dark" style={{ backgroundColor: '#262626' }}>
              <div className="d-flex justify-content-center py-2">
                <img src={course.thumbnailImage} className="img-fluid" alt="course thumbnail" />
              </div>
              <h2 className="text-center pb-3 text-primary">{course.title.toUpperCase()}</h2>
              {course.topics && course.topics.map((topic, index) => (
                <div key={topic._id} onClick={() => handleTopicClick(index)} style={{ cursor: 'pointer', textDecoration: selectedTopic === index ? 'underline' : 'none', color: selectedTopic === index ? '#FFE164' : 'none' }}>
                  <p className="text-capitalize topic-item" style={{ color: selectedTopic === index ? '#6D39F7' : '#FFE164' }}>
                    <i className="fi fi-ss-book-alt pe-1"></i> {topic.title}
                  </p>
                  <hr />
                </div>
              ))}
            </div>
            {isSidebarOpen && (
              <div className="d-lg-none d-block">
                <div className="container-fluid g-0 d-lg-none d-block">
                  <div style={{ zIndex: "99" }} className={`sidebar3 ${isSidebarOpen ? "show" : ""} d-lg-none d-md-none d-sm-block`}>
                    {course.topics && course.topics.map((topic, index) => (
                      <div key={topic._id} onClick={() => handleTopicClick(index)} style={{ cursor: 'pointer', textDecoration: selectedTopic === index ? 'underline' : 'none', color: selectedTopic === index ? '#FFE164' : 'none' }}>
                        <p className="text-capitalize topic-item" style={{ color: selectedTopic === index ? '#6D39F7' : '#FFE164' }}>
                          <i className="fi fi-ss-book-alt pe-1"></i> {topic.title}
                        </p>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="col-lg-9 col-12">
              {course.topics && course.topics[selectedTopic] && (
                <div className='p-lg-3 p-0'>
                  <h3 className='text-capitalize text-warning'>{course.topics[selectedTopic].title}</h3>
                  {course.topics[selectedTopic].image && (
                    <div className="my-3 p-2">
                      <img src={course.topics[selectedTopic].image} alt={course.topics[selectedTopic].title} style={{ maxHeight: "300px" }} className="img-fluid" />
                    </div>
                  )}
                  <div className='text-light p-2' dangerouslySetInnerHTML={{ __html: course.topics[selectedTopic].details }}></div>
                  <div className="row g-0 pb-4">
                    <div className="col-6 text-start">
                      <div className="btn border text-capitalize text-warning" onClick={goToPreviousTopic}><i className="fi fi-rr-angle-small-left"></i> previous</div>
                    </div>
                    <div className="col-6 text-end">
                      <div className="btn border text-capitalize text-warning" onClick={goToNextTopic}>Next <i className="fi fi-rr-angle-small-right"></i></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
