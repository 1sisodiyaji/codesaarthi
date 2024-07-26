import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import config from '../../config/config';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

function QuestionDetail() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/article/questions/${id}`);
        setQuestion(response.data);
        setAnswers(response.data.answers);
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    };

    fetchQuestion();
  }, [id]);

  const questionUrl = `${window.location.origin}/Questions/${id}`;

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

  return (
    <>
      <ToastContainer />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://codesaarthi.com/Questions/${id}`}
        />
        <meta name="description" content={question && question.body} />
        <title>{question && question.title}</title>
        <meta property="og:title" content={question && question.title} />
        <meta property="og:description" content={question && question.body} />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.jpg" />
        <meta
          property="og:url"
          content={`https://codesaarthi.com/Questions/${id}`}
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
                  <h4 className='text-capitalize p-2'>{question.title} ?</h4>
                  <p className='p-2'>{question.body}</p>
                  <p className='p-2'>Asked By: <Link to={`/profile/${question.user._id}`} className='iconColor text-decoration-underline'>{question.user.name}</Link></p>
                  <hr />
                  <div className="row">
                    <div className="col-6 d-flex">
                      <p className='px-2'>{question.votes} <i className="fi fi-rs-social-network"></i></p>
                      <div className="dropdown">
                        <i className="fi fi-ss-share btn btn-sm" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ cursor: 'pointer' }}>
                          
                        </i>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <button className="dropdown-item" onClick={() => handleCopy(questionUrl)}>Copy Link</button>
                          <button className="dropdown-item" onClick={() => handleShareWhatsApp(questionUrl)}>Share on WhatsApp</button>
                          <button className="dropdown-item" onClick={() => handleShareLinkedIn(questionUrl)}>Share on LinkedIn</button>
                        </div>
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
                      <Link to={`/profile/${answer.user._id}`} className='iconColor'>
                        <p className='ps-2'>Answered By: <span className='text-decoration-underline'>{answer.user.name}</span></p>
                      </Link>
                      <hr />
                      <div className="row">
                        <div className="col-6">
                          <p className='ps-2'>{answer.votes} <i className="fi fi-rs-social-network"></i></p>
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
          <div className="col-lg-4 col-12 my-2"></div>
        </div>
      </div>
    </>
  );
}

export default QuestionDetail;
