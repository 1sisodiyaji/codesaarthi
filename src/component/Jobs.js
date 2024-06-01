import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
require('dotenv').config();


const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=`{process.env.APP_ID}`&app_key=`{process.env.APP_KEY}`&results_per_page=20&what=javascript&content-type=application/json');
                console.log(response);
                if (!response.ok) {
                    throw new Error('Failed to fetch job listings');
                }
                const data = await response.json();
                setJobs(data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching job listings:', error);
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    return (
        <>
            <div className='design  g-0 py-lg-5 py-2'>
               
                {loading ? (
                    <p className='vh-100 text-warning text-center'>Loading...</p>
                ) : (
                    <div>
                        {jobs.map((job) => (
                            <div key={job.id}  className='g-0'>
                                <div className='bg-dark text-light rounded-8 p-lg-5 p-2 card ' style={{ marginBottom: '20px', padding: '10px' }}>
                                <div className="row g-0">
                                    <div className="col-6 text-start"><small><strong>Company : </strong> {job.company.display_name}</small></div>
                                    <div className="col-6 text-end"><small><strong>Category : </strong> {job.category.label}</small></div>
                                </div>
                                <hr />
                                <h4 className='text-warning'>{job.title}</h4>

                                <p><strong>Salary:</strong> {job.salary_min} - {job.salary_max}</p>
                                <small><strong>Contract:</strong> {job.contract_type}</small>


                                <small dangerouslySetInnerHTML={{ __html: job.description }} />
                                <hr />
                                <div className="row">
                                    <div className="col-4 text-center"><Link to={job.redirect_url} target="_blank" rel="noopener noreferrer" > <button className='btn btn-black  text-success text-capitalize '>Apply Now <i class="fi fi-br-arrow-up-right mx-1"></i></button> </Link></div>
                                    <div className="col-8 text-end"><small>Location : {job.location.display_name}</small> </div>
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
