import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://forgot-password-vjsa.onrender.com/signup', { 
        name, 
        email, 
        password 
      });
      if (response.status === 201) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.error || 'Failed to sign up');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to sign up');
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-sm-8'>
            <form className='signup-form' onSubmit={handleSubmit}>
              <h2>Signup Page</h2>
              <div className='mb-3'>
                <label htmlFor='fullNameInput' className='form-label'>
                  Full Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='fullNameInput'
                  placeholder='Enter your full name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='emailInput' className='form-label'>
                  Email Address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='emailInput'
                  placeholder='Enter your email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='passwordInput' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='passwordInput'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p>Already Haveing Account? <Link to="/">Login</Link></p>
              <button type='submit' className='btn btn-primary login-btn'>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    // <div>
    //   <h2>Signup</h2>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       placeholder="Name"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //       required
    //     />
    //     <input
    //       type="email"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       required
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //     <button type="submit">Signup</button>
    //   </form>
    //   <Link to="/login">Already have an account? Login</Link>
    // </div>
  );
};

export default Signup;
