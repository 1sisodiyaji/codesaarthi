import React, { useEffect, useState } from "react";
import { BackgroundBoxesDesign } from "../../components/BackgroundBoxesDesign";
import { Spotlight } from "../../components/ui/Spotlight.tsx";
import { MeteorsCard } from "../../components/Metrorcard.js";
import { Helmet } from "react-helmet";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [experience, setExperience] = useState("fresher");
  const [location, setLocation] = useState("Bengaluru");
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
          throw new Error("Failed to fetch job listings");
        }

        const data = await response.json();
        console.log(data);
        setJobs(data.results);
      } catch (error) {
        console.error("Error fetching job listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [experience, location, jobType]);

  return (
    <>
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
      <div className="min-h-screen py-20 bg-slate-100 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <Spotlight />
          <BackgroundBoxesDesign
            title1={"Unlock Your Next Career Move!"}
            title2={
              "Explore exciting job opportunities tailored just for you. Your dream job is just a click away!"
            }
          />

          <div className="flex justify-between my-2">
            <div className="max-w-4xl">
              {loading ? (
                <div>Fetching job listings...</div>
              ) : jobs.length === 0 ? (
                <img
                  src="https://res.cloudinary.com/ducw7orvn/image/upload/v1723144746/No_Jobs_d6xq5p.svg"
                  alt="loading"
                  loading="lazy"
                />
              ) : (
                jobs.map((job) => (
                  <MeteorsCard
                    key={job.id}
                    title={job.title}
                    CompanyName={job.company.display_name}
                    Location={job.location.display_name}
                    minSalary={job.salary_min}
                    maxSalary={job.salary_max}
                    description={job.description}
                    link={job.redirect_url}
                  />
                ))
              )}
            </div>

            <div className="h-72 p-6 rounded-lg border border-gray-300 dark:border-gray-700 shadow-md bg-white dark:bg-gray-800">
              <div className="mb-3">
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-gray-700 dark:text-gray-300">
                      Experience Level
                    </label>
                    <select
                      className="w-full mt-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    >
                      <option value="fresher">Fresher</option>
                      <option value="1 year experience">
                        1 Year Experience
                      </option>
                      <option value="2 years experience">
                        2 Years Experience
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-gray-700 dark:text-gray-300">
                      Location
                    </label>
                    <select
                      className="w-full mt-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
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
                      <option value="Thiruvananthapuram">
                        Thiruvananthapuram
                      </option>
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

                  <div>
                    <label className="text-gray-700 dark:text-gray-300">
                      Job Type
                    </label>
                    <select
                      className="w-full mt-1 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
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
                        {" "}
                        Spring Boot Developer{" "}
                      </option>
                      <option value="C++ developer">C++ Developer</option>
                      <option value="C# developer">C# Developer</option>
                      <option value="WordPress developer">
                        {" "}
                        WordPress Developer{" "}
                      </option>
                      <option value="Odoo developer">Odoo Developer</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
