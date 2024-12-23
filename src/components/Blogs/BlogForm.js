import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import config from '../../helper/config';
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'; 
const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [user, setUser] = useState(null);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = Cookies.get('Codesaarthi-token');
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
    const id = user._id;
    if (!id) {
      console.log("please login first");
      window.location.href = "/login";
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("content", content);
      formData.append("image", image);
      formData.append("idAuthor", id);

      const response = await axios.post(
        `${config.BASE_URL}/article/createarticle`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) { 
        setLoading(false);
        setTitle("");
        setDescription("");
        setContent("");
        setImage(null);
        setImagePreview(null);
        Navigate(`/blog/${response.data._id}`);
      } else {
        console.log("Failed to post blog", response);
      }
    } catch (error) {
      console.error("Error posting blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="">
        <div className="bg-slate-200 dark:bg-gray-800 p-3">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full bg-dark border-0 rounded-8 p-2 text-light mb-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <textarea
              rows={4}
              className="w-full bg-dark rounded-8 border-0 p-2 mb-3 text-light"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
            <div className="my-3">
              <JoditEditor
                ref={editor}
                className="text-dark"
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
                  className="btn bg-warning text-white capitalize"
                  disabled={loading}
                >
                  {loading ? "Posting..." : "Post Blog"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogForm;
