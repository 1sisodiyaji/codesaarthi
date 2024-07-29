import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../config/config";
import {useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Graph from "../../component/Graph";
import GetUserData from "../../config/GetUserData";
import QuestionAskedByAuthor from "../../component/Questions/QuestionAskedByAuthor";
import BlogsByAuthor from "../../component/Blogs/getBlogsByAuthor";
import AnswerByAuthor from "../../component/Questions/AnswerGivenByUser";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [articleData, setArticleData] = useState([]);
  const [questionData, setQuestionData] = useState([]);
  const [answerData, setAnswerData] = useState([]);
  const [imagePreview, setImagePreview] = useState(
    user
      ? user.image
      : "https://res.cloudinary.com/ducw7orvn/image/upload/v1721024136/codesaarthi/article-1721024134471.png"
  );
  const [formData, setFormData] = useState({
    name: user?.name || "",
    institute: user?.institute || "",
    location: user?.location || "",
    dateOfBirth: user?.dateOfBirth || "",
    contact: user?.contact || "",
    socialMediaLinks: user?.socialMediaLinks || "",
  });

  const months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const questionChartData = useMemo(
    () =>
      months.map((month, index) => ({
        label: month,
        y: questionData[index] || 0,
      })),
    [months, questionData]
  );
  const articleChartData = useMemo(
    () =>
      months.map((month, index) => ({
        label: month,
        y: articleData[index] || 0,
      })),
    [months, articleData]
  );
  const answerChartData = useMemo(
    () =>
      months.map((month, index) => ({
        label: month,
        y: answerData[index] || 0,
      })),
    [months, answerData]
  );

  const articleChartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2",
    title: {
      text: "Monthly Articles",
    },
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: "spline",
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        name: "Articles Posted By You",
        showInLegend: true,
        dataPoints: articleChartData,
      },
    ],
  };

  const questionChartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2",
    title: {
      text: "Monthly Questions Activity",
    },
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        dataPoints: questionChartData,
      },
    ],
  };

  const answerChartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2",
    title: {
      text: "Monthly Answers Activity",
    },
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: "splineArea",
        name: "Answers Given",
        showInLegend: true,
        dataPoints: answerChartData,
      },
    ],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = user._id;
    try {
      setLoading(true);
      const data = new FormData();
      if (image) data.append("image", image);
      data.append("_id", id);
      data.append("name", formData.name);
      data.append("institute", formData.institute);
      data.append("location", formData.location);
      data.append("dateOfBirth", formData.dateOfBirth);
      data.append("contact", formData.contact);
      data.append("socialMediaLinks", formData.socialMediaLinks);
      const response = await axios.post(
        `${config.BASE_URL}/api/updateProfile`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Profile updated successfully!", { theme: "dark" });
        setEditing(false);
        setLoading(false);
        navigate("/profile");
      } else {
        toast.error("Profile update failed!", { theme: "dark" });
        console.log("Failed to update profile:", response);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updating profile!", { theme: "dark" });
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersdata = await GetUserData();
        setUser(usersdata);
        setUserId(usersdata._id);
        return usersdata._id;
      } catch (error) {
        toast.error("Error fetching user information!", { theme: "dark" });
        console.error("Error fetching user information:", error);
        return null;
      }
    };
    const fetchData = async () => {
      const userId = await fetchUserData();
      if (userId) {
        try {
          await Promise.all([
            MonthlyArticles(userId),
            MonthlyQuestions(userId),
            MonthlyAnswers(userId),
          ]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    const MonthlyArticles = async (userId) => {
      const response = await axios.get(
        `${config.BASE_URL}/article/getMonthlyArticleData/${userId}`
      );
      if (response.status === 200) {
        setArticleData(response.data.monthlyArticleData);
      } else {
        console.error("Failed to fetch monthly articles:", response);
      }
    };

    const MonthlyQuestions = async (userId) => {
      const response = await axios.get(
        `${config.BASE_URL}/article/getMonthlyQuestionData/${userId}`
      );
      if (response.status === 200) {
        setQuestionData(response.data.monthlyQuestionData);
      } else {
        console.error("Failed to fetch monthly questions:", response);
      }
    };

    const MonthlyAnswers = async (userId) => {
      const response = await axios.get(
        `${config.BASE_URL}/article/getMonthlyAnswerData/${userId}`
      );
      if (response.status === 200) {
        setAnswerData(response.data.monthlyAnswerData);
      } else {
        console.error("Failed to fetch monthly answers:", response);
      }
    };

    fetchUserData();
    fetchData();
  }, []);

  if (loading) {
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
              className="btn btn-secondary disabled placeholder col-6"
              aria-disabled="true"
            >
              {" "}
              Loading{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
  const logout = async () => {
    try {
      const response = await axios.post(`${config.BASE_URL}/api/logout`);

      if (response.status === 200) {
        Cookies.remove("token");
        window.location.href = "/";
      } else {
        console.log("Logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  const editingMode = () => {
    setEditing(true);
  };
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `${config.BASE_URL}/api/delete/${id}`
      );
      if (response.status === 200) {
        toast.success("User deleted successfully!", { theme: "dark" });
        navigate("/login");
      } else {
        toast.error("Failed to delete user!", { theme: "dark" });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
 
  return (
    <>
      <ToastContainer />
      <Helmet>
        <meta
          name="keywords"
          content="Profile , Codesaarthi Account , Account authentication , Profile searcher in codesaarthi"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/profile" />
        <title>Profile | Codesaarthi</title>
      </Helmet>
      <div className="container mt-4">
        {user && (
          <div className="row">
            <div className="col-md-4">
              <img
                src={imagePreview}
                alt="Profile"
                className="img-fluid rounded-circle"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              {editing && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              )}
            </div>
            <div className="col-md-8">
              {editing ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="institute" className="form-label">
                      Institute
                    </label>
                    <input
                      type="text"
                      id="institute"
                      name="institute"
                      className="form-control"
                      value={formData.institute}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className="form-control"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="dateOfBirth" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      className="form-control"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contact" className="form-label">
                      Contact
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      className="form-control"
                      value={formData.contact}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="socialMediaLinks" className="form-label">
                      Social Media Links
                    </label>
                    <input
                      type="text"
                      id="socialMediaLinks"
                      name="socialMediaLinks"
                      className="form-control"
                      value={formData.socialMediaLinks}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Updating..." : "Update Profile"}
                  </button>
                </form>
              ) : (
                <div>
                  <h3>{user.name}</h3>
                  <p>
                    <strong>Institute:</strong> {user.institute}
                  </p>
                  <p>
                    <strong>Location:</strong> {user.location}
                  </p>
                  <p>
                    <strong>Date of Birth:</strong> {user.dateOfBirth}
                  </p>
                  <p>
                    <strong>Contact:</strong> {user.contact}
                  </p>
                  <p>
                    <strong>Social Media Links:</strong> {user.socialMediaLinks}
                  </p>
                  <button
                    className="btn rounded-8 mx-2 text-capitalize"
                    onClick={editingMode}
                  >
                    Edit Profile <i className="fi fi-sr-pen-clip"></i>
                  </button>
                  <button
                    className="btn rounded-8 mx-2 text-capitalize"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete Account <i className="fi fi-sr-trash-xmark"></i>
                  </button>
                  <button
                    className="btn rounded-8 mx-2 text-capitalize"
                    onClick={logout}
                  >
                    Logout <i className="fi fi-br-sign-out-alt"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="row my-2">
          <div className="col-md-6 col-12 my-2">
            <Graph options={articleChartOptions} />{" "}
          </div>
          <div className="col-md-6 col-12 my-2">
            {" "}
            <Graph options={questionChartOptions} />{" "}
          </div>
          <div className="col-md-12 col-12 my-2">
            {" "}
            <Graph options={answerChartOptions} />{" "}
          </div>
        </div>

        <div className="mt-4">  
          <BlogsByAuthor userId={userId} />
        </div>

        <div className="mt-4">
          <h6>Your Questions</h6>
          <QuestionAskedByAuthor userId={userId} />
        </div>
        <div className="mt-4">
          <h6>Your Contribution on answers :- </h6>
          <AnswerByAuthor userId={userId} />
        </div>
        
      </div>
    </>
  );
};

export default Profile;
