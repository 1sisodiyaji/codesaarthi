import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectData from "../../data/ProjectsData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from 'react-helmet';

const SingleDetailingProject = () => {
  const { name, title } = useParams();
  const [projectDetail, setProjectDetail] = useState(null);
  const codeRef = useRef(null);
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    const selectedProject = ProjectData.find((p) => p.name === name);
    if (selectedProject) {
      const result = selectedProject.projects.find((p) => p.title === title);
      setProjectDetail(result);
    }
  }, [name, title]);

  const handleCopyCode = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.textContent)
        .then(() => {
          toast.success('Code copied to clipboard!', { theme: 'dark' });
          setCopy(true);
        })
        .catch(err => {
          toast.error('Failed to copy text', { theme: 'dark' });
        });
    }
  };

  if (!projectDetail) {
    return <p>Project details not found</p>;
  }

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://codesaarthi.com/Projects/${name}/${title}`} />
        <meta name="description" content={projectDetail.description} />
        <title>{projectDetail.title} | Codesaarthi</title>
        <meta property="og:title" content={`${projectDetail.title} | Codesaarthi`} />
        <meta property="og:description" content={projectDetail.description} />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content={`https://codesaarthi.com/Projects/${name}/${title}`} />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <ToastContainer />
      <div className="container-fluid g-0 design">
        <div className="p-2 py-lg-3">
          <div className="row g-0">
            <div className="col-lg-4 col-12">
              Be in Touch:
              <Link to="https://www.linkedin.com/in/golu-singh/" target="_blank" rel="noopener noreferrer">
                <i className="fi fi-brands-linkedin mx-2" style={{ fontSize: '2rem' }}></i>
              </Link>
              <Link to="https://github.com/1sisodiyaji" target="_blank" rel="noopener noreferrer">
                <i className="fi fi-brands-github p-2 " style={{ fontSize: '2rem' }}></i>
              </Link>
            </div>
            <div className="col-lg-4 col-12">
              <h2 className="text-center text-decoration-underline text-warning">{projectDetail.title}</h2>
            </div>
            <div className="col-lg-4 col-12 text-end">
             <Link to = "https://docs.google.com/forms/d/e/1FAIpQLSeNgolBhU9uXLFr7iMLZXIrX1rWC23qeTnY5KwSroXJAsrZxA/viewform?usp=sf_link" target="blank">
              <div className="btn btn-sm rounded-6">
                Book your Project <i className="fi fi-ss-check-circle"></i>
              </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-12 my-2">
              <iframe
                src={projectDetail.links.deployed}
                title={projectDetail.title}
                className="w-100 rounded-6 bg-light shadow-lg"
                style={{ minHeight: "75vh" }}
              ></iframe>
              <div className="row">
                <div className="col-6 text-center">
                  <a href={projectDetail.links.github} target="_blank" rel="noopener noreferrer">
                    <div className="btn rounded-8">
                      <i className="fi fi-brands-github"></i> Github
                    </div>
                  </a>
                </div>
                <div className="col-6 text-center">
                  <a href={projectDetail.links.deployed} target="_blank" rel="noopener noreferrer">
                    <div className="btn rounded-8">
                      <i className="fi fi-ss-rocket-lunch"></i> Vercel
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 my-2">
              <h5 className="text-decoration-underline">Description:</h5>
              <small>{projectDetail.description}</small>
              <div
                dangerouslySetInnerHTML={{ __html: projectDetail.headingDescription }}
              />
              <h6 className="my-2 text-decoration-underline">Additional Description:</h6>
              <div
                dangerouslySetInnerHTML={{ __html: projectDetail.additionalDescriptions }}
              />
            </div>
          </div>
        </div>

<div className="container">
  <h6>View Of Project</h6>
  <div className="row my-2">
    <div className="col-lg-6 col-12 my-2"><img src={projectDetail.images.image1} alt="project veiw" loading="lazy" className="img-fluid shadow-lg rounded-4" style={{height: '45vh' , width: '100%'}} title={projectDetail.title} /></div>
    <div className="col-lg-6 col-12 my-2" ><img src={projectDetail.images.image2} alt="project veiw" loading="lazy" className="img-fluid shadow-lg rounded-4"style={{height: '45vh' , width: '100%'}} title={projectDetail.title} /></div>
  </div>
</div>

      {projectDetail.code &&  <div className="container"> 
          <pre className="bg-black text-light rounded-6">
            <div className="row text-end">
              <div className="col-12 pe-3 pt-2">
                <div className="btn btn-sm text-capitalize" onClick={handleCopyCode}> {copy ? 'copied' : 'Copy Code'} <i className="fi fi-rs-copy-alt"></i></div>
              </div>
            </div>
            <code ref={codeRef}>
              {projectDetail.code}
            </code>
          </pre>
        </div>
}
      </div>
    </>
  );
};

export default SingleDetailingProject;
