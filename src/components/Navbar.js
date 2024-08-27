import React, { useEffect, useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu.tsx";
import { cn } from "../lib/utils.ts";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../store/slices/userSlice.js';
import { clearUser } from '../store/slices/userSlice.js';
export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavBarContent className="top-2" />
    </div>
  );
}

function NavBarContent({ className }) {
  const [active, setActive] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUser());
  };
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-50 h-12 hidden md:flex justify-between", className)}>
       
       <Link to="/"><h1 className="md:text-3xl"> Codesaarthi</h1></Link> 
        <Menu setActive={setActive}>

          { user && user._id ? (
              <Link to="/" >
                <MenuItem setActive={setActive} active={active} item="Dashboard" />
              </Link>
            ) : (
              <Link to="/" >
                <MenuItem setActive={setActive} active={active} item="Home" />
              </Link>
            )
          }

          <Link to="/about" ><MenuItem setActive={setActive} active={active} item="About"></MenuItem></Link>
          <Link to="/Theory" ><MenuItem setActive={setActive} active={active} item="Theory"></MenuItem></Link>
          <Link to="/Problems" ><MenuItem setActive={setActive} active={active} item="Problems"></MenuItem></Link>
          <Link to="/Project" ><MenuItem setActive={setActive} active={active} item="Projects"></MenuItem></Link>
          <Link to="/Roadmap" ><MenuItem setActive={setActive} active={active} item="Roadmaps"></MenuItem></Link>

          <MenuItem setActive={setActive} active={active} item="Tools">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Profile Picture"
                href="/tools/ProfilePicture"
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1724612288/Screenshot_2024-08-16_200811_h2gcp1.png"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Mass Mailer"
                href="/tools/Mass-Mailer"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Explore">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Blogs"
                href="/blogs"
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1723150833/4_txsurb.png"
                description="Dive into insightful articles and enhance your knowledge on various topics."
              />
              <ProductItem
                title="News"
                href="/news"
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1723130894/2_gmgxkt.png"
                description="Stay updated with the latest news and trends in the industry."
              />
              <ProductItem
                title="Jobs"
                href="/jobs"
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1723145623/3_qwgvkv.png"
                description="Find your dream job with our curated job listings."
              />
              <ProductItem
                title="Ask-Freely"
                href="/ask-freely"
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1723157339/5_lg8sxf.png"
                description="Ask questions and get answers from our community."
              />
            </div>
          </MenuItem>

        </Menu>

        <div className="flex space-x-3 items-center">
          <input
            type="checkbox"
            className="toggle"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <Link to="/register">
            {user ? (
              <button className="btn btn-neutral rounded-xl" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button className="btn btn-neutral rounded-xl">
                SignUp
              </button>
            )}
          </Link>

        </div>

      </div>

      <div className="md:hidden w-full flex justify-between items-center">
        <h3>Codesaarthi</h3>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="toggle"
            checked={darkMode}
            onChange={toggleDarkMode}
          />

          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn drawer-button"><i className="fi fi-br-bars-staggered"></i></label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4"> 
                <Link to="/" ><MenuItem setActive={setActive} active={active} item="Home"></MenuItem></Link>
                <Link to="/about" ><MenuItem setActive={setActive} active={active} item="About"></MenuItem></Link>
                <Link to="/Theory" ><MenuItem setActive={setActive} active={active} item="Theory"></MenuItem></Link>
                <Link to="/Problems" ><MenuItem setActive={setActive} active={active} item="Problems"></MenuItem></Link>
                <Link to="/Project" ><MenuItem setActive={setActive} active={active} item="Projects"></MenuItem></Link>
                <Link to="/Roadmap" ><MenuItem setActive={setActive} active={active} item="Roadmaps"></MenuItem></Link>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
