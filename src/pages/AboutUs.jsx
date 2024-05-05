import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmission = (isSubmitted) => {
        if (isSubmitted === true) {
            toast.success('Submitted', { position: 'bottomRight', autoClose: 3000 });
        } else {
            toast.error('Not Submitted', { position: 'bottomRight', autoClose: 3000 });
        }
    };

    const saveMessage = async () => {
        if (!name) {
            setError('Please fill Your name');
            return;
        } else if (!email) {
            setError('Please fill email');
            return;
        } else if (!message) {
            setError('Please address your issues');
            return;
        } else {

            const data = {
                name: name,
                email: email,
                message: message,
            };
            try {
                setIsLoading(true);
                const response = await axios.post('https://codesaarthiserver.cyclic.app/api/contactemail', data);
                if (response.status === 200) {
                    setError(" ");
                    setIsSubmitted(true);
                    handleSubmission(true);
                } else {

                    setIsSubmitted(false);
                    handleSubmission(false);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setName(" ");
                setEmail(" ");
                setMessage(" ");
                setIsLoading(false);
                setIsSubmitted(false);
            }
        }
    };
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="CodeSaarthi" content="Codesaarthi" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codesaarthi.com/AboutUs" />
                <meta name="description" content="Learn about Codesaarthi and our mission to provide quality coding education." />
                <title>About us| Codesaarthi Free Learning Platform</title>
                <meta property="og:title" content="About Us | Codesaarthi" />
                <meta property="og:description" content="Learn about Codesaarthi and our mission to provide quality coding education." />
                <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
                <meta property="og:url" content="https://codesaarthi.com/AboutUs" />
                <meta property="og:type" content="Education-Website" />
                <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
            </Helmet>

<div className="container-fluid g-0 design"style={{backgroundColor:' #1E1E1E'}} >
            <div className="container-fluid container-lg text-light py-lg-4  pt-4 text-center" >
                <h1 className="heading text-light" >
                    Why we<span style={{ color: '#79b4e2' }} > Exist?</span>
                </h1>

                <h3 className="px-lg-4 px-1 py-2 heading" style={{ color: 'white' }}>At <span style={{ color: '#79b4e2' }} >
                    Codesaarthi</span> , where the world of coding and computer science unfolds with simplicity and empowerment. We are passionate about guiding individuals on their journey through the intricacies of data structures, algorithms, and fundamental computer science concepts..</h3>

            </div>

            {/* <!--    Cards--> */}
            <div className="container-fluid  my-lg-4 py-lg-4">
                <div className="row  p-lg-0 p-3">
                    <div className="col-lg-2 col-md-0 col-sm-0 d-flex align-self-end justify-content-end d-lg-block d-none">
                        <img src="../img/Rectangle3.png" className='img-fluid pt-5 mt-5 gt-5' alt="mission image" />
                    </div>
                    <div className="col-lg-4 col-12 g-0 my-2 rounded-6 tilt-effect2 " style={{ boxShadow: '5px 5px 20px black' }}>
                        <div className="card p-4 h-100" style={{ backgroundColor: '#262626' }}>
                            <div className="d-flex justify-content-end">
                            </div>
                            <strong><h1 className="text-light heading" style={{ fontWeight: 'bolder' }}>Our <span style={{ color: '#703BF7' }} >Mission</span></h1></strong>
                            <h3 className="text-light heading2">we are on a mission to make the world of coding and computer science accessible to everyone. Whether you're a student navigating through DSA problems, a professional seeking to enhance your knowledge of OS, DBMS, CN, or any other theory papers in computer science, we've got you covered..</h3>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 g-0 my-2  rounded-6 tilt-effect2 " style={{ boxShadow: '5px 5px 20px black' }}   >
                        <div className="card p-4 ms-lg-2 h-100" style={{ backgroundColor: '#262626' }}>
                            <strong><h1 className="text-white heading" style={{ fontWeight: 'bolder' }}>Our <span style={{ color: '#703BF7' }}>Vision</span></h1></strong>
                            <h3 className="text-white heading2">We aspire to revolutionize the educational landscape, making learning accessible and free for all. As the student who have faith to learn they can grow here and each and every student could get learning free . our motive is to make it easy and available for all freely . We will help you atmost we can ....</h3>
                        </div>

                    </div>
                    <div className="col-lg-2 d-lg-block d-md-block d-none">
                        <img src="../img/Rectangle2.png" className='img-fluid ' alt="vision Image" />
                    </div>
                </div>
            </div>

            <div className="container-fluid  text-light my-lg-4 py-lg-4 my-3 py-3">
                <ToastContainer
                    position="bottomRight"
                    autoClose={3000}
                    hideProgressBar={false}
                    closeOnClick
                    pauseOnHover
                    draggable
                    style={{ zIndex: '9999', height: '50px', width: '250px' }}
                />
                <div className="row flex-md-row flex-column-reverse g-0 ">
                    <div className=" col-lg-2 col-0"></div>
                    <div className="col-lg-4 col-12   py-lg-5 py-3 px-lg-3 px-3 card shadow-5-soft tilt-effect " style={{
                       
                        borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0', backgroundColor: '#262626'
                    }}>
                        <div className="justify-content-center" style={{ maxWidth: '100%' }}>
                            <div>
                                <h1 style={{ color: '#FFE164', fontWeight: 'lighter' }} className="text-start mb-4">
                                    Contact Us</h1>

                                <div className="mb-4 w-100">
                                    <label htmlFor="name" className="form-label" style={{ color: '#FFE164' }}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="form-control p-lg-3 p-0 rounded-5 w-100 bg-transparent"
                                        style={{ color: '#FFE164' }}
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4 w-100">
                                    <label htmlFor="Email" className="form-label" style={{ color: '#FFE164' }}>
                                        Your Email
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        className="form-control p-lg-3 p-0 rounded-5 w-100 bg-transparent"
                                        style={{ color: '#FFE164' }}
                                        id="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label" style={{ color: '#FFE164' }} htmlFor="message">
                                        Your Message
                                    </label>
                                    <textarea
                                        placeholder="Type your message here..."
                                        className="form-control bg-transparent"
                                        style={{ color: '#FFE164' }}
                                        id="message"
                                        rows="4"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>
                                </div>

                                <p className="text-danger" id="ErrorMsg">  {error} </p>
                                <button
                                    onClick={saveMessage}
                                    className="btn w-100 my-2 p-lg-3 p-2 rounded-5 shadow-0 text-capitalize"
                                    style={{ backgroundColor: '#FFE164', fontSize: '16px', color: '#031A33' }}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Sending' : 'Send'}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
                        <img src="img/contactPage.png" className="img-fluid w-100" />
                    </div>
                </div>

            </div >

            <div className="container py-lg-3 ">
                <div className="row g-0">
                    <div className="col-lg-3 col-12"></div>
                    <div className="col-lg-6 col-12 g-0">
                        <div className="card p-5 d-lg-block d-md-block d-none" style={{ backgroundColor: '#262626' , boxShadow:'15px 15px 40px black' }} >
                            <div className="row">
                                <div className="col-3" style={{ borderRadius: '50%' }}>
                                    <img src="../img/ProfilePic.png" className='img-fluid' alt="Profile Pic Image" style={{ borderRadius: '50%' }} />
                                </div>
                                <div className="col-9">
                                    <h4 className='text-warning'> Golu Singh
                                        (Software Developer) </h4>
                                    <p className='text-light'>Web Intern at Wooble Software pvt ltd. </p>
                                    <small className='text-success'>Helping students to learn things easily . Actually i want to help them with the things which I learnt the hard way and make the learning easier for them.</small> <br />
                                    <Link to="https://www.linkedin.com/in/golu-singh/" target='blank'> <span><i class="fi fi-brands-linkedin text-warning pe-1"></i></span>Linkedin</Link> <span className='text-warning'>|</span>|
                                    <Link to="https://github.com/1sisodiyaji/" target='blank'> <span><i class="fi fi-brands-github text-warning pe-2"></i></span>Github </Link><span className='text-warning'>|</span>| <Link to="https://www.instagram.com/golu_singh_sisodiya/" target='blank' > <span><i className="fi fi-brands-instagram text-warning pe-2"></i></span>Instagram</Link>

                                    <div className="row">
                                        <div className="col-12 text-end">
                                        <Link to="mailto:637golusingh@gmail.com" className="btn btn-success text-capitalize ">Contact me <i className="fi fi-sr-envelope text-warning ps-2"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card p-3 d-lg-none d-md-none d-block" style={{ backgroundColor: '#000435' , boxShadow:'15px 15px 40px black' }} >
                            <div className="row">
                                <div className="col-3" style={{ borderRadius: '50%' }}>
                                    <img src="../img/ProfilePic.png" className='img-fluid' alt="Profile Pic Image" style={{ borderRadius: '50%' }} />
                                </div>
                                <div className="col-9">
                                    <h6 className='text-warning'> Golu Singh
                                        (Software Developer) </h6>
                                    <p className='text-light'> Ex-Web Intern at Wooble Software pvt ltd. </p>
                                </div>
                            </div>
                            <small className='text-success'>helping Students to learn things easily  , Actually i want to help them as the things i get hard to learn that things  i want to make them easier .</small> <br />
                                    <Link to="https://www.linkedin.com/in/golu-singh/" target='blank'> <span><i class="fi fi-brands-linkedin text-warning pe-1"></i></span>Linkedin</Link> <span className='text-warning'>|</span>|
                                    <Link to="https://github.com/1sisodiyaji/" target='blank'> <span><i class="fi fi-brands-github text-warning pe-2"></i></span>Github </Link><span className='text-warning'>|</span>| <Link to="https://www.instagram.com/golu_singh_sisodiya/" > <span><i className="fi fi-brands-instagram text-warning pe-2"></i></span>Instagram</Link>

                                    <div className="row">
                                        <div className="col-12 text-end">
                                        <Link to="mailto:637golusingh@gmail.com" className="btn btn-success text-capitalize ">Contact me <i className="fi fi-sr-envelope text-warning ps-2"></i></Link>
                                        </div>
                                    </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-12"></div>
                </div>
            </div>
            </div>
        </>
    )
}

export default AboutUs


