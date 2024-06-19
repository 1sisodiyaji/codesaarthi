import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config/config";
import JoditEditor from "jodit-react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateBlog = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
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
            console.log("Failed to fetch user information");
          }
        } catch (error) {
          console.error("Error fetching user information:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.post(`${config.BASE_URL}/article/getbyid/${id}`);
        toast.success("Blog Fetched Successfully", { theme: "dark" });
        const blog = response.data;
        setTitle(blog.title);
        setDescription(blog.description);
        setContent(blog.content);
        setImagePreview(blog.image);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        toast.error("Error fetching blogs. Please try again later.", { theme: "dark" });
      }
    };

    fetchBlogData();
  }, [id]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check if file type is allowed
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only JPEG, PNG, JPG, and WebP formats are allowed.");
      return;
    }

    // Check file size (less than 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert("File size should be less than 2MB.");
      return;
    }

    // Convert to WebP format
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("content", content);
      if (image) {
        formData.append("image", image);
      }

      const response = await axios.put(
        `${config.BASE_URL}/article/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Blog Updated Successfully.", { theme: "dark" });
        setLoading(false);
         navigate(`/blog/${id}`); 
      } else {
        console.log("Failed to update blog", response);
        toast.error("Blog Updated Failed", { theme: "dark" });
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      toast.error("Error Updating blogs. Please try again later.", { theme: "dark" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     <ToastContainer/>
      <div className="container-fluid g-0 bg-dark design py-4">
        <div className="container vh-100 py-lg-5">
        <div className="card bg-black p-3">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-100 bg-dark border-0 rounded-8 p-2 text-light mb-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <textarea
              rows={4}
              className="w-100 bg-dark rounded-8 border-0 p-2 mb-3 text-light"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
            <div className="my-3">
              <JoditEditor
                ref={editor}
                value={content}
                tabIndex={1}
                onBlur={(newContent) => setContent(newContent)}
                onChange={(newContent) => {}}
              />
            </div>
            <div className="row my-2">
              <div className="col-8 d-flex">
                <div className="mb-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    id="fileInput"
                  />
                  <label htmlFor="fileInput">
                    <i
                      className="fi fi-rr-graphic-style text-warning mx-2"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </label>
                </div>
                <div>
                  {imagePreview && (
                    <div className="mb-3">
                      <img
                        src={imagePreview}
                        alt="Selected"
                        style={{ maxHeight: "300px" }}
                        className="img-fluid"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-4 text-end">
                <button
                  type="submit"
                  className="btn btn-dark text-warning text-capitalize"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update Blog"}
                </button>
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default UpdateBlog;
