import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

const WebDevelopment = () => {
    return (
        <>
            <Helmet>
                <meta name="keywords" content="Web Develpoment Projects ,clone projects, spotify clone , amazon clone , razorpay clone , discord clone , top 5 easy clone projects ,  Practise Projects for web deveopment," />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/Projects/web-development" />
                <meta name="description" content="Basic clone projects has very well base , and make on the basis where you could make the changes ,  and gain more trust over all these. simple and easy clone projects" />
                <title>Clone Projects | Codesaarthi</title>
                <meta property="og:title" content="Clone Projects | Codesaarthi" />
                <meta property="og:description" content="Basic clone projects has very well base , and make on the basis where you could make the changes ,  and gain more trust over all these. simple and easy clone projects" />
                <meta property="og:image" content="https://codesaarthi.com/img/clone1.png" />
                <meta property="og:url" content="https://codesaarthi.com/Projects/web-development" />
                <meta property="og:type" content="Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>
            <div className="container-fluid design g-0" style={{ minHeight: '100vh', backgroundColor: '#1E1E1E' }}>
                <h1 className='text-light text-decoration-underline text-center text-capitalize pt-5'>Clone Projects</h1>
                <div className="container p-lg-5">
                    <div className="row">
                        <div className="col-lg-3 col-12 my-2">
                            <div className="card rounded-8  pb-3 p-1" style={{backgroundColor : '#262626'}}>
                                <div className=" text-center">
                                    <img
                                        src="https://codesaarthi.com/img/amazon1.jpg"
                                        className="img-fluid  text-light"
                                        alt="Amazon"
                                    />
                                </div>
                                <div className="text-end text-success text-decoration-underline">

                                    Free Project
                                </div>
                                <h5 className="card-title text-light text-center my-2">
                                    Amazon
                                </h5>
                                <small className="text-muted text-capitalize p-1">
                                    Ye project ek Amazon ki frontend ka clone hai, jise maine HTML, CSS, aur JavaScript ka use karke banaya hai. Isme aapko ek online shopping website ki tarah feel hoga.
                                </small>

                                <div className="row">
                                    <div className="col-12">
                                        <Link to="/Projects/Amazon-clone">
                                            <div
                                                className="btn text-warning text-capitalize rounded-8 w-100 tilt-effect bg-dark"
                                            >
                                                Get
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 my-2">
                            <div className="card rounded-8  pb-3 p-1" style={{backgroundColor : '#262626'}}>
                                <div className=" text-center">
                                    <img
                                        src="https://codesaarthi.com/img/Discord1.jpg"
                                        className="img-fluid  text-light"
                                        alt="Discord"
                                    />
                                </div>
                                <div className="text-end text-success text-decoration-underline">

                                    Free Project
                                </div>
                                <h5 className="card-title text-light text-center my-2">
                                    Discord
                                </h5>
                                <small className="text-muted text-capitalize p-1">
                                    This project is a frontend clone of the Discord application, developed using HTML, CSS, and JavaScript. It mimics the look and feel of Discord for educational purposes                       </small>

                                <div className="row">
                                    <div className="col-12">
                                        <Link to="/Projects/Discord">
                                            <div
                                                className="btn text-warning text-capitalize rounded-8 w-100 tilt-effect bg-dark"
                                            >
                                                Get
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 my-2">
                            <div className="card rounded-8  pb-3 p-1" style={{backgroundColor : '#262626'}}>
                                <div className=" text-center">
                                    <img
                                        src="https://codesaarthi.com/img/Razorpay1.jpg"
                                        className="img-fluid  text-light"
                                        alt="Razor pay"
                                    />
                                </div>
                                <div className="text-end text-success text-decoration-underline">

                                    Free Project
                                </div>
                                <h5 className="card-title text-light text-center my-2">
                                    Razorpay
                                </h5>
                                <small className="text-muted text-capitalize p-1">
                                    This project is a frontend clone of the Razorpay payment gateway, developed using HTML,Tailwind CSS, and React. It simulates the user interface and functionality of Razorpay for educational purposes.                       </small>

                                <div className="row">
                                    <div className="col-12">
                                        <Link to="/Projects/RazorPay">
                                            <div
                                                className="btn text-warning text-capitalize rounded-8 w-100 tilt-effect bg-dark"
                                            >
                                                Get
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-12 my-2">
                            <div className="card rounded-8  pb-3 p-1" style={{backgroundColor : '#262626'}}>
                                <div className=" text-center">
                                    <img
                                        src="https://codesaarthi.com/img/Spotify1.jpg"
                                        className="img-fluid  text-light"
                                        alt="Amazon"
                                    />
                                </div>
                                <div className="text-end text-success text-decoration-underline">

                                    Free Project
                                </div>
                                <h5 className="card-title text-light text-center my-2">
                                    Spotify
                                </h5>
                                <small className="text-muted text-capitalize p-1">
                                    This project is a frontend clone of the Spotify music streaming application, developed using React. It replicates the user interface and functionality of Spotify, providing an immersive music streaming experience.                     </small>

                                <div className="row">
                                    <div className="col-12">
                                        <Link to="/Projects/Spotify-clone">
                                            <div
                                                className="btn text-warning text-capitalize rounded-8 w-100 tilt-effect bg-dark"
                                            >
                                                Get
                                            </div>
                                        </Link>
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