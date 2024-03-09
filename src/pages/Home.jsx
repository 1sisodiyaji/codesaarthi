import React from "react";
import "../App.css";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
   <>
   <Helmet>
  <meta name="keywords" content="codesaarthi,code saarthi, saarthi ,dsa Question , CodeSaarthi, Code saarthi , Web Development, Coding, Programming, Interview Preparation" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://codesaarthi.com/" />
  <meta name="description" content="Explore the world of coding and programming. Learn web development, prepare for interviews, and discover a variety of projects and tutorials. Start your coding journey with us!" />
  <title>codesaarthi | Coding and Programming Hub</title>
  <meta property="og:title" content="codesaarthi | Coding and Programming Hub" />
  <meta property="og:description" content="Explore the world of coding and programming. Learn web development, prepare for interviews, and discover a variety of projects and tutorials. Start your coding journey with us!" />
  <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
  <meta property="og:url" content="https://codesaarthi.com/" />
  <meta property="og:type" content="Website" />
  <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
</Helmet>

   <div className="row" style={{backgroundColor:'#67a0d4', minHeight:'100vh'}}>
    <div className="col-4  d-flex align-items-center justify-content-center">
    <img src="../img/girl1.png" className="img-fluid DashImageView" style={{height:'100vh'}} alt="girl image" />
    </div>
    <div className="col-4 d-flex align-items-center justify-content-center">
    <img src="../img/logo.png" className="img-fluid DashImageView" alt="logo of codesaarthi" />
    </div>
    <div className="col-4 d-flex align-items-center justify-content-center">
      <img src="../img/mision1.png" className="img-fluid DashImageView" style={{height:'100vh'}} alt="boy image" />
    </div>
   
   </div>
   </>
  );
};

export default Home;
