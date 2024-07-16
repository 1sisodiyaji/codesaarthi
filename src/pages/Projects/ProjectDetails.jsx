import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectData from "../../data/ProjectsData"; 

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
                        <div className="card rounded-8  pb-3 shadow-lg" >
                            <div className=" text-center">
                                <img
                                    src={proj.images.image1}
                                    className="img-fluid rounded-4 projectCardImage"
                                    loading="lazy" 
                                    title={proj.title}
                                    alt={proj.title}
                                />
                            </div>
                            <div className="text-end text-success text-decoration-underline fw-bold pe-2">

                                Free Project
                            </div>
                            <h5 className="card-title text-light text-center my-2">
                                {proj.title}
                            </h5>
                            <small className="text-capitalize p-1">
                                {proj.description}
                            </small>

                            <div className="row p-2">
                                <div className="col-12">
                                    <Link to={`/Projects/${project.name}/${proj.title}`} >
                                        <div
                                            className="btn  text-capitalize rounded-8 w-100 tilt-effect"
                                        >
                                            Get {proj.title} <i className="fi fi-sr-sign-in-alt ps-2"></i>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectDetails;
