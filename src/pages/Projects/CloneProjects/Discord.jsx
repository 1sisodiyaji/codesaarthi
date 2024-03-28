import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DiscordProject = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Discord Clone, Discord project, Chat application, Messaging app, Real-time communication" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Discord" />
        <meta name="description" content="Explore the development of a Discord clone project with step-by-step tutorials, examples, and practice questions. Learn the basics of building a real-time messaging application." />
        <title>Discord Clone Project: Tutorials, Examples, and Practice | Your Website Name</title>
        <meta property="og:title" content="Discord Clone Project | Your Website Name" />
        <meta property="og:description" content="Explore the development of a Discord clone project with step-by-step tutorials, examples, and practice questions. Learn the basics of building a real-time messaging application." />
        <meta property="og:image" content="https://codesaarthi.com/img/Discord1.jpg" />
        <meta property="og:url" content="https://codesaarthi.com/Discord" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div className="" style={{ backgroundColor: '#000000' }}>
        <div className="container-lg container-sm-fluid design g-0 p-2 py-lg-5">

          <h5 className='textColor'> Project Title: Discord Frontend Clone</h5>

          <h6 className='textColor'>Description:</h6>
          <p className='text-light'>
            This project is a frontend clone of the Discord application, developed using HTML, CSS, and JavaScript. It mimics the look and feel of Discord for educational purposes.
          </p>

          <h6 className='textColor'>Key Features:</h6>

          <ul className='text-light'>
            <li>Modern Design: The application replicates the contemporary design of Discord for a familiar and user-friendly experience.</li>
            <li>Visual Appeal: The clone includes key visual elements and features of Discord for an authentic representation.</li>
            <li>Responsive Layout: The frontend clone is designed to be responsive, catering to various screen sizes and devices.</li>
            <li>No Backend Functionality: This is a frontend-only project, focusing on the user interface without real-time functionality or server-side processing.</li>
          </ul>

          <h6 className='textColor'>Screenshots:</h6>
          {/* Add screenshots of your Discord frontend clone */}
          <div className="row my-3">
            <div className="col-6 "><img src="img/Discord1.jpg" alt="" className="img-fluid" /></div>
            <div className="col-6"><img src="img/Discord2.jpg" alt="" className="img-fluid" /></div>
          </div>

          <h6 className='textColor'>Tech Stack:</h6>
          <ul className='text-light'>
            <li>HTML: Used for page structure and content.</li>
            <li>Tailwind CSS: Responsible for design and styling.</li>
            <li>React: Implemented for interactive features and user interface enhancements.</li>
          </ul>

          <h6 className='textColor'>How to Get Started:</h6>

          <ol className='text-light'>
            <li>Clone the Repository: Clone the Discord frontend project from GitHub. <br />
              ```bash <br />
              https://github.com/1sisodiyaji/DIscord.git <br />
              <Link to="https://github.com/1sisodiyaji/DIscord.git" target='blank'>Click Here</Link>
            </li>
            <li>Installation: No specific server or build process is required. Simply clone the project and open `index.html` in your local browser.
            </li>
            <li> Launch the Application: Navigate to the project directory and open the `index.html` file in your browser.
            </li>
          </ol>

          <p className='text-light'>After this, you can explore the frontend structure and customize it according to your specific requirements.</p>
          <div className="d-flex justify-content-between my-3 ">
            {/* Add demo and GitHub links for your Discord frontend project */}
            <Link to="https://d-iscord-indol.vercel.app/" target='blank' className="btn border bg-dark text-warning rounded-6">View Demo Link <i class="fi fi-sr-share-square ps-2"></i></Link>
            <Link to="https://github.com/1sisodiyaji/DIscord.git" target='blank' className="btn border bg-dark text-warning rounded-6"> <i class="fi fi-sr-location-arrow pe-2"></i> Github Code link</Link>
          </div>

          <h6 className='textColor'>Images Uploaded on GitHub:</h6>

          {/* Add the GitHub link to your project images */}
          <Link to="https://github.com/1sisodiyaji/DIscord.git" target='blank' className="btn border bg-dark text-warning rounded-6">
            View Project Images on GitHub <i class="fi fi-sr-share-square ps-2"></i>
          </Link>

          <h6 className='text-light my-lg-4 my-2'>Thank you for exploring this Discord frontend clone project. Check out more frontend projects below:</h6>
          <div className="row">
            <div className="col-4 text-center">
              <Link to="/RazorPay" className="btn bg-dark text-warning text-capitalize">Razorpay<i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
            </div>
            <div className="col-4 text-center">
              <Link to="/Amazon-clone" className="btn bg-dark text-warning text-capitalize">Amazon<i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
            </div>
            <div className="col-4 text-center">
              <Link to="/Spotify-Clone" className="btn bg-dark text-warning text-capitalize">Spotify <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DiscordProject
