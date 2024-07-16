import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CanvasJSReact from '@canvasjs/react-charts';
import { Helmet } from "react-helmet";

const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [roadmaps, setRoadmaps] = useState([]);
  const [totalUser, setTotalUser] = useState(0);
  const [feedback, setFeedback] = useState(0);
  const [monthlyUserData, setMonthlyUserData] = useState([]);
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const [monthlyFeedbackData, setMonthlyFeedbackData] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      const token = sessionStorage.getItem("token");
      try {
        const response = await axios.post(
          `${config.BASE_URL}/Admin/user`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          setAdmin(true);
        } else {
          toast.error("Failed to fetch user information!", { theme: "dark" });
        }
      } catch (error) {
        toast.error("Error fetching user information!", { theme: "dark" });
        console.error("Error fetching user information:", error);
      }
    };

    fetchUserData();
  }, []);

  const fetchAndSaveArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${config.BASE_URL}/Admin/saveNews`);
      toast.success(response.data.message, { theme: "dark" });
    } catch (error) {
      toast.error(error.message, { theme: "dark" });
    }
    setLoading(false);
  };

  const deleteAllArticles = async () => {
    setLoading2(true);
    try {
      const response = await axios.delete(`${config.BASE_URL}/Admin/deleteAllNews`);
      toast.success(response.data.message, { theme: "dark" });
    } catch (error) {
      toast.error(error.message, { theme: "dark" });
    }
    setLoading2(false);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.post(`${config.BASE_URL}/Admin/courses`);
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    const fetchRoadmap = async () => {
      try {
        const response = await axios.post(`${config.BASE_URL}/Admin/getRoadmap`);
        setRoadmaps(response.data);
      } catch (error) {
        console.error("Error fetching roadmaps:", error);
      }
    };

    const fetchTotalUser = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/Admin/totalUser`);
        setTotalUser(response.data.totalUsers);
      } catch (error) {
        console.error("Error fetching total users:", error);
      }
    };

    const fetchTotalFeedback = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/Admin/totalFeedback`);
        setFeedback(response.data.totalFeedback);
      } catch (error) {
        console.error("Error fetching total feedback:", error);
      }
    };

    const fetchMonthlyUserData = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/Admin/monthlyUserData`);
        setMonthlyUserData(response.data.monthlyUserData);
      } catch (error) {
        console.error("Error fetching monthly user data:", error);
      }
    };
    const fetchMonthlyFeedbackData = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/Admin/monthlyFeedbackData`);
        setMonthlyFeedbackData(response.data.monthlyFeedbackData); 
      } catch (error) {
        console.error("Error fetching monthly feedback data:", error);
      }
    };

    fetchCourses();
    fetchRoadmap();
    fetchTotalUser();
    fetchTotalFeedback();
    fetchMonthlyUserData();
    fetchMonthlyFeedbackData();
  }, []);

  const handleDelete = async (title) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `${config.BASE_URL}/Admin/delete-course/${title}`
      );

      if (response.status === 200) {
        setLoading(false);
        window.location.reload();
        toast.success("Course deleted successfully", { theme: "dark" });
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to delete course", { theme: "dark" });
      console.error("Error deleting course:", error);
    }
  };

  const handleDeleteRoadmap = async (id) => {
    console.log("enetered");
    try {
      setLoading(true);
      const response = await axios.delete(
        `${config.BASE_URL}/Admin/deleteRoadmap/${id}`
      );

      if (response.status === 200) {
        setLoading(false);
        toast.success("Roadmap deleted successfully", { theme: "dark" });
        window.location.reload();
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to delete roadmap", { theme: "dark" });
    }
  };


  const months = useMemo(() => [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ], []);

  const userChartDataPoints = useMemo(
    () => months.map((month, index) => ({
      label: month,
      y: monthlyUserData[index] || 0,
    })),
    [months, monthlyUserData]
  );

  const feedbackChartDataPoints = useMemo(
    () => months.map((month, index) => ({
      label: month,
      y: monthlyFeedbackData[index] || 0,
    })),
    [months, monthlyFeedbackData]
  );

  const userChartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2",
    title: {
      text: "Monthly Users"
    },
    axisY: {
      includeZero: true
    },
    data: [{
      type: "area",
      indexLabelFontColor: "#5A5757",
      indexLabelPlacement: "outside",
      dataPoints: userChartDataPoints
    }]
  };

  const feedbackChartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2",
    title: {
      text: "Feedbacks 🔥"
    },
    axisY: {
      includeZero: true
    },
    data: [{
      type: "pie",
      indexLabelFontColor: "#5A5757",
      indexLabelPlacement: "outside",
      dataPoints: feedbackChartDataPoints
    }]
  };


  return (
    <>

<Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Admin" />
        <meta
          name="description"
          content="Lets Be a part of codesaarthi , give us  a chance to help you by explaining things in simple Words."
        />
        <title>Admin | Codesaarthi </title>
        <meta property="og:title" content="Admin | Codesaarthi" />
        <meta
          property="og:description"
          content="Lets Be a part of codesaarthi , give us  a chance to help you by explaining things in simple Words."
        />
        <meta
          property="og:image"
          content="https://codesaarthi.com/img/logo.png"
        />
        <meta property="og:url" content="https://codesaarthi.com/login" />
        <meta property="og:type" content="Education-Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/img/favicon.ico"
          sizes="32x32"
        />
      </Helmet>
      <ToastContainer />
      {admin ? (
        <>
          <div className="container-fluid py-5 design" style={{ minHeight: "100vh" }}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="card p-3 ">
                  <div className=" d-flex justify-content-between align-items-center ">
                    <h3>Total Number of Users</h3>
                    <h3 className="px-4 py-2 border bg-black text-success rounded-6"><i class="fi fi-rr-circle-user"></i> {totalUser}</h3>
                  </div>
                  <div className="w-100">
                    <CanvasJSChart options={userChartOptions} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="card p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Total Number of Feedbacks </h3>
                    <h3 className="py-2 px-4 border bg-black text-warning rounded-6"> <i class="fi fi-sr-feedback pe-2"></i>{feedback}</h3>
                  </div>
                  <CanvasJSChart options={feedbackChartOptions} />
                </div>
              </div>
            </div>

            <div className="row g-6">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card p-3 my-3">
                  <h5 className="text-warning text-center">Operations with news</h5>
                  <div className="row g-0">
                    <div className="col-6">
                      <button
                        onClick={fetchAndSaveArticles}
                        disabled={loading}
                        className="btn text-capitalize rounded-8 border"
                      >
                        {loading ? "Saving Articles..." : "Save Articles"}
                      </button>
                    </div>
                    <div className="col-6 text-end">
                      <button
                        onClick={deleteAllArticles}
                        disabled={loading}
                        className="btn text-capitalize border rounded-8"
                      >
                        {loading2 ? "Deleting Articles..." : "Drop Articles"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <Link to="/Admin/create-course">
                  <div className="card my-3 p-4 text-center">
                    <i className="fi fi-sr-add"></i> Create Your Course
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <Link to="/Admin/create-Roadmap">
                  <div className="card my-3 p-4 text-center">
                    <i className="fi fi-sr-add"></i> Create Your Roadmap
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <Link to="/Admin/create-Roadmap">
                  <div className="card my-3 p-4 text-center">
                    <i className="fi fi-sr-add"></i> Create Your Projects
                  </div>
                </Link>
              </div>


            </div>

            <div className="container-fluid g-0">
              <div className="row g-6">
                <h1 className="text-center text-warning my-3">COURSE</h1>
                {courses.map((course) => (
                  <div key={course._id} className="col-lg-4 col-md-6 col-12 my-2">
                    <div className="card rounded-8 p-4 bg-dark">
                      <div className="text-center">
                        <img
                          src={course.thumbnailImage}
                          className="img-fluid courseImage text-light"
                          alt={course.title}
                        />
                      </div>
                      <div className="text-end text-success">
                        <i
                          className="fi fi-rr-trash deleteIcon"
                          onClick={() => handleDelete(course.title)}
                        ></i>
                      </div>
                      <h3 className="text-center text-light">{course.title}</h3>
                      <p className="text-center text-light">{course.description}</p>
                      <div className="text-center">
                        <Link
                          to={`/Admin/course/edit/${course._id}`}
                          className="btn btn-outline-success w-100 mx-auto"
                        >
                          Edit Course
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row g-6 my-5">
                <h1 className="text-center text-warning my-3">ROADMAPS</h1>
                {roadmaps.map((roadmap) => (
                  <div key={roadmap._id} className="col-lg-4 col-md-6 col-12 my-2">
                    <div className="card rounded-8 p-4 bg-dark">
                      <div className="text-center">
                        <img
                          src={roadmap.thumbnail}
                          className="img-fluid courseImage text-light"
                          alt={roadmap.title}
                        />
                      </div>
                      <h5 className="text-center text-light">{roadmap.title}</h5>
                      <p className="text-center text-light">{roadmap.description}</p>
                    
                    <div className="row">
                      <div className="col-6 text-start">
                        <div className="btn text-capitalize btn-sm tilt-effect rounded-6">
                          Delete
                          <i style={{ cursor: 'pointer' }}
                            className="fi fi-rr-trash deleteIcon ps-2 text-danger"
                            onClick={() => handleDeleteRoadmap(roadmap._id)}
                          ></i>
                        </div>
                      </div>
                      <div className="col-6 text-start">
                        <div className="text-center">
                          <Link
                            to={`/Admin/updateRoadmap/${roadmap._id}`}
                            className="btn btn-sm text-capitalize tilt-effect2"
                          >
                            <i className="fi fi-sr-pen-clip pe-2 text-warning"></i>
                            Edit Roadmap
                          </Link>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="vh-100 text-warning d-flex justify-content-center align-items-center">
          <div className="card" aria-hidden="true" style={{ width: '350px' }}>
            <div className="text-center">
              <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721031578/loader_bhnpfb.gif" style={{ height: '125px', width: '115px' }} className="card-img-top" alt="..." />
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
              <a href='/' className="btn btn-secondary disabled placeholder col-6" aria-disabled="true"> loading</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
