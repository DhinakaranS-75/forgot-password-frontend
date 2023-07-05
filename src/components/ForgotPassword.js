import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../App.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://forgot-password-vjsa.onrender.com/forgot-password",
        { email }
      );
      setIsEmailSent(true);
      toast.success("Email sent! Check your inbox for further instructions.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to Sent Email");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-8 ">
            <div className="forgot-password">
              <h2>Forgot Password:</h2>
              <ToastContainer />
              {!isEmailSent ? (
                <form className="" onSubmit={handleSubmit}>
                  
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {/* <button type="submit">Send Reset Link</button> */}
                  <button type='submit' className='btn btn-primary' style={{ marginTop:"25px", width:"100%"}}>
                  Send Reset Link
                  </button>
                </form>
              ) : (
                <p>Email sent! Check your inbox for further instructions.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
