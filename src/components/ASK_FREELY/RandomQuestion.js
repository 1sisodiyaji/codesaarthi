import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../helper/config';
import TruncateText from '../../helper/TruncateText';
import TimeConverter from '../../helper/TimeConverter';  
import { Link } from 'react-router-dom';

const RandomQuestion = () => {
  const [newQuestions, setNewQuestions] = useState([]);

  useEffect(() => {
    const fetchNewQuestions = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/article/randomQuestions`);
        console.log(response);
        setNewQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchNewQuestions();
  }, []);

  return (
    <div className="flex  gap-4 overflow-x-scroll">
      {newQuestions && newQuestions.length > 0 ? (
        newQuestions.map((question) => (
          <div className='h-[27rem] flex items-center justify-center w-full'>
          <div className="card bg-base-100 image-full w-96 shadow-xl mb-4" key={question._id}>
            <figure>
              <img
                src="https://codesaarthi.com/img/logo.png"
                alt="Background"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <Link to={`/ask-freely/${question.slug}`} className="text-white"> 
                  <TruncateText text = {question.title} maxLength={90}/>
                </Link>
              </h2>
              <p className="text-white">
              <TruncateText text = {question.body} maxLength={120}/> 
              </p>
              <div className="card-actions justify-end">
                <div className="text-white">
                  <span>Asked By:</span>
                  {question.user ? (
                    <Link
                      to={`/profile/${question.user.username}`}
                      className="text-white underline ml-1"
                    >
                      {question.user.name}
                    </Link>
                  ) : (
                    <span className="ml-1">Unknown</span>
                  )}
                  <span className="ml-2">|</span>
                  <span className="ml-2">
                    <TimeConverter date={question.createdAt} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
        ))
      ) : (
        <p>No questions found.</p>
      )}
    </div>
  );
};

export default RandomQuestion;
