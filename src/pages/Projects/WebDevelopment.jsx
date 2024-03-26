import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

const WebDevelopment = () => {
    return (
        <>
         <Helmet>
        <meta name="keywords" content="Web Develpoment Projects ,clone projects, spotify clone , amazon clone , razorpay clone , discord clone , top 5 easy clone projects ,  Practise Projects for web deveopment," />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/web-development" />
        <meta name="description" content="Basic clone projects has very well base , and make on the basis where you could make the changes ,  and gain more trust over all these. simple and easy clone projects" />
        <title>Clone Projects | Codesaarthi</title>
        <meta property="og:title" content="Clone Projects | Codesaarthi" />
        <meta property="og:description" content="Basic clone projects has very well base , and make on the basis where you could make the changes ,  and gain more trust over all these. simple and easy clone projects" />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/web-development" />
        <meta property="og:type" content="Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>
            <div className="container-fluid design g-0" style={{ minHeight: '100vh' }}>
                <h1 className='text-success text-center text-capitalize pt-5'>here We have Some projects Based on Clone </h1>
                <div className="container p-lg-5">
                    <div className="row">
                        <div className="col-lg-6  my-2 col-12">
                                <div className="card border p-lg-5 p-3 tilt-effect2" style={{ background: 'transparent', backgroundImage: 'url(img/amazon1.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                                    <div>
                                        <div className="row">
                                            <div className="col-8">
                                            </div>
                                            <div className="col-4 text-end">
                                                <div>
                                                    <h5 class="card-title text-dark">
                                                        Amazon
                                                    </h5>
                                                </div>

                                                <div>
                                                    <Link to="/Amazon-clone">
                                                        <div className="btn text-warning text-capitalize bg-dark shadow-6">
                                                            Get it
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-6 my-2 col-12">
                        <div className="card border p-lg-5 p-3 tilt-effect2" style={{ background: 'transparent', backgroundImage: 'url(img/Discord1.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                <div>
                                    <div className="row">
                                        <div className="col-8">
                                        </div>
                                        <div className="col-4 text-end">
                                            <div>
                                                <h5 class="card-title text-light">
                                                    Discord
                                                </h5>
                                            </div>

                                            <div>
                                                <Link to="/Discord">
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
                        <div className="col-lg-6 my-2  col-12">
                            <div className="card border p-lg-5 p-3 tilt-effect2" style={{ background: 'transparent', backgroundImage: 'url(img/Razorpay1.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                <div>
                                    <div className="row">
                                        <div className="col-8">
                                        </div>
                                        <div className="col-4 text-end">
                                            <div>
                                                <h5 class="card-title text-light">
                                                    Razor pay
                                                </h5>
                                            </div>

                                            <div>
                                                <Link to="/RazorPay">
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
                        <div className="col-lg-6  my-2 col-12">
                            <div className="card border p-lg-5 p-3  tilt-effect2" style={{ background: 'transparent', backgroundImage: 'url(img/Spotify1.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                                <div
                                    class="bg-image hover-overlay ripple"
                                    data-mdb-ripple-color="light"
                                >
                                    <div className="row">
                                        <div className="col-8">
                                        </div>
                                        <div className="col-4 text-end">
                                            <div>
                                                <h5 class="card-title text-light">
                                                    Spotify
                                                </h5>
                                            </div>

                                            <div>
                                                <Link to="/Spotify-clone">
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
            </div>
        </>
    )
}

export default WebDevelopment