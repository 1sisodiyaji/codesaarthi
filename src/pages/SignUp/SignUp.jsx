import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../config/config";
const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // password viewer at password section
  const passwordView = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // signup function through normal email id and password
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("emailId").value;
    const password = document.getElementById("password").value;

    function isValidEmail(email) {
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    const properEmail = isValidEmail(email);

    if (name === "") {
      toast.warn("Please enter your name to Create account", { theme: "dark" });
    } else {
      document.getElementById("checkname").style.display = "block";

      if (email === "") {
      toast.warn("Please enter your email", { theme: "dark" });
      } else if (!properEmail) {
        toast.warn("Please enter Valid email", { theme: "dark" });
      } else {
        document.getElementById("checkemail").style.display = "block";
        if (password === "") {
          toast.warn("Please enter your password to Create account", { theme: "dark" });
        } else {
          try {
            setLoading(true);
            const response = await axios.post(
              `${config.BASE_URL}api/register`,
              formData
            );
            console.log(response);
            const { status, message } = response.data;
            const data = response.data.savedUser;
            const { name, email } = data;
            if (status === "success") { 
               toast.success("Account created successfully!", { theme: "dark" });
              localStorage.setItem("user_name", name);
              localStorage.setItem("user_email", email);
              setLoading(false);
              navigate('/theory')
            } else {
              console.log(message);
              setLoading(false);
            }

          } catch (error) {
            console.error("Error registering user:", error);
            if (error.response && error.response.status === 500) {
              toast.error(" User with this email already exists" , {theme:'dark'});
              setLoading(false);
            } else {
              toast.error(" Error creating account. Please try again later." , {theme:'dark'});
              setLoading(false);
            }
          }
        }
      }
    }
  };

  //saving data of the user when it click on submit 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // taking user input of every field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // login through google function
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {

      const accessToken = tokenResponse.access_token;
      axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then((response) => {
          const userData = response.data;
          setLoading(true);
          axios.post(`${config.BASE_URL}/api/saveuserData`, userData)
            .then((response) => {
              if (response.data.status === 'success') {
                localStorage.setItem('user_name', userData.name);
                localStorage.setItem('user_email', userData.email);
                localStorage.setItem('user_ProfilePic', userData.picture);
                setLoading(false);
                navigate("/theory");
              } else {
                toast.error("Error saving user data", { theme: "dark" });
                console.log( response.data.message );
                setLoading(false);
              }
            })
            .catch((error) => {
              toast.error("Error sending user data to backend:", { theme: "dark" });
                console.log( error);
              setLoading(false);
            });
        })
        .catch((error) => {
          toast.error("Error fetching user information::", { theme: "dark" });
          console.log( error);
          setLoading(false);
        });
    }
  });

  return (
    <>
      <ToastContainer />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/signup" />
        <meta name="description" content="Lets Be a part of codesaarthi , give us  a chance to help you by explaining things in simple Words." />
        <title>Sign up | Codesaarthi Free Learning Platform</title>
        <meta property="og:title" content="Sign up | Codesaarthi" />
        <meta property="og:description" content="Lets Be a part of codesaarthi , give us  a chance to help you by explaining things in simple Words." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/signup" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>

      <div
        className="container-fluid  d-flex justify-content-center align-items-center "
        style={{
          overflowX: "hidden",
          fontFamily: "Exo",
          minHeight: "100vh ",
          overflowY: "scroll ",
          backgroundColor: "#141414"
        }}
      >

        <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center">
          <div className="container-fluid  m-lg-0 p-lg-0" style={{ maxWidth: "420px" }}>
            <form onSubmit={handleSubmit}>
              <div className=" text-center">
                <img
                  src="../img/logo.png"
                  width={95}
                  alt=""
                />
                <h3 className="pt-3" style={{ color: '#703BF7' }}> Create Account</h3>
                <br />
              </div>

              {/* Enter Name */}
              <div className=" mb-4">
                <div className="col-12  g-0">
                  <div className="input-group w-100">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      className="form-control rounded-8  py-2"
                      placeholder="Your Name"
                      onChange={handleInputChange}
                      style={{
                        backgroundColor: "black",
                        color: "#703BF7",
                      }}
                    />
                    <i
                      id="checkname"
                      style={{ color: "#703BF7", display: "none" }}
                      className="fi fi-ss-check-circle text-center ms-1"
                    ></i>
                  </div>
                </div>
              </div>

              {/* <!-- Email input --> */}
              <div className="mb-4">
                <div className="input-group w-100">
                  <input
                    type="email"
                    id="emailId"
                    name="email"
                    value={formData.email}
                    className="form-control rounded-8 py-2"
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: "black",
                      color: "#703BF7",
                    }}
                    placeholder="email "
                  />
                  <i
                    id="checkemail"
                    style={{ color: "#703BF7", display: "none" }}
                    className="fi fi-ss-check-circle text-center ms-1"
                  ></i>
                </div>
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-4 position-relative">
                <div className="input-group w-100">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    className="form-control rounded-8 py-2 "
                    onChange={handleInputChange}
                    style={{
                      backgroundColor: "black",
                      color: "#703BF7",
                      paddingRight: "3.5rem", // Add right padding to make space for the icon
                    }}
                    placeholder="Password"
                  />
                  <i
                    id="passwordViewer"
                    onClick={passwordView}
                    className={`fi ${isPasswordVisible ? 'fi-ss-eye' : 'fi-ss-eye-crossed'} position-absolute top-50 end-0 pe-2 translate-middle-y text-decoration-none`}
                    style={{
                      color: "#703BF7",
                      cursor: "pointer",
                    }}
                  ></i>
                  <i
                    id="checkpass"
                    style={{ color: "#703BF7", display: "none" }}
                    className="fi fi-ss-check-circle text-center ms-1"
                  ></i>
                </div>
              </div>


              {/* <!-- Submit button --> */}
              <button
                data-mdb-ripple-init
                type="submit"
                className="btn btn-block mb-4 text-capitalize py-3"
                style={{
                  backgroundColor: "#703BF7",
                  color: "white",
                  fontSize: "1rem ",
                }}
              >
                {loading ? <> <img src="img/loader.svg" alt="loader image" /> </> : 'Create Account'}
              </button>

              <h3
                className="text-center mb-3"
                style={{ fontWeight: "light", fontSize: "1rem ", color: 'white' }}
              >
                {" "}
                -OR-{" "}
              </h3>
              {/* <!-- Register buttons --> */}
              <div className="text-center mb-2">
                <div className="row d-flex justify-content-evenly align-items-center">
                  <div className="col-12">
                    <button
                      type="button"
                      className="btn  bg-light w-100 "
                      onClick={login}
                    >
                      <img src="../img/search 1.png" style={{ height: "26px" }} alt="" />
                      <span className="text-dark text-capitalize ms-2 ">
                        Sign Up With Google
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center ">
                <p className="text-muted">
                  Already have an account ?
                  <Link to="/login" style={{ color: "#703BF7" }}>
                    {" "}
                    Log in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className=" col-lg-7 d-lg-block d-none d-flex justify-content-center align-items-center">
          <img src="img/login1.png" className="img-fluid w-100" alt="login page image" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
