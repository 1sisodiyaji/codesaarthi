import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../config/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [uniqueTags, setUniqueTags] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const loadMoreRef = useRef(null);
  const navigate = useNavigate();

  const fetchQuestions = useCallback(async (pageNum = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(`${config.BASE_URL}/article/questions?page=${pageNum}`);
      
      const { questions, tags } = response.data.data;
      setUniqueTags(tags);

      const questionsWithTags = questions.map(question => {
        const tagsString = Array.isArray(question.tags) ? question.tags.join(', ') : '';
        return {
          ...question,
          tags: tagsString.split(',').map(tag => tag.trim())
        };
      });

      setQuestions(prevQuestions => [...prevQuestions, ...questionsWithTags]);

      if (questions.length < 15) {
        setHasMore(false);
      }

      if (questionsWithTags.length > 0) {
        setAnswers(questionsWithTags[0].answers);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuestions(page);
  }, [fetchQuestions, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
        if (hasMore && !loading) {
          setPage(prevPage => prevPage + 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading]);

  const filterByTag = async (tag) => {
    try {
      setLoading(true);
      const response = await axios.get(`${config.BASE_URL}/article/questions/tag/${tag}`);
      const filteredQuestions = response.data.map(question => {
        const tagsString = Array.isArray(question.tags) ? question.tags.join(', ') : '';
        return {
          ...question,
          tags: tagsString.split(',').map(tag => tag.trim())
        };
      });

      setQuestions(filteredQuestions);
      setPage(1); // Reset page to 1 since we're filtering
      setHasMore(filteredQuestions.length >= 15); // If fewer than 15 results, no more pages
    } catch (error) {
      console.error('Error filtering questions by tag:', error);
    } finally {
      setLoading(false);
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
      setQuestions(questions.map(q => q._id === id ? { ...q, votes: response.data.votes } : q));
    } catch (error) {
      console.error('Error upvoting the question:', error);
    }
  };

  const handleAnswerSubmit = async () => {
    try {
      setLoading(true);
      const token = Cookies.get('token');
      const response = await axios.post(
        `${config.BASE_URL}/article/answers`,
        { body: newAnswer, questionId: questions._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      setAnswers([...answers, response.data]);
      setNewAnswer('');
      navigate(`/Questions/${questions._id}`);
    } catch (error) {
      setLoading(false);
      console.error('Error submitting answer:', error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="tags-container mb-3">
        {uniqueTags.map((tag, index) => (
          <span
            key={index}
            className="badge badge-dark m-1"
            style={{ cursor: 'pointer' }}
            onClick={() => filterByTag(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
      <div>
        {questions.length > 0 ? (
          questions.map((question) => {
            const questionUrl = `${window.location.origin}/Questions/${question.slug}`;
            return (
              <div key={question._id} className='shadow-lg borderColor rounded-4 p-3 m-1 my-2'>
                <div className="row">
                  <div className="col-12">
                    <Link to={`/Questions/${question.slug}`} className='iconColor text-decoration-underline' style={{ cursor: 'pointer' }}>
                      <p>{question.title} </p>
                    </Link>
                  </div>
                </div>

                <small>{question.body}</small>
                <div className="row">
                  <div className="col-6 d-flex">
                    <Link to={`/profile/${question.user.username}`} className='iconColor'>
                      <small> Asked By : <span className='text-decoration-underline'>{question.user.name}</span> </small>
                    </Link>
                    <ul>
                      {question.tags.length > 0 ? question.tags.map((tag, index) => (
                        <li key={index} className='badge badge-dark m-2 text-capitalize'>{tag}</li>
                      )) :
                      <p>No tags used</p>
                      }
                    </ul>
                  </div>
                  <div className="col-6 text-end">
                    <small className='pe-2'>
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
                    <div>
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
                </div>
              </div>
            );
          })
        ) : (
          <p>No questions available</p>
        )}
        {hasMore && (
          <div ref={loadMoreRef} className="text-center my-3">
            {loading ? (
              <span className="spinner-border spinner-border-lg" role="status"></span>
            ) : (
              <button className='btn btn-primary' onClick={() => setPage(prevPage => prevPage + 1)}>Load More</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionList;
