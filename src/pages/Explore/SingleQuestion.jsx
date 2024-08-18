import React, { useState, useEffect, useRef, useMemo } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import config from "../../helper/config";
import Cookies from "js-cookie";
import { Toaster, toast } from "react-hot-toast";
import { Helmet } from "react-helmet";
import {
  handleCopyText,
  handleShareLinkedIn,
  handleShareWhatsApp,
} from "../../helper/Share";
import TimeConverter from "../../helper/TimeConverter";
import JoditEditor from "jodit-react";
import { SmallCard } from "../../components/SmallCard";

function SingleQuestion() {
  const { slug } = useParams();
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");
  const [uniqueTags, setUniqueTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newQuestions, setNewQuestions] = useState([]);
  const navigate = useNavigate();
  const editor = useRef(null);
  const editorConfig = useMemo(
    () => ({
      readonly: false,
      placeholder: "Your answer",
    }),
    []
  );

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/article/questions/${slug}`
        );
        if (response.status === 200) {
          const { tags, answers, ...rest } = response.data[0];
          setUniqueTags(tags);
          setQuestion(rest);
          setAnswers(answers);
        } else {
          console.error("Failed to fetch question");
        }
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };

    fetchQuestion();
  }, [slug]);

  useEffect(() => {
    const fetchNewQuestions = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/article/randomQuestions`
        );
        setNewQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchNewQuestions();
  }, []);

  const questionUrl = `${window.location.origin}/ask-freely/${slug}`;

  const handleAnswerSubmit = async (id) => {
    try {
      setLoading(true);
      const token = Cookies.get("Codesaarthi-token");
      const response = await axios.post(
        `${config.BASE_URL}/article/answers`,
        { body: newAnswer, questionId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Answers given by you", { theme: "dark" });
      setLoading(false);
      setAnswers([...answers, response.data]);
      setNewAnswer("");
      navigate(`/Questions/${response.data.question.slug}`);
    } catch (error) {
      toast.error("Please Try again later", { theme: "dark" });
      setLoading(false);
      console.error("Error submitting answer:", error);
    }
  };

  const upvote = async (id) => {
    const token = Cookies.get("Codesaarthi-token");
    try {
      const response = await axios.post(
        `${config.BASE_URL}/article/questions/votes/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setQuestion((prev) => ({ ...prev, votes: response.data.votes }));
    } catch (error) {
      console.error("Error upvoting the question:", error);
    }
  };

  const upvoteAnswer = async (id) => {
    const token = Cookies.get("Codesaarthi-token");
    try {
      const response = await axios.post(
        `${config.BASE_URL}/article/answer/votes/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAnswers((prev) =>
        prev.map((answer) =>
          answer._id === id ? { ...answer, votes: response.data.votes } : answer
        )
      );
    } catch (error) {
      console.error("Error upvoting the answer:", error);
    }
  };

  return (
    <>
      <Toaster />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://codesaarthi.com/ask-freely/${slug}`}
        />
        <meta name="description" content={question.body || ""} />
        <title>{question.title || "Question Title"}</title>
        <meta
          property="og:title"
          content={question.title || "Question Title"}
        />
        <meta property="og:description" content={question.body || ""} />
        <meta
          property="og:image"
          content="https://codesaarthi.com/img/logo.jpg"
        />
        <meta
          property="og:url"
          content={`https://codesaarthi.com/ask-freely/${slug}`}
        />
        <meta property="og:type" content="Education-Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/img/favicon.ico"
          sizes="32x32"
        />
      </Helmet>

      <div className="bg-slate-100 dark:bg-gray-950 min-h-screen p-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            {question && (
              <div className="shadow-lg rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{question.title} ?</h2>
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button">
                      <i className="fi fi-sr-share"></i>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-black dark:bg-white dark:text-black text-white text-xs rounded-box  w-28 space-y-4 p-4 shadow text-center"
                      >
                        <li className="cursor-pointer" onClick={() => handleCopyText(questionUrl)}>
                          Copy
                        </li>
                        <li
                          className="cursor-pointer"
                          onClick={() => handleShareWhatsApp(questionUrl)}>
                          Whatsapp
                        </li>
                        <li
                          className="cursor-pointer"
                          onClick={() => handleShareLinkedIn(questionUrl)}>
                          Linkedin
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="mt-2">{question.body}</p>
                <div className="flex justify-between mt-4">
                  <p>
                    Asked By:{" "}
                    <Link
                      to={`/profile/${question.user?.username}`}
                      className="text-blue-500 underline"
                    >
                      {question.user?.name}
                    </Link>
                  </p>
                  <div className="flex space-x-2">
                    {uniqueTags.length > 0 ? (
                      uniqueTags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <p>No tags used</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => upvote(question._id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    {question.votes} <i className="fi fi-rs-social-network"></i>{" "}
                    UpVote
                  </button>
                  <p>
                    <TimeConverter date={question.createdAt} />
                  </p>
                </div>
                <div className="mt-6">
                  {answers.map((answer) => (
                    <div
                      key={answer._id}
                      className="bg-slate-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-900 shadow-md rounded-lg p-4 mb-4"
                    >
                      <p
                        className="mb-2"
                        dangerouslySetInnerHTML={{ __html: answer.body }}
                      />
                      <div className="flex justify-between items-center">
                        <p>
                          Answered By:{" "}
                          <Link
                            to={`/profile/${answer.user?.username}`}
                            className="text-blue-500 underline"
                          >
                            {answer.user?.name}
                          </Link>
                        </p>
                        <p>
                          <TimeConverter date={answer.updatedAt} />
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <button
                          onClick={() => upvoteAnswer(answer._id)}
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                          {answer.votes}{" "}
                          <i className="fi fi-rs-social-network"></i> UpVote
                        </button>
                        <button
  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold relative"
>
  <div className="dropdown">
    <div tabIndex={0} role="button" className="flex items-center space-x-1">
      <span>Share</span> <i className="fi fi-sr-share"></i>
    </div>
    <ul
      tabIndex={0}
      className="dropdown-content menu bg-black dark:bg-white dark:text-black text-white text-xs rounded-box z-50 w-28 space-y-4 p-4 shadow text-center absolute top-10"
    >
      <li
        className="cursor-pointer"
        onClick={() =>
          handleCopyText(`${window.location.origin}/ask-freely/${slug}`)
        }
      >
        Copy
      </li>
      <li
        className="cursor-pointer"
        onClick={() =>
          handleShareWhatsApp(`${window.location.origin}/ask-freely/${slug}`)
        }
      >
        Whatsapp
      </li>
      <li
        className="cursor-pointer"
        onClick={() =>
          handleShareLinkedIn(`${window.location.origin}/ask-freely/${slug}`)
        }
      >
        LinkedIn
      </li>
    </ul>
  </div>
</button>

                      </div>
                    </div>
                  ))}
                  <JoditEditor
                    ref={editor}
                    value={newAnswer}
                    config={editorConfig}
                    tabIndex={1}
                    onBlur={(newContent) => setNewAnswer(newContent)}
                    className="w-full my-3"
                  />
                  {loading ? (
                    <button
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg w-full  mt-2"
                      disabled
                    >
                      Adding Your Views...
                      <span className="loading loading-dots loading-lg"></span>
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 btn btn-block mt-2"
                      onClick={() => handleAnswerSubmit(question._id)}
                    >
                      Submit Answer
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="col-span-1">
            <div className="bg-slate-100 dark:bg-gray-800 shadow-lg rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold">Read More Questions</p>
                <Link to="/ask-freely">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                    <i className="fi fi-sr-add"></i> Ask Your Own Queries ..
                  </button>
                </Link>
              </div>
              {newQuestions.map((question) => (
                <>
                  <SmallCard
                    key={question._id}
                    type= {"ask-freely"}
                    title={question.title}
                    slug={question.slug}
                    image="https://codesaarthi.com/img/logo.png"
                    body={question.body}
                    Author={question.user.name}
                    createdAt={question.createdAt}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleQuestion;
