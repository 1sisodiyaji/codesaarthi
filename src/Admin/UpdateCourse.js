import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import config from "../config/config";
import JoditEditor from "jodit-react";
import "react-toastify/dist/ReactToastify.css"; 
import { ToastContainer , toast } from "react-toastify";

const UpdateCourse = () => {
  const { title } = useParams();
  const [imagePreview, setImagePreview] = useState(null);
  const [course, setCourse] = useState({
    title: "",
    description: "",
    thumbnailImage: null,
    topics: [{ _id: "", title: "", details: "", image: null, imagePreview: null }],
  });
  
  const editor = useRef(null);
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

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.post(`${config.BASE_URL}/Admin/coursesByTitle/${title}`);
        const fetchedCourse = response.data[0];
        setCourse({
          title: fetchedCourse.title,
          description: fetchedCourse.description,
          thumbnailImage: fetchedCourse.thumbnailImage,
          topics: fetchedCourse.topics.map(topic => ({
            _id: topic._id || "",
            title: topic.title || "",
            details: topic.details || "",
            image: topic.image || null,
            imagePreview: null, // Assuming no image preview needed for existing images
          })),
        });
        setImagePreview(fetchedCourse.thumbnailImage);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };
  
    fetchCourse();
  }, [title]);
  

  // Handle input change for course title and description
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  // Handle input change for topics (title, details, image)
  const handleTopicChange = (index, e) => {
    const { name, value, files } = e.target;
    const topics = [...course.topics];
    if (name === "image" && files.length > 0) {
      const file = files[0];
      topics[index].image = file;
      topics[index].imagePreview = URL.createObjectURL(file);
    } else {
      topics[index][name] = value;
    }
    setCourse({ ...course, topics });
  };

  // Add a new topic to the course
  const addTopic = () => {
    setCourse({
      ...course,
      topics: [...course.topics, { _id: "", title: "", details: "", image: null, imagePreview: null }],
    });
  };

  // Handle form submission for updating the course
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("title", course.title);
    formData.append("description", course.description);
    formData.append("thumbnailImage", course.thumbnailImage);
  
    formData.append(
      "topics",
      JSON.stringify(course.topics.map(topic => ({
        _id: topic._id,
        title: topic.title,
        details: topic.details,
        image: topic.image instanceof File ? topic.image : null,
      })))
    );
  
    try {
      const response = await axios.put(`${config.BASE_URL}/Admin/update-course/${title}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        console.log("Course updated successfully");
        navigate("/Admin");
      }
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };
  

  return (
    <>
    <ToastContainer/>
    {admin ?
    <>
  <div className="container-fluid bg-dark">
        <div className="container">
          <h1 className="text-warning py-2">Update Course</h1>
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
                onChange={(e) => setCourse({ ...course, thumbnailImage: e.target.files[0] })}
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
                  onChange={(newContent) => {}}
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
                  Update Course
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

export default UpdateCourse;
