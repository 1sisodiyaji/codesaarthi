import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Helmet } from 'react-helmet';
import config from "../../config/config";

const RecoverPassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showEmails, setShowEmails] = useState(true); 
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    password: "",
    conPassword: "",
  });
  const navigate = useNavigate();
  const otpInputs = useRef(Array.from({ length: 4 }, () => null));

  const passwordView = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const passwordView2 = () => {
    setIsPasswordVisible2(!isPasswordVisible2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleOtpChange = (index, e) => {
    const { value } = e.target;
    if (/^\d$/.test(value) || value === "") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [`otp${index}`]: value
      }));

      const nextIndex = index + 1;
      const nextInput = otpInputs.current[nextIndex];
      if (value && nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyPress = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && !formData[`otp${index}`]) {
      // Move focus to the previous input and delete its content
      otpInputs.current[index - 1].focus();
      setFormData((prevFormData) => ({
        ...prevFormData,
        [`otp${index - 1}`]: ''
      }));
    }
  };



  const sendOtp = async () => {

    setLoading(true);
    const formDataEncoded = new URLSearchParams();
    formDataEncoded.append("email", formData.email);
    try {
      const response = await axios.post(`${config.BASE_URL}/api/sendemail`, formDataEncoded);
      if (response.data.status === 'success') {
        setLoading(false);
        setShowOtp(true);
        setShowEmails(false);
      } else {
        setErrors(response.data.message);
      }
    } catch (error) {
      setErrors("Failed to send email: " + error);
      setLoading(false);
    } finally {
      setLoading(false);
      setErrors('');
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    const enteredOtp = Array.from({ length: 4 }, (_, index) => formData[`otp${index}`] || '').join('');
    try {

      const verifyOtp = new URLSearchParams();
      verifyOtp.append('email', formData.email);
      verifyOtp.append('otp', enteredOtp);
      const response = await axios.post(`${config.BASE_URL}/api/verifyOtp`, verifyOtp);
      if (response.data.status === 'success') {
        setLoading(false);
        setShowOtp(false);
        setShowPassword(true);
      } else {
        setErrors(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      setErrors("Failed to match");
      setLoading(false);
    } finally {
      setErrors('');
    }
  };

  const updatePassword = async () => {
    const password = formData.password;
    const conPassword = formData.conPassword;

    if (password !== conPassword) {
      setErrors("Password Incorrect");
    } else {
      try {
        setLoading(true);
        const updatePassword = new URLSearchParams();
        updatePassword.append('email', formData.email);
        updatePassword.append('password', password);

        const response = await axios.post(`${config.BASE_URL}/api/updatePassword`, updatePassword);
        if (response.data.status === 'success') {
          setLoading(false);
          setShowPassword(false);
          setShowOtp(false);
          navigate("/login");
        } else {
          setErrors(response.data.message);
        }
      } catch (error) {
        setErrors("Failed to update password");
      } finally {
        setLoading(false);
        setShowEmails(false);
        setShowPassword(false);
        setShowOtp(false);
        setErrors('');
      }
    }
  };

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Recover password , forgot password , forgot password in codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/RecoverPassword" />
        <meta name="description" content="It is an page where you can change the password through recovery method . Recover you rpassword in easy steps ." />
        <title>Recover Password| CodeSaarthi</title>
        <meta property="og:title" content=" Recover Password| | CodeSaarthi" />
        <meta property="og:description" content="It is an page where you can change the password through recovery method . Recover you rpassword in easy steps ." />
        <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
        <meta property="og:url" content="https://codesaarthi.com/RecoverPassword" />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
      </Helmet>
      <div className="container-fluid m-0 p-0 g-0 d-flex justify-content-center align-items-center position-relative design" style={{ minHeight: "100vh"}}>
        <div className="container" style={{ maxWidth: "420px" }}>
          <form>
            <div className=" text-center">
              <img
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720990203/logo_zdeshk.png"
                width={95}
                alt=""
              />
              <h3 className="pt-3"> Forgot password</h3>
              <br />
            </div>

            <div className="text-center">
              <p
                id="wrong_pass_text"
                className="p-0 m-0 text-danger"
              >{errors}</p>
            </div>
            {showEmails && (
              <>
                {/* Email input */}
                <div className="mb-4">
                  <input
                    type="email"
                    id="email_id"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control rounded-8 py-2"
                    
                    placeholder="email"
                  />
                </div>
                {/* Send OTP button */}
                <button
                  type="button" id="sendmailbutton"
                  onClick={sendOtp}
                  className="btn btn-block mb-4 text-capitalize py-3 rounded-6"
                  style={{ fontSize: "1rem" }}
                >
                  {loading ? <> 
                    Sending Otp ...
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                   </> : 'Send OTP'}
                </button>
              </>
            )}
            {showOtp && (
              <div className="mb-4" style={{ display: "block" }} id="otpShow">
                <div className="row">
                  <div className="d-flex justify-content-center">
                    {Array.from({ length: 4 }, (_, index) => (
                      <input
                        key={index}
                        className="col-2 p-4 ms-2 rounded-3 input-field"
                        style={{   border: "1px solid #79b4e2" }}
                        type="text"
                        maxLength="1"
                        name={`otp${index}`} // Add name attribute
                        value={formData[`otp${index}`] || ''}
                        onChange={(e) => handleOtpChange(index, e)}
                        onKeyDown={(e) => handleKeyPress(index, e)}
                        ref={(el) => (otpInputs.current[index] = el)}
                      />
                    ))}
                  </div>

                  <div>
                    <button type="button" onClick={verifyOtp} className="btn btn-block my-4 text-capitalize py-3" style={{fontSize: "1rem" }}>
                      {loading ? <> 
                        Verifying Otp ...
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      </> : 'Verify OTP'}
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* Password input section */}
            {showPassword && (
              <div style={{ display: "block" }} id="passwordDisplay">
                <div className="input-group mb-4 mt-2">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="form-control rounded-8 py-2" 
                    placeholder="Password"
                  />
                  <i onClick={passwordView} style={{cursor: 'pointer'}} className="fi fi-ss-eye-crossed pt-2 ps-2"></i>
                </div>
                <div className="mb-4 input-group">
                  <input
                    type={isPasswordVisible2 ? "text" : "password"}
                    name="conPassword"
                    value={formData.conPassword}
                    onChange={handleInputChange}
                    className="form-control rounded-8 py-2" 
                    placeholder="Confirm Password"
                  />
                  <i onClick={passwordView2} style={{cursor: 'pointer'}} className="fi fi-ss-eye-crossed pt-2 ps-2"></i>
                </div>
                {/* Update Password button */}
                <button type="button" onClick={updatePassword} className="btn btn-block mb-4 text-capitalize py-3" style={{ fontSize: "1rem" }}>
                  {loading ? <>
                    Updating Password ...
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </> : 'Update'}
                </button>
              </div>
            )}
          </form>
        </div>

      </div>
    </>
  );
};

export default RecoverPassword;
