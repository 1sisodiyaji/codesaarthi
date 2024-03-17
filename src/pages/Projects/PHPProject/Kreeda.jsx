import React from 'react'
import { Link } from 'react-router-dom'

const Kreeda = () => {
    return (
        <>
            <>
                <div className="" style={{ backgroundColor: '#000000' }}>
                    <div className=" container-lg conatiner-sm-fluid design g-0 p-2 py-lg-5">

                        <h5 className='textColor'> Project Title: Kreeda | A fantasy based platform</h5>

                        <h6 className='textColor'>Description:</h6>
                        <p className='text-light'>
                           Ye project ek online gaming platform bnaya gya hai isme login system , leaderboard  , payment integration system sab add kiya gya h .
                        </p>
                        <h6 className='textColor'>Key Features:</h6>

                        <ul className='text-light'>
                            <li>Here we can add users as real time. </li>
                            <li>We can play dummy matches. </li>
                            <li>Kreeda will show you an payment method too for learning purpose as RAZAOR PAY. </li>
                        </ul>

                        <h6 className='textColor'>Screenshot:</h6>
                        <div className="row my-3">
                            <div className="col-6 "><img src="img/Kreeda1.jpg" alt="" className="img-fluid" /></div>
                            <div className="col-6"><img src="img/Kreeda2.jpg" alt="" className="img-fluid" /></div>
                        </div>



                        <h6 className='textColor'> Tech Stack:</h6>
                        <ul className='text-light'>
                        <li>Using html  , css and javascript for frontend.</li>
                            <li>we have used bootstrap for css styling </li>
                            <li>We have used Php as backend .</li>
                            <li>PHPMailer as to perform amil syytem</li>
                        </ul>

                        <h6 className='textColor'> Kaise Shuru Karein:</h6>
                        <p className='text-light'> You can go through this git hub link and start learning .</p>
                        <Link to="https://github.com/1sisodiyaji/Krida-PHP.git" target="blank" className="btn bg-dark text-warning text-capitalize">Get Link</Link>

                        <p className='text-light'>Iske baad, aap isey customize kar sakte hain apne requirements ke hisaab se.</p>

                       

                       
                        <h6 className='text-light my-lg-4 my-2'>Thank you For Reading These Projects You can Also Check Out These ..</h6>
                        <div className="row">
                            
                            <div className="col-4 text-center">
                                <Link to="/kishanMitra" className="btn bg-dark text-warning text-capitalize">Kishan Mitra <i class="fi fi-rr-arrow-up-left-from-circle ps-2"></i></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        </>
    )
}

export default Kreeda