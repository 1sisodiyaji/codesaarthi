import axios from "axios";
import config from "../../config/config";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Modal from "../Modal";
import TimeConverter from "../../config/TimeConverter";
import { handleCopyText, handleShareWhatsApp, handleShareLinkedIn } from "../../config/Share";
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from "../../store/actions/userAction";
import getIdFromToken from "../../config/getIdfromToken";

const QuestionAskedByAuthor = () => {
  const [questions, setQuestions] = useState([]);
  const [questionShow, setQuestionShow] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userId = user ? user._id : null;

  const fetchQuestions = async (userId) => {
    if (!userId) return; // Guard clause
    try {
      const response = await axios.post(
        `${config.BASE_URL}/article/getQuestionsByidAuthor/${userId}`
      );
      if (response.data) {
        toast.success("Questions asked by you", { theme: "dark" });
        setQuestions(response.data);
      } else {
        toast.error("Error fetching questions, no questions found!", {
          theme: "dark",
        });
      }
    } catch (error) {
      toast.warn("You have not asked any questions", { theme: "dark" });
    }
  };

  const upvote = async (id) => {
    const token = Cookies.get("token");
    try {
      const response = await axios.post(
        `${config.BASE_URL}/article/questions/votes/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setQuestions(
        questions.map((q) =>
          q._id === id ? { ...q, votes: response.data.votes } : q
        )
      );
    } catch (error) {
      console.error("Error upvoting the question:", error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await getIdFromToken();
      if (user) {
        dispatch(loginSuccess(user));
      }
    };
    fetchUserData();
    if (userId) {
      fetchQuestions(userId);
    }
  }, [dispatch, userId]);

  const handleShowQuestions = () => {
    setQuestionShow(prev => !prev);
  };

  return (
    <>
      <ToastContainer />
      <div className="row my-2 g-0">
        <div className="col-11">
          <h6>
            Questions Asked By {user && user.name}{" "}
            <span className="badge badge-dark">{questions.length}</span>{" "}
          </h6>
        </div>
        <div className="col-1">
          <i
            onClick={handleShowQuestions}
            className={`${
              questionShow
                ? "fi fi-sr-eye text-success bg-dark"
                : "i fi-sr-eye-crossed text-light bg-primary"
            } px-2 py-1 rounded-4`}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
      {questionShow && (
        <div className="row">
          {questions.map((question) => {
            const questionUrl = `${window.location.origin}/Questions/${question.slug}`;
            return (
              <div
                key={question._id}
                className="shadow-lg borderColor rounded-4 p-3 my-2 col-lg-6"
              >
                <div className="row">
                  <div className="col-12">
                    <Link
                      to={`/Questions/${question.slug}`}
                      className="iconColor text-decoration-underline"
                      style={{ cursor: "pointer" }}
                    >
                      <h6>{question.title}</h6>
                    </Link>
                  </div>
                </div>

                <small>{question.body}</small>
                <div className="row">
                  <div className="col-6">
                    <Link
                      to={`/profile/${question.user.username}`}
                      className="iconColor"
                    >
                      Asked By:{" "}
                      <span className="text-decoration-underline">
                        {question.user.name}
                      </span>
                    </Link>
                  </div>
                  <div className="col-6 text-end">
                    <div className="pe-2"><TimeConverter date={question.createdAt} /></div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div onClick={() => upvote(question._id)}>
                        <p className="btn btn-sm rounded-8 text-capitalize">
                          {" "}
                          {question.votes}{" "}
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
                              onClick={() => handleShareWhatsApp(questionUrl)}
                            >
                              Share on WhatsApp
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item"
                              onClick={() => handleShareLinkedIn(questionUrl)}
                            >
                              Share on LinkedIn
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col-6 text-start">
                      <div className="btn btn-sm rounded-4 ms-2 text-capitalize">
                        Edit <i className="fi fi-sr-pen-clip"></i>
                      </div>
                    </div>

                    <div className="col-6 text-end">
                      {/* <Modal
                        id="modal2"
                        btnName="Delete 🗑️"
                        Design="btn btn-sm rounded-4 text-capitalize bg-danger"
                        title="Delete Your Question"
                        body="."
                        saveButtonLabel="Delete "
                        closeButtonLabel="Cancel"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default QuestionAskedByAuthor;
