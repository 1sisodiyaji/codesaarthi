import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { handleCopyText, handleShareWhatsApp, handleShareLinkedIn } from "../../config/Share";
import { useSelector } from 'react-redux'; 
import Modal from "../Modal";

const AnswerByAuthor = () => {
  const [answer, setAnswer] = useState([]);
  const [answershow, setAnswershow] = useState(false);
  const user = useSelector((state) => state.user.user);
  const userId = user ? user._id : null;

  const fetchAnswers = async (userId) => {
    if (!userId) return; 
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
    setAnswershow(prev => !prev);
  };

  useEffect(() => {
    fetchAnswers(userId);
  }, [userId]); 

  return (
    <>
      <ToastContainer />
      <div className="row my-2 g-0">
        <div className="col-11">
          <h6>
            Answer Contributed By { user.name}
            <span className="badge badge-dark">{answer.length}</span>
          </h6>
        </div>
        <div className="col-1">
          {" "}
          <i
            onClick={handleAnswerShow}
            className={`${
              answershow
                ? "fi fi-sr-eye text-success bg-dark"
                : "i fi-sr-eye-crossed text-light bg-primary"
            } px-2 py-1 rounded-4`}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
      {answershow && (
        <div className="mt-4">
          <h6>Your Answers</h6>
          {answer.length > 0 ? (
            <div className="row">
              {answer.map((a) => {
                const questionUrl = `${window.location.origin}/Questions/${a.question.slug}`;
                return (
                  <div  key={a._id} className="shadow-lg borderColor rounded-4 p-1 my-2 col-12" >
                    <div className="row">
                      <div className="col-12">
                        <Link
                          to={`/Questions/${a.question.slug}`}
                          className="iconColor"
                          style={{ cursor: "pointer" }}
                        >
                         Q. <small className="text-decoration-underline mb-2">{a.question.title}</small>
                        </Link> 

                      </div> 
                    </div>
  
                    <div className="row">
                      <div className="col-6">
                        <div>
                          <p className="btn btn-sm rounded-8 text-capitalize"> 
                            {a.votes}
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

                    <div className="row">
                      <div className="col-6">
                          <div className="btn btn-sm rounded-4 text-capitalize"> Edit</div>
                      </div>
                      <div className="col-6 text-end">
                          <div >
                             <Modal
                               id = "deleteButton"
                               btnName = "delete"
                               Design = "btn bg-danger btn-sm rounded-4 text-capitalize"
                               title = "Default Title"
                               body = "Default Body"
                               saveButtonLabel = "Save changes"
                               closeButtonLabel = "Close"
                             />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>You have not answered any questions.</p>
          )}
        </div>
      )}
    </>
  );
};

export default AnswerByAuthor;
