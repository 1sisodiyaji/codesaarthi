import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const FunCalculations = () => {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Basic java Project , java core projects , calculator injava , bmi calculator , tempreature converter in java ." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/Projects/FunCalculations" />
                <meta name="description" content="Basically these project is develped in java core as using java core subjects , as a calculations based on java." />
                <title>Fun Calculations | CodeSaarthi</title>
                <meta property="og:title" content="Fun Calculations | CodeSaarthi" />
                <meta property="og:description" content="Basically these project is develped in java core as using java core subjects , as a calculations based on java." />
                <meta property="og:image" content="https://codesaarthi.com/img/javaProjects.png" />
                <meta property="og:url" content="https://codesaarthi.com/Projects/FunCalculations" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>
            <div className="" style={{ backgroundColor: '#000000' }}>
                <div className=" container-lg conatiner-sm-fluid design g-0 p-2 py-lg-5">

                    <h5 className='textColor'>Project Title: Fun calculations in java </h5>

                    <h6 className='textColor'>Description:</h6>
                    <p className='text-light'>
                        in these project we are going to learn about core concept of java . Bye the use of java core only we built an awesome java projects . We built an java app having Calculations functionality available  as well as the bmi calculator , tempreature calculator , speed calculator .
                    </p>
                    <h6 className='textColor'>Key Features:</h6>

                    <ul className='text-light'>
                        <li>Speed Calculating of different sectors as per use.</li>
                        <li>Calculating The data at demand of user. </li>
                        <li>Login System in java core as JDBC connection using Mysql Database.</li>
                    </ul>

                    <h6 className='textColor'>Screenshot:</h6>
                    <div className="row my-3">
                        <div className="col-6 "><img src="https://codesaarthi.com/img/FunCalculations1.jpg" alt="Fun Calculations images " title='login page of fun calculations' loading='lazy' className="img-fluid" /></div>
                        <div className="col-6"><img src="https://codesaarthi.com/img/FunCalculations2.jpg" alt="Fun Calculations" title='dahboard page of fun calculations' loading='lazy' className="img-fluid" /></div>
                    </div>



                    <h6 className='textColor'> Tech Stack:</h6>
                    <ul className='text-light'>
                        <li> Using java core as awt and and swing For Frontend .</li>
                        <li>JDBC Connection for mysql  as database.</li>

                    </ul>

                    <h6 className='textColor'> How to Start:</h6>


                    <p className='text-light'>You can go through this link of Github: <Link>https://github.com/1sisodiyaji/Fun-Calculations.git</Link></p>

                    <h6 className='text-warning'>or you can visit Here:</h6>
                    <Link to="https://github.com/1sisodiyaji/Fun-Calculations.git" target='blank'> <button className='btn btn-dark text-warning text-capitalize'> Click Here</button></Link>


                    <h6 className='text-light my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</h6>
                    <div className="row">
                        <div className="col-4 text-center">
                            <Link to="/Projects/TripPlanner" className="btn bg-dark text-warning text-capitalize">Trip Planner <i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/Projects/Chat-App" className="btn bg-dark text-warning text-capitalize">Chat App <i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FunCalculations