import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import config from "../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [message, setMessage] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.post(
          `${config.BASE_URL}/api/user`,
          {}, // empty object as the data payload
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.status === "success") {
          if (response.data.user.email === "637golusingh@gmail.com") {
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
    setMessage("");
    try {
      const response = await axios.post(`${config.BASE_URL}/Admin/saveNews`);
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error saving articles:", error);
      setMessage("Error saving articles");
    }
    setLoading(false);
  };

  const deleteAllArticles = async () => {
    setLoading2(true);
    setMessage("");
    try {
      const response = await axios.delete(
        `${config.BASE_URL}/Admin/deleteAllNews`
      );
      setMessage(response.data.message);
      setLoading2(false);
    } catch (error) {
      console.error("Error deleting articles:", error);
      setMessage("Error deleting articles");
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

    fetchCourses();
  }, []);

  const handleDelete = async (title) => {
    try {
      console.log(title);
      const response = await axios.delete(
        `${config.BASE_URL}/Admin/delete-course/${title}`
      );

      if (response.status === 200) {
        console.log("Course deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting course:", error);
      // Handle error: display an error message or log the error
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
              {message && <p className="text-success ms-4">{message}</p>}
            </div>
            <Link to="/Admin/create-course">
              <div className="btn btn-dark border border-warning text-warning w-100 my-2">
                Create Your course
              </div>
            </Link>
            <div className="container">
              <div className="row g-6">
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
            </div>

            <div className="card">Chat app</div>
          </div>
        </>
      ) : (
        <>
        <div className="design vh-100 bg-dark text-center">
        <p className="text-danger pt-5">Admin Access only</p>
         </div>
         
         </>

      )}
    </>
  );
};

export default Admin;
