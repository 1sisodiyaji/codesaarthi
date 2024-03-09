import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BlogApp = () => {
  return (
    <>
      {/* Head section with metadata */}
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Blog App Clone, React Blog, Frontend Development, Blogging Platform" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/blog-app-react" />
        <meta name="description" content="Explore the development of a React-based Blog App frontend clone with step-by-step tutorials, examples, and practice questions." />
        <title>Blog App Frontend Clone: React-based Blogging Platform | codesaarthi</title>
        <meta property="og:title" content="Blog App  Clone | codesaarthi" />
        <meta property="og:description" content="Explore the development of a React-based Blog App frontend clone with step-by-step tutorials, examples, and practice questions." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/blog-app-react" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      {/* Main content section */}
      <div className="" style={{ backgroundColor: '#000000' }}>
        <div className="container-lg container-sm-fluid design g-0 p-2 py-lg-5">

          <h5 className='textColor'> Project Title: React Blog App Frontend Clone</h5>

          <h6 className='textColor'>Description:</h6>
          <p className='text-light'>
            This project is a frontend clone of a Blog App developed using React. It focuses on the user interface and layout of a blogging platform for educational purposes.
          </p>

          <h6 className='textColor'>Key Features:</h6>

          <ul className='text-light'>
            <li>Responsive Design: The frontend is designed to be responsive, ensuring a seamless experience across various devices.</li>
            <li>Blog Post Display: The app showcases blog posts with a clean and intuitive layout.</li>
            <li>Navigation: Users can navigate through different blog categories and individual blog posts.</li>
            <li>Interactive UI: The frontend includes interactive elements for an engaging user experience.</li>
          </ul>

          <h6 className='textColor'>Screenshots:</h6>
          {/* Add screenshots of your Blog App frontend clone */}
          <div className="row my-3">
            <div className="col-6"><img src="img/BlogApp1.jpg" alt="" className="img-fluid" /></div>
            <div className="col-6"><img src="img/BlogApp2.jpg" alt="" className="img-fluid" /></div>
          </div>

          <h6 className='textColor'>Tech Stack:</h6>
          <ul className='text-light'>
            <li>React: Used for building the user interface and components.</li>
            <li>CSS: Responsible for styling and layout design.</li>
            <li>Other technologies you used...</li> {/* Add other technologies used in your project */}
          </ul>

          <h6 className='textColor'>How to Get Started:</h6>

          <ol className='text-light'>
            <li>Clone the Repository: Clone the Blog App frontend project from GitHub. <br />
              ```bash <br />
              https://github.com/your-username/BlogApp-Clone.git <br />
              <Link to="https://github.com/your-username/BlogApp-Clone.git" target='blank'>Click Here</Link>
            </li>
            <li>Installation: No specific server or build process is required. Simply clone the project and run it locally in your browser.
            </li>
            <li>Explore the App: Open the app in your browser and explore the blog posts and categories.
            </li>
          </ol>

          <p className='text-light'>Feel free to customize the app according to your specific requirements and add additional features as needed.</p>
          <div className="d-flex justify-content-between my-3 ">
            {/* Add demo and GitHub links for your Blog App frontend project */}
            <Link to="https://yourblogapp-demo.vercel.app/" target='blank' className="btn border bg-dark text-warning rounded-6">View Demo Link <i className="fi fi-sr-share-square ps-2"></i></Link>
            <Link to="https://github.com/your-username/BlogApp-Clone.git" target='blank' className="btn border bg-dark text-warning rounded-6"> <i className="fi fi-sr-location-arrow pe-2"></i> Github Code link</Link>
          </div>

          <h6 className='textColor'>Images Uploaded on GitHub:</h6>

          {/* Add the GitHub link to your project images */}
          <Link to="https://github.com/your-username/BlogApp-Clone/tree/main/img" target='blank' className="btn border bg-dark text-warning rounded-6">
            View Project Images on GitHub <i className="fi fi-sr-share-square ps-2"></i>
          </Link>

          <h6 className='text-light my-lg-4 my-2'>Thank you for exploring this React Blog App frontend clone project. Check out more frontend projects below:</h6>
          <div className="row">
            <div className="col-4 text-center">
              <Link to="/Razorpay" className="btn bg-dark text-warning text-capitalize">Razorpay Clone <i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
            </div>
            <div className="col-4 text-center">
              <Link to="/AmazonClone" className="btn bg-dark text-warning text-capitalize">Amazon Clone <i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
            </div>
            <div className="col-4 text-center">
              <Link to="/SpotifyClone" className="btn bg-dark text-warning text-capitalize">Spotify Clone <i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogApp;
