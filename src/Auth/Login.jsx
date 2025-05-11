import React, { useEffect, useState } from "react";
import style from "../Styles/Login.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Load remembered email if it exists
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setValue("email", savedEmail);
      setRememberMe(true);
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Handle remember me
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", data.email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }

      const response = await axios.post(
        "https://student-food-be.onrender.com/api/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("Login successful!");
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className={style.LoginContainer}>
      <div className={style.LoginContainerContent}>
        <h2>Log in to Euodia</h2>
        <p>Quick and simple way to start making your orders</p>

        <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              autoComplete="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className={style.error}>{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <div className={style.userPassword}>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                autoComplete="off"
                className={style.passwordInput}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              <span
                onClick={togglePassword}
                role="button"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && (
              <p className={style.error}>{errors.password.message}</p>
            )}
          </div>

          <div className={style.rememberMeSpan}>
            <div className={style.rememberMe}>
            <label htmlFor="rememberMe">
              <input
                className={style.checkboxInput}
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe((prev) => !prev)}
              />
              <span className={style.checkBox}></span>
              </label>
              <span>Remember me</span>
            </div>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button
            type="submit"
            className={style.loginButton}
            disabled={loading}
          >
            {loading ? "Please wait..." : "Log in"}
          </button>

          <div>
            <p className={style.signUpOpt}>
              Don't have an account? <Link to="/sign-up">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
