import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import config from '../../config/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { handleCopyText, handleShareLinkedIn, handleShareWhatsApp } from '../../config/Share';
import TimeConverter from '../../config/TimeConverter';

import JoditEditor from "jodit-react";
import TruncateText from '../../config/TruncateText';

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [uniqueTags, setUniqueTags] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [showYourAnswer , setShowYourAnswer] = useState({});
  const [page, setPage] = useState(1); 
  const loadMoreRef = useRef(null);
  const navigate = useNavigate();
  const editor = useRef(null);
  const editorConfig = useMemo(() => ({
    readonly: false,
    placeholder: 'Your answer',
  }), []);
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

  const upvote = async (id) => {
    const token = Cookies.get('Codesaarthi-token');
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

  const handleAnswerSubmit = async (id) => {
    if (!id) {
      toast.error("Question not found", { theme: "dark" });
      return;
    }
    try {
      setLoading(true);
      const token = Cookies.get('Codesaarthi-token');
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
      setNewAnswer('');
      navigate(`/Questions/${response.data.question.slug}`);
    } catch (error) {
      toast.error("Failed to Answer", { theme: "dark" });
      setLoading(false);
      console.error('Error submitting answer:', error);
    }
  };
  const showYourAnswerForm = (id) => {
    setShowYourAnswer(prevState => ({ ...prevState, [id]: !prevState[id] }));
  }
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
              <div key={question._id} className='shadow-lg borderColor rounded-4 p-2 my-2'>
                <Link to={`/Questions/${question.slug}`} className='iconColor text-start text-decoration-underline' style={{ cursor: 'pointer' }}>
                  <p> {TruncateText(question.title, 90)} </p>
                </Link>
                <small>{question.body}</small>
                <div className="row g-0">
                  <div className="col-6 d-flex">
                    <Link to={`/profile/${question.user.username}`} className='iconColor'>
                      <small> Asked By : <span className='text-decoration-underline'>{question.user.name}</span> </small>
                    </Link>
                    <div>
                      {question.tags.length > 0 ? question.tags.map((tag, index) => (
                        <div key={index} className='badge badge-dark  text-capitalize ms-2'>{tag}</div>
                      )) :
                        <p>No tags used</p>
                      }
                    </div>
                  </div>
                  <div className="col-6 text-end">
                    <div className='pe-2'>
                      <TimeConverter date={question.createdAt} />
                    </div>
                  </div>

                </div>
                <div className="row g-0 mt-2">
                  <div className="col-10 d-flex">
                    <div onClick={() => upvote(question._id)}>
                      <p className="btn btn-sm rounded-8 text-capitalize">  {question.votes} <i className="fi fi-rs-social-network"></i> UpVote </p>
                    </div>
                    <div><p className='text-decoration-underline   rounded-8 text-capitalize mx-2' onClick={ () => {showYourAnswerForm(question._id)}} style={{cursor: 'pointer'}} >  Contribute Your Views </p></div>
                    <div> <p className='rounded-8 text-capitalize'>Total answer <span className='badge badge-dark  text-capitalize ms-2'> {question.answerCount}</span> </p> </div>
                  </div>
                  <div className="col-2 text-end">
                    <div className="dropdown">
                      <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="fi fi-ss-share"></i>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><button className="dropdown-item" onClick={() => handleCopyText(questionUrl)}>Copy Link</button></li>
                        <li><button className="dropdown-item" onClick={() => handleShareWhatsApp(questionUrl)}>Share on WhatsApp</button></li>
                        <li><button className="dropdown-item" onClick={() => handleShareLinkedIn(questionUrl)}>Share on LinkedIn</button></li>
                      </ul>
                    </div>
                  </div> 
                </div>
               {showYourAnswer[question._id] && 
               <div className='w-100'>
                  <JoditEditor
                    ref={editor}
                    value={newAnswer}
                    config={editorConfig}
                    tabIndex={1}
                    onBlur={newContent => setNewAnswer(newContent)}
                    onChange={newContent => { }}
                    className='w-100 mb-2'
                  />
                  {loading ?
                    <button className="btn text-capitalize" type="button" disabled>
                      <span className="sr-only">Adding Your Views...</span>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </button>
                    :
                    <button className='btn text-capitalize' onClick={() => handleAnswerSubmit(question._id)}>Submit Answer</button>
                  } 
                </div>
               }
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
