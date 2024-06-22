import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import RecoverPassword from "../pages/RecoverPassword/RecoverPassword";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsAndConditions";
import Cookie from "../pages/Cookie";
import ErrorPage from '../pages/Error404Pgae';
import Projects from "../pages/Projects";
import Theory from "../pages/Theory";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";
import Problems from "../pages/Problems";
import Roadmap from "../pages/Roadmap";
import Dsa from "../pages/Roadmap/Dsa"; 
import WebDevelopment from "../pages/Projects/CloneProjects/WebDevelopment";
import AmazonClone from "../pages/Projects/CloneProjects/Amazon-clone";
import DiscordProject from "../pages/Projects/CloneProjects/Discord";
import Os from "../pages/Roadmap/Os";
import Dbms from "../pages/Roadmap/Dbms";
import ComputerNetworks from "../pages/Roadmap/ComputerNetworks";
import RazorpayProject from "../pages/Projects/CloneProjects/RazorPay";
import Spotify from "../pages/Projects/CloneProjects/Spotify";
import ReactProject from "../pages/Projects/React/ReactProject";
import BlogApps from "../pages/Projects/React/BlogApps"; 
import PractiseBasicArray from "../pages/Practise/Array/PractiseBasicArray";
import HtmlProject from "../pages/Projects/HtmlProject/HtmlProject";
import AssignmentProject from "../pages/Projects/HtmlProject/AssignmentProject";
import PortfolioHtml from "../pages/Projects/HtmlProject/PortfolioHtml";
import ProductCatalog from "../pages/Projects/HtmlProject/ProductCatalog";
import IFrame from "../pages/Projects/HtmlProject/IFrame";
import PhpProject from "../pages/Projects/PHPProject/PhpProjects";
import Kreeda from "../pages/Projects/PHPProject/Kreeda";
import KishanMitra from "../pages/Projects/PHPProject/KishanMitra"; 
import JavaProject from "../pages/Projects/JavaProject/JavaProject";
import TripPlanner from "../pages/Projects/JavaProject/TripPlanner";
import FunCalculations from "../pages/Projects/JavaProject/FunCalculations";
import ChatApp from "../pages/Projects/JavaProject/ChatApp";
import HtmlCssProject from "../pages/Projects/HtmlCss/HtmlCssProject";
import ShoppingLastPage from "../pages/Projects/HtmlCss/ShoppingLastPage";
import ReciepeWebsite from "../pages/Projects/HtmlCss/ReciepeWebsite";
import ChairPage from "../pages/Projects/HtmlCss/ChairPage";
import HireMe from "../pages/Projects/HtmlCss/HireMe";
import ImageGallery from "../pages/Projects/HtmlCss/ImageGallery";
import JobApplication from "../pages/Projects/HtmlCss/JobApplication";
import ProductCard from "../pages/Projects/HtmlCss/ProductCard"; 
import Profile from "../pages/Profile"; 
import TableCard from "../pages/Projects/React/Table";
import Weather from "../pages/Projects/React/Weather";
import UserList from "../pages/Projects/React/userList";
import { Navbar2 } from "../component/Navbar2";
import NewsApi from "../component/NewsApi"; 
import Blogs from "../component/Blogs";
import Jobs from "../component/Jobs";
import JobApplicationForm from "../Admin/JobApplicationForm";
import TextForm from "../component/Textarea";
import UpdateBlogs from "../component/Blogs/UpdateBlog";
import Blog from "../component/Blogs/Blog";
import CreateCourse from "../Admin/CreateCourse";
import Content from "../component/Content" ;
import UpdateCourse from "../Admin/UpdateCourse";
import Admin from "../Admin/Admin";


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


  return (
    <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Problems" element={<Problems/>} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/RecoverPassword" element={<RecoverPassword />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/terms_conditions" element={<TermsCondition />} />
          <Route path="/cookies" element={<Cookie />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/theory/:title" element={<Content />} />
          <Route path="/roadMap" element={<Roadmap />} />
          <Route path="/profile" element={<Profile />} />
            
          <Route path="/Projects/web-development" element={<WebDevelopment />} />
          <Route path="/Projects/Amazon-clone" element={<AmazonClone />} />
          <Route path="/Projects/Discord" element={<DiscordProject />} />
          <Route path="/Projects/RazorPay" element={<RazorpayProject />} />
          <Route path="/Projects/Spotify-Clone" element={<Spotify />} />
          <Route path="/Projects/React-based-project" element={<ReactProject />} />
          <Route path="/Projects/blog-app-react" element={<BlogApps/>} />
          <Route path="/Projects/HtmlProject" element={<HtmlProject/>} />
          <Route path="/Projects/PortfolioHtml" element={<PortfolioHtml/>} />
          <Route path="/Projects/AssignmentProject" element={<AssignmentProject/>} />
          <Route path="/Projects/ProductCatalog" element={<ProductCatalog/>} />
          <Route path="/Projects/youtubeBasedProject" element={<IFrame/>} />
          <Route path="/Projects/phpProjects" element={<PhpProject/>} />
          <Route path="/Projects/Kreeda" element={<Kreeda/>} />
          <Route path="/Projects/kishanMitra" element={<KishanMitra/>} />
          <Route path="/Projects/java-Projects" element={<JavaProject/>} />
          <Route path="/Projects/TripPlanner" element={<TripPlanner/>} />
          <Route path="/Projects/FunCalculations" element={<FunCalculations />} />
          <Route path="/Projects/Chat-App" element={<ChatApp/>} />
          <Route path="/Projects/Html-Css-Projects" element={<HtmlCssProject/>} />
          <Route path="/Projects/Shopping-page" element={<ShoppingLastPage/>} />
          <Route path="/Projects/Reciepe-website" element={<ReciepeWebsite/>} />
          <Route path="/Projects/Chair-page" element={<ChairPage/>} />
          <Route path="/Projects/Hire-Me" element={<HireMe/>} />
          <Route path="/Projects/Product-Card" element={<ProductCard/>} />
          <Route path="/Projects/Image-Gallery" element={<ImageGallery/>} />
          <Route path="/Projects/Job-Application-page" element={<JobApplication/>} />
          <Route path="/Projects/react/table" element={<TableCard/>} />
          <Route path="/Projects/react/weather" element={<Weather/>} />
          <Route path="/Projects/react/userList" element={<UserList/>} />
          <Route path="/Problems/ArrayProblems" element={<PractiseBasicArray/>} />
          


          <Route path="/roadMap/Os" element={<Os/>} />
          <Route path="/roadMap/dsa" element={<Dsa/>} />
          <Route path="/roadMap/ComputerNetwork" element={<ComputerNetworks />} />
          <Route path="/roadMap/Dbms" element={<Dbms />} />
          
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/blog/:id" element={<Blog/>} />
          <Route path="/edit-blog/:id" element={<UpdateBlogs/>} />
          <Route path="/news" element={<NewsApi/>} />
          <Route path="/jobs" element={<Jobs/>} />
          <Route path="/*" element={<ErrorPage />} />

          {/* Admin Section  */}
          <Route path="/Admin" element={<Admin />} /> 
          <Route path="/Admin/JobApply" element={<JobApplicationForm />} />
          <Route path="/Admin/create-course" element={<CreateCourse />} />
          <Route path="/Admin/update/:title" element={<UpdateCourse />} />
          <Route path="/Admin/text-editor" element={<TextForm />} />
        </Routes>

        <Footer onFooterClick={handleFooterClick} />
        <Navbar2/>
      
    </>
  )
}

export default Routess