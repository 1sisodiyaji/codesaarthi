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
      <div className="vh-100 text-warning d-flex justify-content-center align-items-center">
      <div class="card" aria-hidden="true" style={{width: '350px'}}>
    <div class="text-center">
      <img src="img/loader.gif" style={{height: '125px', width: '115px'}} class="card-img-top" alt="..." />
  </div>
    <div class="card-body">
      <h5 class="card-title placeholder-glow">
        <span class="placeholder col-6"></span>
      </h5>
      <p class="card-text placeholder-glow">
        <span class="placeholder col-7"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-6"></span>
        <span class="placeholder col-8"></span>
      </p>
      <a class="btn btn-secondary disabled placeholder col-6" aria-disabled="true"></a>
    </div>
  </div>
    </div>
    );
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
          <div key={blog._id} className="card bg-dark text-light my-3 shadow-6 p-3 ">
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
