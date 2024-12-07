import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="overlay">
        <h1>Welcome To <br /> Maruti Industries</h1>
      </div>
      <div className="buttons">
        <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
        <button className="register-btn" onClick={() => navigate('/company-form')}>Register</button>
      </div>
    </div>
  );
};

export default Home;
