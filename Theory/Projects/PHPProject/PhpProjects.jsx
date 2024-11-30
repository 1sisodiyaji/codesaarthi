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
                <link rel="canonical" href="https://codesaarthi.com/Projects/phpProjects" />
                <meta name="description" content="Explore the project series of php were we upload a full stcak project based on php , mysql an full stack project totally responsive and well structured as for free ." />
                <title>PHP Projects | CodeSaarthi</title>
                <meta property="og:title" content="PHP Projects | CodeSaarthi" />
                <meta property="og:description" content="Explore the project series of php were we upload a full stcak project based on php , mysql an full stack project totally responsive and well structured as for free" />
                <meta property="og:image" content="https://codesaarthi.com/img/php1.png" />
                <meta property="og:url" content="https://codesaarthi.com/Projects/phpProjects" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>

            <div className="container-fluid design" style={{ minHeight: '100vh',backgroundColor:'#1E1E1E' }}>
                <div className="container">
                <div className="row py-5 ">

                    <div className="col-lg-6 my-2 col-12">
                        <div className="card   border border-dark" style={{ backgroundColor: '#262626' }}>
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4">
                                            <div>
                                                <img src="https://codesaarthi.com/img/farmer.png" className='img-fluid bg-success p-2' alt=" php logo " style={{borderRadius:'50%'}} />
                                            </div>
                                        </div>
                                        <div className="col-8 ps-2">
                                            <h5 className="card-title text-warning">Kishan  Mitra</h5>
                                            <p className="card-text text-light">Ye project ek platofrm h jha kishan se related news weather , aur saare features add on kiye hue h  jaise market price as real time data , Weather forecasting  , an contact us form page is there.</p>
                                            <Link to="/Projects/kishanMitra" className="btn bg-dark text-warning text-capitalize tilt-effect rounded-8">get it </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 my-2 col-12">
                        <div className="card  border border-dark " style={{ backgroundColor: '#262626' }}>
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4">
                                            <div>
                                                <img src="https://codesaarthi.com/img/KreedaLogo.png" className='img-fluid' alt=" php logo " style={{borderRadius:'50%'}} />
                                            </div>
                                        </div>
                                        <div className="col-8 ps-2">
                                            <h5 className="card-title text-warning">Kreeda</h5>
                                            <p className="card-text text-light">Ye project ek online gaming platform bnaya gya hai isme login system , leaderboard , payment integration system sab add kiya gya h . .</p>
                                            <Link to="/Projects/Kreeda" className="btn bg-dark text-warning text-capitalize tilt-effect rounded-8">get it </Link>
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

export default PhpProject