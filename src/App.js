import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import CompanyForm from './CompanyForm';
import LoginPage from './Loginpage';
import Ampule from './Ampule';
import Card from './Dashbord';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company-form" element={<CompanyForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ampule" element={<Ampule />} />
          <Route path='/Dashbord'element={<Card/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
