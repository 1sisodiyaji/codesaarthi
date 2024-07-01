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
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);

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
          if (response.data.user.email === "637golusingh@gmail.com") {
            setAdmin(true);
          }
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
    topics: [{ title: "", details: "", image: null, imagePreview: null, tags: "" }],
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
        { title: "", details: "", image: null, imagePreview: null, tags: "" },
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
      formData.append("thumbnailImage ", thumbnailImage);
      formData.append(
        "topics",
        JSON.stringify(
          course.topics.map((topic) => ({
            title: topic.title,
            details: topic.details,
            tags: topic.tags,
          }))
        )
      );

      course.topics.forEach((topic) => {
        if (topic.image) {
          formData.append("images", topic.image);
        }
      });
      console.log(formData);
      const response = await axios.post(
        `${config.BASE_URL}/Admin/Createcourses`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.status === "success") {
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

  return (
    <>
      <ToastContainer />
      {admin ? (
        <div className="container-fluid">
          <div className="container">
            <h1 className="text-center py-2">Create a New Course</h1>
            <form onSubmit={handleSubmit}>
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
                <label>Course Thumbnail</label>
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
                  <label>Topic Title</label>
                  <input
                    type="text"
                    className="w-100 form-control"
                    name="title"
                    value={topic.title}
                    onChange={(e) => handleTopicChange(index, e)}
                    required
                  />
                  <label>Topic Details</label>
                  <JoditEditor
                    ref={editor}
                    value={topic.details}
                    tabIndex={1}
                    onBlur={(newContent) => {
                      const topics = [...course.topics];
                      topics[index].details = newContent;
                      setCourse({ ...course, topics });
                    }}
                    onChange={(newContent) => {}}
                  />
                  <label htmlFor={`tags-${index}`}>Headpoints (Tags)</label>
                  <input
                    type="text"
                    className="w-100 form-control"
                    id={`tags-${index}`}
                    value={topic.tags}
                    onChange={(e) => handleTopicChange(index, e)}
                    name="tags"
                    placeholder="Enter tags separated by commas"
                  />
                  <label className="my-2">Topic Image</label>
                  <input
                    type="file"
                    className="form-control"
                    name="image"
                    style={{ display: "none" }}
                    id={`topicImage${index}`}
                    onChange={(e) => handleTopicChange(index, e)}
                  />
                  <label htmlFor={`topicImage${index}`}>
                    <i
                      className="fi fi-rr-graphic-style text-warning mx-2"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </label>

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
                    {loading ? "Creating..." : "Create Course"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="vh-100 bg-dark text-danger d-flex justify-content-center align-items-center">
          <h6>Access Blocked by admin</h6>
        </div>
      )}
    </>
  );
};

export default CreateCourse;
