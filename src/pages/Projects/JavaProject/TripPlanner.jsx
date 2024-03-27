import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const TripPlanner = () => {
    return (
        <>
 <Helmet>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Basic java Project , java core projects , hotel  managament project in java." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/TripPlanner" />
                <meta name="description" content="Basically these project is develped in java core as using java core subjects , as a hootel management projects ." />
                <title>TripPlanner in java | CodeSaarthi</title>
                <meta property="og:title" content="TripPlanner in java | CodeSaarthi" />
                <meta property="og:description" content="basically these page is a youtube short clone to use their tags and make more practise of different media tasg in html." />
                <meta property="og:image" content="img/javaProjects.png" />
                <meta property="og:url" content="https://codesaarthi.com/TripPlanner" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>
            <div className="" style={{ backgroundColor: '#000000' }}>
                <div className=" container-lg conatiner-sm-fluid design g-0 p-2 py-lg-5">

                    <h5 className='textColor'>Project Title: TripPlanner in java </h5>

                    <h6 className='textColor'>Description:</h6>
                    <p className='text-light'>
                        in these project we are going to learn about core concept of java . 
                    </p>
                    <h6 className='textColor'>Key Features:</h6>

                    <ul className='text-light'>
                        <li>Using Tags to practise the basic html code.</li>
                        <li>Practising more to use media tags in code. </li>
                    </ul>

                    <h6 className='textColor'>Screenshot:</h6>
                    <div className="row my-3">
                        <div className="col-6 "><img src="img/TripPlanner1.jpg" alt="" className="img-fluid" /></div>
                        <div className="col-6"><img src="img/TripPlanner2.jpg" alt="" className="img-fluid" /></div>
                    </div>



                    <h6 className='textColor'> Tech Stack:</h6>
                    <ul className='text-light'>
                        <li>  HTML: Page structure aur content ke liye.</li>

                    </ul>

                    <h6 className='textColor'> Kaise Shuru Karein:</h6>


                    <p className='text-light'>Iske baad, aap isey customize kar sakte hain apne requirements ke hisaab se.</p>

                    <h6 className='text-warning'>Html Code :</h6>
                    <div className="container border rounded-8 p-3 text-light">

                    </div>


                    <h6 className='text-light my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</h6>
                    <div className="row">
                        <div className="col-4 text-center">
                            <Link to="/AssignmentProject" className="btn bg-dark text-warning text-capitalize">Assingment page <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/PortfolioHtml" className="btn bg-dark text-warning text-capitalize">Portfolio <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/ProductCatalog" className="btn bg-dark text-warning text-capitalize">Product Catalog <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TripPlanner