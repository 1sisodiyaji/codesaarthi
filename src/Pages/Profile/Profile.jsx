import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import QuestionAskedByAuthor from "../../component/Profile/QuestionAskedByAuthor";
import BlogsByAuthor from "../../component/Profile/getBlogsByAuthor";
import AnswerByAuthor from "../../component/Profile/AnswerGivenByUser";
import UserData from "../../component/Profile/UserData";
import ProfileChart from "../../component/Profile/ProfileChart";
import ErrorBoundary from "../../component/ErrorBoundary";


const Profile = () => { 

  return (
    <> 
      <Helmet>
        <meta
          name="keywords"
          content="Profile , Codesaarthi Account , Account authentication , Profile searcher in codesaarthi"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/profile" />
        <title>Profile | Codesaarthi</title>
      </Helmet>

      <div className="container mt-4">
      <UserData/>
      <ProfileChart/>
          <div className="mt-4">
            <ErrorBoundary>
          <BlogsByAuthor />
          </ErrorBoundary>
        </div>  

        {/* <div className="mt-4">
          <h6>Your Questions</h6>
          <QuestionAskedByAuthor/>
        </div> */}

        <div className="mt-4">
          <h6>Your Contribution on answers :- </h6>
          <AnswerByAuthor/>
        </div>

      </div>
    </>
  );
};

export default Profile;
