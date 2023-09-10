import React, { useState } from 'react';
import './Register.css'; 
import Fade from 'react-reveal/Fade';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Fade bottom>
      <div className="register-form-container" id='contact'>
        <h2 className="center events-title">Register</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="i-field"
          />
          <div className="inline-fields">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="i-field"
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="i-field"
            />
          </div>
          <div className="inline-fields">
            <input
              type="number"
              name="roll-no"
              placeholder="Roll No.(4-digit)"
              className="i-field"
            />
            
            <select name="year" id="year" className='s-field'>
              <option disabled selected value="">Select a year</option>
              <option value="FE">FE</option>
              <option value="SE">SE</option>
              <option value="TE">TE</option>
              <option value="BE">BE</option>
            </select> 
            
            <select name="branch" id="branch" className='s-field'>
              <option disabled selected value="">Select a Branch</option>
              <option value="ComputerA">Computer A</option>
              <option value="ComputerB">Computer B</option>
              <option value="AIDS">AI-DS</option>
              <option value="ECS">ECS</option>
              <option value="Mechanical">Mechanical</option>
            </select>
          </div>
          
          <button type="submit" className="sub-button">Submit</button>
        </form>
      </div>
    </Fade>
  );
}

export default Register;
