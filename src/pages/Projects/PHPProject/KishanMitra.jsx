import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
const KishanMitra = () => {
    return (
        <>
        <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Kishan Mitra , php Based Projects , Kishan helping web app , Kishan php project , Kishan saathi web app , top 5 farmer related  php projects , creative php projects , full stack php projects ,php mysql projects , Kishan Mitra freindly app for farmers" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/kishanMitra" />
                <meta name="description" content="It is one of the best ever project as related to farmers where they can search the weather , food price and many more . a friendly suitted app for farmers." />
                <title>Kishan Mitra  php  Projects | CodeSaarthi</title>
                <meta property="og:title" content="Kishan Mitra  php  Projects | CodeSaarthi" />
                <meta property="og:description" content="It is one of the best ever project as related to farmers where they can search the weather , food price and many more . a friendly suitted app for farmers." />
                <meta property="og:image" content="https://codesaarthi.com/img/farmer.png" />
                <meta property="og:url" content="https://codesaarthi.com/kishanMitra" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>
                <div className="" style={{ backgroundColor: '#000000' }}>
                    <div className=" container-lg conatiner-sm-fluid design g-0 p-2 py-lg-5">

                        <h5 className='textColor'> Project Title: Kishan Mitra</h5>

                        <h6 className='textColor'>Description:</h6>
                        <p className='text-light'>
                           Ye project ek platofrm h jha kishan se related news weather , aur saare features add on kiye hue h .
                        </p>
                        <h6 className='textColor'>Key Features:</h6>

                        <ul className='text-light'>
                            <li>Weather functionaility has been added here .</li>
                            <li>market price dummy data of raw products</li>
                            <li>Mail system integration</li>
                        </ul>

                        <h6 className='textColor'>Screenshot:</h6>
                        <div className="row my-3">
                            <div className="col-6 "><img src="img/KishanMitra1.jpg" alt="" className="img-fluid" /></div>
                            <div className="col-6"><img src="img/KishanMitra2.jpg" alt="" className="img-fluid" /></div>
                        </div>



                        <h6 className='textColor'> Tech Stack:</h6>
                        <ul className='text-light'>
                        <li>Using html  , css and javascript for frontend.</li>
                            <li>we have used bootstrap for css styling </li>
                            <li>We have used Php as backend .</li>
                            <li>PHPMailer as to perform amil syytem</li>
                        </ul>

                        <h6 className='textColor'> Kaise Shuru Karein:</h6>
                        <p className='text-light'> You can go through this git hub link and start learning .</p>
                        <p className='text-warning'>https://github.com/1sisodiyaji/Kishan-Mitra.git</p>
                        <Link to="https://github.com/1sisodiyaji/Kishan-Mitra.git" target='blank' className="btn bg-dark text-warning text-capitalize">Get Link</Link>

                        <p className='text-light'>Iske baad, aap isey customize kar sakte hain apne requirements ke hisaab se.</p>

                       

                       
                        <h6 className='text-light my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</h6>
                        <div className="row">
                            
                            <div className="col-4 text-center">
                                <Link to="/Kreeda" className="btn bg-dark text-warning text-capitalize">Kreeda <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                            </div>
                        </div>

                    </div>
                </div>
          
        </>
    )
}

export default KishanMitra