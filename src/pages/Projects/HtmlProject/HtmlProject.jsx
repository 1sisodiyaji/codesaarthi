import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const HtmlProject = () => {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Discord Clone, Discord project, Chat application, Messaging app, Real-time communication" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/HtmlProject" />
                <meta name="description" content="Explore the development of a Discord clone project with step-by-step tutorials, examples, and practice questions. Learn the basics of building a real-time messaging application." />
                <title>Html Based Projects | CodeSaarthi</title>
                <meta property="og:title" content="Discord Clone Project | codesaarthi" />
                <meta property="og:description" content="Explore the development of a Discord clone project with step-by-step tutorials, examples, and practice questions. Learn the basics of building a real-time messaging application." />
                <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
                <meta property="og:url" content="https://codesaarthi.com/HtmlProject" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>

            <div className="container-fluid design" style={{ minHeight: '100vh' }}>
                <div className="row py-5 ">

                    <div className="col-lg-4 my-2 col-12">
                        <div className="card tilt-effect " style={{ backgroundColor: '#000B18' }}>
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4">
                                            <div>
                                                <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" className='img-fluid' alt="" />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Assignment page</h5>
                                            <p className="card-text text-light">This is an Basic project to learn html tags and practise more.</p>
                                            <Link to="/AssignmentProject" className="btn bg-dark text-warning text-capitalize">get it </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 my-2 col-12">
                        <div className="card tilt-effect " style={{ backgroundColor: '#000B18' }}>
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4">
                                            <div>
                                                <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" className='img-fluid' alt="" />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Portfolio basic page</h5>
                                            <p className="card-text text-light">This is an Basic project to create ayour portfolio based on html.</p>
                                            <Link to="/PortfolioHtml" className="btn bg-dark text-warning text-capitalize">get it </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 my-2 col-12">
                        <div className="card tilt-effect " style={{ backgroundColor: '#000B18' }}>
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4">
                                            <div>
                                                <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" className='img-fluid' alt="" />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Product  page</h5>
                                            <p className="card-text text-light">This is an  project to create am basic single page of product catalog.</p>
                                            <Link to="/ProductCatalog" className="btn bg-dark text-warning text-capitalize">get it </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-0"></div>

                    <div className="col-lg-4 my-2 col-12">
                        <div className="card tilt-effect " style={{ backgroundColor: '#000B18' }}>
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4">
                                            <div>
                                                <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" className='img-fluid' alt="" />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Youtube based  page</h5>
                                            <p className="card-text text-light">This is an  project to add i frame and media in you page through hmtl.</p>
                                            <Link to="/youtubeBasedProject" className="btn bg-dark text-warning text-capitalize">get it </Link>
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

export default HtmlProject