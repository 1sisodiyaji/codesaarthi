import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../helper/config";
import { Link, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import Cookies from 'js-cookie';
import { SmallCard } from "../../components/SmallCard";
import { handleCopyText, handleShareLinkedIn, handleShareWhatsApp } from "../../helper/Share";
import TimeConverter from "../../helper/TimeConverter";

const SingleBlog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextblog, setNextblog] = useState([]);
  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          `${config.BASE_URL}/article/getbyslug/${slug}`
        );
        setBlog(response.data[0]);
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
        console.log(sortedBlogs);
        setNextblog(sortedBlogs.slice(0, 9));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs()
    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen text-warning flex justify-center items-center">
        <div className="border-slate-200" aria-hidden="true" style={{ width: "350px" }}>
          <div >
            <img
              src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721031578/loader_bhnpfb.gif"
              style={{ height: "125px", width: "115px" }} 
              alt="..."
              className="mx-auto"
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
              className="btn btn-secondary disabled placeholder col-12 text-capitalize"
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

  const upvoteBlogs = async (id) => {
    const token = Cookies.get('Codesaarthi-token');
    try {
      const response = await axios.post(
        `${config.BASE_URL}/article/article/votes/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBlog((prevBlog) => ({
        ...prevBlog,
        votes: response.data.votes,
      }));
    } catch (error) {
      console.error('Error upvoting the answer:', error);
    }
  };

  const blogUrl = `${window.location.origin}/blog/${slug}`;

  return (
    <>
      <Toaster />
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
      <div className="bg-slate-100 dark:bg-gray-950 text-black dark:text-white min-h-screen p-4 pt-16 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className=" shadow-lg ">
              <h4 className="p-1 text-2xl underline">{blog.title}</h4>
             <div className="flex justify-between items-center px-4">
              <small className="ps-2">  Posted by: <Link to={`/profile/${blog.idAuthor.username}`} className="underline" >  {blog.idAuthor ? blog.idAuthor.name : "Anonymous"}</Link> </small>

              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button">
                  <i className="fi fi-sr-share"></i>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-black dark:bg-white dark:text-black text-white text-xs rounded-box  w-28 space-y-4 p-4 shadow text-center"
                  >
                    <li className="cursor-pointer" onClick={() => handleCopyText(blogUrl)}>
                      Copy
                    </li>
                    <li
                      className="cursor-pointer"
                      onClick={() => handleShareWhatsApp(blogUrl)}>
                      Whatsapp
                    </li>
                    <li
                      className="cursor-pointer"
                      onClick={() => handleShareLinkedIn(blogUrl)}>
                      Linkedin
                    </li>
                  </ul>
                </div>
              </div>

              </div>
              <div className="flex justify-center items-center">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="mb-3"
                />
              </div>
              <div className="p-2">
                <p>{blog.description}</p>
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>
              <hr />

              <div className="flex justify-between items-baseline p-2">
                <div>
                  <div onClick={() => upvoteBlogs(blog._id)}>
                    <p className="btn btn-sm rounded-8 text-capitalize">  {blog.votes} <i className="fi fi-rs-social-network"></i> UpVote </p>
                  </div>
                </div>
                <div>
                  <small>
                    <TimeConverter date={blog.date}/> 
                  </small>
                </div>
              </div>

            </div>
          </div>

          <div className="col-span-1">

            <div className="bg-slate-100 dark:bg-gray-800 shadow-lg rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold">Read More Blogs</p>
                <Link to="/blogs">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                    <i className="fi fi-sr-add"></i> Share Your Views ..
                  </button>
                </Link>
              </div>
              {nextblog.map((nextblog) => (
                <>

                  <SmallCard
                    key={nextblog._id}
                    type={'blog'}
                    title={nextblog.title}
                    slug={nextblog.slug}
                    image={nextblog.image}
                    body={nextblog.description}
                    Author={nextblog.name}
                    createdAt={nextblog.formattedDate}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
