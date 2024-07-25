import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config/config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
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
      <div className="card" aria-hidden="true" style={{width: '350px'}}>
    <div className="text-center">
      <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721021304/loader_wqvahg.gif" style={{height: '125px', width: '115px'}} className="card-img-top" alt="..." />
  </div>
    <div className="card-body">
      <h5 className="card-title placeholder-glow">
        <span className="placeholder col-6"></span>
      </h5>
      <p className="card-text placeholder-glow">
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-4"></span>
        <span className="placeholder col-6"></span>
        <span className="placeholder col-8"></span>
      </p>
      <a href="/" className="btn btn-secondary disabled placeholder col-6" aria-disabled="true">Loading Blogs list</a>
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

  function truncateDescription(description, wordLimit) {
    // Split the description into an array of words
    const words = description.split(' ');

    // Check if the number of words exceeds the word limit
    if (words.length > wordLimit) {
        // Truncate the array of words to the specified limit and join them back into a string
        return words.slice(0, wordLimit).join(' ') + '...';
    }

    // If the number of words is within the limit, return the original description
    return description;
}
 
  return (
   
      <>
      <ToastContainer/>
       { blogs.map((blog) => (
          <div key={blog._id} className="  m-1 my-3 shadow-lg borderColor rounded-4">
            <Link to = {`/blog/${blog._id}`}> <h4 className=" iconColor ps-2 pt-2 heading">{blog.title}</h4> </Link>
            
            <img
              src={blog.image}
              alt={blog.title}
              title={blog.title}
              loading="lazy"
              className="img-fluid imageHeight mb-3"
            /> <br/>
            <div className="p-2">
            <small>{truncateDescription(blog.description, 50)} ...</small>
             
            <hr />
            <div className="row">
              <div className="col-6 text-start ps-3">
              <small>Posted by: {blog.idAuthor ? blog.name : "Anonymous" }</small>
              </div>
              <div className="col-6 text-end pe-3">
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
          </div>
        )) }
      </>
     
  );
};

export default BlogList;
