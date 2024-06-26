import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false); 
  const [admin, setAdmin] = useState(false);
  const [roadmaps , setRoadmaps] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.post(
          `${config.BASE_URL}/api/user`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.status === "success") {
          if (response.data.user.email == "637golusingh@gmail.com") {
            setAdmin(true);
          }
        } else {
          toast.error("Failed to fetch user information!", { theme: "dark" });
        }
      } catch (error) {
        toast.error("Error fetching user information !", { theme: "dark" });
        console.error("Error fetching user information:", error);
      } finally {
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
      toast.error(error, { theme: "dark" });
    }
    setLoading(false);
  };

  const deleteAllArticles = async () => {
    setLoading2(true); 
    try {
      const response = await axios.delete(
        `${config.BASE_URL}/Admin/deleteAllNews`
      ); 
      toast.success(response.data.message, { theme: "dark" });
      setLoading2(false);
    } catch (error) { 
      toast.error(error , { theme: "dark" }); 
      setLoading2(false);
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
        console.error("Error fetching setRoadmap:", error);
      }
    };

    fetchCourses();
    fetchRoadmap();


  }, []);

  const handleDelete = async (title) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `${config.BASE_URL}/Admin/delete-course/${title}`
      );

      if (response.status === 200) {
        console.log("Course deleted successfully");
        setLoading(false);
        window.location.reload();
        toast.success("Courses Deleted Successfully", { theme: "dark" });
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to delete Course", { theme: "dark" });
      console.error("Error deleting course:", error);
    }
  };
  
  const handleDeleteroadmap = async (title) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `${config.BASE_URL}/Admin/deleteRoadmap/${title}`
      );

      if (response.status === 200) {
        setLoading(false);
        toast.success("Roadmap deleted successfully", { theme: "dark" });
        window.location.reload();
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to Delete Roadmap", { theme: "dark" });
    }
  };

  return (
    <>
      <ToastContainer />
      {admin ? (
        <>
          <div
            className="container-fluid  py-5"
            style={{ minHeight: "100vh", backgroundColor: "#1E1E1E" }}
          >
            <div className="card bg-black p-2 my-3">
              <h5 className="text-warning text-center pt-3">
                {" "}
                Operations with news{" "}
              </h5>
              <div className="row">
                <div className="col-6 ">
                  <button
                    onClick={fetchAndSaveArticles}
                    disabled={loading}
                    className=" btn text-capitalize bg-dark text-success rounded-8 border"
                  >
                    {loading ? "Saving Articles..." : "Save Articles"}
                  </button>
                </div>
                <div className="col-6 text-end">
                  <button
                    onClick={deleteAllArticles}
                    disabled={loading}
                    className="btn text-capitalize bg-dark text-danger border rounded-8"
                  >
                    {loading2 ? "Deleting Articles..." : "Drop Articles"}
                  </button>
                </div>
              </div>

              <hr />
            </div>
            <div className="row g-6">
              <div className="col-lg-4 col-12">
                <Link to="/Admin/create-course">
                  <div className="card bg-dark border border-warning text-warning my-2 p-3 text-center">
                    <i className="fi fi-sr-add"></i> Create Your course
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-12">
                <Link to="/Admin/create-Roadmap">
                  <div className="card bg-dark border border-warning text-warning my-2 p-3 text-center">
                    <i className="fi fi-sr-add"></i> Create Your Roadmap
                  </div>
                </Link>
              </div>


            </div>

            <div className="container">
              <div className="row g-6">
              <h1 className="text-center text-warning my-3">Course</h1>
                <>
                  {courses.map((course) => (
                    <div key={course._id} className="col-lg-4 col-12 my-2">
                      <div className="card rounded-8  p-4 bg-dark">
                        <div className=" text-center">
                          {" "}
                          <img
                            src={course.thumbnailImage}
                            className="img-fluid courseImage text-light"
                            alt={course.title}
                          />
                        </div>
                        <div className="text-end text-success text-decoration-underline">
                          {" "}
                          Free Course
                        </div>
                        <h4 className="card-title text-light text-center my-2">
                          {course.title}
                        </h4>
                        <p className="text-muted text-capitalize">
                          {course.description}{" "}
                        </p>

                        <div className="row">
                          <div className="col-6">
                            <Link to={`/Admin/update/${course.title}`}>
                              <div
                                className="btn text-warning text-capitalize rounded-8 tilt-effect"
                                style={{ backgroundColor: "#262626" }}
                              >
                                Update
                              </div>
                            </Link>
                          </div>
                          <div className="col-6">
                            <div
                              className="btn text-danger text-capitalize rounded-8 tilt-effect"
                              onClick={() => handleDelete(course.title)}
                              style={{ backgroundColor: "#262626" }}
                            >
                              Delete
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              </div>


              <div className="row g-6">
                <h1 className="text-center text-warning my-3">Roadmap</h1>
                <>
                {roadmaps.map((roadmap) => (
                    <div key={roadmap._id} className="col-lg-4 col-12 my-2">
                      <div className="card rounded-8  p-4 bg-dark">
                        <div className=" text-center">
                          {" "}
                          <img
                            src={roadmap.thumbnail}
                            className="img-fluid courseImage text-light"
                            alt={roadmap.title}
                          />
                        </div>
                        <h4 className="card-title text-light text-center my-2">
                          {roadmap.title}
                        </h4>
                        <p className="text-muted text-capitalize">
                          {roadmap.description}{" "}
                        </p>

                        <div className="row">
                          <div className="col-6">
                            <Link to={`/Admin/updateRoadmap/${roadmap.title}`}>
                              <div
                                className="btn text-warning text-capitalize rounded-8 tilt-effect"
                                style={{ backgroundColor: "#262626" }}
                              >
                                Update
                              </div>
                            </Link>
                          </div>
                          <div className="col-6">
                            <div
                              className="btn text-danger text-capitalize rounded-8 tilt-effect"
                              onClick={() => handleDeleteroadmap(roadmap.title)}
                              style={{ backgroundColor: "#262626" }}
                            >
                              Delete
                            </div>
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
      ) : (
        <>
          <div className="vh-100 bg-dark text-danger  d-flex justify-content-center align-items-center">
            <h6>Access Blocked by admin</h6>
          </div>
        </>
      )}
    </>
  );
};

export default Admin;
