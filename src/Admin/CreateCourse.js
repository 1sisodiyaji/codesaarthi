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
  const [loading, setLoading] = useState(false);
  const editor = useRef(null); 
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);

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

        if (response.data.status === "success") { 
            setAdmin(true);
        } else {
          toast.error("Failed to fetch user information!", { theme: "dark" });
        }
      } catch (error) {
        toast.error("Error fetching user information !", { theme: "dark" });
        console.error("Error fetching user information:", error);
      }
    };

    fetchUserData();
  }, []);

  const [course, setCourse] = useState({
    title: "",
    description: "",
    thumbnailImage: null,
    topics: [{ title: "", details: "", image: null, imagePreview: null, headpoints: "" }],
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

    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only JPEG, PNG, JPG, WebP, and SVG formats are allowed.");
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
        { title: "", details: "", image: null, imagePreview: null, headpoints: "" },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", course.title);
      formData.append("description", course.description);
      formData.append("thumbnailImage", thumbnailImage);
      formData.append("author", 'Codesaarthi');
      
      // Append each topic's data to formData
      course.topics.forEach((topic, index) => {
        formData.append(`topics[${index}][title]`, topic.title);
        formData.append(`topics[${index}][details]`, topic.details);
        formData.append(`topics[${index}][headpoints]`, topic.headpoints);
        if (topic.image) {
          formData.append(`topics[${index}][image]`, topic.image);
        }
      });

      const response = await axios.post(
        `${config.BASE_URL}/Admin/Createcourses`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        setLoading(false);
        toast.success("Course Created successfully", { theme: "dark" });
        navigate("/Admin");
      } else {
        setLoading(false);
        toast.error("Course Creation Failed: " + response.data.message, {
          theme: "dark",
        });
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error Creating Course. Please try again later.", {
        theme: "dark",
      });
    }
  };

  const handleTagKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = e.target.value.trim();
      if (value) {
        const topics = [...course.topics];
        topics[index].headpoints += value + ", ";
        setCourse({ ...course, topics });
        e.target.value = "";
      }
    }
  };

  return (
    <>
      <ToastContainer />
      {admin ? (
        <div className="container-fluid">
          <div className="container">
            <h1 className="text-center py-2">Create a New Course</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
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

              <div className="form-group my-2">
                <label>Course Thumbnail Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  onChange={handleThumbnailImageChange}
                  required
                />
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
                    <label>Topic Image</label>
                    <input
                      type="file"
                      className="form-control-file"
                      name="image"
                      onChange={(e) => handleTopicChange(index, e)}
                    />
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
                    <input
                      type="text"
                      className="form-control"
                      name="headpoints"
                      value={topic.headpoints}
                      onChange={(e) => handleTopicChange(index, e)}
                      placeholder="Enter heading points separated by commas"
                      onKeyDown={(e) => handleTagKeyDown(e, index)}
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
                    {loading ? "Loading..." : "Create Course"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1>Access Denied</h1>
          <p>You do not have the necessary permissions to view this page.</p>
        </div>
      )}
    </>
  );
};

export default CreateCourse;
