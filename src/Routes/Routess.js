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
import Array from "../pages/Theory/Array/Array";
import TransversingOfArray from "../pages/Theory/Array/TransversingOfArray";
import WebDevelopment from "../pages/Projects/CloneProjects/WebDevelopment";
import AmazonClone from "../pages/Projects/CloneProjects/Amazon-clone";
import DiscordProject from "../pages/Projects/CloneProjects/Discord";
import ReverseOfArray from "../pages/Theory/Array/ReverseOf Array";
import Challenges from "../pages/Theory/Array/Challenges";
import PallindromeInArray from "../pages/Theory/Array/PallindromeInArray";
import SortingArray from "../pages/Theory/Array/SortingArrays";
import SearchingArray from "../pages/Theory/Array/SearchingArray";
import MultiDimension from "../pages/Theory/Array/MultiDimensaionalArray";
import DynamicArray from "../pages/Theory/Array/DynamicArray";
import CommonMistakes from "../pages/Theory/Array/CommonMistakes";
import BasicDbms from "../pages/Theory/Dbms/Basic_Dbms";
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
import ArchitectureOfDbms from "../pages/Theory/Dbms/ArchitectureOfDbms"; 
import JavaProject from "../pages/Projects/JavaProject/JavaProject";
import TripPlanner from "../pages/Projects/JavaProject/TripPlanner";
import FunCalculations from "../pages/Projects/JavaProject/FunCalculations";
import ChatApp from "../pages/Projects/JavaProject/ChatApp";
import HtmlCssProject from "../pages/Projects/HtmlCss/HtmlCssProject";


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
          <Route path="/roadMap" element={<Roadmap />} />
          <Route path="/dsa" element={<Dsa/>} />
          <Route path="/array" element={<Array />} />
          <Route path="/transversing-of-array" element={<TransversingOfArray />} />
          <Route path="/reverse-of-array" element={<ReverseOfArray />} />
          <Route path="/Challenges-And-Exercise" element={<Challenges />} />
          <Route path="/Pallindrome-in-Array" element={<PallindromeInArray />} />
          <Route path="/Sorting-Array" element={<SortingArray />} />
          <Route path="/Searching-Array" element={<SearchingArray />} />
          <Route path="/Dynamic-Arrays" element={<DynamicArray />} />
          <Route path="/Common-Mistakes-in-Array" element={<CommonMistakes />} />
          <Route path="/MultiDimensions-in-Array" element={<MultiDimension />} />
          <Route path="/Os" element={<Os/>} />
          <Route path = "/Dbms" element={<Dbms />} />
          <Route path="/ComputerNetwork" element={<ComputerNetworks />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/Amazon-clone" element={<AmazonClone />} />
          <Route path="/Discord" element={<DiscordProject />} />
          <Route path="/RazorPay" element={<RazorpayProject />} />
          <Route path="/Spotify-Clone" element={<Spotify />} />
          <Route path="/React-based-project" element={<ReactProject />} />
          <Route path="/blog-app-react" element={<BlogApps/>} />
          <Route path="/HtmlProject" element={<HtmlProject/>} />
          <Route path="/PortfolioHtml" element={<PortfolioHtml/>} />
          <Route path="/AssignmentProject" element={<AssignmentProject/>} />
          <Route path="/ProductCatalog" element={<ProductCatalog/>} />
          <Route path="/youtubeBasedProject" element={<IFrame/>} />
          <Route path ="/phpProjects" element={<PhpProject/>} />
          <Route path="/Kreeda" element={<Kreeda/>} />
          <Route path="/kishanMitra" element={<KishanMitra/>} />
          <Route path="/ArrayProblems" element={<PractiseBasicArray/>} />
          <Route path="/basic-Dbms" element={<BasicDbms/>} />
          <Route path="/Architecture-Of-Dbms" element={<ArchitectureOfDbms/>} />
          <Route path="/java-Projects" element={<JavaProject/>} />
          <Route path="/TripPlanner" element={<TripPlanner/>} />
          <Route path="/FunCalculations" element={<FunCalculations />} />
          <Route path="/Chat-App" element={<ChatApp/>} />
          <Route path="/Html-Css-Projects" element={<HtmlCssProject/>} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>

        <Footer onFooterClick={handleFooterClick} />
      
    </>
  )
}

export default Routess