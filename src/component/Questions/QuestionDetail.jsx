import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import config from '../../config/config';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

function QuestionDetail() {
  const { slug } = useParams(); 
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [newQuestions , setNewQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/article/questions/${slug}`);
        if (response.status === 200) {
          setQuestion(response.data[0]); 
          setAnswers(response.data.answers);
        } else {
          console.error("Failed to fetch question");
        }
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };

    fetchQuestion();
  }, [slug, config.BASE_URL]);

  useEffect(() => {
    const fetchNewQuestions = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/article/randomQuestions`);
        setNewQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchNewQuestions();
  }, []);

  const questionUrl = `${window.location.origin}/Questions/${slug}`;

  const handleAnswerSubmit = async () => {
    try {
      setLoading(true);
      const token = Cookies.get('token');
      const response = await axios.post(
        `${config.BASE_URL}/article/answers`,
        { body: newAnswer, questionId: question._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      setAnswers([...answers, response.data]);
      setNewAnswer('');
      navigate(`/Questions/${question._id}`);
    } catch (error) {
      setLoading(false);
      console.error('Error submitting answer:', error);
    }
  };

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url)
      .then(() => toast.success("Link Copied Successfully"))
      .catch(err => console.error('Failed to copy: ', err));
  };

  const handleShareWhatsApp = (url) => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShareLinkedIn = (url) => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, '_blank');
  };

  const upvote = async (id) => {
    const token = Cookies.get('token');
    try {
      const response = await axios.post(
        `${config.BASE_URL}/article/questions/votes/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setQuestion({ ...question, votes: response.data.votes });
    } catch (error) {
      console.error('Error upvoting the question:', error);
    }
  };

  const upvoteAnswer = async (id) => {
    const token = Cookies.get('token');
    try {
      const response = await axios.post(
        `${config.BASE_URL}/article/answer/votes/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAnswers(answers.map(answer => answer._id === id ? { ...answer, votes: response.data.votes } : answer));
    } catch (error) {
      console.error('Error upvoting the answer:', error);
    }
  };
  return (
    <>
      <ToastContainer />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://codesaarthi.com/Questions/${slug}`}
        />
        <meta name="description" content={question && question.body} />
        <title>{question && question.title}</title>
        <meta property="og:title" content={question && question.title} />
        <meta property="og:description" content={question && question.body} />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.jpg" />
        <meta
          property="og:url"
          content={`https://codesaarthi.com/Questions/${slug}`}
        />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>
      <div className="container design g-0" style={{ minHeight: '100vh' }}>
        <div className="row">
          <div className="col-lg-8 col-12 my-2">
            {question && (
              <div className='py-lg-4 py-3'>
                <div className="borderColor backgroundColor rounded-4 shadow-lg">
                  <div className="row">
                    <div className="col-10"> 
                    <h4 className='text-capitalize p-2'>{question.title} ?</h4>
                    </div>
                    <div className="col-2 text-end">
                    <div className="dropdown pe-2 pt-1">
                      <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fi fi-ss-share"></i>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><button className="dropdown-item" onClick={() => handleCopy(questionUrl)}>Copy Link</button></li>
                        <li><button className="dropdown-item" onClick={() => handleShareWhatsApp(questionUrl)}>Share on WhatsApp</button></li>
                        <li><button className="dropdown-item" onClick={() => handleShareLinkedIn(questionUrl)}>Share on LinkedIn</button></li>
                      </ul>
                    </div>

                    </div>
                  </div> 
                  <p className='p-2'>{question.body}</p>
                  <p className='p-2'>Asked By: <Link to={`/profile/${ question.user && question.user.username}`} className='iconColor text-decoration-underline'>{question.user && question.user.name}</Link></p>
                  <hr />
                  <div className="row p-1">
                    <div className="col-6 d-flex">
                    <div onClick={() => upvote(question._id)}>
                    <p className="btn btn-sm rounded-8 text-capitalize">  {question.votes} <i className="fi fi-rs-social-network"></i> UpVote </p>
                     </div>
                      
                    </div>
                    <div className="col-6 text-end">
                      <p className='pe-2'>{new Date(question.createdAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}</p>
                    </div>
                  </div>

                </div>
                <div className='my-3'>
                  {answers && answers.map(answer => (
                    <div key={answer._id} className='rounded-4 border border-success shadow-lg my-2'>
                      <p className='ps-2'>{answer.body}</p>

                      <hr />
                      <div className="row">
                        <div className="col-6">
                          <Link to={`/profile/${answer.user && answer.user._id}`} className='iconColor'>
                            <p className='ps-2'>Answered By: <span className='text-decoration-underline'>{answer.user && answer.user.name}</span></p>
                          </Link>
                        </div>
                        <div className="col-6 text-end">
                          <p className='pe-2'>{new Date(answer.updatedAt).toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}</p>
                        </div>
                      </div>
                      <div className="row p-1">
                        <div className="col-6">
                          <div onClick={() => upvoteAnswer(answer._id)}>
                            <p className="btn btn-sm rounded-8 text-capitalize">  {answer.votes} <i className="fi fi-rs-social-network"></i> UpVote </p>
                          </div>

                        </div>
                        <div className="col-6 text-end">
                          <div className="dropdown">
                            <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                              <i className="fi fi-ss-share"></i>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <li><button className="dropdown-item" onClick={() => handleCopy(questionUrl)}>Copy Link</button></li>
                              <li><button className="dropdown-item" onClick={() => handleShareWhatsApp(questionUrl)}>Share on WhatsApp</button></li>
                              <li><button className="dropdown-item" onClick={() => handleShareLinkedIn(questionUrl)}>Share on LinkedIn</button></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <textarea
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    placeholder="Your answer"
                    rows={4}
                    className='w-100 my-3'
                  ></textarea>
                  {loading ?
                    <button className="btn text-capitalize" type="button" disabled>
                      <span className="sr-only">Adding Your Views...</span>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </button>
                    :
                    <button className='btn text-capitalize' onClick={handleAnswerSubmit}>Submit Answer</button>
                  }
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-4 col-12">
          <>
          <div className="row my-2">
            <div className="col-6"> <p>Read More Questions</p></div>
            <div className="col-6"><Link to = "/Ask-Questions"><button className="btn btn-sm text-capitalize"><i className="fi fi-sr-add"></i> Ask Your Own Queries ..</button> </Link></div>
          </div>
         
          {newQuestions.map((question) => (
  <div className="border rounded-6 mb-2 shadow-lg" key={question._id}>
    <div className="row g-0 p-2">
      <div className="col-3 d-flex justify-content-center align-items-center">
        <img
          src={question.image || "https://codesaarthi.com/img/logo.jpg"}
          alt="Author"
          style={{ width: '55px', height: '55px' }}
          className="img-fluid rounded-circle"
        />
      </div>
      <div className="col-9">
        <div className="card-body">
          <Link to={`/Questions/${question.slug}`} className="iconColor">
            <small className='text-decoration-underline'>{question.title}</small>
          </Link>
          <br />
          <small className='p-2'>{question.body}</small>
        </div>
      </div>
    </div>
    <div className="text-center">
      <small className='p-2'>
        Asked By: 
        {question.user ? (
          <Link to={`/profile/${question.user._id}`} className='iconColor text-decoration-underline'>
            {question.user.name}
          </Link>
        ) : (
          <span>Unknown</span>
        )} 
         <span> | </span>
        {new Date(question.createdAt).toLocaleString("en-US", {
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
))}

              </>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionDetail;
