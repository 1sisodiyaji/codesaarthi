import React from 'react'
import { Routes, Route ,useLocation } from "react-router-dom";
import Cookie from '../pages/others/Cookie';
import Error404Pgae from '../pages/others/Error404Pgae';
import PrivacyPolicy from '../pages/others/PrivacyPolicy';
import TermsAndConditions from '../pages/others/TermsAndConditions';
import { Navbar } from '../components/Navbar';
import Home from '../pages/Home/Home';
import Footer from '../components/Footer';
import News from '../pages/Explore/News';
import SingleNews from '../pages/Explore/SingleNews';
import Jobs from '../pages/Explore/Jobs';
import AskFreely from '../pages/Explore/AskFreely';
import SingleQuestion from '../pages/Explore/SingleQuestion';
import Register from '../pages/Auth/register';
import About from '../pages/others/About';
import Blogs from '../pages/Explore/Blogs';
import SingleBlog from '../pages/Explore/SingleBlog';
import Login from '../pages/Auth/Login';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import ProfilePicture from '../pages/Tools/ProfilePicture';
import Dashboard from '../pages/Admin/Dashboard';
import AdminLogin from '../pages/Admin/AdminLogin';
import Theory from '../pages/Theory/Theory';
import SingleTheory from '../pages/Theory/SingleTheory';
import Problems from '../pages/Problems/Problems';
import Roadmap from '../pages/Roadmap/Roadmap';
import SingleRoadmap from '../pages/Roadmap/SingleRoadmap';
import Project from '../pages/Projects/Project';
import MassMailer from '../pages/Tools/MassMailer';

const Routess = () => {
  const location = useLocation();
  const adminPaths = ['/Admin-Dashboard', '/Admin-Login'];

  const shouldHideNavbarAndFooter = adminPaths.includes(location.pathname);
  return (
  <>
  {!shouldHideNavbarAndFooter && <Navbar />}

  <Routes> 
  <Route path="/" element={<Home />} />
  <Route path="/privacy_policy" element={<PrivacyPolicy />} />
  <Route path="/terms_conditions" element={<TermsAndConditions />} />
  <Route path="/cookies" element={<Cookie />} />
  <Route path="/news" element={<News />} />
  <Route path="/news/:slug" element={<SingleNews />} />
  <Route path="/jobs" element={<Jobs />} />
  <Route path="/ask-freely" element={<AskFreely />} />
  <Route path="/ask-freely/:slug" element={<SingleQuestion />} />
  <Route path="/blogs" element={<Blogs />} />
  <Route path="/blog/:slug" element={<SingleBlog />} />
  <Route path="/about" element={<About/> } />

  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/forgot-password" element={<ForgotPassword />} />

  <Route path="/Theory" element={<Theory />} />
  <Route path="/Theory/:slug" element={<SingleTheory />} />

  <Route path="/Problems" element={<Problems />} />
  <Route path="/Roadmap" element={<Roadmap />} />
  <Route path="/Roadmap/:slug" element={<SingleRoadmap />} />
  <Route path="/Project" element={<Project />} />

  <Route path="/tools/ProfilePicture" element={<ProfilePicture />} />
  <Route path="/tools/Mass-Mailer" element={<MassMailer />} />


  <Route path="/Admin-Dashboard" element={<Dashboard/>}/>
  <Route path="/Admin-Login" element={<AdminLogin/>} />



  
  <Route path="/*" element={<Error404Pgae />} />
  </Routes> 

  {!shouldHideNavbarAndFooter && <Footer />}


 
 
 





  </>
  )
}

export default Routess