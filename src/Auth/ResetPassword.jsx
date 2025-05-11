import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import style from "../Styles/ResetPassword.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const toggleNewPassword = () => setShowNewPassword(prev => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword(prev => !prev);

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    
    if (newPassword !== password) {
      alert("Passwords don't match");
      setLoading(false);
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }
    const email = localStorage.getItem("email");
    console.log(email)
if (!email) {
  alert("Email not found. Please restart the password recovery process.");
  return;
}
    
  
    try{
       const response = await axios.post("https://student-food-be.onrender.com/api/password-reset", {email, newPassword})      
        
      if(response.status === 200 || response.status === 201){
        alert('password reset succesful')
        navigate('/login')
      }
    }
    catch(err) {
      console.error(err);
      const msg = err.response?.data?.message || "An error occurred. Please try again.";
      alert(msg);
    }
    
    finally{
      setLoading(false)
    }
  }
  return (
    <div className={style.resetContainer}>
      <div className={style.resetContainerContent}>
        <h2>Reset your password</h2>
        <p>Let's reset your password in one go</p>
        <form className={style.resetForm} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="new-password">Enter new password</label>
            <div className={style.newPassword}>
              <input
                type={showNewPassword ? "text" : "password"}
                id="new-password"
                name="new-password"
                placeholder="At least 8 characters"
                minLength={8}
                required
                value={password}
              onChange={(e) => setPassword(e.target.value)}
                className={style.passwordInput}
              />
              <span onClick={toggleNewPassword} role="button" aria-label="Toggle new password visibility">
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div>
            <label htmlFor='confirm-new-password'>Confirm new password</label>
              <div className={style.confirmPassword}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-new-password"
                  name="confirm-password"
                  placeholder="at least 8 characters"
                  minLength={8}
                  value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className={style.passwordInput}
                />
                <span onClick={toggleConfirmPassword} role="button" aria-label="Toggle confirm new password visibility">
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className={style.resetButton} disabled={loading}>
  {loading ? 'Please wait...' : 'Send'}
</button>

        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
