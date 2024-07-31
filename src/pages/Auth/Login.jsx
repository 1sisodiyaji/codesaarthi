import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { Helmet } from "react-helmet";
import config from "../../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
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
    const { email, password } = formData;

    function validateEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    if (email === "") {
      toast.warn("PLease Fill the data Completely!", { theme: "dark" });
    } else if (!validateEmail(email)) {
      toast.warn("Please enter a valid email!", { theme: "dark" });
    } else {
      document.getElementById("checkemail").style.display = "block";
      if (password === "") {
        toast.warn("Please fill in the password!", { theme: "dark" });
      } else {
        try {
          document.getElementById("checkpass").style.display = "block";
          setLoading(true);
          const formDataEncoded = new URLSearchParams();
          formDataEncoded.append("email", email);
          formDataEncoded.append("password", password);
          const response = await axios.post(
            `${config.BASE_URL}/api/signin`,
            formDataEncoded
          );
          if (response.data.status === "success") {
            toast.success("Login Successfully!", { theme: "dark" });
            Cookies.set("token", response.data.token, { expires: 30 });
            setLoading(false);
            window.location.href = "/";
          } else {
            console.log(response.data.message);
            toast.warn(response.data.message, { theme: "dark" });
            setLoading(false);
          }
        } catch (error) {
          console.error("Error logging user:", error);
          toast.error("Error creating account. Please try again later.", {
            theme: "dark",
          });
          setLoading(false);
        }
      }
    }
  };

  // login with google
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      try {
        setLoading(true);

        // Fetch user data from Google API
        const googleResponse = await axios.get(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const userData = googleResponse.data;
        const formDataEncoded = new URLSearchParams();
        formDataEncoded.append("email", userData.email);
        formDataEncoded.append("name", userData.name);
        formDataEncoded.append("username", userData.given_name);
        formDataEncoded.append("image", userData.picture);

        const saveUserDataResponse = await axios.post(
          `${config.BASE_URL}/api/saveuserData`,
          formDataEncoded
        );

        if (saveUserDataResponse.data.status === "success") {
          Cookies.set("token", saveUserDataResponse.data.token, {
            expires: 30,
          });
          setLoading(false);
          window.location.href = "/";
        } else {
          toast.error("Error saving user data", { theme: "dark" });
          console.log(saveUserDataResponse.data.message);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("Error during login. Please try again later.", {
          theme: "dark",
        });
        setLoading(false);
      }
    },
    onFaliure: (error) => {
      console.error("Error during login:", error);
      toast.error("Error during login. Please try again later.", {
        theme: "dark",
      });
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
        <link rel="canonical" href="https://codesaarthi.com/login" />
        <meta
          name="description"
          content="Lets Be a part of codesaarthi , give us  a chance to help you by explaining things in simple Words."
        />
        <title>Login | Codesaarthi Free Learning Platform</title>
        <meta property="og:title" content="Sign up | Codesaarthi" />
        <meta
          property="og:description"
          content="Lets Be a part of codesaarthi , give us  a chance to help you by explaining things in simple Words."
        />
        <meta
          property="og:image"
          content="https://codesaarthi.com/img/logo.png"
        />
        <meta property="og:url" content="https://codesaarthi.com/login" />
        <meta property="og:type" content="Education-Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/img/favicon.ico"
          sizes="32x32"
        />
      </Helmet>
      <div
        className="container-fluid m-0 p-0 g-0 d-flex justify-content-center align-items-center position-relative design"
        style={{ minHeight: "100vh" }}
      >
        <div className="row w-100 g-0">
          <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center">
            <div
              className="container-fluid  m-lg-0 p-lg-0"
              style={{ maxWidth: "420px" }}
            >
              <form>
                <div className=" text-center">
                  <img
                    src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721941402/logo_dnkgj9.jpg"
                    width={95}
                    alt=""
                    style={{ borderRadius: "50%" }}
                  />
                  <h3 className="pt-3" style={{ color: "#703BF7" }}>
                    {" "}
                    Login
                  </h3>
                  <br />
                </div>

                {/* <!-- Email input --> */}
                <div className="mb-4">
                  <div className="input-group w-100">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control rounded-8 py-2"
                      placeholder="email "
                      required
                    />
                    <i
                      id="checkemail"
                      style={{ color: "#79b4e2", display: "none" }}
                      className="fi fi-ss-check-circle text-center ms-1 mt-2"
                    ></i>
                  </div>
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-4 position-relative">
                  <div className="input-group w-100">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      className="form-control rounded-8 py-2 w-100"
                      onChange={handleInputChange}
                      placeholder="Password"
                      required
                    />
                    <i
                      id="passwordViewer"
                      onClick={passwordView}
                      className={`fi ${
                        isPasswordVisible ? "fi-ss-eye" : "fi-ss-eye-crossed"
                      }   pt-2 ms-2`}
                      style={{
                        color: "#703BF7",
                        cursor: "pointer",
                      }}
                    ></i>
                    <i
                      id="checkpass"
                      style={{ color: "#79b4e2", display: "none" }}
                      className="fi fi-ss-check-circle text-center mt-2 ms-4"
                    ></i>
                  </div>
                </div>

                <div className="text-end mb-2">
                  <Link to="/RecoverPassword" style={{ color: "#79b4e2" }}>
                    Forgot password ?
                  </Link>
                </div>

                {loading ? (
                  <>
                    <button
                      type="button"
                      className="btn btn-block mb-4 text-capitalize py-3"
                      style={{ fontSize: "1rem" }}
                      disabled
                    >
                      Welcome to CodeSaarthi ...
                      <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </>
                ) : (
                  <button
                    id="login_button"
                    data-mdb-ripple-init
                    type="button"
                    className="btn btn-block mb-4 text-capitalize py-3"
                    onClick={loginCheck}
                    style={{ fontSize: "1rem" }}
                  >
                    Login <i className="fi fi-rs-sign-out-alt ps-2 pt-2"></i>
                  </button>
                )}

                <h3
                  className="   text-center mb-3"
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
                        <img
                          src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720990440/search_1_cw9o1p.png"
                          height={26}
                          alt=""
                        />
                        <span className="text-capitalize ms-2 ">
                          Sign In With Google
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center ">
                  <p className=" ">
                    New Here Please{" "}
                    <Link to="/signup" style={{ color: "#703BF7" }}>
                      Register !
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className=" col-lg-7 d-lg-block d-none d-flex justify-content-center align-items-center">
            <img
              src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721941459/test_deyelf.jpg"
              className="img-fluid w-100"
              alt="login page"
              loading="lazy"
              title="login image"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
