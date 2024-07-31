import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import ProjectData from '../../data/ProjectsData'; 
import Card from "../../component/Card";
 
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => { 
    if (Array.isArray(ProjectData)) {
      setProjects(ProjectData); 
    } else {
      console.error("ProjectData is not an array");
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta name="keywords" content="Projects, Web Development Projects, React Projects,Top 10 projects in react, Clone Projects, Coding Projects , easy projects , learn web develpopment through projects , learn with projects" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Projects" />
        <meta name="description" content="Explore a collection of diverse projects, including web development projects, React projects, clone projects, and more. Find inspiration and examples for your coding projects and learn through practical implementation." />
        <title>Projects: Web Development, React, Php , Java | codesaarthi</title>
        <meta property="og:title" content="Projects: Web Development, React, Php , Java | codesaarthi" />
        <meta property="og:description" content="Explore a collection of diverse projects, including web development projects, React projects, clone projects, and more. Find inspiration and examples for your coding projects and learn through practical implementation." />
        <meta property="og:image" content="https://res.cloudinary.com/ducw7orvn/image/upload/v1720990203/logo_zdeshk.png" />
        <meta property="og:url" content="https://codesaarthi.com/Projects" />
        <meta property="og:type" content="Portfolio-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div className="container-fluid design" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row py-5 g-6">
            {projects.length > 0 ? projects.map((project, index) => (
              <div key={index} className="col-lg-4 my-2 col-12">
                <Card image = {project && project.thumbnail} title={project.name} details = {project.description} icon2 = "fi fi-sr-workflow-setting-alt"  button2 = "Check it Out" link={`/Projects/${project.name} `} button1 = "add to read" icon1 = "fi fi-sr-add" />
              </div>
            )) : (
              <p>No projects available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
