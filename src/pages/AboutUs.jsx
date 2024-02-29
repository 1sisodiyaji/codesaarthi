import React from 'react'

const AboutUs = () => {
    function saveMessage(){
        const email = document.getElementById('name').value;
        const pas = document.getElementById('Email') ;

    }

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
                    <div className="col-lg-2 col-md-0 col-sm-0">
                        <img src="../img/vision1.webp" className='img-fluid pt-5 mt-5 gt-5' style={{ height: '50vh', width: '60vw' }} alt="mission image" />
                    </div>
                    <div className="col-lg-4 col-12 g-0 my-2 rounded-6" style={{ boxShadow: '5px 5px 20px black' }}>
                        <div className="card p-4" style={{ backgroundColor: '#79b4e2' }}>
                            <div className="d-flex justify-content-end">
                            </div>
                            <strong><h1 className="text-light heading" style={{ fontWeight: 'bolder' }}>Our <span style={{ color: 'black' }} >Mission</span></h1></strong>
                            <h3 className="text-light heading2">we are on a mission to make the world of coding and computer science accessible to everyone. Whether you're a student navigating through DSA problems, a professional seeking to enhance your knowledge of OS, DBMS, CN, or any other theory papers in computer science, we've got you covered..</h3>
                        </div>
                    </div>

                    <div className="col-lg-4 col-12 g-0 my-2  rounded-6" style={{ boxShadow: '5px 5px 20px black' }}   >
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

            <div className="container-fluid container-lg text-light my-lg-4 py-lg-4 my-3 py-3">
                <div className="row flex-md-row flex-column-reverse ">
                    <div className="col-lg-6 col-12   py-lg-5 py-3 px-lg-5 px-3 card shadow-5-soft rounded-9 "
                        style={{ backgroundColor: '#031A33', border: '1px solid #FFE164' }}>
                        <div className="justify-content-center" style={{ maxWidth: '100%' }}>
                            <div>
                                <h1 style={{ color: '#FFE164',  fontWeight: 'lighter' }} className="text-start mb-4">
                                    Contact Us</h1>

                                <p className='text-danger' id="wrong_pass_text"></p>

                                <div className="d-inline-block mb-4  w-100">
                                    <label for="name" className="form-label" style={{ color: '#FFE164' }}>Name</label>
                                    <input type="text" className="form-control p-lg-3 p-0 rounded-5 w-100 d-inline-block bg-transparent" style={{ color: '#FFE164' }} id="name" />
                                </div>
                                <div className="d-inline-block mb-4 w-100">
                                    <label for="Email" className="form-label" style={{ color: '#FFE164' }} >Email</label>
                                    <input type="text" className="form-control p-lg-3 p-0 rounded-5 w-100 d-inline-block bg-transparent" style={{ color: '#FFE164' }} id="Email" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label" style={{ color: '#FFE164' }} htmlFor="message">Message</label>
                                    <textarea className="form-control bg-transparent" style={{ color: '#FFE164' }} id="message" rows="4"></textarea>
                                </div>
                                <div className="text-danger" id="ErrorMsg"></div>
                                <button id="send_message" onclick={saveMessage}
                                    className="btn w-100 my-2 p-lg-3 p-2 rounded-5 shadow-0 text-capitalize"
                                    style={{ backgroundColor: '#FFE164', fontSize: '16px', color: '#031A33' }}>Send
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center my-3">
                        <img src="https://wooble.org/img/portfolio_light.png" className="img-fluid" />
                    </div>
                </div>

            </div>


        </>
    )
}

export default AboutUs


