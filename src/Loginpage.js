import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt, FaLock } from "react-icons/fa";
import './Loginpage.css';

const Loginpage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add your authentication logic here
    navigate('/ampule'); // After login, navigate to the Ampule page
  };

  return (
    <div className="login-container">
      <div className="background-image">
        <div className="login-box">
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <FaUserAlt className='icon'/>
              <input type="text" required/>
            </div>
            <div className="input-group">
              <FaLock className='icon'/>
              <input type="password"  required/>
            </div>
            <div className="links">
            <a href="#">Forgot password</a>
            <a href="#"  onClick={() => navigate('/company-form')}>Register</a>
          </div><br></br>
            <button className="Log-btn" type="submit">Login</button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
