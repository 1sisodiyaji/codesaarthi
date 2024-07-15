import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectData from "../../data/ProjectsData";

const ProjectDetails = () => {
    const { projectId } = useParams();

    const [project, setProject] = useState(null);

    useEffect(() => {
        const selectedProject = ProjectData.find(p => p.name === projectId);
        if (selectedProject) {
            setProject(selectedProject);
        }
    }, [projectId]);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div className="container py-lg-5">
            <h2 className="text-center text-decoration-underline text-warning">{project.name}</h2>
            <div className="row">
                {project.projects.map((proj, index) => (
                    <div key={index} className="col-lg-3 col-12 my-2">
                        <div className="card rounded-8  pb-3 p-2">
                            <div className=" text-center">
                                <img
                                    src={proj.images.image1}
                                    className="img-fluid  text-light"
                                    alt="Amazon"
                                />
                            </div>
                            <div className="text-end text-success text-decoration-underline">

                                Free Project
                            </div>
                            <h5 className="card-title text-light text-center my-2">
                                {proj.title}
                            </h5>
                            <small className="text-capitalize p-1">
                                {proj.description}
                            </small>

                            <div className="row">
                                <div className="col-12">
                                    <Link to={`/Detail-Project/${proj.title}`}>
                                        <div
                                            className="btn btn-sm text-capitalize rounded-8 w-100 tilt-effect"
                                        >
                                            Get
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
