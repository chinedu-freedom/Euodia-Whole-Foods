import React, { useRef, useState } from "react";
import style from "../Styles/Otp.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OTPInput = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, ""); // Only digits
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to next input
    if (index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (finalOtp) => {
    const email = localStorage.getItem("email");
    console.log(email)
if (!email) {
  alert("Email not found. Please restart the password recovery process.");
  return;
}
setLoading(true)
    try {
      const response = await axios.post("https://student-food-be.onrender.com/api/verify-otp", {        
        otp: finalOtp,
        email, // Replace with real user email
      });

      if (response.status === 200) {
        alert("OTP verified successfully!");
        navigate("/reset-password")
        // Proceed to next step, e.g., navigate to reset password
      } else {
        alert("Invalid OTP. Please try again.");
      setLoading(false)
      }
    } catch (error) {
      console.error("OTP verification error:", error);
    }
    finally{
      setLoading(false)

    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (otp.every((digit) => digit.length === 1)) {
      handleSubmit(otp.join(""));
    } else {
      alert("Please enter all 6 digits.");
    }
  };
  

  return (
    <div className={style.otpContainer}>
      <div className={style.otpContainerContent}>
        <h2>Recover your password</h2>
        <p>Enter the six digit code sent to your email</p>

        <form onSubmit={handleFormSubmit}>
          <div className={style.inputContainer}>
            {Array.from({ length: 6 }, (_, i) => (
              <input
                key={i}
                onPaste={(e) => e.preventDefault()}

                type="text"
                name={`otp-${i}`}
                maxLength="1"
                ref={(el) => (inputsRef.current[i] = el)}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className={style.otpInput}
                value={otp[i]}
              />
            ))}
          </div>
          <button type="submit" className={style.sendOtp}>
            {loading ? "Verifying..." : "Send"}
          </button>
        </form>

        <p className={style.loginOpt}>
  <Link to="/login">Go back</Link> or <Link to="/login">Log In</Link>
</p>

      </div>
    </div>
  );
};

export default OTPInput;
