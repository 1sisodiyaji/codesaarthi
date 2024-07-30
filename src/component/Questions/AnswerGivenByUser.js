import React,{useState, useEffect} from "react";
import axios from "axios";
import config from "../../config/config"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import {handleCopyText , handleShareWhatsApp , handleShareLinkedIn} from "../../config/Share";
import GetUserData from "../../config/GetUserData";

export default function AnswerByAuthor({ userId }) {
  const [answer, setAnswer] = useState([]);
  const [answershow, setAnswershow] = useState(false);
  const [user, setUser] = useState(null);
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
  const handleAnswerShow = () => {
    setAnswershow(!answershow);
  }
  useEffect(() => {
    const userdata = GetUserData();
    fetchAnswers(userId);
    setUser(userdata);
  }, [userId]);
  return(
    <>
  <ToastContainer/>
  <div className="row my-2 g-0">
    <div className="col-11"> 
      <h6>
        Answer Contributed By {user && user.name}{" "}
        <span class="badge badge-dark">{answer.length}</span>{" "}
      </h6>
    </div>
    <div className="col-1">
      {" "}
      <i
        onClick={handleAnswerShow}
        class={`${
          answershow
            ? "fi fi-sr-eye text-success bg-dark"
            : "i fi-sr-eye-crossed text-light bg-primary"
        } px-2 py-1 rounded-4`}
        style={{ cursor: "pointer" }}
      ></i>
    </div>
  </div>;
  {
    answershow && (
      <div className="mt-4">
        <h4>Your Answers</h4>
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
                              <i className="fi fi-rs-social-network"></i> UpVote{" "}
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
                                  onClick={() => handleCopyText(questionUrl)}
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
)}
    </>
  )
}
