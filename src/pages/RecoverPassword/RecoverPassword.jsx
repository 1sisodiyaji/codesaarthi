import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const RecoverPassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
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

    // Strict validation: Only update state if the input is a single digit number or empty
    if (/^\d$/.test(value) || value === "") {
      // Update formData state with the value of the input at the specified index
      setFormData((prevFormData) => ({
        ...prevFormData,
        [`otp${index}`]: value
      }));

      // Move focus to next input if a number is entered
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
  const email =formData.email;

  const sendOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://codesaarthiserver.cyclic.app/api/sendemail', {email});
      if (response.data.status === 'success') {
        setShowOtp(true);
        setButtonDisabled(true);
      } else {
        setErrors(response.data.message);
      }
    } catch (error) {
      setErrors("Failed to send email: " + error);
    }finally{
      setButtonDisabled(true);
      setLoading(false);
      setErrors('');
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    const enteredOtp = Array.from({ length: 4 }, (_, index) => formData[`otp${index}`] || '').join('');
    try {
      console.log("otp is ",enteredOtp);
      console.log("email is ",email);
      const response = await axios.post('https://codesaarthiserver.cyclic.app/api/verifyOtp', {
        otp: enteredOtp,
      email
      });
      console.log(response);
      if (response.data.status === 'success') {
        console.log('otp matched');
        setShowPassword(true);
        setShowOtp(false);
      } else {
        setErrors(response.data.message);
      }
    } catch (error) {
      setErrors("Failed to match");
    } finally {
      setLoading(false);
      setShowPassword(true);
      setShowOtp(false);
      setErrors('');
    }
  };


  const updatePassword = () => {
    // Here, you'll update the password
    // After successful password update, navigate to the login page
    navigate("/login");
  };

  return (
    <>
      <div className="container-fluid m-0 p-0 g-0 d-flex justify-content-center align-items-center position-relative design" style={{ backgroundColor: "white", overflowX: "hidden", fontFamily: "Exo", minHeight: "100vh", overflowY: "scroll" }}>
        <div className="container" style={{ maxWidth: "420px" }}>
          <form>
            <div className=" text-center">
              <img
                src="img/logo.png"
                width={95}
                alt=""
              />
              <h3 className="pt-3" style={{ color: '#79b4e2' }}> Forgot password</h3>
              <br />
            </div>

            <div className="text-center">
              <p
                id="wrong_pass_text"
                className="p-0 m-0 text-danger"
              >{errors}</p>
            </div>
            {/* Email input */}
            <div className="mb-4">
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
                placeholder="email"
              />
            </div>
            {/* Send OTP button */}
            <button
              type="button" id="sendmailbutton"
              onClick={sendOtp} disabled={isButtonDisabled}
              className="btn btn-block mb-4 text-capitalize py-3"
              style={{ backgroundColor: "#79b4e2",color:'black', fontSize: "1rem" }}
            >
             {loading ? 'Sending..' : 'Send OTP' } 
            </button>
            {showOtp && (
              <div className="mb-4" style={{ display: "block" }} id="otpShow">
                <div className="row">
                  <div className="d-flex justify-content-center">
                    {Array.from({ length: 4 }, (_, index) => (
                      <input
                        key={index}
                        className="col-2 p-4 ms-2 rounded-3 input-field"
                        style={{ color: "#79b4e2", border: "1px solid #79b4e2", backgroundColor: "black" }}
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
                    <button type="button" onClick={verifyOtp} className="btn btn-block my-4 text-capitalize py-3" style={{ backgroundColor: "#79b4e2",color:'black', fontSize: "1rem" }}>
                    {loading ? 'Verifying..' : 'Verifying OTP' }
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
                    style={{ backgroundColor: "black", color: "#79b4e2" }}
                    placeholder="Password"
                  />
                  <i onClick={passwordView} className="fi fi-ss-eye-crossed pt-2 ps-2"></i>
                </div>
                <div className="mb-4 input-group">
                  <input
                    type={isPasswordVisible2 ? "text" : "password"}
                    name="conPassword"
                    value={formData.conPassword}
                    onChange={handleInputChange}
                    className="form-control rounded-8 py-2"
                    style={{ backgroundColor: "black", color: "#79b4e2" }}
                    placeholder="Confirm Password"
                  />
                  <i onClick={passwordView2} className="fi fi-ss-eye-crossed pt-2 ps-2"></i>
                </div>
                {/* Update Password button */}
                <button type="button" onClick={updatePassword} className="btn btn-block mb-4 text-capitalize py-3" style={{ backgroundColor: "#79b4e2", color: "#011528", fontSize: "1rem" }}>
                  Update Password
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
