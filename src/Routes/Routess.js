import React, { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import SignUp from "../pages/Auth/SignUp";
import Login from "../pages/Auth/Login";
import RecoverPassword from "../pages/Auth/RecoverPassword";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsAndConditions";
import Cookie from "../pages/Cookie";
import ErrorPage from "../pages/Error404Pgae";
import Projects from "../pages/Projects/Projects";
import Theory from "../pages/Theory/Theory";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";
import Problems from "../pages/Problems/Problems";
import Roadmap from "../pages/Roadmap/Roadmap";
import Profile from "../pages/Profile/Profile";
import { Navbar2 } from "../component/Navbar2";
import NewsApi from "../component/NewsApi";
import Blogs from "../component/Blogs";
import Jobs from "../component/Jobs";
import UpdateBlogs from "../component/Blogs/UpdateBlog";
import Blog from "../component/Blogs/Blog";
import CreateCourse from "../Admin/CreateCourse";
import Content from "../pages/Theory/Content";
import UpdateCourse from "../Admin/UpdateCourse";
import Admin from "../Admin/Admin";
import CreateRoadmap from "../Admin/CreateRoadmap";
import UpdateRoadmap from "../Admin/UpdateRoadmap";
import RoadmapDetails from "../pages/Roadmap/RoadmapDetails";
import BlogForm from "../component/Blogs/BlogForm";
import ProjectDetails from "../pages/Projects/ProjectDetails";
import SingleDetailingProject from "../pages/Projects/SingleDetailingProject";
import Protected from "../config/Protected";
import AdminProtected from "../config/AdminProtected";
import SingleNews from "../component/SingleNews";
import QuestionList from "../component/Questions/QuestionList";
import QuestionDetail from "../component/Questions/QuestionDetail";
import CreateQuestion from "../component/Questions/CreateQuestion";

const Routess = () => {
  const [shouldScrollToTop, setShouldScrollToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (shouldScrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShouldScrollToTop(false);
    }
  }, [shouldScrollToTop, location]);

  const handleFooterClick = () => {
    setShouldScrollToTop(true);
  };

  const checkInternetConnection = () => {
    if (!navigator.onLine) {
      console.log("offline");
    }
  };

  useEffect(() => {
    window.addEventListener("online", checkInternetConnection);
    window.addEventListener("offline", checkInternetConnection);
    checkInternetConnection();

    return () => {
      window.removeEventListener("online", checkInternetConnection);
      window.removeEventListener("offline", checkInternetConnection);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RecoverPassword" element={<RecoverPassword />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_conditions" element={<TermsCondition />} />
        <Route path="/cookies" element={<Cookie />} />
        <Route path="/profile" element={<Protected Component={Profile} />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/theory/:title" element={<Content />} />
        <Route path="/roadMap" element={<Roadmap />} />
        <Route path="/roadMap/:title" element={<RoadmapDetails />} />
        <Route path="/Problems" element={<Problems />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects/:name" element={<ProjectDetails />} />
        <Route path="/Projects/:name/:title" element={<SingleDetailingProject />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/add-blog" element={<Protected Component={BlogForm} />} />
        <Route path="/edit-blog/:id" element={<Protected Component={UpdateBlogs} />} />
        <Route path="/news" element={<NewsApi />} />
        <Route path="/news/:id" element={<SingleNews />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/Questions" element={<QuestionList />} />
        <Route path="/Questions/:id" element={<QuestionDetail />} />
        <Route path="/Ask-Questions" element={<CreateQuestion />} />


        <Route path="/Admin" element={<AdminProtected Component={Admin} />} />
        <Route path="/Admin/create-course" element={<AdminProtected Component={CreateCourse} />} />
        <Route path="/Admin/update/:title" element={<AdminProtected Component={UpdateCourse} />} />
        <Route path="/Admin/create-Roadmap" element={<AdminProtected Component={CreateRoadmap} />} />
        <Route path="/Admin/updateRoadmap/:id" element={<AdminProtected Component={UpdateRoadmap} />} />


        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer onFooterClick={handleFooterClick} />
      <Navbar2 />
    </>
  );
};

export default Routess;
