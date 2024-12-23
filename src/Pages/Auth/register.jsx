import React, { useState, useRef } from "react";
import { LampDesign } from "../../components/LampDesign.js";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import toast, { Toaster } from "react-hot-toast";
import config from "../../helper/config.js"; 
import { Link ,useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import { useDispatch } from 'react-redux';
import { setUser } from "../../store/slices/userSlice.js";

const Register = () => {
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState(false);
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [verificationCode, setVerificationCode] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = useRef([]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = formData;

    if (!name) {
      toast.error("Please enter your name to create an account", {
        theme: "dark",
      });
      return;
    }

    document.getElementById("checkname").style.display = "block";

    if (!email) {
      toast.error("Please enter your email", { theme: "dark" });
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email", { theme: "dark" });
      return;
    }

    document.getElementById("checkemail").style.display = "block";

    if (!password) {
      toast.error("Please enter your password to create an account", {
        theme: "dark",
      });
      return;
    }

    document.getElementById("checkpass").style.display = "block";

    try {
      setLoading(true);
      const formDataEncoded = new URLSearchParams();
      formDataEncoded.append("name", name);
      formDataEncoded.append("email", email);
      formDataEncoded.append("password", password);

      const response = await axios.post(
        `${config.BASE_URL}/user/register`,
        formDataEncoded
      );

      if (response.data.status === "success") {
        toast.success("Please Verify Your Account !", { theme: "dark" });
        setLoading(false);
        const { token, user } =  response.data;
        setUserData(token);
        setToken(user);
        setVerify(true);
      } else {
        toast.error("Something Wrong Happen ..", { theme: "dark" });
        setLoading(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("User with this email already exists", { theme: "dark" });
      } else {
        toast.error("Failed to register ..", {
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

        if (saveUserDataResponse.status === 200) { 
          const { token, user } =  saveUserDataResponse.data;
          dispatch(setUser({user,token }));
          setLoading(false);
          navigate("/");
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
    if (event.key === "Backspace" && index > 0) {
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index - 1] = "";
      setVerificationCode(newVerificationCode);
      inputRefs.current[index - 1].focus();
    }
  };

  const verifyUser = async () => {

    try {
      const { email } = formData;
      const code = verificationCode.join("");

      const response = await fetch(`${config.BASE_URL}/api/verify-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, email }),
      });

      if (response.status === 200) {
        toast.success("User Verified Welcome to Codesaarthi !", {
          theme: "dark",
        });
        dispatch(setUser({userData,token })); 
        setLoading(false);
        navigate("/");
      } else {
        console.error("Verification failed");
        toast.error("failed to Verify try again after sometime ..", {
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error(error, { theme: "dark" });
      console.error("Error verifying user:", error);
    }
  };

  const inputs = verificationCode.map((value, index) => (
    <input
      key={index}
      type="number"
      className="border-cyan-500 p-2 space-x-2 max-w-10 appearance-none"
      maxLength={1}
      value={value}
      onChange={(e) => handleInputChange2(index, e)}
      onKeyDown={(e) => handleBackspace(index, e)}
      ref={(el) => (inputRefs.current[index] = el)}
    />
  ));
  return (
    <>
      <Toaster />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/register" />
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
          content="https://codesaarthi.com/logo.png"
        />
        <meta property="og:url" content="https://codesaarthi.com/register" />
        <meta property="og:type" content="Education-Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/favicon.ico"
          sizes="32x32"
        />
      </Helmet>
      <div className="min-h-screen bg-slate-400 dark:bg-gray-950">
        <div className="flex md:flex-row  justify-between items-center md:py-0 py-20">
          <div className="flex  justify-center  items-center pb-12 w-full">
            {verify ? (
              <>
                <div
                  className="flex flex-col justify-center items-center space-y-4"
                  style={{ width: "420px" }}
                >
                  <img
                    src="https://res.cloudinary.com/ducw7orvn/image/upload/v1723392218/_adab1c9f-9272-481d-8642-1eeee5f32cbf-removebg-preview_x4jz3f.png"
                    width={95}
                    className=""
                    alt="logo_zdeshk"
                  />
                  <div className="flex  gap-2">{inputs}</div>
                  <button onClick={verifyUser} className="btn btn-block my-3">
                    Verify
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className=" space-y-4" style={{ width: "420px" }}>
                  <form onSubmit={handleSubmit}>
                    <div className="text-center">
                      <img
                        src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721941402/logo_dnkgj9.jpg"
                        className="mx-auto rounded-full h-24"
                        alt="Logo"
                      />
                      <h3 className="pt-3 text-black dark:text-white">
                        Create Account
                      </h3>
                      <br />
                    </div>

                    {/* Name input */}
                    <div className="mb-4 flex">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        className=" w-full p-2 rounded-xl text-black dark:text-white bg-white dark:bg-slate-700"
                        placeholder="Your Name"
                        onChange={handleInputChange}
                      />
                      <i
                        id="checkname"
                        style={{ color: "#79b4e2", display: "none" }}
                        className="fi fi-ss-check-circle text-center ms-2 mt-2"
                      ></i>
                    </div>

                    {/* Email input */}
                    <div className="mb-4 flex">
                      <input
                        type="email"
                        id="emailId"
                        name="email"
                        required
                        value={formData.email}
                        className=" w-full p-2 rounded-xl text-black dark:text-white bg-white dark:bg-slate-700"
                        onChange={handleInputChange}
                        placeholder="Email"
                      />
                      <i
                        id="checkemail"
                        style={{ color: "#79b4e2", display: "none" }}
                        className="fi fi-ss-check-circle text-center ms-2 mt-2"
                      ></i>
                    </div>

                    {/* Password input */}
                    <div className="mb-4 flex">
                      <input
                        type={isPasswordVisible ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        className=" w-full p-2 rounded-xl text-black dark:text-white bg-white dark:bg-slate-700"
                        onChange={handleInputChange}
                        placeholder="Password"
                        required
                      />
                      <i
                        id="passwordViewer"
                        onClick={togglePasswordVisibility}
                        className={`fi ${
                          isPasswordVisible ? "fi-ss-eye" : "fi-ss-eye-crossed"
                        } mt-2 ms-2 cursor-pointer`}
                        style={{ color: "#703BF7" }}
                      ></i>
                      <i
                        id="checkpass"
                        style={{ color: "#79b4e2", display: "none" }}
                        className="fi fi-ss-check-circle text-center ms-2 mt-2"
                      ></i>
                    </div>

                    {/* Submit button */}
                    {loading ? (
                      <>
                        <button
                          type="button"
                          className="btn btn-block mb-4 text-capitalize py-3"
                          style={{ fontSize: "1rem" }}
                          disabled
                        >
                          Welcome to Codesaarthi ...
                          <span className="loading loading-spinner loading-md"></span>
                        </button>
                      </>
                    ) : (
                      <button
                        id="login_button"
                        data-mdb-ripple-init
                        type="button"
                        className="btn btn-block mb-4 text-capitalize py-3 text-white"
                        style={{ fontSize: "1rem" }}
                        onClick={handleSubmit}
                      >
                        Create Account{" "}
                        <i className="fi fi-rs-sign-out-alt ps-2 pt-2"></i>
                      </button>
                    )}

                    <h3
                      className="text-center mb-3 text-black dark:text-white"
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
                            className="btn w-full"
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

                    <div className="text-center text-black dark:text-white">
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
              </>
            )}
          </div>
          <div className="hidden md:block w-full">
            <LampDesign title1={"Lets Begin "} title2={"Your Journey ..."} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
