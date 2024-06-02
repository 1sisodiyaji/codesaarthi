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
  <div className="container-fluid design py-lg-5 vh-100" style={{backgroundColor:'#1E1E1E'}}>
        <button
          className='btn w-100 bg-black text-warning text-capitalize mt-2'
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