import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config/config";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[ nextblog , setNextblog] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          `${config.BASE_URL}/article/getbyid/${id}`
        );
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        toast.error("Error fetching blog. Please try again later.", {
          theme: "dark",
        });
        setError("Error fetching blog. Please try again later.");
        setLoading(false);
      }
    };

    const fetchBlogs = async () => {
      try {
        const response = await axios.post(`${config.BASE_URL}/article/getArticleData`);
        const formattedBlogs = response.data.map((blog) => ({
          ...blog,
          formattedDate: new Date(blog.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        }));
        const sortedBlogs = formattedBlogs.sort((a, b) => new Date(a.date) - new Date(b.date));
        setNextblog(sortedBlogs.slice(0, 9));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs()
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="vh-100 text-warning d-flex justify-content-center align-items-center">
        <div className="card" aria-hidden="true" style={{ width: "350px" }}>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721031578/loader_bhnpfb.gif"
              style={{ height: "125px", width: "115px" }}
              className="card-img-top"
              alt="..."
            />
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
            <a href="/"
              className="btn btn-secondary disabled placeholder col-6"
              aria-disabled="true"
            > Getting Blogs For you</a>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="alert alert-warning" role="alert">
          Blog not found
        </div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://codesaarthi.com/blog/${blog._id}`}
        />
        <meta name="description" content={blog.description} />
        <title>{blog.title}</title>
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.image} />
        <meta
          property="og:url"
          content={`https://codesaarthi.com/blog/${blog._id}`}
        />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href={blog.image} sizes="32x32" />
      </Helmet>
      <div className="container-fluid design py-4 " style={{ minHeight: "100vh" }}>
        <div className="row">
          <div className="col-lg-8 col-12">
          <div className="card shadow-6 p-3">
            <h4 className="text-warning">{blog.title}</h4>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={blog.image}
                alt={blog.title}
                className="img-fluid  mb-3"
              />
            </div>
            <p>{blog.description}</p>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            <hr />
            <div className="row">
              <div className="col-6 text-start">
                <small>
                  Posted by: {blog.idAuthor ? blog.idAuthor.name : "Anonymous"}
                </small>
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
          </div>
          <div className="col-lg-4 col-12">
          <>
          <div className="row my-2">
            <div className="col-6"> <p>Read More Articles</p></div>
            <div className="col-6"><Link to = "/add-blog"><button className="btn btn-sm text-capitalize"><i className="fi fi-sr-add"></i> Posy your own blog</button> </Link></div>
          </div>
         
                {nextblog.map((blog) => (
                  <div className="border rounded-6 mb-2" key={blog._id}>
                    <div className="row g-0 p-2">
                      <div className="col-3 d-flex justify-content-center align-items-center">

                        <img
                          src={blog.image || "https://via.placeholder.com/150"}
                          alt="Author"
                          style={{ width: '55px' , height: '55px' }}
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <div className="col-9">
                        <div className="card-body">
                          <Link to = {`/blog/${blog._id}`}> <small>{blog.title}</small></Link>

                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                    <small className="text-muted ps-2" style={{ fontSize: '0.6rem' }}>By {blog.name} | {blog.formattedDate}</small>
                    </div>
                  </div>
                ))}
              </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
