import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [experience, setExperience] = useState("fresher");
  const [location, setLocation] = useState("India");
  const [jobType, setJobType] = useState("MERN stack");

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=f0f3f511&app_key=4441b9334ebf9a73b9e916e2262ea3d2&where=${location}&what=${jobType}%20${experience}&distance=10&sort_by=relevance`
        );

        if (!response.ok) {
          setLoading(false);
          toast.error("Failed to fetch job post" , {theme  : 'dark'})
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
  }, [experience, location, jobType]);

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
          content="Here we go we get the jobs listing for freshers from the adunza job api so use it to short and fast apply."
        />
        <title>Jobs | Codesaarthi</title>
        <meta property="og:title" content="Jobs | Codesaarthi" />
        <meta
          property="og:description"
          content="Here we go we get the jobs listing for freshers from the adunza job api so use it to short and fast apply."
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
        className="design g-0 py-lg-5 py-2 container-fluid"
        style={{ minHeight: "100vh" }}
      >
        <div className="filters mb-3">
          <div className="row g-0">
            <div className="col-lg-3 col-12">
              <div className="filter">
                <label>Experience Level:</label>
                <select
                  className="w-100 border"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value="fresher">Fresher</option>
                  <option value="1 year experience">1 Year Experience</option>
                  <option value="2 years experience">2 Years Experience</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="filter">
                <label>Location:</label>
                <select
                  className="w-100 border"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Pune">Pune</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Gurugram">Gurugram</option>
                  <option value="Noida">Noida</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Indore">Indore</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Bhubaneswar">Bhubaneswar</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Surat">Surat</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Visakhapatnam">Visakhapatnam</option>
                  <option value="Mysore">Mysore</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Patna">Patna</option>
                  <option value="Raipur">Raipur</option>
                  <option value="Ranchi">Ranchi</option>
                  <option value="Guwahati">Guwahati</option>
                  <option value="Shimla">Shimla</option>
                  <option value="Dehradun">Dehradun</option>
                  <option value="Srinagar">Srinagar</option>
                  <option value="Agartala">Agartala</option>
                  <option value="Panaji">Panaji</option>
                  <option value="Imphal">Imphal</option>
                  <option value="Shillong">Shillong</option>
                  <option value="Aizawl">Aizawl</option>
                  <option value="Itanagar">Itanagar</option>
                  <option value="Kohima">Kohima</option>
                  <option value="Gangtok">Gangtok</option>
                  <option value="Silvassa">Silvassa</option>
                  <option value="Pondicherry">Pondicherry</option>
                  <option value="Port Blair">Port Blair</option>
                  <option value="Kavaratti">Kavaratti</option>
                  <option value="Daman">Daman</option>
                  <option value="Diu">Diu</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="filter">
                <label>Job Type:</label>
                <select
                  className="w-100 border"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="MERN stack">MERN Stack</option>
                  <option value="MEAN stack">MEAN Stack</option>
                  <option value="Next.js">Next.js</option>
                  <option value="PHP developer">PHP Developer</option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Java developer">Java Developer</option>
                  <option value="Spring Boot developer">
                    Spring Boot Developer
                  </option>
                  <option value="C++ developer">C++ Developer</option>
                  <option value="C# developer">C# Developer</option>
                  <option value="WordPress developer">
                    WordPress Developer
                  </option>
                  <option value="Odoo developer">Odoo Developer</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="vh-100 text-warning d-flex justify-content-center align-items-center">
            <div className="card" aria-hidden="true" style={{ width: "350px" }}>
              <div className="text-center">
                <img
                  src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721031578/loader_bhnpfb.gif"
                  style={{ height: "125px", width: "115px" }}
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a href="/"
                  className="btn btn-secondary disabled placeholder col-6"
                  aria-disabled="true"
                >Getting job list</a>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {jobs.map((job) => (
              <div key={job.id} className="g-0">
                <div
                  className="rounded-6 p-lg-3 p-2 card"
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
                    <div className="col-5 text-center">
                      <Link
                        to={job.redirect_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn d-flex text-capitalize">
                          Apply Now
                          <i className="fi fi-br-arrow-up-right mx-1"></i>
                        </button>
                      </Link>
                    </div>
                    <div className="col-7 text-end">
                      <small>Location : {job.location.display_name}</small>
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
