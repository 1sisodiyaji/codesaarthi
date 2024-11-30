import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ onFooterClick }) => { 
  return (
    <>
      <footer  className="py-3">
        <div className="container-fluid g-0 mb-lg-0 mb-5">
          <div className="row g-0">
            <div className="col-lg-9 col-12 d-flex">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-5 col-12 text-center">
                    {/* <!-- Additional Information --> */}
                    <div className="pb-lg-3 d-flex">
                      <p>
                        © 2024 codesaarthi. All rights reserved by{" "}
                        <Link to="https://codesaarthi.com">
                          codesaarthi.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-7  col-12 ">
                    <div
                      className="pb-lg-3 d-flex justify-content-evenly"
                      style={{ color: "#999999" }}
                    >
                      <Link
                        to="/privacy_policy"
                        onClick={onFooterClick}
                        className="text-body heading2"
                      >
                        Privacy Policy
                      </Link>{" "}
                      |
                      <Link
                        to="/terms_conditions"
                        onClick={onFooterClick}
                        className="text-body ms-1 heading2"
                      >
                        Terms Of Service
                      </Link>{" "}
                      |
                      <Link
                        to="/cookies"
                        onClick={onFooterClick}
                        className="text-body ms-1 heading2"
                      >
                        Cookie Settings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-0 d-lg-block d-none ">
              <div
                className="pb-3 d-flex justify-content-end "
                style={{ color: "FFFFFF" }}
              >
                {/* <!-- Section: Social media --> */}
                <section className=" SocialLinks">
                  <Link
                    className="btn btn-sm ms-3"
                    to="https://www.instagram.com/codesaarthi/"
                    role="button" 
                    target="_blank"
                  >
                    <i className="fi fi-brands-instagram  rounded-8"></i>
                  </Link>

                  {/* <!-- Whatsapp --> */}
                  <Link
                    className="btn btn-sm ms-3"
                    to="https://chat.whatsapp.com/BQV3Uv4nlU7IcrnjXHASpE"
                    role="button" 
                    target="_blank"
                  >
                    <i className="fi fi-brands-whatsapp rounded-8"></i>
                  </Link>

                  {/* <!-- Additional social media icons can be added here --> */}
                </section>
              </div>
            </div>
            
            <div className="d-lg-none d-block ">
                    <div className="pb-3" style={{ color: "FFFFFF" }}>
                      {/* <!-- Section: Social media --> */}
                      <section className="row g-0">
                        <div className="col-6 text-start">
                          <Link
                            className="btn btn-sm ms-3"
                            to="https://www.instagram.com/codesaarthi/"
                            role="button" 
                            target="_blank"
                          >
                            <i className="fi fi-brands-instagram  rounded-8"></i>
                          </Link>
                        </div>
                        {/* <!-- Whatsapp --> */}
                        <div className="col-6 text-end">
                          <Link
                            className="btn btn-sm ms-3"
                            to="https://chat.whatsapp.com/BQV3Uv4nlU7IcrnjXHASpE"
                            role="button" 
                            target="_blank"
                          >
                            <i className="fi fi-brands-whatsapp rounded-8"></i>
                          </Link>
                        </div>
                      </section>
                    </div>
                  </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer
