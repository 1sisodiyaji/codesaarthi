import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const JavaProject = () => {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="java core projects , java projects , trip planner in java projects , calculator in java." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/Projects/java-Projects" />
                <meta name="description" content="Explore the Projects based on java as the trip planner , fun calulations , and chat application as they are made on basically core java concepts." />
                <title>Java Projects | CodeSaarthi</title>
                <meta property="og:title" content="java Based Projects | CodeSaarthi" />
                <meta property="og:description" content="Explore the Projects based on java as the trip planner , fun calulations , and chat application as they are made on basically core java concepts." />
                <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
                <meta property="og:url" content="https://codesaarthi.com/Projects/java-Projects" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>

            <div className="container-fluid design" style={{ minHeight: '100vh' , backgroundColor: '#1E1E1E' }}>
                <div className="container">
                <div className="row py-5 ">

                    <div className="col-lg-4 my-2 col-12">
                        <div className="card  border border-dark" style={{backgroundColor:'#262626'}}>
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4">
                                            <div>
                                                <img src="https://codesaarthi.com/img/java1.png" className='img-fluid p-2' alt="trip planner logo" itle = "trip planner " loading='lazy' />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Trip Planner</h5>
                                            <p className="card-text text-light text-capitalize">This is Project of booking hotels , managing payments and many more...</p>
                                            <Link to="/Projects/TripPlanner" className="btn bg-black text-warning text-capitalize tilt-effect rounded-8">get it </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 my-2 col-12">
                        <div className="card  border border-dark" style={{backgroundColor:'#262626'}}>
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4">
                                            <div>
                                                <img src="https://codesaarthi.com/img/java1.png" className='img-fluid' alt="trip planner image" title = "Fun Calculation " loading='lazy'/>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Fun Calculations</h5>
                                            <p className="card-text text-light text-capitalize">This is an project on the basis of normal calculations and operations .</p>
                                            <Link to="/Projects/FunCalculations" className="btn bg-black text-warning text-capitalize tilt-effect rounded-8">get it </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 my-2 col-12">
                        <div className="card border border-dark" style={{backgroundColor:'#262626'}}>
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4">
                                            <div>
                                                <img src="https://codesaarthi.com/img/java1.png" className='img-fluid' alt="trip planner image" title = "Chat App " loading='lazy'/>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Chat App</h5>
                                            <p className='text-light'>These is a project  we  use java swing and awt and the most used technology web-socket.</p>
                                            <Link to="/Projects/Chat-App" className="btn bg-black text-warning text-capitalize tilt-effect rounded-8">get it </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </>
    )
}

export default JavaProject