import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config/config";
import { ToastContainer, Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          `${config.BASE_URL}/article/getArticleData`
        );
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Error fetching blogs. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
     toast.loading('loading...',{theme: 'dark'})
    )
  }

  if (error) {
    return (
       toast.error('error',{theme:'dark'})
    );
  }

  // Check if blogs is not an array
  if (!Array.isArray(blogs)) {
    return <p>No blogs available</p>;
  }

  return (
   
      <>
      <ToastContainer/>
       { blogs.map((blog) => (
          <div key={blog._id} className="card bg-dark text-light my-2 shadow-6 p-3 ">
            <h4 className="text-warning">{blog.title}</h4>
            <img
              src={blog.image}
              alt={blog.title}
              title={blog.title}
              loading="lazy"
              className="img-fluid cardImageHeight mb-3"
            />
            <p>{blog.description}</p>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            <hr />
            <div className="row">
              <div className="col-6 text-start">
              <small>Posted by: {blog.idAuthor ? blog.name : "Anonymous" }</small>
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
          </div>
        )) }
      </>
     
  );
};

export default BlogList;
