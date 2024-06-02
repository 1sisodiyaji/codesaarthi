import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <img src={blog.image} alt={blog.title} />
          <p>{blog.description}</p>
          <p>{blog.emoji}</p>
          <p>Posted by: {blog.email} at {new Date(blog.timestamp).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
