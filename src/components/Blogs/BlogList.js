import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../helper/config";
import { Toaster, toast } from 'react-hot-toast'; 
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { handleCopyText, handleShareLinkedIn, handleShareWhatsApp } from "../../helper/Share";
import TimeConverter from "../../helper/TimeConverter";
import TruncateText from "../../helper/TruncateText";

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
 
  if (!Array.isArray(blogs)) {
    return <p>No blogs available</p>;
  }
 
  const upvoteAnswer = async (id) => {
    const token = Cookies.get('Codesaarthi-token');
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

  return (

    <>
      <Toaster />
      {blogs.map((blog) => {
        const questionUrl = `${window.location.origin}/blog/${blog.slug}`;
        return (
          <div key={blog._id} className=" bg-slate-200 dark:bg-gray-800 text-black dark:text-white  m-1 my-3 shadow-2xl  rounded-4">
            <Link to={`/blog/${blog.slug}`}> <h4 className="ps-2 pt-2 heading">{blog.title}</h4> </Link>
            <small className="ps-2">Posted by: <Link to = {`/profile/${blog.idAuthor.username}`} className="underline " >{blog.idAuthor ? blog.name : "Anonymous"}</Link></small>
            <img
              src={blog.image}
              alt={blog.title}
              title={blog.title}
              loading="lazy"
              className="mb-3"
            /> <br />
            <div className="p-2 mb-2">
              <small>
                <TruncateText text = {blog.description} maxLength = {'600'}/>
              </small>  
              <div className="flex justify-between items-center">
               
                  <div onClick={() => upvoteAnswer(blog._id)}>
                    <p className="btn btn-sm rounded-8 text-capitalize">  {blog.votes} <i className="fi fi-rs-social-network"></i> UpVote </p>
                  </div>

                  <div>
                  <small>
                    <TimeConverter date= {blog.date}/> 
                  </small>
                  <div className="dropdown">
                        <div tabIndex={0} role="button" className='btn btn-sm'>Share <i className="fi fi-sr-share"></i>
                          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-28 space-y-4 p-4 shadow text-center">
                            <li className="cursor-pointer" onClick={() => handleCopyText(`${questionUrl}`)}>Copy</li>
                            <li className="cursor-pointer" onClick={() => handleShareWhatsApp(`${questionUrl}`)}>Whatsapp</li>
                            <li className="cursor-pointer" onClick={() => handleShareLinkedIn(`${questionUrl}`)}>Linkedin</li>
                          </ul>
                        </div>
                   </div>
                  
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
