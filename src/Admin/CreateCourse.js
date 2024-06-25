import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import config from "../config/config";
import JoditEditor from "jodit-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [loading, setLoading] = useState(null);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const navigate = useNavigate();
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


  const [course, setCourse] = useState({
    title: "",
    description: "",
    thumbnailImage: null,
    topics: [{ title: "", details: "", image: null, imagePreview: null }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleTopicChange = (index, e) => {
    const { name, value, files } = e.target;
    const topics = [...course.topics];
    if (files) {
      topics[index][name] = files[0];
      topics[index].imagePreview = URL.createObjectURL(files[0]);
    } else {
      topics[index][name] = value;
    }
    setCourse({ ...course, topics });
  };

  const handleThumbnailImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only JPEG, PNG, JPG, and WebP formats are allowed.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("File size should be less than 2MB.");
      return;
    }

    setThumbnailImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const addTopic = () => {
    setCourse({
      ...course,
      topics: [
        ...course.topics,
        { title: "", details: "", image: null, imagePreview: null },
      ],
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    const formData = new FormData();
    formData.append("title", course.title);
    formData.append("description", course.description);
    formData.append("thumbnailImage", thumbnailImage);

    formData.append(
      "topics",
      JSON.stringify(
        course.topics.map((topic) => ({
          title: topic.title,
          details: topic.details,
        }))
      )
    );

    course.topics.forEach((topic) => {
      if (topic.image) {
        formData.append("images", topic.image);
      }
    }); 
    try {
      const response = await fetch(`${config.BASE_URL}/Admin/CreateCourse`, {
        method: 'POST',
        body: formData,
      });
    
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
    
      const data = await response.json();
      console.log('Response data:', data);
    
      if (data.status === "success") {
        console.log("Course created successfully");
        setLoading(false);
        toast.success("Course Created successfully", { theme: "dark" });
        navigate("/Admin");
      } else {
        console.log("Course creation failed:", data.message);
        setLoading(false);
        toast.error("Course Creation Failed: " + data.message, { theme: "dark" });
      }
    } catch (error) {
      console.error("Error creating course:", error);
      setLoading(false);
      toast.error("Error Creating Course. Please try again later.", {
        theme: "dark",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      {admin ?
        <>
          <div className="container-fluid bg-dark">
            <div className="container">
              <h1 className="text-warning py-2">Create a New Course</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group my-2">
                  <label className="text-light">Course Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={course.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group my-2">
                  <label className="text-light">Course Description</label>
                  <textarea
                    className="form-control text-dark"
                    name="description"
                    value={course.description}
                    onChange={handleInputChange}
                    required
                    placeholder="Write a short description"
                  />
                </div>

                <div className="form-group my-2">
                  <label className="text-light">Course Thumbnail</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailImageChange}
                    style={{ display: "none" }}
                    id="thumbnailInput"
                  />
                  <label htmlFor="thumbnailInput">
                    <i
                      className="fi fi-rr-graphic-style text-warning mx-2"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </label>
                </div>
                {imagePreview && (
                  <div className="mb-3">
                    <img
                      src={imagePreview}
                      alt="Thumbnail"
                      style={{ maxHeight: "300px" }}
                      className="img-fluid"
                    />
                  </div>
                )}

                {course.topics.map((topic, index) => (
                  <div key={index} className="form-group my-2">
                    <label className="text-light">Topic Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={topic.title}
                      onChange={(e) => handleTopicChange(index, e)}
                      required
                    />
                    <label className="text-light my-2">Topic Details</label>
                    <JoditEditor
                      ref={editor}
                      value={topic.details}
                      tabIndex={1}
                      onBlur={(newContent) => {
                        const topics = [...course.topics];
                        topics[index].details = newContent;
                        setCourse({ ...course, topics });
                      }}
                      onChange={(newContent) => { }}
                    />
                    <label className="text-light my-2">Topic Image</label>
                    <input
                      type="file"
                      className="form-control"
                      name="image"
                      onChange={(e) => handleTopicChange(index, e)}
                    />
                    {topic.imagePreview && (
                      <div className="mb-3">
                        <img
                          src={topic.imagePreview}
                          alt={`Topic ${index}`}
                          style={{ maxHeight: "200px" }}
                          className="img-fluid"
                        />
                      </div>
                    )}
                  </div>
                ))}
                <div className="row py-2">
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-warning text-capitalize"
                      onClick={addTopic}
                    >
                      Add Topic
                    </button>
                  </div>
                  <div className="col-6 text-end">
                    <button
                      type="submit"
                      className="btn btn-primary text-capitalize"
                    >
                      {loading ? "Creating" : "Create Course "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
        :
        <>
          <div className="vh-100 bg-dark text-danger  d-flex justify-content-center align-items-center">
            <h6>Access Blocked by admin</h6>
          </div>
        </>
      }

    </>
  );
};

export default CreateCourse;
