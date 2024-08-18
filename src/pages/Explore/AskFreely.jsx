import CreateQuestion from "../../components/ASK_FREELY/CreateQuestion";
import QuestionList from "../../components/ASK_FREELY/QuestionList";
import RandomQuestion from "../../components/ASK_FREELY/RandomQuestion"; 
import { VortexDesign } from "../../components/VortexDesign";
import { Helmet } from "react-helmet";
const AskFreely = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://codesaarthi.com/ask-freely`} />
        <meta
          name="description"
          content="Here we go we get the jobs listing for freshers from the adunza job api so use it to short and fast apply."
        />
        <title>Ask - Freely | Codesaarthi</title>
        <meta property="og:title" content="Jobs | Codesaarthi" />
        <meta
          property="og:description"
          content="Here we go we get the jobs listing for freshers from the adunza job api so use it to short and fast apply."
        />
        <meta
          property="og:image"
          content="https://codesaarthi.com/img/logo.png "
        />
        <meta
          property="og:url"
          content={`https://codesaarthi.com/ask-freely`}
        />
        <meta property="og:type" content="Education-Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/img/favicon.ico"
          sizes="32x32"
        />
      </Helmet>
      <div className="min-h-screen py-20 bg-slate-100 dark:bg-gray-950">
        <div className="w-full">
          <VortexDesign
            title="Have a Question? We’ve Got Answers!"
            description="Join our community where your curiosity meets insightful responses. Dive in to ask your burning questions and contribute your expertise!"
            button1="Ask Now"
            button2="Share Your Knowledge"
          />
        </div>
       <section id="askQuestion"> 
       <CreateQuestion/>
       </section>
       <RandomQuestion/>  
       <section id="contribute">
       <QuestionList/> 
       </section> 
      </div>
    </>
  );
};

export default AskFreely;
