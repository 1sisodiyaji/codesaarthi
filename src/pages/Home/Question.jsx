import React, { useEffect, useState } from 'react';
import CreateQuestion from '../../component/Questions/CreateQuestion';
import QuestionList from '../../component/Questions/QuestionList';
import { Helmet } from "react-helmet";

const Question = () => {
  const [isCreating, setIsCreating] = useState(false);

  const handleToggleCreateQuestion = () => {
    setIsCreating(!isCreating);
  };
  useEffect(()=> {
    window.scrollTo(0, 0);
  })

  return (
    <>
   <Helmet>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="A technical question and answer platform where users can ask and answer technical questions. Connect with experts and get solutions to your technical problems." />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={`https://codesaarthi.com/Questions`} />
  <title>Ask-Questions | Codesaarthi</title>
  <meta property="og:title" content="Codesaarthi: Technical Q&A Platform" />
  <meta property="og:description" content="Connect with experts and get answers to your technical questions. Join Codesaarthi, a platform dedicated to technical discussions and solutions." />
  <meta property="og:image" content="https://codesaarthi.com/img/logo.jpg" />
  <meta property="og:url" content={`https://codesaarthi.com/Questions`} />
  <meta property="og:type" content="website" />
  <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
</Helmet>
<div className="container-fluid design g-0 py-lg-5 py-3" style={{minHeight: '100vh'}}>
      <button 
        className="btn btn-sm w-100 text-capitalize  my-3" 
        onClick={handleToggleCreateQuestion}
      >
        {isCreating ? 'Cancel' : 'Ask Your Question'}
      </button>
      
      {isCreating && <CreateQuestion />}
      <QuestionList />
      </div>
    </>
  );
};

export default Question;
