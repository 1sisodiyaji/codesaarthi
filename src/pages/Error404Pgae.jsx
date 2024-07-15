import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
const Error404Pgae = () => {
  return (
   <>
   <Helmet>
  <meta name="keywords" content="Error 404, Page Not Found, Not Found, Oops, Broken Link" />
  <meta name="robots" content="noindex, nofollow" />
  <link rel="canonical" href="https://codesaarthi.com/*" />
  <meta name="description" content="Oops! The page you are looking for is not found. Explore other sections of our website or return to the homepage. We apologize for any inconvenience." />
  <title>Error 404: Page Not Found | codesaarthi</title>
  <meta property="og:title" content="Error 404: Page Not Found | codesaarthi" />
  <meta property="og:description" content="Oops! The page you are looking for is not found. Explore other sections of our website or return to the homepage. We apologize for any inconvenience." />
  <meta property="og:image" content="https://codesaarthi.com/img/Error404.jpg" />
  <meta property="og:url" content="https://codesaarthi.com/*" />
  <meta property="og:type" content="Website" />
  <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
</Helmet>
<div className="container-fluid  design g-0 ">

   <div className='d-flex align-items-center justify-content-center'>
        <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721032113/error404_jznaqp-removebg-preview_aedmsn.png" className='img-fluid imageHeight' alt="error page" />
   </div>
 

<div className="">
   <h2 className='text-center'>Check Out For More</h2> 

<Link to = "/theory" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i>Theory </Link>
<Link to = "/Problems" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i>Problems</Link>
<Link to = "/Projects"className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i>Projects</Link>
<Link to = "/theory/React-Content" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i>React</Link>
<Link to = "/roadMap" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i>Roadmap</Link>
<Link to = "/theory/java-learning" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i> Java</Link>

<Link to = "/theory/array" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i>Arrays </Link>
<Link to = "/theory/basic-Dbms" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i>DBMS</Link>
<Link to = "/theory/Os-Content"className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i>OS</Link>
<Link to = "/theory/Cn-Content" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i>Computer Networks</Link>
<Link to = "/Projects/web-development" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i>Web Development</Link>
<Link to = "/Projects/React-based-project" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i> react Project</Link>

<Link to = "/Projects/java-Projects" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i>Java Projects </Link>
<Link to = "/Projects/HtmlProject" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i>Html Projects</Link>
<Link to = "/Projects/Html-Css-Projects"className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i> html , cssProjects</Link>
<Link to = "/roadMap/dsa" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i>Dsa roadmap</Link>
<Link to = "/roadMap/Os" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i> os Roadmap</Link>
<Link to = "/roadMap/Dbms" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i> Dbms roadmap</Link>
<Link to = "/roadMap/ComputerNetwork" className='btn text-capitalize bg-dark text-warning m-2'> <i className="fi fi-rr-hand-back-point-right pe-2"></i> C N  roadmap</Link>
<Link to = "/"className='btn text-capitalize border border-success bg-success text-light w-100'><i className="fi fi-rr-hand-back-point-right"></i> Go to Website </Link>
</div>

</div>
   </>
  )
}

export default Error404Pgae