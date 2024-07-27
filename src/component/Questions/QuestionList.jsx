import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../../config/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookie from 'js-cookie'
function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/article/questions`);
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

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
    const token = Cookie.get('token');
    try {
      const response = await axios.post(
        `${config.BASE_URL}/article/questions/votes/${id}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );  console.log(response);
      setQuestions(questions.map(q => q._id === id ? { ...q, votes: response.data.votes } : q));
    } catch (error) {
      console.error('Error upvoting the question:', error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div>
        {questions.map((question) => {
          const questionUrl = `${window.location.origin}/Questions/${question._id}`;
          return (
            <div key={question._id} className='shadow-lg borderColor rounded-4 p-3 m-1 my-2'>
              <div className="row">
                <div className="col-10">
                  <Link to={`/Questions/${question.slug}`} className='iconColor text-decoration-underline' style={{ cursor: 'pointer' }}>
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
                  <Link to={`/profile/${question.user._id}`} className='iconColor'>
                    Asked By: <span className='text-decoration-underline'>{question.user.name}</span>
                  </Link>
                </div>
                <div className="col-6 text-end">
                  <p className='pe-2'>
                    {new Date(question.createdAt).toLocaleString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </p>

                </div>
                <div className="row">
                  <div className="col-6">
                    <div onClick={() => upvote(question._id)}>
                    <p className="btn btn-sm rounded-8 text-capitalize">  {question.votes} <i className="fi fi-rs-social-network"></i> UpVote </p>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionList;
