import React from 'react'
import { Routes, Route } from "react-router-dom";
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

const Routess = () => {
  return (
  <>
  <Navbar/>
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

  <Route path="/tools/ProfilePicture" element={<ProfilePicture />} />

  <Route path="/*" element={<Error404Pgae />} />
  </Routes>
  <Footer/>
  
  </>
  )
}

export default Routess