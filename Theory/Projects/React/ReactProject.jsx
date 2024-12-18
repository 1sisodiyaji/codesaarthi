import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const ReactProject = () => {
    return ( 
        <>
        <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="React Based Project , Learn React based project , React projects , Top 10 Projects in React ." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/React-based-project" />
        <meta name="description" content="It is basically an react based Projects , Where you can learn react by making projects to learn it quickly and react learning through step by step in this way we are helping to learn react easily." />
        <title>React Projects | CodeSaarthi</title>
        <meta property="og:title" content=" React Projects| CodeSaarthi" />
        <meta property="og:description" content="It is basically an react based Projects , Where you can learn react by making projects to learn it quickly and react learning through step by step in this way we are helping to learn react easily." />
        <meta property="og:image" content="https://codesaarthi.com/img/KreedaLogo.png" />
        <meta property="og:url" content="https://codesaarthi.com/React-based-project" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
    </Helmet>
            <div className="container-fluid design g-0" style={{ minHeight: '100vh',backgroundColor: '#1E1E1E' }}>
                <h3 className='text-light text-decoration-underline text-center text-capitalize pt-5'>React Projects </h3>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-4  my-2 col-12">
                            <div className="card     p-3" style={{ backgroundColor: "#262626" }}>
                               
                                    <div className="row">
                                        <div className="col-12">
                                            <img src="../img/amazon1.jpg" className="img-fluid tilt-effect2" />
                                        </div>
                                        <div className="col-12 text-center my-2">
                                            <div>
                                                <h5 className="card-title text-light">
                                                    Blog Apps
                                                </h5>
                                            </div>

                                            <div>
                                                <Link to="/Projects/blog-app-react">
                                                    <div className="btn text-warning text-capitalize bg-dark">
                                                        Get it
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4  my-2 col-12">
                            <div className="card border p-3" style={{ backgroundColor: "#262626" }}>
                               
                                    <div className="row">
                                        <div className="col-12">
                                            <img src="../img/reacttable.jpg" className="img-fluid tilt-effect2" />
                                        </div>
                                        <div className="col-12 text-center my-2">
                                            <div>
                                                <h5 className="card-title text-light">
                                                    Table
                                                </h5>
                                            </div>

                                            <div>
                                                <Link to="/Projects/react/table">
                                                    <div className="btn text-warning text-capitalize bg-dark">
                                                        Get it
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4  my-2 col-12">
                            <div className="card border p-3" style={{ backgroundColor: "#262626" }}>
                               
                                    <div className="row">
                                        <div className="col-12">
                                            <img src="../img/reactWeather.jpg" className="img-fluid tilt-effect2" />
                                        </div>
                                        <div className="col-12 text-center my-2">
                                            <div>
                                                <h5 className="card-title text-light">
                                                    Weather 
                                                </h5>
                                            </div>

                                            <div>
                                                <Link to="/Projects/react/weather">
                                                    <div className="btn text-warning text-capitalize bg-dark">
                                                        Get it
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-4  my-2 col-12">
                            <div className="card border p-3" style={{ backgroundColor: "#262626" }}>
                               
                                    <div className="row">
                                        <div className="col-12">
                                            <img src="../img/reactUserList.jpg" className="img-fluid tilt-effect2" />
                                        </div>
                                        <div className="col-12 text-center my-2">
                                            <div>
                                                <h5 className="card-title text-light">
                                                    UserList 
                                                </h5>
                                            </div>

                                            <div>
                                                <Link to="/Projects/react/userList">
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