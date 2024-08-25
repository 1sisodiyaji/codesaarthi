import React from "react";
import Slides from "../../components/About/Slides";
import Timeline from "../../components/About/Timeline";
import Contact from "../../components/About/Contact";

const About = () => {
  const events = [
    {
      year: "2023",
      title: "Our Journey Begins",
      message:
        `In 2023, my friend and I embarked on our journey into web development. 
        It wasn't easy—we faced many challenges, from grasping complex concepts to 
        navigating the vast landscape of resources. But rather than being deterred, 
        these obstacles fueled our determination. We decided to create a platform where
         users could find everything they need to succeed—tutorials, notes, roadmaps, DSA 
         questions, blogs, news, jobs, a community Q&A section, and tools we developed—all in one place
         . Our website started modestly, offering notes, roadmaps, and projects, but we knew this 
         was just the beginning.`
    },
    {
      year: "2024",
      title: "Expanding Our Vision",
      message: 
       `In 2024, we expanded our platform, bringing our vision to life by  offering a comprehensive suite of resources that cater to every learner’s needs. Alongside the original features, we added
              tutorials, blogs, a jobs section, news updates, a community forum
              for asking questions, and a tools section where users can access
              everything we develop for free. Our future plans include providing
              free APIs and much more. Our goal is to empower users by giving
              them the tools and knowledge they need to thrive in the
              ever-evolving world of technology.`,
    },
  ];

  return (
    <> 
      <div className="min-h-screen bg-slate-100 dark:bg-gray-950">
        <Slides message1={"Codesaarthi"} message2={"Your Learning Partner"} />
        <div className="md:max-w-4xl m-auto">  <Timeline events={events} /></div>
      
        <Contact/>
      </div>
    </>
  );
};

export default About;
