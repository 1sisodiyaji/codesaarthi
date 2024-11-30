import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import WidgetCloudinary from "../component/WidgetCloudinary";
import Cookies from 'js-cookie';

const CreateCourse = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showTopicsForm, setShowTopicsForm] = useState(false);
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);
  const user = useSelector((state) => state.user.user);

  const [course, setCourse] = useState({
    title: "",
    description: "",
    thumbnailImage: null,
    topics: [{ title: "", details: "", image: null, imagePreview: null, headpoints: [] }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleTopicChange = (index, e) => {
    const { name, value } = e.target;
    const topics = [...course.topics];
    if (name === "image") {
      topics[index].image = value;
      topics[index].imagePreview = URL.createObjectURL(value);
    } else {
      topics[index][name] = value;
    }
    setCourse({ ...course, topics });
  };

  const handleThumbnailImageUpload = (info) => {
    setThumbnailImage(info.secure_url);
    setImagePreview(info.secure_url);
  };

  const handleTopicImageUpload = (index, info) => {
    const topics = [...course.topics];
    topics[index].image = info.secure_url;
    topics[index].imagePreview = info.secure_url;
    setCourse({ ...course, topics });
  };

  const handleShowTopicsForm = () => {
    if (course.title && course.description && thumbnailImage) {
      setShowTopicsForm(true);
    } else {
      alert("Please fill out the title, description, and thumbnail image before proceeding.");
    }
  };

  const addTopic = () => {
    setCourse({
      ...course,
      topics: [
        ...course.topics,
        { title: "", details: "", image: null, imagePreview: null, headpoints: [] },
      ],
    });
  };

  const addHeadpoint = (index, value) => {
    const topics = [...course.topics];
    if (value.trim() !== "") {
      topics[index].headpoints.push(value.trim());
      setCourse({ ...course, topics });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // Prepare form data
      const formData = new FormData();
      formData.append("title", course.title);
      formData.append("description", course.description);
      formData.append("thumbnailImage", thumbnailImage); // Ensure this is a URL string
      formData.append("author", 'Codesaarthi');
  
      course.topics.forEach((topic, index) => {
        formData.append(`topics[${index}][title]`, topic.title);
        formData.append(`topics[${index}][details]`, topic.details);
        formData.append(`topics[${index}][headpoints]`, JSON.stringify(topic.headpoints)); // Array of headpoints
        if (topic.image) {
          formData.append(`topics[${index}][image]`, topic.image); // This should be a URL string
        }
      });
  
      // Fetch token for authorization
      const token = Cookies.get('Codesaarthi-token');
      const response = await axios.post(
        `${config.BASE_URL}/Admin/Createcourses`,
        formData,
        {
          headers: { 
            "Authorization": `Bearer ${token}`
          },
        }
      );
  
      if (response.status === 201) {
        setLoading(false);
        toast.success("Course Created successfully", { theme: "dark" });
        navigate("/Admin");
      } else {
        setLoading(false);
        toast.error("Course Creation Failed: " + response.data.message, { theme: "dark" });
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error Creating Course. Please try again later.", { theme: "dark" });
    }
  };
  

  const handleHeadpointChange = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addHeadpoint(index, e.target.value);
      e.target.value = "";
    }
  };

  useEffect(() => {
    if (user && user.isAdmin) {
      setAdmin(true);
    }
  }, [user]);

  return (
    <>
      <ToastContainer />
      {admin ? (
        <div className="container-fluid">
          <div className="container" style={{minHeight: '100vh'}}>
            <h1 className="text-center py-2">Create a New Course</h1>
            {!showTopicsForm ? (
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group my-2">
                  <label>Course Title</label>
                  <input
                    type="text"
                    className="w-100 form-control"
                    name="title"
                    value={course.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group my-2">
                  <label>Course Description</label>
                  <textarea
                    className="w-100 form-control"
                    name="description"
                    value={course.description}
                    onChange={handleInputChange}
                    required
                    placeholder="Write a short description"
                  />
                </div>
                <WidgetCloudinary
                  cloudName="ducw7orvn"
                  uploadPreset="codesaarthi"
                  onSuccess={handleThumbnailImageUpload}
                  buttonText="Upload Thumbnail Image"
                />

                <div className="form-group my-2">
                  <label>Course Thumbnail Image</label>
                  {imagePreview && (
                    <div className="mt-2">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="img-fluid"
                        style={{ maxWidth: "200px", maxHeight: "200px" }}
                      />
                    </div>
                  )}
                </div>

                <div className="form-group my-2">
                  <button
                    type="button"
                    className="btn bg-warning text-capitalize"
                    onClick={handleShowTopicsForm}
                  >
                    Continue to Add Topics
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                {course.topics.map((topic, index) => (
                  <div key={index} className="border rounded p-2 my-2">
                    <h5>Topic {index + 1}</h5>
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={topic.title}
                        onChange={(e) => handleTopicChange(index, e)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Details</label>
                      <textarea
                        className="form-control"
                        name="details"
                        value={topic.details}
                        onChange={(e) => handleTopicChange(index, e)}
                        required
                        placeholder="Write topic details"
                      />
                    </div>

                    <div className="form-group">
                      {course.topics.map((topic, index) => (
                        <WidgetCloudinary
                          key={index}
                          cloudName="ducw7orvn"
                          uploadPreset="codesaarthi"
                          onSuccess={(info) => handleTopicImageUpload(index, info)}
                          buttonText={`Upload Image for Topic ${index + 1}`}
                        />
                      ))}
                      <label>Topic Image</label> <br/>
                      {topic.imagePreview && (
                        <div className="mt-2">
                          <img
                            src={topic.imagePreview}
                            alt="Preview"
                            className="img-fluid"
                            style={{ maxWidth: "200px", maxHeight: "200px" }}
                          />
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Heading Points</label>
                      <div>
                        {topic.headpoints.map((point, i) => (
                          <span key={i} className="badge badge-primary m-1">
                            {point}
                          </span>
                        ))}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter heading points and press Enter"
                        onKeyDown={(e) => handleHeadpointChange(e, index)}
                      />
                    </div>
                  </div>
                ))}

                <div className="form-group row my-2">
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-outline-warning"
                      onClick={addTopic}
                    >
                      Add Topic
                    </button>
                  </div>
                  <div className="col-6 text-right">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Creating..." : "Create Course"}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : (
        <h2 className="text-center">Access Denied</h2>
      )}
    </>
  );
};

export default CreateCourse;
