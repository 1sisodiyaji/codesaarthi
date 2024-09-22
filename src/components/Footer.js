import { Link } from "react-router-dom";
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-3"> 
        <div className="flex md:flex-row  flex-col justify-between items-center w-full">
          <div className="text-center">
            <p>
              © {new Date().getFullYear()} codesaarthi. All rights reserved by{" "}
              <Link to="https://codesaarthi.com" className="text-primary">codesaarthi.com</Link>
            </p>
          </div>

          <nav className="flex  flex-row gap-4 text-center">
            <Link to="/privacy_policy" className="text-body  ">Privacy Policy</Link>
            <Link to="/terms_conditions" className="text-body  ">Terms Of Service</Link>
            <Link to="/cookies" className="text-body  ">Cookie Settings</Link>
          </nav>

          <div className=" flex gap-4">
            {/* Instagram */}
            <Link
              className="btn btn-sm"
              to="https://www.instagram.com/codesaarthi/"
              role="button"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fi fi-brands-instagram rounded-8"></i>
            </Link>

            {/* WhatsApp */}
            <Link
              className="btn btn-sm"
              to="https://chat.whatsapp.com/BQV3Uv4nlU7IcrnjXHASpE"
              role="button"
              target="_blank"
              aria-label="WhatsApp"
            >
              <i className="fi fi-brands-whatsapp rounded-8"></i>
            </Link>
          </div>
        </div> 
    </footer>
  );
};

export default Footer;
