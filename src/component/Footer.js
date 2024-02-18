import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = ({ onFooterClick }) => {
    const userName = localStorage.getItem("user_email");
  return (
   
    <>
        
        <footer className = "text-center  pt-2" style ={{ color: 'grey' , backgroundColor : 'white'}}>

            <div className = "container pt-2" style={{ color: 'grey', backgroundColor : 'white'}}>
                {/* <!-- Logo and Company Name --> */}
                <div className = "mb-3">
                    <Link to="/">
                        <img src="../img/logo.png" alt="logo" style = {{ width: '35px'}}/>
                    </Link>
                    <Link to="/" className = "h3 ms-2" style= {{ color:'#79b4e2' }}>
                        codesaarthi
                    </Link>
                </div>

                {/* <!-- Section: Social media --> */}
                <section className = "mb-1 SocialLinks">
                    {/* <!-- Facebook --> */}
                    <Link className = "btn  btn-sm" to="#" role="button" style={{ borderRadius:"50%" ,   color:"#79b4e2" , fontSize:'0.9rem'}} target="_blank" >
                        <i className = "fi fi-brands-facebook rounded-8 "></i>
                    </Link>

                    {/* <!-- Instagram --> */}
                    <Link className = "btn btn-sm ms-3" to="#" role="button"  style={{ borderRadius:"50%" , color:"#79b4e2" , fontSize:'0.9rem'}}  target="_blank" >
                        <i className = "fi fi-brands-instagram  rounded-8"></i>
                    </Link>
                    {/* <!-- Youtube --> */}
                    <Link className = "btn btn-sm ms-3" to="https://www.youtube.com/channel/UCJ1gR0t5XJdPfBtecT0VOwQ" role="button"  style={{ borderRadius:"50%" , color:"#79b4e2" , fontSize:'0.9rem'}}  target="_blank" >
                        <i className = "fi fi-brands-youtube  rounded-8"></i>
                    </Link>

                     {/* <!-- Whatsapp --> */}
                     <Link className = "btn btn-sm ms-3" to="https://chat.whatsapp.com/BQV3Uv4nlU7IcrnjXHASpE" role="button"  style={{ borderRadius:"50%" , color:"#79b4e2" , fontSize:'0.9rem'}}  target="_blank" >
                        <i className = "fi fi-brands-whatsapp  rounded-8"></i>
                    </Link>

                    {/* <!-- Additional social media icons can be added here --> */}
                </section>

                {/* <!-- Additional Information --> */}
                <div className = "mb-3" style= {{ color: 'grey'}}>
                    <p>© 2024 codesaarthi. All rights reserved by <Link to ="https://codesaarthi.com" >codesaarthi.com</Link></p>
                    <Link to="/aboutUs" onClick={onFooterClick}  className = "text-body">About Us</Link> |
                    <Link to="/Problems" onClick={onFooterClick}  className = "text-body ms-1">Problems</Link> |
                    <Link to="/contest" onClick={onFooterClick}  className = "text-body ms-1">Contest</Link> |
                    <Link to="/store" onClick={onFooterClick}  className = "text-body ms-1">Store </Link> 
                       |
                    <Link to="/preparation" onClick={onFooterClick}  className = "text-body ms-1">Preparation</Link>
                </div>
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Privacy Policy, Terms of Service, Cookie Settings --> */}
            <div className = "text-center pb-3 p-2" style= {{backgroundColor: 'rgba(0, 0, 0, 0.05)' , color: 'grey' }}>
                <Link to="/privacy_policy"  onClick={onFooterClick}  className = "text-body ">Privacy Policy</Link> |
                <Link to="/terms_conditions" onClick={onFooterClick}  className = "text-body ms-1">Terms Of Service</Link> |
                <Link to="/cookies" onClick={onFooterClick}  className = "text-body ms-1">Cookie Settings</Link>
            </div>
        </footer>
   </>
  )
}
