import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../config/config";

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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

      const response = await axios.post(`${config.BASE_URL}/api/register`, {name: name , email :email , password :password});

      if (response.data.status === "success") {
        toast.success("Account created successfully!", { theme: "dark" });
        localStorage.setItem("token", response.data.token);
        setLoading(false);
        navigate("/");
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
        // Send user data to backend
        const saveUserDataResponse = await axios.post(`${config.BASE_URL}/api/saveuserData`,{ email: userData.email, name: userData.name, username : userData.given_name , image : userData.picture}); 
        if (saveUserDataResponse.data.status === "success") {
          localStorage.setItem("token", saveUserDataResponse.data.token);
          setLoading(false);
          navigate("/");
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

      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{
          overflowX: "hidden",
          fontFamily: "Exo",
          minHeight: "100vh",
          overflowY: "scroll",
          backgroundColor: "#141414",
        }}
      >
        <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center">
          <div
            className="container-fluid m-lg-0 p-lg-0"
            style={{ maxWidth: "420px" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="text-center">
                <img src="../img/logo.png" width={95} alt="Logo" />
                <h3 className="pt-3" style={{ color: "#703BF7" }}>
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
                      value={formData.name}
                      className="form-control rounded-8 py-2"
                      placeholder="Your Name"
                      onChange={handleInputChange}
                      style={{ backgroundColor: "black", color: "#703BF7" }}
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
                    value={formData.email}
                    className="form-control rounded-8 py-2"
                    onChange={handleInputChange}
                    style={{ backgroundColor: "black", color: "#703BF7" }}
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
                    style={{
                      backgroundColor: "black",
                      color: "#703BF7",
                      paddingRight: "3.5rem",
                    }}
                    placeholder="Password"
                  />
                  <i
                    id="passwordViewer"
                    onClick={togglePasswordVisibility}
                    className={`fi ${
                      isPasswordVisible ? "fi-ss-eye" : "fi-ss-eye-crossed"
                    } position-absolute top-50 end-0 pe-2 translate-middle-y`}
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
              <button
                type="submit"
                className="btn btn-block mb-4 text-capitalize py-3"
                style={{
                  backgroundColor: "#703BF7",
                  color: "white",
                  fontSize: "1rem",
                }}
              >
                {loading ? (
                  <img src="img/loader.svg" alt="Loading" />
                ) : (
                  "Create Account"
                )}
              </button>

              <h3
                className="text-center mb-3"
                style={{
                  fontWeight: "light",
                  fontSize: "1rem",
                  color: "white",
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
                        src="../img/search 1.png"
                        style={{ height: "26px" }}
                        alt="Google Icon"
                      />
                      <span className="text-dark text-capitalize ms-2">
                        Sign Up With Google
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-muted">
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
            src="img/login1.png"
            className="img-fluid w-100"
            alt="Login Page"
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
