import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import config from "../../helper/config.js";
import Cookies from "js-cookie";
import { Link, useNavigate  } from "react-router-dom";
import { LampDesign } from "../../components/LampDesign.js";

const AdminLogin = () => {
    const navigate = useNavigate ();;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
    const { email, password } = formData;

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
      toast.error("Please enter your password", { theme: "dark" });
      return;
    }

    document.getElementById("checkpass").style.display = "block";

    try {
      setLoading(true);
      const formDataEncoded = new URLSearchParams();
      formDataEncoded.append("email", email);
      formDataEncoded.append("password", password);

      const response = await axios.post(
        `${config.BASE_URL}/Admin/Admin-Login`,
        formDataEncoded
      );

      if (response.status === 200) {
        toast.success("Welcome to Codesaarthi!", { theme: "dark" });
        setLoading(false);
        Cookies.set("Codesaarthi-token", response.data.token, {
          expires: 30,
        });
       navigate('/Admin-Dashboard');
      } else {
        toast.error(response.data.message, { theme: "dark" });
        setLoading(false);
      }
    } catch (error) {
      toast.error(
        error.response?.status === 400
          ? "User with this email already exists"
          : error.message,
        { theme: "dark" }
      );
      setLoading(false);
    }
  };

  return (
    <>
    <Toaster/>
      <div className="min-h-screen bg-slate-400 dark:bg-gray-950">
        <div className="flex justify-between">
          <div className="flex justify-center items-center pb-12 flex-1">
            <div className="space-y-4" style={{ width: "420px" }}>
              <form onSubmit={handleSubmit}>
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721941402/logo_dnkgj9.jpg"
                    className="mx-auto rounded-full h-24"
                    alt="Logo"
                  />
                  <h3 className="pt-3 text-black dark:text-white">
                    Welcome Back !!
                  </h3>
                  <br />
                </div>

                {/* Email input */}
                <div className="mb-4 flex">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full p-2 rounded-xl text-black dark:text-white bg-white dark:bg-slate-700"
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
                    name="password"
                    value={formData.password}
                    className="w-full p-2 rounded-xl text-black dark:text-white bg-white dark:bg-slate-700"
                    onChange={handleInputChange}
                    placeholder="Password"
                    required
                  />
                  <i
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

                <div className="flex items-end justify-end my-2">
                  <Link to="/forgot-password">
                    <p className="text-black dark:text-stone-100">
                      Forgot password
                    </p>
                  </Link>
                </div>

                {/* Submit button */}
                {loading ? (
                  <button
                    type="button"
                    className="btn btn-block mb-4 text-capitalize py-3"
                    style={{ fontSize: "1rem" }}
                    disabled
                  >
                    Welcome Back to Codesaarthi...
                    <span className="loading loading-spinner loading-md"></span>
                  </button>
                ) : (
                  <button
                    id="login_button"
                    type="submit"
                    className="btn btn-block mb-4 text-capitalize py-3 text-white"
                    style={{ fontSize: "1rem" }}
                  >
                    Log In
                    <i className="fi fi-rs-sign-out-alt ps-2 pt-2"></i>
                  </button>
                )}

                 
              </form>
              
            </div>
          </div>
          <div className="hidden md:block flex-1">
            <LampDesign
              title1={"Welcome back "}
              title2={"Admin Here.."}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
