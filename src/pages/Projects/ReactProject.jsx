import React from 'react'
import { Link } from 'react-router-dom'

const ReactProject = () => {
  return (
    <>
    <div className="container-fluid design g-0" style={{ minHeight: '100vh' }}>
                <h3 className='text-success text-center text-capitalize pt-5'>here We have Some projects Based on React </h3>
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
                                            <img src="../img/amazon1.jpg"  className="img-fluid tilt-effect2" />
                                        </div>
                                        <div className="col-8 align-self-center">
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
            </div>
    
    
    </>
  )
}

export default ReactProject