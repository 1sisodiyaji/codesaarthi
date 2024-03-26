import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PhpProject = () => {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Php Based Projects , php projects , full stack php projects ,php mysql projects " />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/phpProjects" />
                <meta name="description" content="Explore the project series of php were we upload a full stcak project based on php , mysql an full stack project totally responsive and well structured as for free ." />
                <title>PHP Based Projects | CodeSaarthi</title>
                <meta property="og:title" content="PHP Based Projects | CodeSaarthi" />
                <meta property="og:description" content="Explore the project series of php were we upload a full stcak project based on php , mysql an full stack project totally responsive and well structured as for free" />
                <meta property="og:image" content="https://e7.pngegg.com/pngimages/666/502/png-clipart-brand-php-logo-computer-file-product-breeze-blue-text.png" />
                <meta property="og:url" content="https://codesaarthi.com/phpProjects" />
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
                                                <img src="img/farmer.png" className='img-fluid bg-success p-2' alt=" php logo " style={{borderRadius:'50%'}} />
                                            </div>
                                        </div>
                                        <div className="col-8 ps-2">
                                            <h5 className="card-title text-warning">Kishan  Mitra</h5>
                                            <p className="card-text text-light">this is an full stack based project on php to help farmers.</p>
                                            <Link to="/kishanMitra" className="btn bg-dark text-warning text-capitalize">get it </Link>
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
                                                <img src="img/KreedaLogo.png" className='img-fluid' alt=" php logo " style={{borderRadius:'50%'}} />
                                            </div>
                                        </div>
                                        <div className="col-8 ps-2">
                                            <h5 className="card-title text-warning">Kreeda</h5>
                                            <p className="card-text text-light">This is an platform to play games and bidding of dummy points .</p>
                                            <Link to="/Kreeda" className="btn bg-dark text-warning text-capitalize">get it </Link>
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

export default PhpProject