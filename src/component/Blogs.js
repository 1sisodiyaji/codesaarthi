import React, { useState } from 'react';
import BlogForm from './Blogs/BlogForm'
import { Link, Navigate } from 'react-router-dom'
import BlogList from './Blogs/BlogList';

const Blogs = () => {
    const [showBlogForm, setShowBlogForm] = useState(false);

    const handleNewPost = () => {
      setShowBlogForm(true);
    };
    return (
   <>
  <div className="container-fluid design">
        <button
          className='btn w-100 bg-black text-warning text-capitalize'
          onClick={handleNewPost}
        >
          Post Your Own Blog
        </button>
        {showBlogForm && <BlogForm />}



        <BlogList/>
      </div>
   
   
   </>
  )
}

export default Blogs