import React, { useState, useEffect } from "react";
import config from "../../config/config";
import axios from "axios"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetUserData from "../../config/GetUserData";
import { Link } from "react-router-dom";
import TimeConverter from "../../config/TimeConverter";

export default function BlogsByAuthor({ userId }) {
    const [blogs, setBlogs] = useState([]);
    const [user, setUser] = useState(null);

    const [blogsShow, setBlogsShow] = useState(false);


    const fetchBlogs = async (userId) => {
        try {
            const response = await axios.post(
                `${config.BASE_URL}/article/getbyidAuthor/${userId}`
            );
            if (response.data) {
                toast.success("Blogs written by you", { theme: "dark" });
                setBlogs(response.data);
            } else {
                toast.error("Error fetching blogs, no blogs found!", {
                    theme: "dark",
                });
            }
        } catch (error) {
            toast.warn("You have not posted any blogs", { theme: "dark" });
        }
    };


    const deleteArticle = async (id) => {
        try {
            const response = await axios.delete(
                `${config.BASE_URL}/article/delete/${id}`
            );
            if (response.status === 200) {
                toast.success("Article deleted successfully!", { theme: "dark" });
                setBlogs(blogs.filter((blog) => blog._id !== id));
            } else {
                toast.error("Failed to delete article!", { theme: "dark" });
            }
        } catch (error) {
            console.error("Error deleting article:", error);
        }
    };
    const handleshowBlogs = () => {
        setBlogsShow(!blogsShow);
    };
    useEffect(() => {
        const userdata = GetUserData();
        setUser(userdata);
        fetchBlogs(userId);
    }, [userId]);

    return (
        <>
            <ToastContainer />
            <div className="row my-2 g-0">
                <div className="col-11">
                    {" "}
                    <h6>
                        Blogs Posted By {user && user.name}{" "}
                        <span class="badge badge-dark">{blogs.length}</span>{" "}
                    </h6>
                </div>
                <div className="col-1">
                    <i
                        onClick={handleshowBlogs}
                        class={`${blogsShow
                                ? "fi fi-sr-eye text-success bg-dark"
                                : "i fi-sr-eye-crossed text-light bg-primary"
                            } px-2 py-1 rounded-4`}
                        style={{ cursor: "pointer" }}
                    ></i>
                </div>
            </div>

            {blogsShow && (
                <div className="my-2">
                    {blogs.length > 0 ? (
                        <div className="row">
                            {blogs.map((blog) => (
                                <div
                                    key={blog._id}
                                    className="card bg-black my-2 shadow-6 p-3 col-lg-6"
                                >
                                    <Link to={`/blog/${blog._id}`}>
                                        <h4 className="text-warning">{blog.title}</h4>
                                    </Link>
                                    <figure className="text-center">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            title={blog.title}
                                            loading="lazy"
                                            className="img-fluid imageHeight  mb-3"
                                        />
                                        <figcaption>{blog.description}</figcaption>
                                    </figure>
                                    <hr />
                                    <div className="row">
                                        <div className="col-6 text-start">
                                            <small>
                                                Posted by: {blog.idAuthor ? blog.name : "Anonymous"}
                                            </small>
                                        </div>
                                        <div className="col-6 text-end">
                                            <small>
                                               <TimeConverter date={blog.date} />
                                            </small>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 text-start">
                                            <Link
                                                to={`/edit-blog/${blog._id}`}
                                                className="text-light"
                                            >
                                                <button className="btn bg-warning text-capitalize ">
                                                    Update <i className="fi fi-sr-pen-clip ps-2"></i>
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="col-6 text-end">
                                            <div
                                                className="btn bg-danger text-capitalize"
                                                onClick={() => deleteArticle(blog._id)}
                                            >
                                                Delete <i className="fi fi-ss-trash-xmark ps-2"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>You have not posted any blogs.</p>
                    )}
                </div>
            )}
        </>
    )
}