import React from 'react'
import { Link } from 'react-router-dom'

const ReactProject = () => {
    return (
        <>
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