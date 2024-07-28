import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../config/config";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Graph from "../../component/Graph";
import Modal from "../../component/Modal";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [articleData, setArticleData] = useState([]);
  const [questionData, setQuestionData] = useState([]);
  const [answerData, setAnswerData] = useState([]);
  const [blogsShow, setBlogsShow] = useState(false);
  const [questionShow, setQuestionShow] = useState(false);
  const [answershow, setAnswershow] = useState(false);
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
    const token = Cookies.get("token");

    const fetchUserData = async () => {
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
          setUser(response.data.user);
          return response.data.user._id; // Return the user ID for further use
        } else {
          toast.error("Failed to fetch user information!", { theme: "dark" });
          return null;
        }
      } catch (error) {
        toast.error("Error fetching user information!", { theme: "dark" });
        console.error("Error fetching user information:", error);
        return null;
      }
    };

    const fetchData = async () => {
      const userId = await fetchUserData(); // Wait for user data to be fetched

      if (userId) {
        // Fetch other data only if userId is successfully fetched
        try {
          await Promise.all([
            fetchBlogs(userId),
            fetchQuestions(userId),
            fetchAnswers(userId),
            MonthlyArticles(userId),
            MonthlyQuestions(userId),
            MonthlyAnswers(userId),
          ]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    const fetchBlogs = async (userId) => {
      try {
        const response = await axios.post(
          `${config.BASE_URL}/article/getbyidAuthor/${userId}`
        );
        if (response.data) {
          toast.success("Blogs written by you", { theme: "dark" });
          setBlogs(response.data);
        } else {
          toast.error("Error fetching blogs, no blogs found!", {
            theme: "dark",
          });
        }
      } catch (error) {
        toast.warn("You have not posted any blogs", { theme: "dark" });
      }
    };

    const fetchQuestions = async (userId) => {
      try {
        const response = await axios.post(
          `${config.BASE_URL}/article/getQuestionsByidAuthor/${userId}`
        );
        if (response.data) {
          toast.success("Questions asked by you", { theme: "dark" });
          setQuestion(response.data);
        } else {
          toast.error("Error fetching questions, no questions found!", {
            theme: "dark",
          });
        }
      } catch (error) {
        toast.warn("You have not asked any questions", { theme: "dark" });
      }
    };

    const fetchAnswers = async (userId) => {
      try {
        const response = await axios.post(
          `${config.BASE_URL}/article/getAnswerByAuthorId/${userId}`
        );
        if (response.data) {
          toast.success("Answers given by you", { theme: "dark" });
          setAnswer(response.data);
        } else {
          toast.error("Error fetching answers, no answers found!", {
            theme: "dark",
          });
        }
      } catch (error) {
        toast.warn("You have not answered any questions", { theme: "dark" });
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

  const deleteArticle = async (id) => {
    try {
      const response = await axios.delete(
        `${config.BASE_URL}/article/delete/${id}`
      );
      if (response.status === 200) {
        toast.success("Article deleted successfully!", { theme: "dark" });
        setBlogs(blogs.filter((blog) => blog._id !== id));
      } else {
        toast.error("Failed to delete article!", { theme: "dark" });
      }
    } catch (error) {
      console.error("Error deleting article:", error);
    }
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

  const handleCopy = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => toast.success("Link Copied Successfully"))
      .catch((err) => console.error("Failed to copy: ", err));
  };
  const handleShareWhatsApp = (url) => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      url
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  const handleShareLinkedIn = (url) => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`;
    window.open(linkedinUrl, "_blank");
  };

  const upvote = async (id) => {
    const token = Cookies.get("token");
    try {
      const response = await axios.post(
        `${config.BASE_URL}/article/questions/votes/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response);
      setQuestion(
        question.map((q) =>
          q._id === id ? { ...q, votes: response.data.votes } : q
        )
      );
    } catch (error) {
      console.error("Error upvoting the question:", error);
    }
  };
  const handleshowBlogs = () => {
    setBlogsShow(!blogsShow);
  }
  const handleShowQuestions = () => {
    setQuestionShow(!questionShow);
  }

  const handleAnswerShow = () => {
    setAnswershow(!answershow);
  }
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

        <div className="row my-2">
          <div className="col-11"> <h6>Blogs Posted By {user && user.name} <span class="badge badge-dark">{blogs.length}</span> </h6></div>
          <div className="col-1"><i onClick={handleshowBlogs} class={`${blogsShow ? 'fi fi-sr-eye text-success bg-dark' : 'i fi-sr-eye-crossed text-light bg-primary'} px-2 py-1 rounded-4`} style={{ cursor: 'pointer' }}></i></div>
        </div>

        {blogsShow && (
          <div className="my-2">
            {blogs.length > 0 ? (
              <div className="row">
                {blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="card bg-black my-2 shadow-6 p-3 col-lg-6"
                  >
                    <Link to={`/blog/${blog._id}`}>
                      <h4 className="text-warning">{blog.title}</h4>
                    </Link>
                    <figure className="text-center">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        title={blog.title}
                        loading="lazy"
                        className="img-fluid imageHeight  mb-3"
                      />
                      <figcaption>{blog.description}</figcaption>
                    </figure>
                    <hr />
                    <div className="row">
                      <div className="col-6 text-start">
                        <small>
                          Posted by: {blog.idAuthor ? blog.name : "Anonymous"}
                        </small>
                      </div>
                      <div className="col-6 text-end">
                        <small>
                          {new Date(blog.date).toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}
                        </small>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 text-start">
                        <Link
                          to={`/edit-blog/${blog._id}`}
                          className="text-light"
                        >
                          <button className="btn bg-warning text-capitalize ">
                            Update <i className="fi fi-sr-pen-clip ps-2"></i>
                          </button>
                        </Link>
                      </div>
                      <div className="col-6 text-end">
                        <div
                          className="btn bg-danger text-capitalize"
                          onClick={() => deleteArticle(blog._id)}
                        >
                          Delete <i className="fi fi-ss-trash-xmark ps-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>You have not posted any blogs.</p>
            )}
          </div>
        )}

        <div className="row my-2">
          <div className="col-11"> <h6>Questions Asked By {user && user.name} <span class="badge badge-dark">{question.length}</span> </h6></div>
          <div className="col-1"><i onClick={handleShowQuestions} class={`${questionShow ? 'fi fi-sr-eye text-success bg-dark' : 'i fi-sr-eye-crossed text-light bg-primary'} px-2 py-1 rounded-4`} style={{ cursor: 'pointer' }}></i></div>
        </div>
        {questionShow && (
          <div className="mt-4">
            <h6>Your Questions</h6>
            {question.length > 0 ? (
              <>
                <div className="row">
                  {question &&
                    question.map((question) => {
                      const questionUrl = `${window.location.origin}/Questions/${question.slug}`;
                      return (
                        <div
                          key={question._id}
                          className="shadow-lg borderColor rounded-4 p-3  my-2 col-lg-6"
                        >
                          <div className="row">
                            <div className="col-10">
                              <Link
                                to={`/Questions/${question.slug}`}
                                className="iconColor text-decoration-underline"
                                style={{ cursor: "pointer" }}
                              >
                                <h6>{question.title} ?</h6>
                              </Link>
                            </div>
                            <div className="col-2 text-end">
                              {/* <i className="fi fi-sr-circle-ellipsis"></i> */}
                            </div>
                          </div>

                          <p>{question.body}</p>
                          <div className="row">
                            <div className="col-6">
                              <Link
                                to={`/profile/${question.user.username}`}
                                className="iconColor"
                              >
                                Asked By:{" "}
                                <span className="text-decoration-underline">
                                  {question.user.name}
                                </span>
                              </Link>
                            </div>
                            <div className="col-6 text-end">
                              <p className="pe-2">
                                {new Date(question.createdAt).toLocaleString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                  }
                                )}
                              </p>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <div onClick={() => upvote(question._id)}>
                                  <p className="btn btn-sm rounded-8 text-capitalize">
                                    {" "}
                                    {question.votes}{" "}
                                    <i className="fi fi-rs-social-network"></i>{" "}
                                    UpVote{" "}
                                  </p>
                                </div>
                              </div>
                              <div className="col-6 text-end">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="fi fi-ss-share"></i>
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        onClick={() => handleCopy(questionUrl)}
                                      >
                                        Copy Link
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        onClick={() =>
                                          handleShareWhatsApp(questionUrl)
                                        }
                                      >
                                        Share on WhatsApp
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        onClick={() =>
                                          handleShareLinkedIn(questionUrl)
                                        }
                                      >
                                        Share on LinkedIn
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-6 text-start">
                              <Modal
                               id="modal1" 
                                btnName = "Edit"
                                Design = "btn  text-capitalize bg-warning"
                                title="Edit Your Question"
                                body="."
                                saveButtonLabel="Update "
                                closeButtonLabel="Cancel"
                              /> 
                                </div>

                              <div className="col-6 text-end">  
                               <Modal
                               id="modal2" 
                                btnName = "Delete 🗑️"
                                Design = "btn btn-sm rounded-8 text-capitalize bg-danger"
                                title="Delete Your Question"
                                body="."
                                saveButtonLabel="Delete "
                                closeButtonLabel="Cancel"
                              /> 
                              </div>

                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            ) : (
              <p>You have not asked any questions.</p>
            )}
          </div>
        )}


        <div className="row my-2">
          <div className="col-11"> <h6>Answer Contributed By {user && user.name} <span class="badge badge-dark">{answer.length}</span> </h6></div>
          <div className="col-1"> <i onClick={handleAnswerShow} class={`${answershow ? 'fi fi-sr-eye text-success bg-dark' : 'i fi-sr-eye-crossed text-light bg-primary'} px-2 py-1 rounded-4`} style={{ cursor: 'pointer' }}></i></div>
        </div>
        {answershow && (
          <div className="mt-4">
            <h4>Your Answers</h4>
            {answer.length > 0 ? (
              <>
                <div className="row">
                  {answer &&
                    answer.map((a) => {
                      const questionUrl = `${window.location.origin}/Questions/${a.question.slug}`;
                      return (
                        <div
                          key={a._id}
                          className="shadow-lg borderColor rounded-4 p-3 my-2 col-lg-6"
                        >
                          <div className="row">
                            <div className="col-10">
                              <Link
                                to={`/Questions/${a.question._id}`}
                                className="iconColor"
                                style={{ cursor: "pointer" }}
                              >
                                <h2>{a.question.title} ?</h2>
                              </Link>
                            </div>
                            <div className="col-2 text-end">
                              {/* <i className="fi fi-sr-circle-ellipsis"></i> */}
                            </div>
                          </div>

                          <p>{a.body}</p>
                          <div className="row">
                            <div className="col-6">
                              <Link
                                to={`/profile/${a.question.user._id}`}
                                className="iconColor"
                              >
                                Asked By:{" "}
                                <span className="text-decoration-underline">
                                  {a.question.user.name}
                                </span>
                              </Link>
                            </div>
                            <div className="col-6 text-end">
                              <small className="pe-2">
                                {new Date(a.question.createdAt).toLocaleString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                  }
                                )}
                              </small>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                              <Link
                                to={`/profile/${a.question.user._id}`}
                                className="iconColor"
                              >
                                Answered By:{" "}
                                <span className="text-decoration-underline">
                                  {a.user.name}
                                </span>
                              </Link>
                            </div>
                            <div className="col-6 text-end">
                              <small className="pe-2">
                                {new Date(a.createdAt).toLocaleString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  hour12: true,
                                })}
                              </small>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                              <div>
                                <p className="btn btn-sm rounded-8 text-capitalize">
                                  {" "}
                                  {a.votes}{" "}
                                  <i className="fi fi-rs-social-network"></i>{" "}
                                  UpVote{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-6 text-end">
                              <div className="dropdown">
                                <button
                                  className="btn btn-sm dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fi fi-ss-share"></i>
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <li>
                                    <button
                                      className="dropdown-item"
                                      onClick={() => handleCopy(questionUrl)}
                                    >
                                      Copy Link
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="dropdown-item"
                                      onClick={() =>
                                        handleShareWhatsApp(questionUrl)
                                      }
                                    >
                                      Share on WhatsApp
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="dropdown-item"
                                      onClick={() =>
                                        handleShareLinkedIn(questionUrl)
                                      }
                                    >
                                      Share on LinkedIn
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            ) : (
              <p>You have not answered any questions.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
