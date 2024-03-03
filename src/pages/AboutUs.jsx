import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AboutUs = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmission = (isSubmitted) => {
        if (isSubmitted === true) {
            toast.success('Submitted', {
                position: 'bottomRight',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            toast.error('Not Submitted', {
                position: 'bottomRight',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const saveMessage = async () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('Email').value;
        const message = document.getElementById('message').value;
        const error = document.getElementById('ErrorMsg');

        if (!name || !email || !message) {
            error.textContent = "Please fill in all details";
        } else {
            error.textContent = "";
            const data = {
                name: name,
                email: email,
                message: message
            };

            try {
                const response = await axios.post('https://server-zepw.onrender.com/contactemail', data);

                if (response.status === 200) {
                    error.textContent = "";
                    setIsSubmitted(true);
                    handleSubmission(true);
                } else {
                    name.textContent = "";
                    email.textContent = "";
                    message.textContent = "";
                    setIsSubmitted(false);
                    handleSubmission(false);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <>
           
            <div className="container-fluid container-lg text-light my-lg-4 py-lg-4 mt-5 pt-4 text-center">
                <h1 className="heading text-dark" >
                    Why we<span style={{ color: '#79b4e2' }} > Exist?</span>
                </h1>

                <h3 className="px-lg-4 px-1 py-2 heading" style={{ color: 'black' }}>At <span style={{ color: '#79b4e2' }} >
                    Codesaarthi</span> , where the world of coding and computer science unfolds with simplicity and empowerment. We are passionate about guiding individuals on their journey through the intricacies of data structures, algorithms, and fundamental computer science concepts..</h3>

            </div>

            {/* <!--    Cards--> */}
            <div className="container-fluid  my-lg-4 py-lg-4">
                <div className="row  p-lg-0 p-3">
                    <div className="col-lg-2 col-md-0 col-sm-0 ">
                        <img src="../img/vision1.webp" className='img-fluid pt-5 mt-5 gt-5' style={{ height: '50vh', width: '60vw' }} alt="mission image" />
                    </div>
                    <div className="col-lg-4 col-12 g-0 my-2 rounded-6 tilt-effect2 " style={{ boxShadow: '5px 5px 20px black' }}>
                        <div className="card p-4" style={{ backgroundColor: '#79b4e2' }}>
                            <div className="d-flex justify-content-end">
                            </div>
                            <strong><h1 className="text-light heading" style={{ fontWeight: 'bolder' }}>Our <span style={{ color: 'black' }} >Mission</span></h1></strong>
                            <h3 className="text-light heading2">we are on a mission to make the world of coding and computer science accessible to everyone. Whether you're a student navigating through DSA problems, a professional seeking to enhance your knowledge of OS, DBMS, CN, or any other theory papers in computer science, we've got you covered..</h3>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 g-0 my-2  rounded-6 tilt-effect2 " style={{ boxShadow: '5px 5px 20px black' }}   >
                        <div className="card p-4 ms-lg-2 " style={{ backgroundColor: '#79b4e2' }}>
                            <strong><h1 className="text-white heading" style={{ fontWeight: 'bolder' }}>Our <span style={{ color: 'black' }}>Vision</span></h1></strong>
                            <h3 className="text-white heading2">We aspire to revolutionize the educational landscape, making learning accessible and free for all. As the student who have faith to learn they can grow here and each and every student could get learning free . our motive is to make it easy and available for all freely . We will help you atmost we can ....</h3>

                        </div>

                    </div>
                    <div className="col-lg-2 d-lg-block d-md-block d-none">
                        <img src="../img/boy1.webp" className='img-fluid pt-5 mt-5 ' style={{ height: '50vh', width: '60vw' }} alt="" />
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
                style={{ zIndex: '9999' ,height:'50px' ,width:'250px' }}
            />
                <div className="row flex-md-row flex-column-reverse g-0 ">
                    <div className=" col-lg-2 col-0"></div>
                    <div className="col-lg-4 col-12   py-lg-5 py-3 px-lg-3 px-3 card shadow-5-soft tilt-effect " style={{
                        border: '1px solid #FFE164',
                        borderTopLeftRadius: '20px', borderTopRightRadius: '20px', borderBottomLeftRadius: '0', borderBottomRightRadius: '0', backgroundColor: '#031A33'
                    }}>
                        <div className="justify-content-center" style={{ maxWidth: '100%' }}>
                            <div>
                                <h1 style={{ color: '#FFE164', fontWeight: 'lighter' }} className="text-start mb-4">
                                    Contact Us</h1>

                                <p className='text-danger' id="wrong_pass_text"></p>

                                <div className="d-inline-block mb-4  w-100">
                                    <label htmlFor="name" className="form-label" style={{ color: '#FFE164' }}>Name</label>
                                    <input type="text" className="form-control p-lg-3 p-0 rounded-5 w-100 d-inline-block bg-transparent" style={{ color: '#FFE164' }} id="name" />
                                </div>
                                <div className="d-inline-block mb-4 w-100">
                                    <label htmlFor="Email" className="form-label" style={{ color: '#FFE164' }} >Email</label>
                                    <input type="text" className="form-control p-lg-3 p-0 rounded-5 w-100 d-inline-block bg-transparent" style={{ color: '#FFE164' }} id="Email" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label" style={{ color: '#FFE164' }} htmlFor="message">Message</label>
                                    <textarea className="form-control bg-transparent" style={{ color: '#FFE164' }} id="message" rows="4"></textarea>
                                </div>
                                <p className="text-danger" id="ErrorMsg"></p>
                                <button onClick={saveMessage}
                                    className="btn w-100 my-2 p-lg-3 p-2 rounded-5 shadow-0 text-capitalize"
                                    style={{ backgroundColor: '#FFE164', fontSize: '16px', color: '#031A33' }}>Send
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
                        <img src="img/contactPage.png" className="img-fluid w-100" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutUs


