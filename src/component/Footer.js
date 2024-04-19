import React from "react";
import { Link } from "react-router-dom";
export const Footer = ({ onFooterClick }) => {
  const userName = localStorage.getItem("user_email");
  return (
    <>
      <footer
        className="py-3"
        style={{ color: "#FFFFFF", backgroundColor: "#1A1A1A" }}
      >
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-lg-9 col-12 d-flex">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-12 text-center">
                            {/* <!-- Additional Information --> */}
              <div className="pb-lg-3 d-flex" style={{ color: "FFFFFF" }}>
                <p>
                  © 2024 codesaarthi. All rights reserved by{" "}
                  <Link to="https://codesaarthi.com">codesaarthi.com</Link>
                </p>
              </div>
                        </div>
                        <div className="col-lg-7  col-12">
                        <div className="pb-lg-3 d-flex" style={{ color: "#999999" }}>
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
            <div className="col-lg-3 col-12 ">
              <div className="pb-3 d-flex justify-content-end " style={{ color: "FFFFFF" }}>
                {/* <!-- Section: Social media --> */}
                <section className=" SocialLinks">
                  {/* <!-- Instagram --> */}
                  <Link
                    className="btn btn-sm ms-3"
                    to="https://www.instagram.com/codesaarthi/"
                    role="button"
                    style={{
                      borderRadius: "50%",
                      color: "#703BF7",
                      fontSize: "1.2rem",
                    }}
                    target="_blank"
                  >
                    <i className="fi fi-brands-instagram  rounded-8"></i>
                  </Link>

                  {/* <!-- Whatsapp --> */}
                  <Link
                    className="btn btn-sm ms-3"
                    to="https://chat.whatsapp.com/BQV3Uv4nlU7IcrnjXHASpE"
                    role="button"
                    style={{
                      borderRadius: "50%",
                      color: "#703BF7",
                      fontSize: "1.2rem",
                    }}
                    target="_blank"
                  >
                    <i className="fi fi-brands-whatsapp rounded-8"></i>
                  </Link>

                  {/* <!-- Additional social media icons can be added here --> */}
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
