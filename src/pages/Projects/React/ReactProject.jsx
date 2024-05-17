import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const ReactProject = () => {
    return ( 
        <>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="kreeda , php Based Projects , fanatsy web app , fantasy php project , rummy web app , top 5 php projects , creative php projects , full stack php projects ,php mysql projects , Dream 11 clone project" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/React-based-project" />
        <meta name="description" content="It is basocally an platform like dream 11 , fantasy games, it is on developing stage it will be a better oppurtuininty to start it as many have dreams to make web app like that , so it is good chance to contirbute." />
        <title>Kreeda fantasy app  Projects | CodeSaarthi</title>
        <meta property="og:title" content="Kreeda fantasy app  Projects | CodeSaarthi" />
        <meta property="og:description" content="It is basocally an platform like dream 11 , fantasy games, it is on developing stage it will be a better oppurtuininty to start it as many have dreams to make web app like that , so it is good chance to contirbute." />
        <meta property="og:image" content="https://codesaarthi.com/img/KreedaLogo.png" />
        <meta property="og:url" content="https://codesaarthi.com/React-based-project" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
    </Helmet>
            <div className="container-fluid design g-0" style={{ minHeight: '100vh',backgroundColor: '#1E1E1E' }}>
                <h3 className='text-success text-center text-capitalize pt-5'>here We have Some projects Based on React </h3>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4  my-2 col-12">
                            <div class="card border p-3" style={{ backgroundColor: "#262626" }}>
                               
                                    <div className="row">
                                        <div className="col-12">
                                            <img src="../img/amazon1.jpg" className="img-fluid tilt-effect2" />
                                        </div>
                                        <div className="col-12 text-center my-2">
                                            <div>
                                                <h5 class="card-title text-light">
                                                    Blog Apps
                                                </h5>
                                            </div>

                                            <div>
                                                <Link to="/blog-app-react">
                                                    <div className="btn text-warning text-capitalize bg-dark">
                                                        Get it
                                                    </div>
                                                </Link>
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

export default ReactProject