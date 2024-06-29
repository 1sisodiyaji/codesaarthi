import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ToastContainer, Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=f0f3f511&app_key=4441b9334ebf9a73b9e916e2262ea3d2&results_per_page=20&what=javascript&content-type=application/json"
        );

        // all jobs in for fresher
        // const response = await fetch('https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=f0f3f511&app_key=4441b9334ebf9a73b9e916e2262ea3d2&what=MERN%20stack%20developer%201%20year%20experience&distance=10&sort_by=relevance')

        // all jobs as 1 year experience
        // const response = await fetch('https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=f0f3f511&app_key=4441b9334ebf9a73b9e916e2262ea3d2&where=Bangalore&what=MERN%20stack%20developer%201%20year%20experience&distance=10&sort_by=relevance');

        // only for banglore  Fresher
        //    const response = await fetch('https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=f0f3f511&app_key=4441b9334ebf9a73b9e916e2262ea3d2&where=Bangalore&what=MERN%20stack%20developer%20fresher&distance=10&sort_by=relevance');

        // only for 1 year experience
        // const response = await fetch('https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=f0f3f511&app_key=4441b9334ebf9a73b9e916e2262ea3d2&where=Bangalore&what=MERN%20stack%20developer%201%20year%20experience&distance=10&sort_by=relevance');

        if (!response.ok) {
          setLoading(false);
          throw new Error("Failed to fetch job listings");
        }
        const data = await response.json();
        const jobsWithExperience = data.results.map((job) => ({
          ...job,
          experience: extractExperience(job.description),
        }));
        setJobs(jobsWithExperience);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job listings:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const extractExperience = (description) => {
    const experienceRegex = /(\d+)\+? years? of experience/i;
    const match = description.match(experienceRegex);
    return match ? match[0] : "Not specified";
  };



  return (
    <>
      <ToastContainer />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://codesaarthi.com/jobs`} />
        <meta
          name="description"
          content="Here we go we get the jobs listing for freshers from the adunza job api so use it to short and fast apply ."
        />
        <title>Jobs | Codesaarthi</title>
        <meta property="og:title" content="Jobs | Codesaarthi" />
        <meta
          property="og:description"
          content="Here we go we get the jobs listing for freshers from the adunza job api so use it to short and fast apply ."
        />
        <meta
          property="og:image"
          content="https://codesaarthi.com/img/logo.png "
        />
        <meta property="og:url" content={`https://codesaarthi.com/jobs`} />
        <meta property="og:type" content="Education-Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/img/favicon.ico"
          sizes="32x32"
        />
      </Helmet>

      <div
        className="design  g-0 py-lg-5 py-2 container-fluid"
        style={{   minHeight: "100vh" }}
      >
        {loading ? <>
          <div className="vh-100 text-warning d-flex justify-content-center align-items-center">
            <div class="card" aria-hidden="true" style={{width: '350px'}}>
          <div class="text-center">
            <img src="img/loader.gif" style={{height: '125px', width: '115px'}} class="card-img-top" alt="..." />
        </div>
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
            <a class="btn btn-secondary disabled placeholder col-6" aria-disabled="true"></a>
          </div>
        </div>
          </div>
          </> : (
          <div>
            {jobs.map((job) => (
              <div key={job.id} className="g-0">
                <div
                  className=" bg-dark rounded-6 p-lg-3 p-2 card "
                  style={{ marginBottom: "20px", padding: "10px" }}
                >
                  <div className="row g-0">
                    <div className="col-6 text-start">
                      <small>
                        <strong>Company : </strong> {job.company.display_name}
                      </small>
                    </div>
                    <div className="col-6 text-end">
                      <small>
                        <strong>Category : </strong> {job.category.label}
                      </small>
                    </div>
                  </div>
                  <hr />
                  <h4 className="text-warning">{job.title}</h4>
                  <small>
                    <strong>Salary : </strong> {job.salary_min} -{" "}
                    {job.salary_max}
                  </small>
                  <small>
                    <strong>Contract : </strong> {job.contract_type}
                  </small>
                  <small>
                    <strong>Experience : </strong> {job.experience}
                  </small>

                  <small
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  />
                  <hr />
                  <div className="row">
                    <div className="col-4 text-center">
                      <Link
                        to={job.redirect_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <button className="btn bg-black  text-success text-capitalize ">
                          Apply Now{" "}
                          <i className="fi fi-br-arrow-up-right mx-1"></i>
                        </button>{" "}
                      </Link>
                    </div>
                    <div className="col-8 text-end">
                      <small>Location : {job.location.display_name}</small>{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Jobs;
