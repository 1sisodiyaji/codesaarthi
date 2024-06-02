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
        const response = await axios.get('https://server-fl9q.onrender.com/userBlogs/blogs');
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
          <div key={blog._id} className="card bg-dark text-light mb-3 p-3">
            <h2 className="text-warning">{blog.title}</h2>
            <img src={blog.image} alt={blog.title} className="img-fluid mb-3" />
            <p>{blog.description}</p>
            <p>{blog.emoji}</p>
            <p>
              Posted by: {blog.email} at {new Date(blog.timestamp).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
