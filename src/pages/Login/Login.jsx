import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useLinkedIn } from 'react-linkedin-login-oauth2';

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // password view button 
  const passwordView = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  //taking input 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //login with normal email id and paasword 
  const loginCheck = async () => {
    const email = document.getElementById("email_id").value;
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("email_error");
    const passError = document.getElementById("pass_error");

    emailError.textContent = "";
    passError.textContent = "";

    function validateEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    if (email === "") {
      emailError.textContent = "Please fill in the email.";
    } else if (!validateEmail(email)) {
      emailError.textContent = "Please enter a valid email.";
    } else {
      document.getElementById("checkemail").style.display = "block";

      if (password === "") {
        passError.textContent = "Please fill in the password.";
      } else {
        try {
          const response = await axios.post(
            "https://server-zepw.onrender.com/signin",
            formData
          );
          if (response.data.status === "success") {
            emailError.textContent = "Login successfully!";
            let name = response.data.name;
            localStorage.setItem("user_name", name);
            localStorage.setItem("user_email", email);
            navigate("/Problems");
          } else {
            emailError.textContent = response.data.message;
          }
        } catch (error) {
          console.error("Error loging user:", error);
          emailError.textContent =
            "Error creating account. Please try again later.";
        }
      }
    }
  };

  // login with google
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
          // Send user data to the backend
          axios.post('https://server-zepw.onrender.com/saveUserData', userData)
            .then((response) => {
              if (response.data.status === 'success') {
                localStorage.setItem('user_name', userData.name);
                localStorage.setItem('user_email', userData.email);
                localStorage.setItem('user_ProfilePic' , userData.picture);
                 navigate("/Problems");
              } else {
                console.error('Account Does not exist:', response.data.message);
              }
            })
            .catch((error) => {
              console.error('Error checking  user data to backend:', error);
            });
        })
        .catch((error) => {
          console.error('Error fetching user information:', error);
        });
    }
  });


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
      <div
        className="container-fluid m-0 p-0 g-0 d-flex justify-content-center align-items-center position-relative design"
        style={{
          backgroundColor: "white",
          overflowX: "hidden",
          fontFamily: "Exo",
          minHeight: "100vh",
          overflowY: "scroll",
        }}
      >
        <div className="container" style={{ maxWidth: "420px" }}>
          <form>
            <div className=" text-center">
              <img
                src="../img/logo.png"
                width={95}
                alt=""
              />
              <h3 className="pt-3" style={{color: '#79b4e2'}}> Login</h3>
              <br />
            </div>
            <div
              id="wrong_pass_text"
              style={{ display: "none" }}
              className="text-center"
            >
              <p className="p-0 m-0 text-danger"> Invalid email or Password.</p>
            </div>
            <div
              id="registerPage"
              style={{ display: "none" }}
              className="text-center"
            >
              <p className="p-0 m-0 text-danger">
                {" "}
                Email Not Found . Please Create Your account.
              </p>
              <Link to="/signup" style={{ color: "#79b4e2" }}>
                {" "}
                Create
              </Link>
            </div>
            {/* <!-- Email input --> */}
            <div className="mb-4">
              <p id="email_error" style={{ color: "#79b4e2" }}></p>
              <div className="input-group w-100">
                <input
                  type="email"
                  id="email_id"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control rounded-8 py-2"
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
              <p id="pass_error" style={{ color: " #79b4e2 " }}></p>
              <div className="input-group w-100">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-control rounded-8 py-2 "
                  style={{
                    backgroundColor: "black",
                    color: "#79b4e2",
                  }}
                  placeholder="password"
                />
                <i
                  id="passwordViewer"
                  onClick={passwordView}
                  className="fi fi-ss-eye-crossed pt-2 ps-2"
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

            <div className="text-end mb-2">
              <Link to="/RecoverPassword" style={{ color: "#79b4e2" }}>
                Forgot password ?
              </Link>
            </div>

            {/* <!-- Submit button --> */}
            <button
              id="login_button"
              data-mdb-ripple-init
              type="button"
              className="btn btn-block mb-4 text-capitalize py-3"
              onClick={loginCheck}
              style={{
                backgroundColor: "#79b4e2",
                color: "#011528",
                fontSize: "1rem",
              }}
            >
              Login
            </button>

            <h3
              className=" text-light text-center mb-3"
              style={{ fontWeight: "light", fontSize: "1rem" }}
            >
              {" "}
              -OR-{" "}
            </h3>
            {/* <!-- Sign  buttons --> */}
            <div className="text-center mb-2">
              <div className="row d-flex justify-content-evenly align-items-center">
                <div className="col-12">
                  <button
                    type="button"
                    className="btn  bg-light w-100 "
                    onClick={login}
                  >
                    <img src="../img/search 1.png" height={26} alt="" />
                    <span className="text-dark text-capitalize ms-2 ">
                      Sign In With Google
                    </span>
                  </button>
                </div>

                <div className="col-12  mt-2 d-none">
                  <button type="button" className="btn  bg-light w-100 " onClick={linkedInLogin} >
                    <img src="../img/linkedin.png" height={26} alt="" />
                    <span className="text-dark text-capitalize ms-2 ">
                      Sign In With Linkedin
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center ">
              <p className="text-muted">
                New Here PLease{" "}
                <Link to="/signup" style={{ color: "#79b4e2" }}>

                  Register !
                </Link>
              </p>
            </div>
          </form>
        </div>
        
      </div>
    </>
  );
};
export default Login;
