import React, { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../config/config";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
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
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

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
      const token = Cookies.get('token');
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

  useEffect(() => {
    const fetchBlogs = async () => {
      if (user) {
        try {
          const response = await axios.post(
            `${config.BASE_URL}/article/getbyidAuthor/${user._id}`
          );
          if (response.data) {
            toast.success("Blogs written by you", { theme: "dark" });
            setBlogs(response.data);
          } else {
            toast.error("Error fetching blogs, no blogs found!", { theme: "dark" });
          }
        } catch (error) {
          toast.warn("You have not posted any blogs", { theme: "dark" });
        }
      }
    };

    fetchBlogs();
  }, [user]);

  useEffect(() => {
    const fetchQuestions = async () => {
      if (user) {
        try {
          const response = await axios.post(
            `${config.BASE_URL}/article/getQuestionsByidAuthor/${user._id}`
          );
          if (response.data) {
            toast.success("Questions asked by you", { theme: "dark" });
            setQuestion(response.data);
          } else {
            toast.error("Error fetching questions, no questions found!", { theme: "dark" });
          }
        } catch (error) {
          toast.warn("You have not asked any questions", { theme: "dark" });
        }
      }
    };

    const fetchAnswers = async () => {
      if (user) {
        try {
          const response = await axios.post(
            `${config.BASE_URL}/article/getAnswerByAuthorId/${user._id}`
          );
          if (response.data) {
            toast.success("Answers given by you", { theme: "dark" });
            setAnswer(response.data);
          } else {
            toast.error("Error fetching answers, no answers found!", { theme: "dark" });
          }
        } catch (error) {
          toast.warn("You have not answered any questions", { theme: "dark" });
        }
      }
    };

    fetchQuestions();
    fetchAnswers();
  }, [user]);

  if (loading) {
    return (
      <div className="vh-100 text-warning d-flex justify-content-center align-items-center">
        <div className="card" aria-hidden="true" style={{ width: '350px' }}>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721031578/loader_bhnpfb.gif"
              style={{ height: '125px', width: '115px' }}
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
            <a href='/' className="btn btn-secondary disabled placeholder col-6" aria-disabled="true"> Loading </a>
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
    navigator.clipboard.writeText(url)
      .then(() => toast.success("Link Copied Successfully"))
      .catch(err => console.error('Failed to copy: ', err));
  };

  const handleShareWhatsApp = (url) => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShareLinkedIn = (url) => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, '_blank');
  };

  const upvote = async (id) => {
    const token = Cookies.get('token');
    try {
      const response = await axios.post(
        `${config.BASE_URL}/article/questions/votes/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      ); console.log(response);
      setQuestion(question.map(q => q._id === id ? { ...q, votes: response.data.votes } : q));
    } catch (error) {
      console.error('Error upvoting the question:', error);
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
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
              {editing && (
                <input type="file" accept="image/*" onChange={handleImageChange} />
              )}
            </div>
            <div className="col-md-8">
              {editing ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
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
                    <label htmlFor="institute" className="form-label">Institute</label>
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
                    <label htmlFor="location" className="form-label">Location</label>
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
                    <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
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
                    <label htmlFor="contact" className="form-label">Contact</label>
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
                    <label htmlFor="socialMediaLinks" className="form-label">Social Media Links</label>
                    <input
                      type="text"
                      id="socialMediaLinks"
                      name="socialMediaLinks"
                      className="form-control"
                      value={formData.socialMediaLinks}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Updating...' : 'Update Profile'}
                  </button>
                </form>
              ) : (
                <div>
                  <h3>{user.name}</h3>
                  <p><strong>Institute:</strong> {user.institute}</p>
                  <p><strong>Location:</strong> {user.location}</p>
                  <p><strong>Date of Birth:</strong> {user.dateOfBirth}</p>
                  <p><strong>Contact:</strong> {user.contact}</p>
                  <p><strong>Social Media Links:</strong> {user.socialMediaLinks}</p>
                  <button className="btn rounded-8 mx-2 text-capitalize" onClick={editingMode}>
                    Edit Profile <i className="fi fi-sr-pen-clip"></i>
                  </button>
                  <button className="btn rounded-8 mx-2 text-capitalize" onClick={() => deleteUser(user._id)}>
                    Delete Account <i className="fi fi-sr-trash-xmark"></i>
                  </button>
                  <button className="btn rounded-8 mx-2 text-capitalize" onClick={logout}>
                    Logout <i className ="fi fi-br-sign-out-alt"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="mt-4">
          <h4>Your Blogs</h4>
          {blogs.length > 0 ? (
            <div className="row">
             {blogs.map((blog) => (
                    <div key={blog._id}  className="card bg-black my-2 shadow-6 p-3 col-lg-6">
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

        <div className="mt-4">
          <h4>Your Questions</h4>
          {question.length > 0 ? (
            <>
            <div className="row">
              {question && question.map((question) => {
                const questionUrl = `${window.location.origin}/Questions/${question._id}`;
                return (
                  <div key={question._id} className='shadow-lg borderColor rounded-4 p-3  my-2 col-lg-6'>
                    <div className="row">
                      <div className="col-10">
                        <Link to={`/Questions/${question._id}`} className='iconColor' style={{ cursor: 'pointer' }}>
                          <h2>{question.title} ?</h2>
                        </Link>
                      </div>
                      <div className="col-2 text-end">
                        {/* <i className="fi fi-sr-circle-ellipsis"></i> */}
                      </div>
                    </div>

                    <p>{question.body}</p>
                    <div className="row">
                      <div className="col-6">
                        <Link to={`/profile/${question.user._id}`} className='iconColor'>
                          Asked By: <span className='text-decoration-underline'>{question.user.name}</span>
                        </Link>
                      </div>
                      <div className="col-6 text-end">
                        <p className='pe-2'>
                          {new Date(question.createdAt).toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}
                        </p>

                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div onClick={() => upvote(question._id)}>
                            <p className="btn btn-sm rounded-8 text-capitalize">  {question.votes} <i className="fi fi-rs-social-network"></i> UpVote </p>
                          </div>

                        </div>
                        <div className="col-6 text-end">
                          <div className="dropdown">
                            <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-ss-share"></i>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <li><button className="dropdown-item" onClick={() => handleCopy(questionUrl)}>Copy Link</button></li>
                              <li><button className="dropdown-item" onClick={() => handleShareWhatsApp(questionUrl)}>Share on WhatsApp</button></li>
                              <li><button className="dropdown-item" onClick={() => handleShareLinkedIn(questionUrl)}>Share on LinkedIn</button></li>
                            </ul>
                          </div>
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

        <div className="mt-4">
          <h4>Your Answers</h4>
          {answer.length > 0 ? ( 
              <>
               <div className="row">
                {answer && answer.map((a) => {
                const questionUrl = `${window.location.origin}/Questions/${a.question._id}`;
                return (
                  <div key={a._id} className='shadow-lg borderColor rounded-4 p-3 my-2 col-lg-6'>
                  <div className="row">
                    <div className="col-10">
                      <Link to={`/Questions/${a.question._id}`} className='iconColor' style={{ cursor: 'pointer' }}>
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
                      <Link to={`/profile/${a.question.user._id}`} className='iconColor'>
                        Asked By: <span className='text-decoration-underline'>{a.question.user.name}</span>
                      </Link>
                    </div>
                    <div className="col-6 text-end">
                      <small className='pe-2'>
                        {new Date(a.question.createdAt).toLocaleString("en-US", {
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
                      <Link to={`/profile/${a.question.user._id}`} className='iconColor'>
                        Answered By: <span className='text-decoration-underline'>{a.user.name}</span>
                      </Link>
                    </div>
                    <div className="col-6 text-end">
                      <small className='pe-2'>
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
                          <p className="btn btn-sm rounded-8 text-capitalize">  {a.votes} <i className="fi fi-rs-social-network"></i> UpVote </p>
                        </div>

                      </div>
                      <div className="col-6 text-end">
                        <div className="dropdown">
                          <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fi fi-ss-share"></i>
                          </button>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><button className="dropdown-item" onClick={() => handleCopy(questionUrl)}>Copy Link</button></li>
                            <li><button className="dropdown-item" onClick={() => handleShareWhatsApp(questionUrl)}>Share on WhatsApp</button></li>
                            <li><button className="dropdown-item" onClick={() => handleShareLinkedIn(questionUrl)}>Share on LinkedIn</button></li>
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
      </div>
    </>
  );
};

export default Profile;
