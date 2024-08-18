import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu.tsx";
import { cn } from "../lib/utils.ts";
import { BorderButton } from "./BorderButton.js";
import { Link } from "react-router-dom";

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
    <div className={cn("fixed top-10 inset-x-0 max-w-7xl mx-auto z-50 h-12 flex justify-between", className)}>
         
         <h1 className="text-3xl text-black dark:text-white"> Codesaarthi</h1>
      <Menu setActive={setActive}> 
        <Link to = "/" ><MenuItem setActive={setActive} active={active} item="Home"></MenuItem></Link>
        <Link to = "/about" ><MenuItem setActive={setActive} active={active} item="About"></MenuItem></Link>
      
      
        <MenuItem setActive={setActive} active={active} item="Theory">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Problems">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
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
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Roadmaps">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
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
        <MenuItem setActive={setActive} active={active} item="Tools">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
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
      <Link to ="/register">
      <BorderButton text = "SignUp"/>
      </Link>
      </div>
    </div>
  );
}
