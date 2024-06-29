import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config/config";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="vh-100 text-warning d-flex justify-content-center align-items-center">
        <div class="card" aria-hidden="true" style={{ width: "350px" }}>
          <div class="text-center">
            <img
              src="img/loader.gif"
              style={{ height: "125px", width: "115px" }}
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
            <a
              class="btn btn-secondary disabled placeholder col-6"
              aria-disabled="true"
            ></a>
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
      <div
        className="container-fluid design py-4"
        style={{ minHeight: "100vh", backgroundColor: "#1e1e1e" }}
      >
        <div className="g-0">
          <div className="card bg-dark text-light shadow-6 p-3">
            <h4 className="text-warning">{blog.title}</h4>
            <div className="d-flex justify-content-center align-items-center">
              <img
                src={blog.image}
                alt={blog.title}
                className="img-fluid cardImageHeight mb-3"
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
      </div>
    </>
  );
};

export default Blog;
