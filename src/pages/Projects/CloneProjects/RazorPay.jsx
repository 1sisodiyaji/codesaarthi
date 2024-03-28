import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const RazorpayProject = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Razorpay Clone, Razorpay project, Payment Gateway, Online Payments" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Razorpay" />
        <meta name="description" content="Explore the development of a Razorpay frontend clone project with step-by-step tutorials, examples, and practice questions. Learn the basics of integrating a payment gateway into your web application." />
        <title>Razorpay  Frontend Clone Project: Tutorials, Examples, and Practice | Codesaarthi</title>
        <meta property="og:title" content="Razorpay Frontend Clone Project | Your Website Name" />
        <meta property="og:description" content="Explore the development of a Razorpay frontend clone project with step-by-step tutorials, examples, and practice questions. Learn the basics of integrating a payment gateway into your web application." />
        <meta property="og:image" content="https://codesaarthi.com/img/Razorpay1.jpg" />
        <meta property="og:url" content="https://codesaarthi.com/Razorpay" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div className="" style={{ backgroundColor: '#000000' }}>
        <div className="container-lg container-sm-fluid design g-0 p-2 py-lg-5">

          <h5 className='textColor'> Project Title: Razorpay Frontend Clone</h5>

          <h6 className='textColor'>Description:</h6>
          <p className='text-light'>
            This project is a frontend clone of the Razorpay payment gateway, developed using HTML,Tailwind CSS, and React. It simulates the user interface and functionality of Razorpay for educational purposes.
          </p>

          <h6 className='textColor'>Key Features:</h6>

          <ul className='text-light'>
            <li>Modern Design: The clone replicates the modern design of Razorpay for a familiar and user-friendly experience.</li>
            <li>Payment Gateway Simulation: The frontend clone provides a simulated experience of processing online payments.</li>
            <li>Responsive Layout: The project is designed to be responsive, ensuring compatibility with various screen sizes and devices.</li>
            <li>No Backend Functionality: This is a frontend-only project, focusing on the user interface without actual payment processing or server-side operations.</li>
          </ul>

          <h6 className='textColor'>Screenshots:</h6>
          {/* Add screenshots of your Razorpay frontend clone */}
          <div className="row my-3">
            <div className="col-6"><img src="img/Razorpay1.jpg" alt="" className="img-fluid" /></div>
            <div className="col-6"><img src="img/Razorpay2.jpg" alt="" className="img-fluid" /></div>
          </div>

          <h6 className='textColor'>Tech Stack:</h6>
          <ul className='text-light'>
            <li>HTML: Used for page structure and content.</li>
            <li>Tailwind CSS: Responsible for design and styling.</li>
            <li>React: Implemented for interactive features and user interface enhancements.</li>
          </ul>

          <h6 className='textColor'>How to Get Started:</h6>

          <ol className='text-light'>
            <li>Clone the Repository: Clone the Razorpay frontend project from GitHub. <br />
              ```bash <br />
              https://github.com/1sisodiyaji/Razor_Pay.git <br />
              <Link to="https://github.com/1sisodiyaji/Razor_Pay.git" target='blank'>Click Here</Link>
            </li>
            <li>Installation: No specific server or build process is required. Simply clone the project and open `index.html` in your local browser.
            </li>
            <li> Launch the Application: Navigate to the project directory and open the `index.html` file in your browser.
            </li>
          </ol>

          <p className='text-light'>After this, you can explore the frontend structure and customize it according to your specific requirements.</p>
          <div className="d-flex justify-content-between my-3 ">
            {/* Add demo and GitHub links for your Razorpay frontend project */}
            <Link to="https://razor-pay-chi.vercel.app/" target='blank' className="btn border bg-dark text-warning rounded-6">View Demo Link <i className="fi fi-sr-share-square ps-2"></i></Link>
            <Link to="https://github.com/1sisodiyaji/Razor_Pay.git" target='blank' className="btn border bg-dark text-warning rounded-6"> <i className="fi fi-sr-location-arrow pe-2"></i> Github Code link</Link>
          </div>

          <h6 className='textColor'>Images Uploaded on GitHub:</h6>

          {/* Add the GitHub link to your project images */}
          <Link to="https://github.com/1sisodiyaji/Razor_Pay.git" target='blank' className="btn border bg-dark text-warning rounded-6">
            View Project Images on GitHub <i className="fi fi-sr-share-square ps-2"></i>
          </Link>

          <h6 className='text-light my-lg-4 my-2'>Thank you for exploring this Razorpay frontend clone project. Check out more frontend projects below:</h6>
          <div className="row">
            <div className="col-4 text-center">
              <Link to="/Discord" className="btn bg-dark text-warning text-capitalize">Discord Clone <i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
            </div>
            <div className="col-4 text-center">
              <Link to="/Amazon-clone" className="btn bg-dark text-warning text-capitalize">Amazon Clone <i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
            </div>
            <div className="col-4 text-center">
              <Link to="/Spotify-Clone" className="btn bg-dark text-warning text-capitalize">Spotify Clone <i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RazorpayProject;
