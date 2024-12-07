// src/components/Ampule.js
import React from 'react';
import './Loginpage.css';
import { useNavigate } from 'react-router-dom';

function Ampule(){
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/Dashbord'); // Navigate to Dashboard after form submission
  };


  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div>
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="welcome-message">
          <h3>Welcome XJICJSI</h3>
          <h4>Company Name</h4>
        </div>
      </header>

      <div className="form-container">
        <div>
          <label>Select Machine</label>
          <select>
            <option value="">Select Machine</option>
            {/* Add machine options here */}
          </select>
        </div>
        <div>
          <label>Select Ampule type</label>
          <select>
            <option value="">Select Ampule type</option>
            {/* Add ampule type options here */}
          </select>
        </div>
        <div>
          <label>Select Operator</label>
          <select>
            <option value="">Select Operator</option>
            {/* Add operator options here */}
          </select>
        </div>
        <div>
          <label>Select Ampule Size</label>
          <select>
            <option value="">Select Ampule Size</option>
            <option value='1ML'>1ML</option>
            <option value='2ML'>2ML</option>
            <option value='3ML'>3ML</option>
            <option value='5ml'>5ML</option>
            <option value='10ml'>10ML</option>
            {/* Add ampule size options here */}
          </select>
        </div>
        <div>
          <label>Select Shift</label>
          <select>
            <option value="">Select Shift</option>
            <option value='Day'>Day</option>
            <option value='Night'>Night</option>
            {/* Add shift options here */}
          </select>
          
        
        </div>
        <div className="submit-container">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Ampule;
