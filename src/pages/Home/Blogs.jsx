import React, { useState } from 'react';
import BlogForm from '../../component/Blogs/BlogForm';
import BlogList from '../../component/Blogs/BlogList';
import { Helmet } from "react-helmet";

const Blogs = () => {
  const [showBlogForm, setShowBlogForm] = useState(false);

  const toggleBlogForm = () => {
    setShowBlogForm(prevState => !prevState);
  };

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://codesaarthi.com/blog`} />
        <meta name="description" content="This is an opinion sharing platform where users can share their opinion at their freedom." />
        <title>Blogs | Codesaarthi</title>
        <meta property="og:title" content="Blogs | Codesaarthi" />
        <meta property="og:description" content="This is an opinion sharing platform where users can share their opinion at their freedom." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png " />
        <meta property="og:url" content={`https://codesaarthi.com/blog`} />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div className="container-fluid design p-0" style={{ minHeight: '100vh' }}>
        <div className="px-1">
          <button className="btn btn-block text-capitalize my-2" onClick={toggleBlogForm}>
            {showBlogForm ? 'Not Now ..' : 'Post Your Own Blog'}
          </button>
        </div>
        {showBlogForm && <BlogForm toggleBlogForm={toggleBlogForm} />}
        <BlogList />
      </div>
    </>
  );
}

export default Blogs;
