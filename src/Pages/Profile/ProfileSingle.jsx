import React, { useEffect, useState , useMemo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';  
import { Helmet } from "react-helmet";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../config/config";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Graph from "../../component/Graph";

const ProfileSingle = () => {
  const { username } = useParams();  
  const [user, setUser] = useState(null); 
  const [question, setQuestion] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [articleData, setArticleData] = useState([]);
  const [questionData, setQuestionData] = useState([]);
  const [answerData, setAnswerData] = useState([]);
 
  const months = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const questionChartData = useMemo(
    () =>
      months.map((month, index) => ({
        label: month,
        y: questionData[index] || 0,
      })),
    [months, questionData]
  );
  const articleChartData = useMemo(
    () =>
      months.map((month, index) => ({
        label: month,
        y: articleData[index] || 0,
      })),
    [months, articleData]
  );
  const answerChartData = useMemo(
    () =>
      months.map((month, index) => ({
        label: month,
        y: answerData[index] || 0,
      })),
    [months, answerData]
  );

  const articleChartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2",
    title: {
      text: "Monthly Articles",
    },
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: "spline",
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        name: "Articles Posted By You",
        showInLegend: true,
        dataPoints: articleChartData,
      },
    ],
  };

  const questionChartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2",
    title: {
      text: "Monthly Questions Activity",
    },
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        dataPoints: questionChartData,
      },
    ],
  };

  const answerChartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark2",
    title: {
      text: "Monthly Answers Activity",
    },
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: "splineArea",
        name: "Answers Given",
        showInLegend: true,
        dataPoints: answerChartData,
      },
    ],
  };

  useEffect(() => {
    

    const fetchUserByName = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`${config.BASE_URL}/api/userbyName/${username}`);
       
          if (response.status === 200) {
            setUser(response.data); 
            setLoading(false);
            return response.data._id;
          } else {
            setLoading(false);
            toast.error("Failed to fetch user data", { theme: "dark" });
          }
        } catch (error) {
            setLoading(false);
          toast.error("Error fetching user data", { theme: "dark" });
          console.error("Error fetching user data:", error);
        }
      };
   

    const fetchData = async () => {
      const userId = await fetchUserByName();

      if (userId) { 
        try {
          await Promise.all([
            fetchBlogs(userId),
            fetchQuestions(userId),
            fetchAnswers(userId),
            MonthlyArticles(userId),
            MonthlyQuestions(userId),
            MonthlyAnswers(userId),
          ]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

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

    const fetchQuestions = async (userId) => {
      try { 
        const response = await axios.get(
          `${config.BASE_URL}/article/getQuestionsByidAuthor/${userId}`
        );
       console.log(response);
        if (response.data) {
          toast.success("Questions asked by you", { theme: "dark" });
          setQuestion(response.data);
        } else {
          toast.error("Error fetching questions, no questions found!", {
            theme: "dark",
          });
        }
      } catch (error) {
        toast.warn("You have not asked any questions", { theme: "dark" });
      }
    };

    const fetchAnswers = async (userId) => {
      try {
        const response = await axios.post(
          `${config.BASE_URL}/article/getAnswerByAuthorId/${userId}`
        );
        if (response.data) {
          toast.success("Answers given by you", { theme: "dark" });
          setAnswer(response.data);
        } else {
          toast.error("Error fetching answers, no answers found!", {
            theme: "dark",
          });
        }
      } catch (error) {
        toast.warn("You have not answered any questions", { theme: "dark" });
      }
    };

    const MonthlyArticles = async (userId) => {
      const response = await axios.get(
        `${config.BASE_URL}/article/getMonthlyArticleData/${userId}`
      );
      if (response.status === 200) {
        setArticleData(response.data.monthlyArticleData);
      } else {
        console.error("Failed to fetch monthly articles:", response);
      }
    };

    const MonthlyQuestions = async (userId) => {
      const response = await axios.get(
        `${config.BASE_URL}/article/getMonthlyQuestionData/${userId}`
      );
      if (response.status === 200) {
        setQuestionData(response.data.monthlyQuestionData);
      } else {
        console.error("Failed to fetch monthly questions:", response);
      }
    };

    const MonthlyAnswers = async (userId) => {
      const response = await axios.get(
        `${config.BASE_URL}/article/getMonthlyAnswerData/${userId}`
      );
      if (response.status === 200) {
        setAnswerData(response.data.monthlyAnswerData);
      } else {
        console.error("Failed to fetch monthly answers:", response);
      }
    };

    fetchUserByName();
    fetchData();
  }, [username]);

  if (loading) {
    return (
      <div className="vh-100 text-warning d-flex justify-content-center align-items-center">
        <div className="card" aria-hidden="true" style={{ width: "350px" }}>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721031578/loader_bhnpfb.gif"
              style={{ height: "125px", width: "115px" }}
              className="card-img-top"
              alt="Loading..."
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
            <a
              href="/"
              className="btn btn-secondary disabled placeholder col-6"
              aria-disabled="true"
            >
              {" "}
              Loading{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }

  const handleCopy = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => toast.success("Link Copied Successfully"))
      .catch((err) => console.error("Failed to copy: ", err));
  };
  const handleShareWhatsApp = (url) => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      url
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  const handleShareLinkedIn = (url) => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`;
    window.open(linkedinUrl, "_blank");
  };
  const upvote = async (id) => {
    const token = Cookies.get("token");
    try {
      const response = await axios.post(
        `${config.BASE_URL}/article/questions/votes/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response);
      setQuestion(
        question.map((q) =>
          q._id === id ? { ...q, votes: response.data.votes } : q
        )
      );
    } catch (error) {
      console.error("Error upvoting the question:", error);
    }
  };
 

  return (
   <>
   
      <ToastContainer />
      {user && ( <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="CodeSaarthi" content="Codesaarthi" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://codesaarthi.com/profile/${user.username}`} />
                <meta name="description" content="Be a Apart Of Codesaarthi and Join our mission to provide quality coding education." />
                <title>{user.name} | Codesaarthi</title>
                <meta property="og:title" content={`${user.name} | Codesaarthi`} />
                <meta property="og:description" content="Be a Apart Of Codesaarthi and Join  our mission to provide quality coding education." />
                <meta property="og:image" content={user.image} />
                <meta property="og:url" content={`https://codesaarthi.com/profile/${user.username}`} />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>
      )}
      
      <div className="container mt-4">
        {user && (
          <div className="row">
            <div className="col-md-4">
              <img
                src={user.image}
                alt="Profile"
                className="img-fluid rounded-circle"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              
            </div>
            <div className="col-md-8">
                <div>
                  <h3>{user.name}</h3>
                  <p>
                    <strong>Institute:</strong> {user.institute}
                  </p>
                  <p>
                    <strong>Location:</strong> {user.location}
                  </p>
                  <p>
                    <strong>Date of Birth:</strong> {user.dateOfBirth}
                  </p>
                  <p>
                    <strong>Contact:</strong> {user.contact}
                  </p>
                  <p>
                    <strong>Social Media Links:</strong> {user.socialMediaLinks}
                  </p> 
                </div> 
            </div>
          </div>
        )}

        <div className="row my-2">
          <div className="col-md-6 col-12 my-2">
            <Graph options={articleChartOptions} />{" "}
          </div>
          <div className="col-md-6 col-12 my-2">
            {" "}
            <Graph options={questionChartOptions} />{" "}
          </div>
          <div className="col-md-12 col-12 my-2">
            {" "}
            <Graph options={answerChartOptions} />{" "}
          </div>
        </div>

         <h6>Blogs Posted By {user && user.name} <span className="badge badge-dark">{blogs.length}</span> </h6></div>
         
 
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
                ))}
              </div>
            ) : (
              <p>You have not posted any blogs.</p>
            )}
          </div> 

          <h6>Questions Asked By {user && user.name} <span className="badge badge-dark">{question.length}</span> </h6>
            
          <div className="mt-4">
            <h4> Questions</h4>
            {question.length > 0 ? (
              <>
                <div className="row">
                  {question &&
                    question.map((question) => {
                      const questionUrl = `${window.location.origin}/Questions/${question._id}`;
                      return (
                        <div
                          key={question._id}
                          className="shadow-lg borderColor rounded-4 p-3  my-2 col-lg-6"
                        >
                          <div className="row">
                            <div className="col-10">
                              <Link
                                to={`/Questions/${question._id}`}
                                className="iconColor"
                                style={{ cursor: "pointer" }}
                              >
                                <h2>{question.title} ?</h2>
                              </Link>
                            </div>
                            <div className="col-2 text-end">
                              {/* <i className="fi fi-sr-circle-ellipsis"></i> */}
                            </div>
                          </div>

                          <p>{question.body}</p>
                          <div className="row">
                            <div className="col-6">
                              <Link
                                to={`/profile/${question.user._id}`}
                                className="iconColor"
                              >
                                Asked By:{" "}
                                <span className="text-decoration-underline">
                                  {question.user.name}
                                </span>
                              </Link>
                            </div>
                            <div className="col-6 text-end">
                              <p className="pe-2">
                                {new Date(question.createdAt).toLocaleString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                  }
                                )}
                              </p>
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <div onClick={() => upvote(question._id)}>
                                  <p className="btn btn-sm rounded-8 text-capitalize">
                                    {" "}
                                    {question.votes}{" "}
                                    <i className="fi fi-rs-social-network"></i>{" "}
                                    UpVote{" "}
                                  </p>
                                </div>
                              </div>
                              <div className="col-6 text-end">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-sm dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="fi fi-ss-share"></i>
                                  </button>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        onClick={() => handleCopy(questionUrl)}
                                      >
                                        Copy Link
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        onClick={() =>
                                          handleShareWhatsApp(questionUrl)
                                        }
                                      >
                                        Share on WhatsApp
                                      </button>
                                    </li>
                                    <li>
                                      <button
                                        className="dropdown-item"
                                        onClick={() =>
                                          handleShareLinkedIn(questionUrl)
                                        }
                                      >
                                        Share on LinkedIn
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            ) : (
              <p>You have not asked any questions.</p>
            )}
          </div> 

 <h6>Answer Contributed By {user && user.name} <span className="badge badge-dark">{answer.length}</span> </h6>
  
          <div className="mt-4">
            <h4> Answers</h4>
            {answer.length > 0 ? (
              <>
                <div className="row">
                  {answer &&
                    answer.map((a) => {
                      const questionUrl = `${window.location.origin}/Questions/${a.question.slug}`;
                      return (
                        <div
                          key={a._id}
                          className="shadow-lg borderColor rounded-4 p-3 my-2 col-lg-6"
                        >
                          <div className="row">
                            <div className="col-10">
                              <Link
                                to={`/Questions/${a.question._id}`}
                                className="iconColor"
                                style={{ cursor: "pointer" }}
                              >
                                <h2>{a.question.title} ?</h2>
                              </Link>
                            </div>
                            <div className="col-2 text-end">
                              {/* <i className="fi fi-sr-circle-ellipsis"></i> */}
                            </div>
                          </div>

                          <p>{a.body}</p>
                          <div className="row">
                            <div className="col-6">
                              <Link
                                to={`/profile/${a.question.user._id}`}
                                className="iconColor"
                              >
                                Asked By:{" "}
                                <span className="text-decoration-underline">
                                  {a.question.user.name}
                                </span>
                              </Link>
                            </div>
                            <div className="col-6 text-end">
                              <small className="pe-2">
                                {new Date(a.question.createdAt).toLocaleString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                  }
                                )}
                              </small>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                              <Link
                                to={`/profile/${a.question.user._id}`}
                                className="iconColor"
                              >
                                Answered By:{" "}
                                <span className="text-decoration-underline">
                                  {a.user.name}
                                </span>
                              </Link>
                            </div>
                            <div className="col-6 text-end">
                              <small className="pe-2">
                                {new Date(a.createdAt).toLocaleString("en-US", {
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

                          <div className="row">
                            <div className="col-6">
                              <div>
                                <p className="btn btn-sm rounded-8 text-capitalize">
                                  {" "}
                                  {a.votes}{" "}
                                  <i className="fi fi-rs-social-network"></i>{" "}
                                  UpVote{" "}
                                </p>
                              </div>
                            </div>
                            <div className="col-6 text-end">
                              <div className="dropdown">
                                <button
                                  className="btn btn-sm dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuButton"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="fi fi-ss-share"></i>
                                </button>
                                <ul
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuButton"
                                >
                                  <li>
                                    <button
                                      className="dropdown-item"
                                      onClick={() => handleCopy(questionUrl)}
                                    >
                                      Copy Link
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="dropdown-item"
                                      onClick={() =>
                                        handleShareWhatsApp(questionUrl)
                                      }
                                    >
                                      Share on WhatsApp
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      className="dropdown-item"
                                      onClick={() =>
                                        handleShareLinkedIn(questionUrl)
                                      }
                                    >
                                      Share on LinkedIn
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            ) : (
              <p>You have not answered any questions.</p>
            )}
          </div>
  
          </>
  );
};

export default ProfileSingle; 
 

