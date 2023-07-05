import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://forgot-password-vjsa.onrender.com/login", {
        email,
        password,
      });
      navigate("/dashbord");
      toast.success(response.data.message);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Invalid email or password!");
      } else {
        toast.error("Failed to login. Please try again later.");
      }
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-8">
            <form className="form" onSubmit={handleSubmit}>
              <h2 style={{
                textAlign:"center",
                textTransform:"uppercase"
              }}>Login Page</h2>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                 required/>
              </div>
              <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                 required/>
                <div className="links-container">
                  <div className="forgot">
                    <Link to="/forgot-password" className="link">
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary login-btn">
                Login
              </button>
              <div className="link-space">
                Don’t have an account?
                <Link to="/signup" className="link">
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
