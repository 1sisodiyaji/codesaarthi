import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Spotify = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Spotify Clone, Music Streaming, React, Frontend Project" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/Spotify-clone" />
        <meta name="description" content="Explore the development of a Spotify Clone frontend project with step-by-step tutorials, examples, and practice questions. Learn the basics of building a music streaming application using React." />
        <title>Spotify Clone Project: Tutorials, Examples, and Practice | Codesaarthi</title>
        <meta property="og:title" content="Spotify Clone Project | Codesaarthi" />
        <meta property="og:description" content="Explore the development of a Spotify Clone frontend project with step-by-step tutorials, examples, and practice questions. Learn the basics of building a music streaming application using React." />
        <meta property="og:image" content="https://codesaarthi.com/img/Spotify1.jpg" />
        <meta property="og:url" content="https://codesaarthi.com/Spotify-clone" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div className="" style={{ backgroundColor: '#000000' }}>
        <div className="container-lg container-sm-fluid design g-0 p-2 py-lg-5">

          <h5 className='textColor'> Project Title: Spotify Frontend Clone</h5>

          <h6 className='textColor'>Description:</h6>
          <p className='text-light'>
            This project is a frontend clone of the Spotify music streaming application, developed using React. It replicates the user interface and functionality of Spotify, providing an immersive music streaming experience.
          </p>

          <h6 className='textColor'>Key Features:</h6>

          <ul className='text-light'>
            <li>Responsive Design: The frontend clone is designed to adapt to various screen sizes, providing a seamless experience across devices.</li>
            <li>Music Playback: Users can play,and pause,  mimicking the core music playback features of Spotify.</li>
            <li>Song Management: The clone includes Songs play pause features for a personalized music library.</li>
            <li>Search Functionality: try these one by <span className='text-warning'>you</span> Users can search for artists, albums, and songs, just like in the original Spotify application.</li>
          </ul>

          <h6 className='textColor'>Screenshots:</h6>
          {/* Add screenshots of your Spotify frontend clone */}
          <div className="row my-3">
            <div className="col-6"><img src="img/Spotify1.jpg" alt="" className="img-fluid" /></div>
            <div className="col-6"><img src="img/Spotify2.jpg" alt="" className="img-fluid" /></div>
          </div>

          <h6 className='textColor'>Tech Stack:</h6>
          <ul className='text-light'>
            <li>React: Used for building the user interface and managing the state of the application.</li>
            <li>Styled Components: Responsible for styling and component-based design.</li>
            <li>React Router: Implemented for navigation within the application.</li>
          </ul>

          <h6 className='textColor'>How to Get Started:</h6>

          <ol className='text-light'>
            <li>Clone the Repository: Clone the Spotify frontend project from GitHub. <br />
              ```bash <br />
              https://github.com/1sisodiyaji/Spotify-Clone.git <br />
              <Link to="https://github.com/1sisodiyaji/Spotify-Clone.git" target='blank'>Click Here</Link>
            </li>
            <li>Installation: Run `npm install` to install the project dependencies.</li>
            <li> Launch the Application: Start the development server using `npm start` and open the app in your browser.
            </li>
          </ol>

          <p className='text-light'>Explore the frontend structure, play around with the features, and customize it according to your specific requirements.</p>
          <div className="d-flex justify-content-between my-3 ">
            {/* Add demo and GitHub links for your Spotify frontend project */}
            <Link to="https://spotify-clone-rho-taupe.vercel.app/" target='blank' className="btn border bg-dark text-warning rounded-6">View Demo Link <i className="fi fi-sr-share-square ps-2"></i></Link>
            <Link to="https://github.com/1sisodiyaji/Spotify-Clone.git" target='blank' className="btn border bg-dark text-warning rounded-6"> <i className="fi fi-sr-location-arrow pe-2"></i> Github Code link</Link>
          </div>

          <h6 className='textColor'>Images Uploaded on GitHub:</h6>

          {/* Add the GitHub link to your project images */}
          <Link to="https://github.com/1sisodiyaji/Spotify-Clone.git" target='blank' className="btn border bg-dark text-warning rounded-6">
            View Project Images on GitHub <i className="fi fi-sr-share-square ps-2"></i>
          </Link>

          <h6 className='text-light my-lg-4 my-2'>Thank you for exploring this Spotify frontend clone project. Check out more frontend projects below:</h6>
          <div className="row">
            <div className="col-4 text-center">
              <Link to="/Razorpay" className="btn bg-dark text-warning text-capitalize">Razorpay<i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
            </div>
            <div className="col-4 text-center">
              <Link to="/Amazon-clone" className="btn bg-dark text-warning text-capitalize">Amazon<i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
            </div>
            <div className="col-4 text-center">
              <Link to="/Discord" className="btn bg-dark text-warning text-capitalize">Discord Clone <i className="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Spotify;
