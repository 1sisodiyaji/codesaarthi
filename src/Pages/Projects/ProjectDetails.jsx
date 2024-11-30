import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import ProjectData from "../../data/ProjectsData"; 
import Card from "../../component/Card";

const ProjectDetails = () => {
    const { name } = useParams();

    const [project, setProject] = useState(null);
    useEffect(() => {
        const selectedProject = ProjectData.find(p => p.name === name);
        if (selectedProject) {
            setProject(selectedProject);
        }
    }, [name]);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div className="container py-lg-5">
            <h2 className="text-center text-decoration-underline text-warning">{project.name}</h2>
            <div className="row">
              
                {project.projects.map((proj, index) => (
                    <div key={index} className="col-lg-4 col-12 my-2"> 
                    <Card image = {proj.images.image1} title = {proj.title} details = {proj.description} biggerbutton = "Get" link ={`/Projects/${project.name}/${proj.title}`} biggerIcon = "fi fi-sr-sign-in-alt"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectDetails;
