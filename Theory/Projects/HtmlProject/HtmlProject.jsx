import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const HtmlProject = () => {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Assignmnet page in html , portfolio in html , product page design in html , youtube based projects in html" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/Projects/HtmlProject" />
                <meta name="description" content="Explore the projects in html as the assignment page , portfolio page design in html , product page design , youtube based projects in html ." />
                <title>Html  Projects | CodeSaarthi</title>
                <meta property="og:title" content="Html  Projects | CodeSaarthi" />
                <meta property="og:description" content="Explore the projects in html as the assignment page , portfolio page design in html , product page design , youtube based projects in html ." />
                <meta property="og:image" content="https://codesaarthi.com/img/html1.png" />
                <meta property="og:url" content="https://codesaarthi.com/Projects/HtmlProject" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>

            <div className="container-fluid design" style={{ minHeight: '100vh' , backgroundColor:'#1E1E1E' }}>
                <div className="row py-5 ">

                    <div className="col-lg-4 my-2 col-12">
                        <div className="card border border-dark" style={{ backgroundColor: '#262626' }}>
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4 d-flex justify-content-center align-items-center">
                                            <div>
                                                <img src="https://codesaarthi.com/img/html1.png" className='img-fluid'title='assignment page' loading='lazy' alt="html logo" />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Assignment page</h5>
                                            <p className="card-text text-light">This is an Basic project to learn html tags and practise more.</p>
                                            <Link to="/Projects/AssignmentProject" className="btn bg-dark text-warning text-capitalize tilt-effect rounded-8">get it </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 my-2 col-12">
                        <div className="card border border-dark" style={{ backgroundColor: '#262626' }}>
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4 d-flex justify-content-center align-items-center">
                                            <div>
                                                <img src="https://codesaarthi.com/img/html1.png" className='img-fluid' alt="html logo" title='portfolio projects' loading='lazy' />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Portfolio basic page</h5>
                                            <p className="card-text text-light">This is an Basic project to create your portfolio based on html.</p>
                                            <Link to="/Projects/PortfolioHtml" className="btn bg-dark text-warning text-capitalize tilt-effect rounded-8">get it </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 my-2 col-12">
                        <div className="card  border border-dark" style={{ backgroundColor: '#262626' }}>
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4 d-flex justify-content-center align-items-center">
                                            <div>
                                                <img src="https://codesaarthi.com/img/html1.png" className='img-fluid' alt="html logo" title='product page' loading='lazy' />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Product  page</h5>
                                            <p className="card-text text-light">This is an  project to create am basic single page of product catalog.</p>
                                            <Link to="/Projects/ProductCatalog" className="btn bg-dark text-warning text-capitalize tilt-effect rounded-8">get it </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 my-2 col-12">
                        <div className="card border border-dark" style={{ backgroundColor: '#262626' }}>
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4 d-flex justify-content-center align-items-center">
                                            <div>
                                                <img src="https://codesaarthi.com/img/html1.png" className='img-fluid'title='assignment page' loading='lazy' alt="html logo" />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Job Application</h5>
                                            <p className="card-text text-light">This is an Basic project to learn html tasg as job Application Form</p>
                                            <Link to="/Projects/Job-Application-page" className="btn bg-dark text-warning text-capitalize tilt-effect rounded-8">get it </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 my-2 col-12">
                        <div className="card border border-dark" style={{ backgroundColor: '#262626' }}>
                            <div className="card-body">
                                <div className="row g-0">
                                        <div className="col-4 d-flex justify-content-center align-items-center">
                                            <div>
                                                <img src="https://codesaarthi.com/img/html1.png" className='img-fluid' alt="html logo" title='youtube based projects' loading='lazy' />
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <h5 className="card-title text-warning">Youtube based  page</h5>
                                            <p className="card-text text-light">This is an  project to add i frame and media in you page through hmtl.</p>
                                            <Link to="/Projects/youtubeBasedProject" className="btn bg-dark text-warning text-capitalize tilt-effect rounded-8">get it </Link>
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

export default HtmlProject