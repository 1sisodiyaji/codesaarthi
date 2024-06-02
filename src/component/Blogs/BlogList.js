import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Config from '../../config/config';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.post(`${Config.BASE_URL}/getBlogsData`);
        console.log(response);
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Error fetching blogs. Please try again later.'); 
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Check if blogs is not an array
  if (!Array.isArray(blogs)) {
    return <p>No blogs available</p>;
  }

  return (
    <div>
      {blogs.length === 0 ? (
        <p>No blogs available</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="card bg-dark text-light my-3 p-3 ">
            <h4 className="text-warning">{blog.title}</h4>
            <img src={blog.image} alt={blog.title} className="img-fluid cardImageHeight mb-3" />
            <p>{blog.description}</p>
            <hr />
            <div className="row">
              <div className="col-6 text-start">
             <small> Posted by: {blog.userName} </small>
              </div>
              <div className="col-6 text-end">
<small>
              {new Date(blog.timestamp).toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })}
              </small>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
