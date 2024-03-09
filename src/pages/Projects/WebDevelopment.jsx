import React from 'react'
import { Link } from 'react-router-dom'

const WebDevelopment = () => {
    return (
        <>
            <div className="container-fluid design g-0" style={{ minHeight: '100vh' }}>
                <h3 className='text-success text-center text-capitalize pt-5'>here We have Some projects Based on Clone </h3>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6  my-2 col-12">
                            <div class="card border p-3" style={{ backgroundColor: "#6aa1b4" }}>
                                <div
                                    class="bg-image hover-overlay ripple"
                                    data-mdb-ripple-color="light"
                                >
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="../img/Amazon1.jpg"  className="img-fluid tilt-effect2" />
                                        </div>
                                        <div className="col-8 align-self-center">
                                            <div>
                                                <h5 class="card-title text-light">
                                                    Amazon
                                                </h5>
                                            </div>

                                            <div>
                                                <Link to="/Amazon-clone">
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
                            <div class="card border p-3" style={{ backgroundColor: "#6aa1b4" }}>
                                <div
                                    class="bg-image hover-overlay ripple"
                                    data-mdb-ripple-color="light"
                                >
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="../img/Discord1.jpg" className="img-fluid tilt-effect2" />
                                        </div>
                                        <div className="col-8 align-self-center">
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
                            <div class="card border p-3" style={{ backgroundColor: "#6aa1b4" }}>
                                <div
                                    class="bg-image hover-overlay ripple"
                                    data-mdb-ripple-color="light"
                                >
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="../img/Razorpay1.jpg" className="img-fluid tilt-effect2" />
                                        </div>
                                        <div className="col-8 align-self-center">
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
                        <div className="col-lg-6  my-2 col-126">
                            <div class="card border p-3" style={{ backgroundColor: "#6aa1b4" }}>
                                <div
                                    class="bg-image hover-overlay ripple"
                                    data-mdb-ripple-color="light"
                                >
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="../img/Spotify1.jpg" className="img-fluid tilt-effect2" />
                                        </div>
                                        <div className="col-8 align-self-center">
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