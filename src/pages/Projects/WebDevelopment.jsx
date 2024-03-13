import React from 'react'
import { Link } from 'react-router-dom'

const WebDevelopment = () => {
    return (
        <>
            <div className="container-fluid design g-0" style={{ minHeight: '100vh' }}>
                <h3 className='text-success text-center text-capitalize pt-5'>here We have Some projects Based on Clone </h3>
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