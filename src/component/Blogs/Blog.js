import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config/config";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          `${config.BASE_URL}/article/getbyid/${id}`
        );
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        toast.error("Error fetching blogs. Please try again later.", { theme: "dark" }); 
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return ( toast.loading( "loading ...", { theme: "dark" } ) );
  }

  if (error) {
    return ( toast.error( error ) );
  }


  return (

    
   <>
   <ToastContainer/>
   <div className="container-fluid design py-4" style={{minHeight: '100vh' , backgroundColor: '#1e1e1e'}}>
    <div className="g-0 ">
     <div className="card bg-dark text-light  shadow-6 p-3">
     <h4 className="text-warning">{blog.title}</h4>
      <div className="d-flex justify-content-center align-items-center" >
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
              <small>Posted by: {blog.idAuthor ? blog.idAuthor.name : "Anonymous" }</small>
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
  )
}

export default Blog