import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

const AmazonClone = () => {
    return (
        <>
      <Helmet>
        <meta name="keywords" content="Amazon clone project , basic frontend of amazon clone , amazon clone , amazon ui clone" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Projects/Amazon-clone" />
        <meta name="description" content="Amazon clone project based on simple ui and responsive , based on learning making people to move it further and learn the core . " />
        <title>Amazon Clone Projects | Codesaarthi</title>
        <meta property="og:title" content="Amazon Clone Projects | Codesaarthi" />
        <meta property="og:description" content="Amazon clone project based on simple ui and responsive , based on learning making people to move it further and learn the core . " />
        <meta property="og:image" content="https://codesaarthi.com/img/amazon1.jpg" />
        <meta property="og:url" content="https://codesaarthi.com/Projects/Amazon-clone" />
        <meta property="og:type" content="Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>
            <div className="" style={{ backgroundColor: '#000000' }}>
                <div className=" container-lg conatiner-sm-fluid design g-0 p-2 py-lg-5">

                    <h5 className='textColor'> Project Title: Amazon Clone - (Frontend)</h5>

                    <h6 className='textColor'>Description:</h6>
                    <p className='text-light'>
                        Ye project ek Amazon ki frontend ka clone hai, jise maine HTML, CSS, aur JavaScript ka use karke banaya hai. Isme aapko ek online shopping website ki tarah feel hoga.
                    </p>
                    <h6 className='textColor'>Key Features:</h6>

                    <ul className='text-light'>
                        <li>Good Design: Website ka design Amazon ki tarah hai, jisse users ko familiar feel hota hai aur wo aasani se navigation kar sakein.</li>
                        <li>High-Quality Images: Har product ke saath high-quality images hain, jo users ko clear view deti hain aur unhe product samajhne mein madad karti hain.</li>
                        <li>High-Quality Images: Har product ke saath high-quality images hain, jo users ko clear view deti hain aur unhe product samajhne mein madad karti hain.</li>
                        <li>Categories aur Search: Products ko alag-alag categories mein divide kiya gaya hai aur ek search bar diya gaya hai taaki users apne pasandeeda products ko jaldi se khoj sakein.</li>
                        <li>Responsive Design: Website mobile aur desktop dono platforms ke liye responsive hai, jisse users apne preferred device pe seamlessly access kar sakein.</li>
                        <li>Product Details: Har product ke saath detailed information aur pricing di gayi hai, taaki users apne purchase ke decisions ko informed taur par le sakein.
                        </li>
                    </ul>

                    <h6 className='textColor'>Screenshot:</h6>
                    <div className="row my-3">
                        <div className="col-6 "><img src="https://codesaarthi.com/img/amazon1.jpg" alt="" className="img-fluid" /></div>
                        <div className="col-6"><img src="https://codesaarthi.com/img/amazon2.jpg" alt="" className="img-fluid" /></div>
                    </div>



                    <h6 className='textColor'> Tech Stack:</h6>
                    <ul className='text-light'>
                        <li>  HTML: Page structure aur content ke liye.</li>
                        <li>   CSS: Design aur styling ke liye.</li>
                        <li> JavaScript: Interactive features aur user interface ke liye.</li>
                    </ul>

                    <h6 className='textColor'> Kaise Shuru Karein:</h6>

                    <ol className='text-light'>
                        <li>Clone karein: GitHub se project ko clone karein. <br />
                            ```bash <br />
                            https://github.com/1sisodiyaji/Amazon-Clone.git <br />
                            <Link to="https://github.com/1sisodiyaji/Amazon-Clone.git" target='blank'>Click Here</Link>
                        </li>
                        <li>Installation: Kisi bhi specific server ya build process ki zarurat nahi hai. Sirf clone karein aur local browser mein open karein.
                        </li>
                        <li> Launch Karein: Project directory mein jaake `index.html` file ko browser mein open karein.
                        </li>
                    </ol>


                    <p className='text-light'>Iske baad, aap isey customize kar sakte hain apne requirements ke hisaab se.</p>
                    <div className="d-flex justify-content-between my-3 ">
                        <Link to="https://amazon-clone-indol-zeta.vercel.app/" target='blank' className="btn border bg-dark text-warning rounded-6">View Demo Link <i className="fi fi-sr-share-square ps-2"></i></Link>
                        <Link to="https://github.com/1sisodiyaji/Amazon-Clone.git" target='blank' className="btn border bg-dark text-warning rounded-6"> <i className="fi fi-sr-location-arrow pe-2"></i> Github Code link</Link>
                    </div>

                   
                   
                    <h6 className='textColor'>Images Were uploaded in Github :-</h6>
                    <h6 className='text-light my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</h6>
                    <div className="row">
                        <div className="col-4 text-center">
                            <Link to ="/Projects/RazorPay" className="btn bg-dark text-warning text-capitalize">Razor pay <i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to = "/Projects/Discord" className="btn bg-dark text-warning text-capitalize">Discord <i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to = "/Projects/Spotify-Clone" className="btn bg-dark text-warning text-capitalize">Spotify <i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AmazonClone