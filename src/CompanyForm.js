import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    supervisorName: '',
    mobileNumber: '',
    email: '',
    password:'',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/login'); // Navigate to login after form submission
  };

  return (
    <div className="container">
      
      <br></br><br></br>
      <form className="form" onSubmit={handleSubmit}>
        <label>Company Name:</label>
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
        <label>Supervisor Name:</label>
        <input type="text" name="supervisorName" value={formData.supervisorName} onChange={handleChange} required/>
        <label>Mobile Number:</label>
        <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required/>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        <label>Password:</label>
        <input type='password' name='password' value={formData.password} onChange={handleChange} required></input>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <br></br><br></br>
      
    </div>
  );
};

export default CompanyForm;
