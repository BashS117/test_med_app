import React, { useState } from 'react';
import "./Sign_Up.css";

function Sign_Up() {
  const [name, setName] = useState(''); // State to hold the name
  const [phone, setPhone] = useState(''); // State to hold the phone number
  const [email, setEmail] = useState(''); // State to hold the email
  const [password, setPassword] = useState(''); // State to hold the password
  const [error, setError] = useState(''); // State to hold validation error

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Validate form fields
    if (!name) {
      setError('Name is required.'); // Check if name is provided
      return;
    }
    
    if (phone.length !== 10 || isNaN(phone)) {
      setError('Please enter a valid 10-digit phone number.'); // Validate phone number
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.'); // Validate email format
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.'); // Validate password length
      return;
    }

    setError(''); // Clear error message if all validations pass

    // Proceed with form submission logic (e.g., API call)
    console.log('Form submitted:', { name, phone, email, password });
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-text1" style={{ textAlign: 'left' }}>
          Already a member? <span><a href="../Login/Login.html" style={{ color: '#2190FF' }}> Login</a></span>
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit}> {/* Added onSubmit handler */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-control"
                placeholder="Enter your name"
                value={name} // Controlled input
                onChange={(e) => setName(e.target.value)} // Update state on input change
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="form-control"
                placeholder="Enter your phone number"
                value={phone} // Controlled input
                onChange={(e) => setPhone(e.target.value)} // Update state on input change
                maxLength={10} // Limit input to 10 digits
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Enter your email"
                value={email} // Controlled input
                onChange={(e) => setEmail(e.target.value)} // Update state on input change
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="Enter your password"
                value={password} // Controlled input
                onChange={(e) => setPassword(e.target.value)} // Update state on input change
              />
            </div>
            {error && <p className="error-text">{error}</p>} {/* Show error message if exists */}
            <div className="btn-group">
              <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
              <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign_Up;
