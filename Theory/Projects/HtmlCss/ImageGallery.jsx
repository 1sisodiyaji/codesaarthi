import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

const ImageGallery = () => {
    return (
        <>
      <Helmet>
        <meta name="keywords" content=" gallery images , an view of Gallery in images , card view images " />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Projects/Image-Gallery" />
        <meta name="description" content="It is an page where we will create the gallery of images , Gallery view in grid mode . " />
        <title>Gallery | Codesaarthi</title>
        <meta property="og:title" content=" Gallery | Codesaarthi " />
        <meta property="og:description" content=" It is an page where we will create the gallery of images , Gallery view in grid mode . " />
        <meta property="og:image" content="https://codesaarthi.com/img/imageGallery.jpg" />
        <meta property="og:url" content="https://codesaarthi.com/Projects/Image-Gallery" />
        <meta property="og:type" content="Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>
            <div className="" style={{ backgroundColor: '#000000' }}>
                <div className=" container-lg conatiner-sm-fluid design g-0 p-2 py-lg-5">

                    <h5 className='textColor'> Project Title : Image Gallery</h5>

                    <h6 className='textColor'>Description:</h6>
                    <p className='text-light'>
                       Basically this is a project Which will help you in creating an gallery of images in grid mode as you can put your images in a gallery mode , You can use the code in your projects as a template .
                    </p>
                    <h6 className='textColor'>Key Features:</h6>

                    <ul className='text-light'>
                        <li>Good Design: It has an good design or we can say basic simple design as we can start from here .</li>
                        <li>High-Quality Code :  As the code is well maintained and written in a proper manner as you can edit it more and modify it .</li>
                        <li>Responsive Design: As the design is more responsive as user can check it any device it will work on every platform seamlessely  & if not then you can try and add fork on github.</li>
                    </ul>

                    <h6 className='textColor'>Screenshot:</h6>
                    <div className="row my-3">
                        <div className="col-lg-6 col-12 "><img src="../img/imageGallery.jpg" alt="coffee mug " title='coffee mug pics' loading='lazy' className="img-fluid" /></div>
                    </div>



                    <h6 className='textColor'> Tech Stack:</h6>
                    <ul className='text-light'>
                        <li>  HTML: As for  Page structure and content.</li>
                        <li>   CSS: Design aur styling ke liye.</li>
                    </ul>

                    <h6 className='textColor'> How To Start:</h6>

                    <ol className='text-light'>
                        <li>Clone : you have to clone the project from Github <br />
                            ```bash <br />
                            https://github.com/1sisodiyaji/Image_gallery.git <br />
                            <Link to="https://github.com/1sisodiyaji/Image_gallery.git" target='blank'>Click Here</Link>
                        </li>
                        <li>Installation: You don't need any server installation or package it is a basic program of html , css so do only clone it will run.
                        </li>
                        <li> Launch : To See the Project you have to go on the folder and run the index.html file you will see the result .
                        </li>
                    </ol>


                    <p className='text-light'>As this is a practise project you can modify it according to your choice and show us as learning phase . Either you can post on social media as sharing your content of learning on linkedin mentioning us.</p>
                    <div className="d-flex justify-content-between my-3 ">
                        <Link to="https://image-gallery-tan-rho.vercel.app" target='blank' className="btn border bg-dark text-warning rounded-6">View Demo Link <i className="fi fi-sr-share-square ps-2"></i></Link>
                        <Link to="https://github.com/1sisodiyaji/Image_gallery.git" target='blank' className="btn border bg-dark text-warning rounded-6"> <i className="fi fi-sr-location-arrow pe-2"></i> Github Code link</Link>
                    </div>
                    <h6 className='text-light my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</h6>
                    <div className="row">
                        <div className="col-4 text-center">
                            <Link to ="/Projects/Chair-page" className="btn bg-dark text-warning text-capitalize">Chair Page <i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to = "/Projects/Reciepe-website" className="btn bg-dark text-warning text-capitalize">Recipe Website <i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to = "/Projects/Product-Card" className="btn bg-dark text-warning text-capitalize">Product Card<i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ImageGallery
