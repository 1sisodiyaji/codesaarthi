import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../config/config";
import Cookies from 'js-cookie';

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState(false);
  const [token ,setToken] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]); 


  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Validate email format
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = formData;

    if (!name) {
      toast.warn("Please enter your name to create an account", {
        theme: "dark",
      });
      return;
    }

    if (!email) {
      toast.warn("Please enter your email", { theme: "dark" });
      return;
    }

    if (!isValidEmail(email)) {
      toast.warn("Please enter a valid email", { theme: "dark" });
      return;
    }

    if (!password) {
      toast.warn("Please enter your password to create an account", {
        theme: "dark",
      });
      return;
    }

    try {
      setLoading(true);
      const formDataEncoded = new URLSearchParams();
      formDataEncoded.append("name", name);
      formDataEncoded.append("email", email);
      formDataEncoded.append("password", password);

      const response = await axios.post(`${config.BASE_URL}/api/register`, formDataEncoded);

      if (response.data.status === "success") {
        toast.success("Please Verify Your Account !", { theme: "dark" }); 
        setLoading(false);
        setToken(response.data.token);
        setVerify(true);
      } else {
        toast.error(response.data.message, { theme: "dark" });
        setLoading(false);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      if (error.response && error.response.status === 500) {
        toast.error("User with this email already exists", { theme: "dark" });
      } else {
        toast.error("Error creating account. Please try again later.", {
          theme: "dark",
        });
      }
      setLoading(false);
    }
  };

  // login through google function
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      try {
        setLoading(true);

        // Fetch user data from Google API
        const googleResponse = await axios.get("https://www.googleapis.com/oauth2/v2/userinfo", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const userData = googleResponse.data;
        const formDataEncoded = new URLSearchParams();
        formDataEncoded.append("email", userData.email);
        formDataEncoded.append("name", userData.name);
        formDataEncoded.append("username", userData.given_name);
        formDataEncoded.append("image", userData.picture);

        const saveUserDataResponse = await axios.post(
          `${config.BASE_URL}/api/saveuserData`, formDataEncoded);

        if (saveUserDataResponse.data.status === "success") { 
          Cookies.set("token", saveUserDataResponse.data.token, { expires: 30 });
          setLoading(false);
         window.location.href = "/";
        } else {
          toast.error("Error saving user data", { theme: "dark" });
          console.log(saveUserDataResponse.data.message);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("Error during login. Please try again later.", { theme: "dark" });
        setLoading(false);
      }
    },
    onFaliure: (error) => {
      console.error("Error during login:", error);
      toast.error("Error during login. Please try again later.", { theme: "dark" });
      setLoading(false);
    },
  });

  // Function to handle change in each input field
  const handleInputChange2 = (index, event) => {
    const value = event.target.value;
    // Ensure only numeric values and maximum of 1 digit
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = value;
      setVerificationCode(newVerificationCode);

      // Move focus to next input field if value is entered
      if (value.length === 1 && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Function to handle backspace/delete functionality
  const handleBackspace = (index, event) => {
    if (event.key === 'Backspace' && index > 0) {
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index - 1] = '';
      setVerificationCode(newVerificationCode);
      inputRefs.current[index - 1].focus();
    }
  };

  const verifyUser = async () => {
    try {
      const { email } = formData; 
      const code = verificationCode.join('');  
        
    const response = await fetch(`${config.BASE_URL}/api/verify-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code, email })
    });
      
      if (response.status === 200) { 
        toast.success("User Verified Welcome to Codesaarthi !", { theme: "dark" });  
        Cookies.set("token",token, { expires: 30 });
        setLoading(false);
        window.location.href = "/";
      } else {
        console.error("Verification failed");
        toast.error("failed to Verify try again after sometime ..", { theme: "dark" }); 
       
      }
    } catch (error) {
      toast.error(error, { theme: "dark" }); 
      console.error("Error verifying user:", error);
    }
  };

  const inputs = verificationCode.map((value, index) => (

    <input
      key={index}
      type="text"
      className="col-2 p-4  rounded-3 input-field"
      style={{ color: "#79b4e2", border: "1px solid #79b4e2", backgroundColor: "black" }}
      maxLength={1}
      value={value}
      onChange={(e) => handleInputChange2(index, e)}
      onKeyDown={(e) => handleBackspace(index, e)}
      ref={(el) => inputRefs.current[index] = el}
    />

  ));

  return (
    <>
      <ToastContainer />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/signup" />
        <meta
          name="description"
          content="Join Codesaarthi and learn with simple explanations."
        />
        <title>Sign up | Codesaarthi Free Learning Platform</title>
        <meta property="og:title" content="Sign up | Codesaarthi" />
        <meta
          property="og:description"
          content="Join Codesaarthi and learn with simple explanations."
        />
        <meta
          property="og:image"
          content="https://codesaarthi.com/img/logo.png"
        />
        <meta property="og:url" content="https://codesaarthi.com/signup" />
        <meta property="og:type" content="Education-Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/img/favicon.ico"
          sizes="32x32"
        />
      </Helmet>

      {verify ?
        <>
         <div className="container-fluid design g-0 d-flex justify-content-center align-items-center " style={{ minHeight: '100vh' }}>
            <div className="row p-2">
              <div className="col-lg-4 col-md-6 col-12 py-lg-5">
                <div className='text-center py-lg-5'>
                  <img
                    src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720990203/logo_zdeshk.png"
                    width={95}
                    alt=""
                  />
                  <h4 className='text-warning mb-3'>Hey, Welcome to the verification Page</h4>
                  <div className="row g-0">
                    {inputs}
                  </div>
                  <button onClick={verifyUser} className='btn btn-block my-3'>Verify</button>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-12">
                <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720990074/login1_h8i72j.png" className='img-fluid w-100' alt="login" loading='lazy' />
              </div>
            </div>

          </div>
          
        </>
        :
        <>
         <div
            className="container-fluid d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center">
              <div
                className="container-fluid m-lg-0 p-lg-0"
                style={{ maxWidth: "420px" }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="text-center">
                    <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720990203/logo_zdeshk.png" width={95} alt="Logo" />
                    <h3 className="pt-3">
                      Create Account
                    </h3>
                    <br />
                  </div>

                  {/* Name input */}
                  <div className="mb-4">
                    <div className="col-12 g-0">
                      <div className="input-group w-100">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          className="form-control rounded-8 py-2"
                          placeholder="Your Name"
                          onChange={handleInputChange}
                        />
                        <i
                          id="checkname"
                          style={{ color: "#703BF7", display: "none" }}
                          className="fi fi-ss-check-circle text-center ms-1"
                        ></i>
                      </div>
                    </div>
                  </div>

                  {/* Email input */}
                  <div className="mb-4">
                    <div className="input-group w-100">
                      <input
                        type="email"
                        id="emailId"
                        name="email"
                        required
                        value={formData.email}
                        className="form-control rounded-8 py-2"
                        onChange={handleInputChange}
                        placeholder="Email"
                      />
                      <i
                        id="checkemail"
                        style={{ color: "#703BF7", display: "none" }}
                        className="fi fi-ss-check-circle text-center ms-1"
                      ></i>
                    </div>
                  </div>

                  {/* Password input */}
                  <div className="mb-4 position-relative">
                    <div className="input-group w-100">
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        className="form-control rounded-8 py-2"
                        onChange={handleInputChange}
                        placeholder="Password"
                        required
                      />
                      <i
                        id="passwordViewer"
                        onClick={togglePasswordVisibility}
                        className={`fi ${isPasswordVisible ? "fi-ss-eye" : "fi-ss-eye-crossed"
                          } position-absolute top-50 end-0 pe-2 pt-2 translate-middle-y`}
                        style={{ color: "#703BF7", cursor: "pointer" }}
                      ></i>
                      <i
                        id="checkpass"
                        style={{ color: "#703BF7", display: "none" }}
                        className="fi fi-ss-check-circle text-center ms-1"
                      ></i>
                    </div>
                  </div>

                  {/* Submit button */}
                  {loading ? (
                    <>
                      <button
                        type="button"
                        className="btn btn-block mb-4 text-capitalize py-3"
                        style={{ fontSize: '1rem' }}
                        disabled
                      >
                        Welcome to CodeSaarthi ...
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      </button>
                    </>
                  ) : (
                    <button
                      id="login_button"
                      data-mdb-ripple-init
                      type="button"
                      className="btn btn-block mb-4 text-capitalize py-3"
                      style={{ fontSize: '1rem' }}
                      onClick={handleSubmit}
                    >
                      Create Account    <i className="fi fi-rs-sign-out-alt ps-2 pt-2"></i>
                    </button>
                  )}

                  <h3
                    className="text-center mb-3"
                    style={{
                      fontWeight: "light",
                      fontSize: "1rem",
                    }}
                  >
                    - OR -
                  </h3>

                  {/* Google login button */}
                  <div className="text-center mb-2">
                    <div className="row d-flex justify-content-evenly align-items-center">
                      <div className="col-12">
                        <button
                          type="button"
                          className="btn bg-light w-100"
                          onClick={login}
                        >
                          <img
                            src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720990440/search_1_cw9o1p.png"
                            style={{ height: "26px" }}
                            alt="Google Icon"
                          />
                          <span className=" text-capitalize ms-2">
                            Sign Up With Google
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p>
                      Already have an account?
                      <Link to="/login" style={{ color: "#703BF7" }}>
                        {" "}
                        Log in
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-7 d-lg-block d-none d-flex justify-content-center align-items-center">
              <img
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720990507/login4_inj0uy.png"
                className="img-fluid w-100"
                alt="Login Page"
              />
            </div>
          </div>

        </>
      }




    </>
  );
};

export default SignUp;
