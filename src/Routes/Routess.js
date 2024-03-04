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
import Contest from "../pages/Contest";
import Projects from "../pages/Projects";
import Preparation from "../pages/Preparation";
import Theory from "../pages/Theory";
import Whiteboard from "../pages/Whiteboard";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";
import Problems from "../pages/Problems";
import Roadmap from "../pages/Roadmap";
import Dsa from "../pages/Roadmap/Dsa";
import Array from "../pages/Theory/Array/Array";
import TransversingOfArray from "../pages/Theory/Array/TransversingOfArray";
import WebDevelopment from "../pages/Projects/WebDevelopment";
import AmazonClone from "../pages/Projects/Amazon-clone";
import Discord from "../pages/Projects/Discord";
import ReverseOfArray from "../pages/Theory/Array/ReverseOf Array";
import Challenges from "../pages/Theory/Array/Challenges";
import PallindromeInArray from "../pages/Theory/Array/PallindromeInArray";
import SortingArray from "../pages/Theory/Array/SortingArrays";
import SearchingArray from "../pages/Theory/Array/SearchingArray";
import MultiDimension from "../pages/Theory/Array/MultiDimensaionalArray";
import DynamicArray from "../pages/Theory/Array/DynamicArray";
import CommonMistakes from "../pages/Theory/Array/CommonMistakes";

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
          <Route path="/contest" element={<Contest />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/RecoverPassword" element={<RecoverPassword />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/terms_conditions" element={<TermsCondition />} />
          <Route path="/cookies" element={<Cookie />} />
          <Route path="/preparation" element={<Preparation />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/whiteboard" element={<Whiteboard />} />
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
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/Amazon-clone" element={<AmazonClone />} />
          <Route path="/Discord" element={<Discord />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>

        <Footer onFooterClick={handleFooterClick} />
      
    </>
  )
}

export default Routess