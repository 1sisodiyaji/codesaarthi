import React from 'react'
import { Link } from 'react-router-dom'
export const Footer = ({ onFooterClick }) => {
    const userName = localStorage.getItem("user_email");
  return (
   
    <>
        
        <footer className = "text-center design  pt-2" style ={{ color: 'grey' , backgroundColor : 'white'}}>

            <div className = "container-fluid g-0 pt-2" style={{ color: 'grey', backgroundColor : 'white'}}>
                {/* <!-- Logo and Company Name --> */}
                <div className = " row mb-3 g-0">
                    <div className="col-lg-2 col-6 text-start ps-2">
                    <Link to="/">
                        <img src="../img/logo.png" alt="logo" style = {{ width: '35px'}}/>
                    </Link>
                    <Link to="/" className = "h3 ms-2" style= {{ color:'#79b4e2' }}>
                        codesaarthi
                    </Link>
                    </div>
                   <div className="col-lg-10 col-6 text-end me-0">
{/* <!-- Section: Social media --> */}
<section className = "mb-1 SocialLinks">
                   
 
                   {/* <!-- Instagram --> */}
                   <Link className = "btn btn-sm ms-3" to="https://www.instagram.com/codesaarthi/" role="button"  style={{ borderRadius:"50%" , color:"#79b4e2" , fontSize:'0.9rem'}}  target="_blank" >
                       <i className = "fi fi-brands-instagram  rounded-8"></i>
                   </Link>
                 

                    {/* <!-- Whatsapp --> */}
                    <Link className = "btn btn-sm ms-3" to="https://chat.whatsapp.com/BQV3Uv4nlU7IcrnjXHASpE" role="button"  style={{ borderRadius:"50%" , color:"#79b4e2" , fontSize:'0.9rem'}}  target="_blank" >
                       <i className = "fi fi-brands-whatsapp  rounded-8"></i>
                   </Link>

                   {/* <!-- Additional social media icons can be added here --> */}
               </section>
                   </div>
                </div>

               

                {/* <!-- Additional Information --> */}
                <div className = "pb-3" style= {{ color: 'grey'}}>
                    <p>© 2024 codesaarthi. All rights reserved by <Link to ="https://codesaarthi.com" >codesaarthi.com</Link></p>
                    <Link to="/privacy_policy"  onClick={onFooterClick}  className = "text-body ">Privacy Policy</Link> |
                <Link to="/terms_conditions" onClick={onFooterClick}  className = "text-body ms-1">Terms Of Service</Link> |
                <Link to="/cookies" onClick={onFooterClick}  className = "text-body ms-1">Cookie Settings</Link>
                </div>
            </div>
        </footer>
   </>
  )
}
