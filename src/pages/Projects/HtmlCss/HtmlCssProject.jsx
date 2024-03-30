import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const HtmlCssProject = () => {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="java core projects , java projects , trip planner in java projects , calculator in java." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/java-Projects" />
                <meta name="description" content="Explore the development of a Discord clone project with step-by-step tutorials, examples, and practice questions. Learn the basics of building a real-time messaging application." />
                <title>java Based Projects | CodeSaarthi</title>
                <meta property="og:title" content="java Based Projects | CodeSaarthi" />
                <meta property="og:description" content="Explore the development of a Discord clone project with step-by-step tutorials, examples, and practice questions. Learn the basics of building a real-time messaging application." />
                <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
                <meta property="og:url" content="https://codesaarthi.com/java-Projects" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>

            <div className="container-fluid design" style={{ minHeight: '100vh' }}>
                <div className="row py-5 ">

                    <div className="col-lg-4 my-2 col-12">
                        <div className="card tilt-effect bg-dark">
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4">
                                            <div>
                                                <img src="img/javaProjects.png" className='img-fluid p-2' alt="trip planner logo" style={{borderRadius:'50%'}} />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Trip Planner</h5>
                                            <p className="card-text text-light text-capitalize">This is Project of booking hotels , managing payments and many more...</p>
                                            <Link to="/TripPlanner" className="btn bg-black text-warning text-capitalize">get it </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 my-2 col-12">
                        <div className="card tilt-effect bg-dark">
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4">
                                            <div>
                                                <img src="img/javaProjects.png" className='img-fluid' alt="trip planner image" style={{borderRadius:'50%'}}/>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Fun Calculations</h5>
                                            <p className="card-text text-light text-capitalize">This is an project on the basis of normal calculations and operations .</p>
                                            <Link to="/FunCalculations" className="btn bg-black text-warning text-capitalize">get it </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 my-2 col-12">
                        <div className="card tilt-effect bg-dark">
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4">
                                            <div>
                                                <img src="img/javaProjects.png" className='img-fluid' alt="trip planner image" style={{borderRadius:'50%'}}/>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Chat App</h5>
                                            <p className='text-light'> In these Projewct we will create an chat app as client and server.</p>
                                            <Link to="/Chat-App" className="btn bg-black text-warning text-capitalize">get it </Link>
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

export default HtmlCssProject