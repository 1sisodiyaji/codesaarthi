import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../config/config';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(user ? user.image : "https://codesaarthi.com/img/logo.png");
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
      const response = await axios.post(`${config.BASE_URL}/api/updateProfile`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        toast.success("Profile updated successfully!", { theme: "dark" });
        setEditing(false);
        setLoading(false);
      } else {
        toast.error("Profile updated Failed!", { theme: "dark" });
        console.log("Failed to update profile:", response);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Error updated successfully!", { theme: "dark" });
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
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

        if (response.data.status === 'success') {
          setUser(response.data.user)
          localStorage.setItem("userID", response.data.user._id);
        } else {

          toast.error("Failed to fetch user information!", { theme: "dark" });
        }
      } catch (error) {
        toast.error("Error fetching user information !", { theme: "dark" });
        console.error('Error fetching user information:', error);
      } finally {
      }
    };

    fetchUserData();
  }, []);

  const id = localStorage.getItem('userID');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.post(`${config.BASE_URL}/article/getbyidAuthor/${id}`);
        if (response.data) {
          toast.success("Blogs fetched by you", { theme: "dark" });
          setBlogs(response.data);
        } else {
          toast.error("Error fetching blogs ,  No Blogs Found.!", { theme: "dark" });
        }
      } catch (error) {
        toast.warn("Your have not posted any blog", { theme: "dark" });
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return toast.loading("loading ...", { theme: "dark" });
  }

  if (error) {
    return toast.error("error ..." + error, { theme: "dark" });
  }

  const logout = async () => {
    try { 
      const response = await axios.post(`${config.BASE_URL}/api/logout`);

      if (response.status === 200) {
        localStorage.removeItem('token');
        navigate('/');
      } else {
        console.log('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error); 
    }
  };

  const editingMode = () => {
    setEditing(true);
  }

  const deleteArticle = async (id) => {
    try {
      const response = await axios.delete(`${config.BASE_URL}/article/delete/${id}`);
      if (response.status === 200) {
        toast.success("Article deleted successfully!", { theme: "dark" });
        setBlogs(blogs.filter(blog => blog._id !== id));
      } else {
        toast.error("Failed to delete article!", { theme: "dark" });
      }
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`${config.BASE_URL}/api/delete/${id}`);
      if (response.status === 200) {
        toast.success("User deleted successfully!", { theme: "dark" });
        navigate('/login');
      } else {
        toast.error("Failed to delete user!", { theme: "dark" });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  return (
    <>
      <ToastContainer />
      <Helmet>
        <meta name="keywords" content="Profile , Codesaarthi Account , Account authentication , Profile searcher in codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Profile" />
        <meta name="description" content="Profile page of users in codesaarthi , Defining the profile page of users." />
        <title>Profile | codesaarthi</title>
        <meta property="og:title" content= "Profile | codesaarthi " />
        <meta property="og:description" content="Profile page of users in codesaarthi , Defining the profile page of users." />
        <meta property="og:image" content="{user.image}" />
        <meta property="og:url" content={`https://codesaarthi.com/Profile/{user._id}`} />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div className='bg-dark py-lg-5 design py-3  bg-dark' style={{ minHeight: '100vh' }}>
        {user ?
          <>
            <div className='text-end pe-4 d-lg-block d-md-block d-none'><button className='btn border border-warning text-warning text-capitalize' onClick={logout}>Logout</button></div>

            {editing ?
              <>
                <h3 className='text-warning text-center'> Edit Profile </h3>

                <div className="card bg-black p-lg-4 my-3 p-3 m-1">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-0 py-lg-3">
                      <div className="col-lg-3 col-12 d-flex laign-items-cenetr justify-content-center">
                        <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} id="profileImageInput" />
                        <label htmlFor="profileImageInput">
                          <img
                            src={imagePreview}
                            alt={formData.name}
                            className="img-fluid border border-dark"
                            width={250}
                            height={250} 
                            style={{ borderRadius: "50%", cursor: "pointer" }}
                          />
                        </label>
                      </div>
                      <div className="col-lg-9 col-12 ps-lg-3 my-3">
                        {["name", "institute", "location", "dateOfBirth", "contact", "socialMediaLinks"].map((field) => (
                          <div className="row" key={field}>
                            <div className="col-3">
                              <p className="text-light">{field.charAt(0).toUpperCase() + field.slice(1)}:</p>
                            </div>
                            <div className="col-9">
                              <input
                                type="text"
                                className="w-100 bg-dark border-1 text-light ps-2"
                                name={field}
                                value={formData[field]}
                                onChange={handleInputChange}
                                placeholder={user[field]}
                              />
                            </div>
                          </div>
                        ))}
                        <div className="row">

                          <div className="col-6 text-start">
                            <button type="submit" className="btn btn-danger text-light text-capitalize" disabled={loading} onClick={() => deleteUser(user._id)}>
                              {loading ? "Deleting..." : <>Delete <i className="fi fi-ss-trash-xmark ps-2"></i></>}
                            </button>
                          </div>

                          <div className="col-6 text-end">
                            <button type="submit" className="btn btn-dark text-warning text-capitalize" disabled={loading}>
                              {loading ? "Updating..." : <>Update <i className="fi fi-sr-pen-clip ps-2"></i></>}
                            </button>
                          </div>



                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </>
              :
              <>
                <h3 className='text-warning text-center'>Profile </h3>

                <div className="card bg-black p-lg-4  p-2 m-lg-3 m-0">
                  <div className="row d-flex justify-content-end g-0">
                    <div className="col-6"></div>
                    <div className="col-6 text-end">  <div className="btn border border-dark  text-capitalize text-warning" onClick={editingMode}> Edit <i className="fi fi-sr-user-pen text-warning fa-2x ps-2"></i></div> </div>

                  </div>

                  <div className="row g-0 ">
                    <div className="col-3">
                      <img src={user.image} alt={user.name} title={user.name} className='img-fluid border border-dark p-1' width={250} height={250} style={{ borderRadius: '50%' }} />
                    </div>
                    <div className="col-9 ps-3">
                      <small className='text-light'>Name : {user.name}</small> <br />
                      <small className='text-light'>Email : {user.email}</small> <br />
                      <small className='text-light'>Username : {user.username}</small> <br />
                      <small className='text-light'>D O B : {user.dateOfBirth}</small> <br />
                      <small className='text-light'>Institue : {user.institute}</small> <br />
                      <small className='text-light'>Location : {user.location}</small> <br />
                      <small className='text-light'>Contact : {user.contact}</small> <br />
                      <small className='text-light'>Websites : {user.socialMediaLinks}</small>

                    </div>
                  </div>
                </div>
              </>
            }

            {blogs ?
              <>
                {/* //blogs posted by user  */}
                {blogs.map((blog) => (
                  <div key={blog._id} className="card bg-dark text-light my-2 shadow-6 p-3 ">
                    <Link to={`/blog/${blog._id}`} > <h4 className="text-warning">{blog.title}</h4> </Link>
                    <figure className='text-center'> <img
                      src={blog.image}
                      alt={blog.title}
                      title={blog.title}
                      loading='lazy'
                      className="img-fluid cardImageHeight  mb-3"
                    />
                      <figcaption>{blog.description}</figcaption>
                    </figure>
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    <hr />
                    <div className="row">
                      <div className="col-6 text-start">
                        <small>Posted by: {blog.idAuthor ? blog.name : "Anonymous"}</small>
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
                      <div className="col-6 text-start"><Link to={`/edit-blog/${blog._id}`} className='text-light' > <button className="btn btn-warning text-capitalize ">  Update <i className="fi fi-sr-pen-clip ps-2"></i>  </button> </Link> </div>
                      <div className="col-6 text-end"> <div className="btn btn-danger text-capitalize" onClick={() => deleteArticle(blog._id)}>Delete <i className="fi fi-ss-trash-xmark ps-2"></i> </div> </div>
                    </div>
                  </div>
                ))}
              </>
              :
              <>
                <p className='text-light'>No blogs posted yet</p>
              </>
            }
          </>
          :
          <>
            <h6>No User Found , Please  <Link to="/login" > Login </Link></h6>
          </>
        }

      </div>

    </>
  );
};

export default Profile;

