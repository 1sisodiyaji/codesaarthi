import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config/config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

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
        console.log(response);
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
        <div className="card" aria-hidden="true" style={{ width: '350px' }}>
          <div className="text-center">
            <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721031578/loader_bhnpfb.gif" style={{ height: '125px', width: '115px' }} className="card-img-top" alt="..." />
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
            <a href="/" className="btn btn-secondary disabled placeholder col-12 text-capitalize" aria-disabled="true">Loading Blogs list</a>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      toast.error('error', { theme: 'dark' })
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

  const upvoteAnswer = async (id) => {
    const token = Cookies.get('token');
    try {
      const response = await axios.post(
        `${config.BASE_URL}/article/article/votes/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBlogs(blogs.map(blog => blog._id === id ? { ...blog, votes: response.data.votes } : blog));
    } catch (error) {
      console.error('Error upvoting the answer:', error);
    }
  };
  const handleCopy = (url) => {
    navigator.clipboard.writeText(url)
      .then(() => toast.success("Link Copied Successfully"))
      .catch(err => console.error('Failed to copy: ', err));
  };

  const handleShareWhatsApp = (url) => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShareLinkedIn = (url) => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, '_blank');
  };

  return (

    <>
      <ToastContainer />
      {blogs.map((blog) => {
        const questionUrl = `${window.location.origin}/blog/${blog.slug}`;
        return (
          <div key={blog._id} className="  m-1 my-3 shadow-lg borderColor rounded-4">
            <Link to={`/blog/${blog.slug}`}> <h4 className=" iconColor ps-2 pt-2 heading">{blog.title}</h4> </Link>
            <small className="ps-2">Posted by: <Link to = {`/profile/${blog.idAuthor.username}`} className="text-decoration-underline iconColor" >{blog.idAuthor ? blog.name : "Anonymous"}</Link></small>
            <img
              src={blog.image}
              alt={blog.title}
              title={blog.title}
              loading="lazy"
              className="img-fluid imageHeight mb-3"
            /> <br />
            <div className="p-2">
              <small>{truncateDescription(blog.description, 50)} ...</small>

              <hr />
              <div className="row">
                <div className="col-6 text-start ps-3 d-flex">
                  <div onClick={() => upvoteAnswer(blog._id)}>
                    <p className="btn btn-sm rounded-8 text-capitalize">  {blog.votes} <i className="fi fi-rs-social-network"></i> UpVote </p>
                  </div>

                  <div className="dropdown ms-2 ">
                    <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fi fi-ss-share"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li><button className="dropdown-item" onClick={() => handleCopy(questionUrl)}>Copy Link</button></li>
                      <li><button className="dropdown-item" onClick={() => handleShareWhatsApp(questionUrl)}>Share on WhatsApp</button></li>
                      <li><button className="dropdown-item" onClick={() => handleShareLinkedIn(questionUrl)}>Share on LinkedIn</button></li>
                    </ul>
                  </div>

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
        )
      })}
    </>

  );
};

export default BlogList;
