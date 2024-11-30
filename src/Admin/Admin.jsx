import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie'; 
import Graph from "../component/Graph"; 

const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [roadmaps, setRoadmaps] = useState([]);
  const [totalUser, setTotalUser] = useState(0);
  const [feedback, setFeedback] = useState(0);
  const [monthlyUserData, setMonthlyUserData] = useState([]);
  const [monthlyFeedbackData, setMonthlyFeedbackData] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      const token = Cookies.get('Codesaarthi-token');
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
        const response = await axios.get(`${config.BASE_URL}/Admin/getRoadmap`);
        console.log(response);
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
    try {
      setLoading(true);
      const token = Cookies.get("Codesaarthi-token");
      const response = await axios.delete(`${config.BASE_URL}/Admin/deleteRoadmap/${id}`,{
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
      }
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

  const formatDataForChart = (data, type) => {
    const chartData = [
      ['Month', 'Value'],
      ...months.map((month, index) => [month, data[index] || 0])
    ];

    return {
      chartType: type,
      data: chartData,
      width: "100%",
      height: "340px", 
    };
  };
  
  const UserChartOptions = formatDataForChart(monthlyUserData, 'AreaChart');
  const feedbackChartOptions = formatDataForChart(monthlyFeedbackData, 'PieChart');
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
              <div className="col-lg-3 col-md-6 col-12">
                <div className=" p-3 card">
                  <div className=" d-flex justify-content-between align-items-center ">
                    <h5>Total Number of Users</h5>
                    <h3 className="px-4 py-2 border bg-black text-success rounded-6"><i className="fi fi-rr-circle-user"></i> {totalUser}</h3>
                  </div>
                  <div className="w-100">
                  <Graph options={UserChartOptions} />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Total Number of Feedbacks </h5>
                    <h3 className="py-2 px-4 border bg-black text-warning rounded-6"> <i className="fi fi-sr-feedback pe-2"></i>{feedback}</h3>
                  </div>
                  <Graph options={feedbackChartOptions} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Total Number of Projects </h5>
                    <h3 className="py-2 px-4 border bg-black text-warning rounded-6"> <i className="fi fi-sr-feedback pe-2"></i>{feedback}</h3>
                  </div>
                  <Graph options={feedbackChartOptions} />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="card p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5>Total Number of Bookings </h5>
                    <h3 className="py-2 px-4 border bg-black text-warning rounded-6"> <i className="fi fi-sr-feedback pe-2"></i>{feedback}</h3>
                  </div>
                  <Graph options={feedbackChartOptions} />
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
                <Link to="/Admin/CreateGig">
                  <div className="card my-3 p-4 text-center">
                    <i className="fi fi-sr-add"></i> Create Your Gigs
                  </div>
                </Link>
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
                    <div className="card rounded-8 p-3" style={{minHeight: '35vh'}}>
                      <div className="text-center">
                        <img  src={roadmap.thumbnail}  className="courseImage"  alt={roadmap.title} loading="lazy" title= {roadmap.title}/>
                      </div> 
                      <h5 className="text-center">{roadmap.title}</h5>
                      <small className="text-center">{roadmap.description}</small>
                      <div className="row">
                        <div className="col-6">
                          <div className="btn btn-sm rounded-8 text-capitalize bg-danger"   onClick={() => handleDeleteRoadmap(roadmap._id)}>
                            Delete <i className="fi fi-rr-trash" ></i>
                          </div>
                        </div>
                        <div className="col-6 text-end">
                        <Link  to={`/Admin/updateRoadmap/${roadmap.slug}`} className="btn btn-sm text-capitalize rounded-8">
                          Edit Course <i className="fi fi-sr-pencil"></i>
                        </Link>
                        </div> 
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (<loading message = "laoding" />)}
    </>
  );
};

export default Admin;
