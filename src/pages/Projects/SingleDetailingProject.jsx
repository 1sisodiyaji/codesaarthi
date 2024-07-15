import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../../data/Projects.json";

const SingleDetailingProject = () => {
  const { projectTitle } = useParams(); // Assuming you use 'proj.title' for the URL param
console.log(projectTitle);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projectsData && projectsData.projects) {
      const selectedProject = projectsData.projects.find(
        proj => proj.title === projectTitle
      );
      if (selectedProject) {
        setProject(selectedProject);
      }
    }
  }, [projectTitle]);
  

  if (!project) {
    return <p>Project details not found</p>;
  }

  return (
    <div className="container py-lg-5">
      <h2 className="text-center text-decoration-underline text-warning">
        {project.title}
      </h2>
      <div className="row">
        <div className="col-lg-6 col-12">
          <img
            src={project.images.image1}
            className="img-fluid"
            alt="Project "
          />
        </div>
        <div className="col-lg-6 col-12">
          <h4>Description:</h4>
          <p>{project.description}</p>
          <h4>Key Features:</h4>
          <div dangerouslySetInnerHTML={{ __html: project.headingDescription }} />
          <h4>Additional Description:</h4>
          <div dangerouslySetInnerHTML={{ __html: project.additionalDescriptions }} />
          <h4>Links:</h4>
          <p>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href={project.links.deployed}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleDetailingProject;
