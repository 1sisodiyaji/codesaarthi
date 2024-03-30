import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const ChatApp = () => {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Basic java Project , java core projects , chatting app in java , whatsapp web chat in java , java web socket based Project , amazing project in java , easy project in java." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/Chat-App" />
                <meta name="description" content="Basically These is a project Where we will use java swing and awt and the most used technology web-socket where an connection is created for both client and server." />
                <title>Chat App  in java | CodeSaarthi</title>
                <meta property="og:title" content="Chat App  in java | CodeSaarthi" />
                <meta property="og:description" content="Basically These is a project Where we will use java swing and awt and the most used technology web-socket where an connection is created for both client and server." />
                <meta property="og:image" content="img/javaProjects.png" />
                <meta property="og:url" content="https://codesaarthi.com/Chat-App" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>

            <div className="" style={{ backgroundColor: '#000000' }}>
                <div className=" container-lg conatiner-sm-fluid design g-0 p-2 py-lg-5">

                    <h5 className='textColor'>Project Title: Chat App in java </h5>

                    <h6 className='textColor'>Description:</h6>
                    <p className='text-light'>
                        In these Project we are going to build a simple chat app by the help of java  :- awt, swing and web socket as creating two objects as server and client for thier communications . For the design part i have used to design it like whatsapp . Basically in these project you will move forward one step to utilise the java awt as along with different functionailty as like web-socket and movinf forward as many things to explore.
                    </p>
                    <h6 className='textColor'>Key Features:</h6>

                    <ul className='text-light'>
                        <li>Speed messsaging between both server and client.</li>
                        <li>Server connection on a port to utilise maximum speed in  a computer. </li>
                        <li>Left the faetures like file uploads like image upto you to explore and add.</li>
                    </ul>

                    <h6 className='textColor'>Screenshot:</h6>
                    <div className="row my-3">
                        <div className="col-6 "><img src="img/ChatApp1.jpg" alt="trip planner images " className="img-fluid" style={{height:'400px'}}/></div>
                        <div className="col-6"><img src="img/ChatApp2.jpg" alt="images of trip planner" className="img-fluid" /></div>
                    </div>



                    <h6 className='textColor'> Tech Stack:</h6>
                    <ul className='text-light'>
                        <li> Using java core as awt and and swing For Frontend .</li>
                        <li>java web-socket as connection to create an environment of chat app.</li>

                    </ul>

                    <h6 className='textColor'> How to Start:</h6>


                    <p className='text-light'>You can go through this link of Github: <Link>https://github.com/1sisodiyaji/Chat_App.git</Link></p>

                    <h6 className='text-warning'>or you can visit Here:</h6>
                    <Link to="https://github.com/1sisodiyaji/Chat_App.git" target='blank'> <button className='btn btn-dark text-warning text-capitalize'> Click Here</button></Link>


                    <h6 className='text-light my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</h6>
                    <div className="row">
                        <div className="col-4 text-center">
                            <Link to="/TripPlanner" className="btn bg-dark text-warning text-capitalize">Trip Planner <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/FunCalculations" className="btn bg-dark text-warning text-capitalize">Fun Calculations  <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ChatApp