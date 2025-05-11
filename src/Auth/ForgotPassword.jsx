import React, { useState } from "react";
import style from "../Styles/ForgotPassword.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);


  const navigate = useNavigate()


  const handleSubmit = async (e) => {

    e.preventDefault()
    setLoading(true)
    try{
      const response =  await axios.post("https://student-food-be.onrender.com/api/forgot-password", { email });
      if(response.status === 200 || response.status === 201){
        localStorage.setItem("email", email)
        alert("Otp send succesfully!")
        navigate("/otp")
        setEmail("")
      }
    } catch(err){
      console.error(err)
    }
    finally{
      setLoading(false)
    }
  }
  return (
    <div className={style.forgotPasswordContainer}>
      <div className={style.forgotPasswordContent}>
        <h2>Recover your password</h2>
        <p>Let's recover your password in one go</p>
        <form onSubmit={handleSubmit}>
          <div className={style.forgetPasswordForm}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="chinedufreedom10@gmail.com"
              autoComplete="emaiil"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
              required
            />
          </div>
          <button type="submit" className={style.sendOtp}>
            {loading ? "Loading" : "Send"}
          </button>
          <p className={style.logInOpt}>
            {" "}
            <Link to="/login">Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
