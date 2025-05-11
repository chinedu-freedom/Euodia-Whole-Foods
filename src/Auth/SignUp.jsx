import React, { useState } from "react";
import style from "../Styles/SignUp.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreeToTerms) {
      alert("You must agree to the terms to continue.")
      setError("You must agree to the terms to continue.");
      return;
    }

    const userData = { name, email, password };

    try {
      setLoading(true);
      setError("");
      const response = await axios.post(
        "https://student-food-be.onrender.com/api/signup",
        userData
      );

      if (response.status === 200 || response.status === 201 ) {
        alert("Account created successfully!");
        setName("");
        setEmail("");
        setPassword("");
        setAgreeToTerms(false);
      }
    } catch (err) {
      // Check if err is an Axios error
      if (axios.isAxiosError(err)) {
        setError("An error occurred while creating your account. Please try again.");
        console.error("Axios error: ", err.response?.data || err.message);
      } else {
        setError("An unexpected error occurred.");
        console.error("Unexpected error: ", err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.signUpContainer}>
      <div className={style.signUpContainerContent}>
        <h2>Sign up to Euodia</h2>
        <p>Quick and simple way to start making your orders</p>

        <form className={style.formContainer} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Chinedu Freedom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="chinedufreedom10@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <div className={style.userPassword}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="at least 8 characters"
                minLength={8}
                className={style.passwordInput}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
              />
              <span onClick={togglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className={style.termsConditon}>
            <label className={style.checkbox} htmlFor="myCheckboxId">
              <input
                className={style.checkboxInput}
                type="checkbox"
                id="myCheckboxId"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
              />
              <span className={style.checkBox}></span>
              <span className={style.terms}>
                I agree to the <a href="#">Terms and Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>
              </span>
            </label>
          </div>

          {error && <p className={style.error}>{error}</p>}

          <button
            type="submit"
            className={style.createAccountButton}
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create an account"}
          </button>

          <div>
            <p className={style.loginOpt}>
              Already have an account? 
              <Link to="/login">Log In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
