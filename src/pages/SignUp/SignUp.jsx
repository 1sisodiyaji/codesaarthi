import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { Helmet } from 'react-helmet';
const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const name_error = document.getElementById("name_error");
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
    const name_error = document.getElementById("name_error");
    const email_error = document.getElementById("email_error");
    const pass_error = document.getElementById("pass_error");

    name_error.textContent = "";
    email_error.textContent = "";
    pass_error.textContent = "";

    function isValidEmail(email) {
      let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    const properEmail = isValidEmail(email);

    if (name === "") {
      name_error.textContent = "Please enter your name to Create account";
    } else {
      document.getElementById("checkname").style.display = "block";

      if (email === "") {
        email_error.textContent = "Please enter your email";
      } else if (!properEmail) {
        email_error.textContent = "Please enter a valid email";
      } else {
        document.getElementById("checkemail").style.display = "block";

        if (password === "") {
          pass_error.textContent =
            "Please enter your password to Create account";
        } else {
          try {
            setLoading(true);
            const response = await axios.post(
              "https://codesaarthiserver.cyclic.app/api/register",
              formData
            );
            const savedUser = response.data;
            const { status,message } = savedUser;
            const data = savedUser.savedUser;
            const {name,email} = data;
            if (status === "success") {
              name_error.textContent = "Account created successfully!";
              localStorage.setItem("user_name", name);
              localStorage.setItem("user_email", email);
              setLoading(false);
              navigate('/Problems')
            } else {
              name_error.textContent = message;
              setLoading(false);
            }
          } catch (error) {
            console.error("Error registering user:", error);
              if (error.response && error.response.status === 500) {
                name_error.textContent = "User with this email already exists";
                setLoading(false);
              } else {
                name_error.textContent = "Error creating account. Please try again later.";
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
          axios.post('https://codesaarthiserver.cyclic.app/api/saveuserData', userData)
            .then((response) => {
              if (response.data.status === 'success') {
                localStorage.setItem('user_name', userData.name);
                localStorage.setItem('user_email', userData.email);
                localStorage.setItem('user_ProfilePic', userData.picture);
                setLoading(false);
                navigate("/Problems");
              } else {
                name_error.textContent('Error saving user data:', response.data.message);
                setLoading(false);
              }
            })
            .catch((error) => {
              name_error.textContent('Error sending user data to backend:', error);
              setLoading(false);
            });
        })
        .catch((error) => {
          name_error.textContent('Error fetching user information:', error);
          setLoading(false);
        });
    }
  });

  // login through linkedin function
  const { linkedInLogin } = useLinkedIn({
    clientId: '865ot8yrscixc8',
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
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
              <h3 className="pt-3" style={{ color: '#79b4e2' }}> Create Account</h3>
              <br />
            </div>

            {/* Enter Name */}
            <div className=" mb-4">
              <div className="col-12  g-0">
                <p id="name_error" style={{ color: "#79b4e2" }}></p>
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
                      color: "#79b4e2",
                    }}
                  />
                  <i
                    id="checkname"
                    style={{ color: "#79b4e2", display: "none" }}
                    className="fi fi-ss-check-circle text-center ms-1"
                  ></i>
                </div>
              </div>
            </div>

            {/* <!-- Email input --> */}
            <div className="mb-4">
              <p id="email_error" style={{ color: "#79b4e2" }}></p>
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
                    color: "#79b4e2",
                  }}
                  placeholder="email "
                />
                <i
                  id="checkemail"
                  style={{ color: "#79b4e2", display: "none" }}
                  className="fi fi-ss-check-circle text-center ms-1"
                ></i>
              </div>
            </div>

            {/* <!-- Password input --> */}
            <div className="mb-4">
              <p id="pass_error" style={{ color: "#79b4e2" }}></p>
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
                    color: "#79b4e2",
                  }}
                  placeholder="Password"
                />
                <i
                  id="passwordViewer"
                  onClick={passwordView}
                  className="fi fi-ss-eye-crossed mt-2 mx-2"
                  style={{
                    color: !isPasswordVisible ? "black" : "#79b4e2",
                  }}
                ></i>
                <i
                  id="checkpass"
                  style={{ color: "#79b4e2", display: "none" }}
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
                backgroundColor: "#79b4e2",
                color: "black",
                fontSize: "1rem ",
              }}
            >
             {loading ? <> <img src="img/loader.svg" alt="loader image" /> </>:'Create Account'} 
            </button>

            <h3
              className="text-center mb-3"
              style={{ fontWeight: "light", fontSize: "1rem ", color: 'black' }}
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
                <div className="col-12  mt-2 d-none">

                  <button type="button" className="btn  bg-light w-100 " onClick={linkedInLogin} >
                    <img src="../img/linkedin.png" style={{ height: "26px" }} alt="" />
                    <span className="text-dark text-capitalize ms-2 ">
                      Sign Up With Linkedin
                    </span>
                  </button>

                </div>
              </div>
            </div>

            <div className="text-center ">
              <p className="text-muted">
                Already have an account ?
                <Link to="/login" style={{ color: "#79b4e2" }}>
                  {" "}
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
        </div>
<div className=" col-lg-7 d-lg-block d-none d-flex justify-content-center align-items-center">
<img src="img/login1.png"className="img-fluid w-100" alt="login page image" />
</div>
      </div>
    </>
  );
};

export default SignUp;
